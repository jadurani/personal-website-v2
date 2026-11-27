"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

/**
 * A short silent clip that plays like a GIF. If it doesn't start on its own
 * (reduced motion, or the browser blocks autoplay) a big play button shows
 * over the poster. Once it has played, the browser's own controls take over.
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
  const [started, setStarted] = useState(false);
  const [blocked, setBlocked] = useState(false);

  // Start playback here, not with an `autoplay` attribute: the server can't
  // know the visitor's motion setting, and the browser would start the clip
  // from the HTML before this check runs. Browsers only allow muted autoplay.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    // Ask the browser directly: during hydration `reduce` still holds the
    // server's guess (false), and a play() call then can't be taken back.
    if (prefersReducedMotion()) video.pause();
    else video.play().catch(() => setBlocked(true));
  }, [reduce]);

  const showPlayButton = !started && (reduce || blocked);

  return (
    <div className="relative w-fit max-w-full">
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
        controls={started}
        onPlay={() => setStarted(true)}
      />
      {showPlayButton && (
        <button
          type="button"
          onClick={() => ref.current?.play().catch(() => {})}
          aria-label={`Play ${label}`}
          className="group absolute inset-0 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verdigris">
          <span
            aria-hidden="true"
            className="flex items-center justify-center size-14 sm:size-18 rounded-full bg-tuna/75 text-alabaster shadow-lg transition-colors group-hover:bg-tuna/90">
            {/* Triangle's box is centred in the 24-unit view box. */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-7 sm:size-9">
              <path d="M6.5 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
