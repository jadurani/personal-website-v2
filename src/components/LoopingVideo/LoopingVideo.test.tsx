import { render } from "@testing-library/react";
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
});

test("respects reduced motion: no autoplay, shows controls", () => {
  stubReducedMotion(true);
  const { container } = render(<LoopingVideo {...props} />);
  const video = container.querySelector("video")!;

  expect(play).not.toHaveBeenCalled();
  expect(video.hasAttribute("controls")).toBe(true);
  // The poster still fills the space until the visitor presses play.
  expect(video.getAttribute("poster")).toBe(props.poster);
});

test("server html never autoplays, so reduced-motion visitors aren't surprised before hydration", () => {
  const html = renderToString(<LoopingVideo {...props} />);
  expect(html).not.toMatch(/autoplay/i);
  expect(html).toMatch(/muted/);
});
