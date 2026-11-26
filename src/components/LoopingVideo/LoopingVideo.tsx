"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

/** "starting" until we know whether it plays, so no play button flashes. */
type Status = "starting" | "playing" | "paused";

/**
 * A short silent clip that plays like a GIF. When it isn't playing (reduced
 * motion, autoplay blocked, or paused by the visitor) a big play button
 * shows over the poster; tapping a playing clip pauses it.
 */
export default function LoopingVideo({
  src,
  poster,
  label,
  width,
  height,
  className,
}: {
  src: string;
  poster: string;
  label: string;
  width: number;
  height: number;
  className?: string;
}) {
  const reduce = useSyncExternalStore(
    subscribe,
    prefersReducedMotion,
    () => false
  );
  const ref = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<Status>("starting");

  // Start playback here, not with an `autoplay` attribute: the server can't
  // know the visitor's motion setting, and the browser would start the clip
  // from the HTML before this check runs. Browsers only allow muted autoplay.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (reduce) video.pause();
    else video.play().catch(() => setStatus("paused"));
  }, [reduce]);

  // With reduced motion it never starts on its own, so it's paused from the outset.
  const shown = reduce && status === "starting" ? "paused" : status;
  const playing = shown === "playing";
  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (playing) video.pause();
    else video.play().catch(() => setStatus("paused"));
  };

  return (
    <div className="relative w-fit max-w-full group">
      <video
        ref={ref}
        src={src}
        poster={poster}
        width={width}
        height={height}
        className={className}
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setStatus("playing")}
        onPause={() => setStatus("paused")}
      />
      {shown !== "starting" && (
        <button
          type="button"
          onClick={toggle}
          aria-label={`${playing ? "Pause" : "Play"} ${label}`}
          className="absolute inset-0 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdigris">
          <span
            aria-hidden="true"
            className={`flex items-center justify-center rounded-full bg-tuna/75 text-alabaster shadow-lg transition-opacity ${
              playing
                ? "size-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                : "size-14 sm:size-18 opacity-100 group-hover:bg-tuna/90"
            }`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                playing ? "size-5" : "size-7 sm:size-9 translate-x-0.5"
              }>
              {playing ? (
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
