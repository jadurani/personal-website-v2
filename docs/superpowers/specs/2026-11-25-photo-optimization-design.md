# Photo optimization (short design)

Approved by the owner on 2026-11-25.

## Why

Two GIFs on the NOAH page are 7.6 MB of the site's 12 MB of images, and eight
images use raw `<img>`, so every screen downloads them full size. Project pages
should load fast on phones without looking any different.

## Goals / non-goals

- Goal: same look, far fewer bytes. Every project image goes through
  `next/image`; the two GIFs become MP4.
- Non-goal: redesigning layouts, re-cropping or re-shooting images, touching
  page copy.
- Anti-goal: an image that renders at a different size or position than it
  does on the live site today.

## Approaches

- **MP4 video (picked):** ~85–90% smaller (4.0 MB → 0.55 MB, 3.6 MB → 0.34 MB
  in a trial), plays everywhere. Muted, looping, inline, with a first-frame
  poster.
- Animated WebP: ~50% smaller, stays an image, but `next/image` can't optimize
  animated images.
- MP4 + WebM: a little smaller in some browsers for double the files.

## Design

- `preview-comet.gif`, `preview-topoview.gif` → H.264 MP4 (`+faststart`,
  yuv420p, no audio) plus a first-frame WebP poster. Delete the GIFs.
- A small `LoopingVideo` component: `autoPlay muted loop playsInline` with the
  poster. If the visitor prefers reduced motion, no autoplay and show
  controls. Keeps the existing alt text as an accessible label.
- The eight raw `<img>` (7 on NOAH, 1 on 360degrees) become `next/image` with
  the image's real width/height, keeping their classes.
- `preview-maypasokba.webp` (13 KB) just moves to `next/image`.
- No blank boxes (added 2026-11-26 at the owner's request): every project
  image, cover and /projects thumbnail is a static import with
  `placeholder="blur"`, so a blurred preview shows instantly. Each project
  page's cover and the first /projects thumbnail load eagerly
  (`loading="eager"`, `fetchPriority="high"`); Kalinga's deprecated
  `priority` goes. Videos show their first-frame poster.
- Tests: no project page contains `<img` or `.gif`; every `Image` on project
  pages has a blur placeholder and each page's first `Image` loads eagerly; `LoopingVideo` autoplays
  normally and shows controls without autoplay under reduced motion.
- Verify every changed image against the live site at desktop and 375px.

## Left to the builder

Exact CRF/quality settings, as long as the video looks the same as the GIF.
