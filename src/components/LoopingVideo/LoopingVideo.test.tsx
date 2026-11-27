import { act, fireEvent, render, screen } from "@testing-library/react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import {
  afterEach,
  beforeEach,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";
import LoopingVideo from "./LoopingVideo";

const props = {
  src: "/clip.mp4",
  poster: "/clip-poster.webp",
  label: "a looping clip",
  width: 720,
  height: 429,
};

function stubReducedMotion(reduce: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: reduce && query === "(prefers-reduced-motion: reduce)",
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
}

let play: MockInstance<() => Promise<void>>;
beforeEach(() => {
  play = vi
    .spyOn(HTMLMediaElement.prototype, "play")
    .mockResolvedValue(undefined);
  vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

test("plays like a gif: muted, looping, inline, with a poster", () => {
  stubReducedMotion(false);
  const { container } = render(<LoopingVideo {...props} />);
  const video = container.querySelector("video")!;

  expect(video.muted).toBe(true);
  expect(video.loop).toBe(true);
  expect(play).toHaveBeenCalled();
  expect(video.hasAttribute("playsinline")).toBe(true);
  expect(video.getAttribute("poster")).toBe(props.poster);
  expect(video.getAttribute("aria-label")).toBe(props.label);
  expect(video.width).toBe(720);
  expect(video.height).toBe(429);
  expect(video.hasAttribute("controls")).toBe(false);
  // While it starts on its own, no play button flashes over it.
  expect(screen.queryByRole("button", { name: /play/i })).toBeNull();
});

test("respects reduced motion: no autoplay, shows a play button", () => {
  stubReducedMotion(true);
  const { container } = render(<LoopingVideo {...props} />);
  const video = container.querySelector("video")!;

  expect(play).not.toHaveBeenCalled();
  expect(video.hasAttribute("controls")).toBe(false);
  expect(
    screen.getByRole("button", { name: "Play a looping clip" })
  ).toBeTruthy();
  // The poster still fills the space until the visitor presses play.
  expect(video.getAttribute("poster")).toBe(props.poster);
});

test("server html never autoplays, so reduced-motion visitors aren't surprised before hydration", () => {
  const html = renderToString(<LoopingVideo {...props} />);
  expect(html).not.toMatch(/autoplay/i);
  expect(html).toMatch(/muted/);
});

test("a big play button starts a paused video", async () => {
  stubReducedMotion(true);
  const { container } = render(<LoopingVideo {...props} />);
  const video = container.querySelector("video")!;

  fireEvent.click(screen.getByRole("button", { name: "Play a looping clip" }));
  expect(play).toHaveBeenCalled();

  fireEvent.play(video);
  expect(screen.queryByRole("button", { name: /^play/i })).toBeNull();
});

test("shows the play button when the browser blocks autoplay", async () => {
  stubReducedMotion(false);
  play.mockRejectedValue(new DOMException("blocked", "NotAllowedError"));
  render(<LoopingVideo {...props} />);
  await act(async () => {});

  expect(
    screen.getByRole("button", { name: "Play a looping clip" })
  ).toBeTruthy();
});

test("after the first play, browser controls replace the big button", () => {
  stubReducedMotion(true);
  const { container } = render(<LoopingVideo {...props} />);
  const video = container.querySelector("video")!;

  fireEvent.click(screen.getByRole("button", { name: "Play a looping clip" }));
  fireEvent.play(video);
  expect(video.hasAttribute("controls")).toBe(true);
  expect(screen.queryByRole("button")).toBeNull();

  // Pausing with the controls doesn't bring the big button back over the view.
  fireEvent.pause(video);
  expect(screen.queryByRole("button")).toBeNull();
  expect(video.hasAttribute("controls")).toBe(true);
});

test("hydrating for a reduced-motion visitor never calls play", async () => {
  const container = document.createElement("div");
  container.innerHTML = renderToString(<LoopingVideo {...props} />);
  document.body.appendChild(container);
  stubReducedMotion(true);

  await act(async () => {
    hydrateRoot(container, <LoopingVideo {...props} />);
  });

  expect(play).not.toHaveBeenCalled();
  expect(
    screen.getByRole("button", { name: "Play a looping clip" })
  ).toBeTruthy();
  container.remove();
});
