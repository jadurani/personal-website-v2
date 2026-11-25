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

  // React doesn't write the `muted` attribute; browsers only autoplay muted video.
  useEffect(() => {
    if (ref.current) ref.current.muted = true;
  }, []);

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
      autoPlay={!reduce}
      controls={reduce}
    />
  );
}
