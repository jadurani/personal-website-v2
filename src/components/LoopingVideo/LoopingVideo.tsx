"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const prefersReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;

/**
 * A short silent clip that plays like a GIF. Visitors who prefer reduced
 * motion get the poster and a play button instead of autoplay.
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

  // Start playback here, not with an `autoplay` attribute: the server can't
  // know the visitor's motion setting, and the browser would start the clip
  // from the HTML before this check runs. Browsers only allow muted autoplay.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (reduce) video.pause();
    else video.play().catch(() => {});
  }, [reduce]);

  return (
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
      controls={reduce}
    />
  );
}
