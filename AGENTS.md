<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project notes

Personal portfolio site (Next.js App Router, TypeScript, Tailwind 4). It is a small, mostly static site with one dynamic feature: the contact form. A blog, analytics and new project pages are planned.

## Commands

Use Node from `.nvmrc` (`nvm use`). The repo refuses other engines (`engine-strict`).

| Task | Command |
|---|---|
| Dev server | `npm run dev` (`npm run dev:inspect` for the Node inspector) |
| Type-check | `npx tsc --noEmit` |
| Unit tests | `npm test` (Vitest + React Testing Library, jsdom) |
| Lint | `npm run lint` (ESLint 9 flat config, `eslint.config.mjs`) |
| Production build | `npm run build` |
| Component workshop | `npm run storybook` / `npm run build-storybook` |

Git hooks (husky): `pre-commit` runs lint, `commit-msg` runs commitlint, `pre-push` runs a full build. A push can take a minute; don't bypass it with `--no-verify`.

Unit tests cover the contact form only (`*.test.ts(x)` next to the code; Google and the Sheet are always mocked). Verify UI changes by loading the page in a browser and checking computed styles, not just by reading the code.

## Layout

- `src/app/` — routes. `projects/<slug>/page.tsx` is one long hand-written page per project; `lib/projects.contant.ts` (sic) lists the projects shown on the index and drives the prev/next links.
- `src/components/<Name>/` — one folder per component, with a `*.stories.tsx` beside it.
- `src/lib/actions/submit-inquiry.ts` — the contact form's only server action: honeypot → validation (`src/lib/inquiry.ts`, shared with the form) → reCAPTCHA (`src/lib/recaptcha.ts`) → Sheet append (`src/lib/sheet.ts`). The helpers are plain server modules, not actions, so they can't be called from the browser.
- `src/lib/nav-links.ts` — single source for header and footer links.
- Analytics: PostHog (EU), set up in `instrumentation-client.ts` in cookieless mode (no banner needed) and sent through our own `/ingest` path (rewrites in `next.config.mjs`). Off when `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` is unset. Server logs for contact-form outcomes go to PostHog via `instrumentation.ts` + `src/lib/posthog-logs.ts`. Never send form contents to analytics. `src/app/sitemap.ts` and `robots.ts` feed Google Search Console.
- Path aliases (`@components/*`, `@lib/*`, `@assets/*`, …) are defined in `tsconfig.json`. Storybook mirrors them in `.storybook/main.ts`; keep both in sync.

## Conventions

- **Commits:** Conventional Commits, enforced by commitlint (`feat`, `fix`, `chore`, `docs`, …). Lower-case subject, no trailing period, header ≤ 100 chars.
- **Formatting:** Prettier (`.prettierrc`): double quotes, semicolons, 80 columns, `bracketSameLine`.
- **Styling:** Tailwind utilities, with the theme in `@theme` inside `src/app/globals.css` (there is no `tailwind.config`). Brand colors are `verdigris`, `elephant`, `tuna`, `alabaster`, `eggshell`, `error`. Type scale is `text-body1/2`, `text-h1`…`h6`.
- **Images:** use `next/image`. Several portfolio pages still use raw `<img>` (lint warns); don't add more.
- **Icons:** inline SVG with `fill="currentColor"` so they recolor with text color. Use `SocialLinks` for the GitHub/Twitter/LinkedIn set.

## Gotchas that have already cost time

1. **Unlayered CSS beats Tailwind utilities.** In Tailwind 4, any rule outside `@layer` overrides utility classes. Global styles in `globals.css` must live in `@layer base` or `@layer components`, or `text-*`, `border-0` and `hover:*` silently stop working.
2. **`NEXT_PUBLIC_*` must be read as a plain `process.env.NEXT_PUBLIC_X`.** Optional chaining (`process?.env?.X`) or destructuring stops Next from inlining it, and the value is `undefined` in the browser.
3. **Server actions touch real services.** `.env.local` points at a live Google Sheet and a live reCAPTCHA key. Submitting the contact form in dev writes a real row. Never print or commit env values; only reference variable names (`GOOGLE_SERVICE_PRIVATE_KEY`, `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `SPREADSHEET_ID`, `SHEET_ID`, `GOOGLE_CLIENT_EMAIL`, …). The Sheet settings still fall back to the old `NEXT_PUBLIC_*` names until they are renamed in Vercel.
4. **Storybook cannot bundle the server actions** (they import Node-only packages). `.storybook/mocks/actions.ts` replaces them; update the mock if an action's return shape changes.
5. **Transitions:** colors use `transition-colors`, so a style read right after hover returns the old value. Wait ~300 ms before asserting hover styles.
6. **Held-back versions:** TypeScript stays on 6.x (`typescript-eslint` lacks TS 7 support) and ESLint on 9.x (`eslint-config-next` plugins cap at 9). Don't bump either without checking that.

## Done means

Type-check clean, lint with 0 errors (existing warnings are known), `npm run build` passes, and any UI change was looked at in a browser at both desktop and mobile widths. Don't claim a fix works without having run it.

## Don't

- Don't push, merge or open PRs unless asked.
- Don't commit `.env*` files, build output (`.next/`, `storybook-static/`) or screenshots.
- Don't add personal contact details (phone, e-mail, address) to the repo; the site links to public profiles only.
- Don't remove the `nextjs-agent-rules` block above; `next dev` re-adds it.
