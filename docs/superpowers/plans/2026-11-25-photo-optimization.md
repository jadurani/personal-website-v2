# Photo Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Same-looking project pages with far fewer bytes and no blank boxes: GIFs become MP4, every raw `<img>` becomes `next/image`, every project image shows a blur preview, covers load first.

**Architecture:** A small client component `LoopingVideo` replaces the two GIFs. Raw `<img>` tags are swapped in place for `next/image` with the files' real dimensions.

**Tech Stack:** Next.js 16 App Router, React 19, Vitest + RTL (jsdom), ffmpeg (local, for conversion only).

**Spec:** `docs/superpowers/specs/2026-11-25-photo-optimization-design.md`

## Global Constraints

- Rendered size and position of every image must match the live site (www.jadurani.me) at desktop and 375px.
- Keep existing `alt` text and `className`s.
- Format only touched lines; `prettier --write` on a whole page rewraps unrelated paragraphs (revert those).
- Commit locally only; push/PR on the owner's word; squash-merge.

## Review Focus

- Reduced-motion visitor: video must not autoplay and must show controls (tested in Task 1).
- Safari/iOS: video must be `muted` + `playsInline` or it won't autoplay (asserted in Task 1).
- Video still unloaded/blocked: poster (first frame) shows instead of an empty box (asserted in Task 1).
- `next/image` with `w-full h-full` classes must not distort aspect ratio (checked in browser, Task 2).
- A stray `.gif` or `<img` reintroduced later (guarded by Task 2's test).

---

### Task 1: `LoopingVideo` component + converted media

**Files:**
- Create: `src/components/LoopingVideo/LoopingVideo.tsx`, `LoopingVideo.test.tsx`
- Create: `public/images/portfolio/noah-revamped/preview-comet.mp4`, `preview-comet-poster.webp`, `preview-topoview.mp4`, `preview-topoview-poster.webp`

**Interfaces:**
- Produces: `LoopingVideo({ src, poster, label, width, height, className? }: { src: string; poster: string; label: string; width: number; height: number; className?: string })`, default export.

- [ ] **Step 1: Write failing tests** in `LoopingVideo.test.tsx`:
  - `"plays like a gif: muted, looping, inline, with a poster"`: render, get `video` via `container.querySelector("video")`; expect `muted === true`, `loop`, `autoplay`, attribute `playsinline` present, `poster` attr equals the prop, `aria-label` equals `label`, no `controls`.
  - `"respects reduced motion: no autoplay, shows controls"`: stub `window.matchMedia` to return `matches: true` for `(prefers-reduced-motion: reduce)`; expect no `autoplay`, `controls` present.
- [ ] **Step 2: Run** `npx vitest run src/components/LoopingVideo` → FAIL (module not found).
- [ ] **Step 3: Implement** `"use client"` component. Read reduced motion with `useSyncExternalStore` over `matchMedia("(prefers-reduced-motion: reduce)")` (server snapshot `false`). Render `<video src poster width height className aria-label muted loop playsInline preload="metadata" autoPlay={!reduce} controls={reduce} />`. Set `muted` so React writes the attribute (React omits it; use a ref and set `el.muted = true` too).
- [ ] **Step 4: Convert media** with ffmpeg: `-movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 26 -preset slow -an`; poster = first frame as WebP (`-frames:v 1 -c:v libwebp -quality 80`). Dimensions: comet 720×429, topoview 720×648.
- [ ] **Step 5: Run** tests → PASS. Commit `perf: add looping video component and mp4 versions of noah gifs`.

### Task 2: Swap raw `<img>` and GIFs on project pages

**Files:**
- Modify: `src/app/projects/noah-revamped/page.tsx` (7 `<img>`), `src/app/projects/360degrees/page.tsx` (1 `<img>`)
- Create: `src/app/projects/no-raw-media.test.ts`
- Delete: `public/images/portfolio/noah-revamped/preview-comet.gif`, `preview-topoview.gif`

**Interfaces:**
- Consumes: `LoopingVideo` from Task 1.

- [ ] **Step 1: Write failing test** `no-raw-media.test.ts`: read every `src/app/projects/*/page.tsx` with `fs`; for each, `expect(source).not.toMatch(/<img\b/)` and `.not.toMatch(/\.gif\b/)`.
- [ ] **Step 2: Run** → FAIL naming noah-revamped and 360degrees.
- [ ] **Step 3: Swap** each `<img>` for `Image` with real dimensions: old-noah-landing-page-with-modal 2880×1778, technical-users 1024×1024, non-technical-users 1024×1024, old-noah-storm-surges 1525×745, preview-maypasokba 2174×1231, old-360degrees-landing 1438×760. The two GIFs become `LoopingVideo` with the Task 1 files and existing alt as `label`. Delete the GIFs.
- [ ] **Step 4: Run** full suite, `tsc`, lint (0 errors; raw-img warnings on these pages gone) → PASS.
- [ ] **Step 5: Browser check** each changed element: compare `getBoundingClientRect` against www.jadurani.me at 1280px and 375px; video plays and loops; no horizontal scroll.
- [ ] **Step 6: Commit** `perf: serve project images via next/image and gifs as video`.

### Task 3: Blur previews and eager covers

**Files:**
- Modify: `src/app/projects/{noah-revamped,reliefagad,360degrees,kalinga}/page.tsx`, `src/app/projects/page.tsx`, `src/lib/projects.contant.ts` (`thumbnailSrc: StaticImageData`)
- Modify: `src/app/projects/no-raw-media.test.ts`

- [ ] **Step 1: Extend test**: for each project page, count of `<Image` equals count of `placeholder="blur"`, and the first `<Image` block contains `loading="eager"`; `src/app/projects/page.tsx` contains `placeholder="blur"` and `loading={idx === 0 ? "eager" : "lazy"}`-style eager first card; no `priority` prop anywhere in `src/app`.
- [ ] **Step 2: Run** → FAIL.
- [ ] **Step 3: Implement**: string `src` → static imports from `@assets/...` (Kalinga/ReliefAgad arrays hold the imports), keep explicit `width`/`height` where pages set them so rendered sizes don't change; add `placeholder="blur"`; covers get `loading="eager" fetchPriority="high"`; drop Kalinga's `priority`.
- [ ] **Step 4: Run** suite, `tsc`, lint, `next build`; browser: sizes unchanged vs live at 1280/375, blur visible on throttled load.
- [ ] **Step 5: Commit** `perf: blur previews for project images and eager-load covers`.
