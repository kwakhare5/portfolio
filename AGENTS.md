# AGENTS.md - Portfolio

Global rules: read C:\Users\kwakh\.agents\AGENTS.md first. This file adds project-specific rules. It can make global limits stricter, never looser. Do not repeat global rules here.

## 1. What this is
- One-line promise: Personal Engineering Portfolio & Projects Showcase highlighting high-end AI engineering projects, live prototypes, and interactive case studies (@kwakhare5).
- What is out of scope: Marketing fluff, heavy external backend architectures, unnecessary pass-through wrappers.

## 2. Stack and commands
- Stack: Next.js 16.3.2 (Turbopack + App Router), React 19.2.8, TypeScript 5.9, Tailwind CSS v4 (`@tailwindcss/postcss` 4.3.3), Vercel Web Analytics, Vitest, Vercel Hosting.
- Install: `pnpm install`
- Dev server: `pnpm dev`
- Test: `pnpm test`
- Build: `pnpm build`
- Lint / typecheck: `pnpm lint` && `pnpm typecheck`
- Database / seed: None
- Environment variable names: None required for core showcase. Optional analytics keys in `.env.local`.

## 3. Project rules
- Data contract: `src/data/resume.ts` is the centralized portfolio data source (`Grocer`, `Outpost`, `Git for Prompts`, `Beam`). Sync via `pnpm sync:profile`.
- Invariants and gotchas:
  - Anti-AI Slop: Strict adherence to human writing standards. Zero decorative corporate buzzwords.
  - [2026-08-12] High contrast layout caused glare in light mode -> Calibrate light mode backgrounds to soft `#fbfbfa` off-white (`oklch(0.985 0.002 90)`).
  - [2026-09-29] Solid `emerald-600` 10×10px SVG squares with gray borders looked twice as dark as 12px green text -> Use soft `emerald-500 dark:emerald-400` opacity steps (`/20`, `/40`, `/65`, `/85`) without gray outlines on heatmap squares.
- Strict types: No `any` or loose casts.
- Never commit secrets, passwords or API keys. Keep them in an untracked `.env` or environment variables.
- Security and privacy rules: Client-side static rendering where possible. No sensitive user data.

## 4. UI rules (only for projects with a UI)
- Design source of truth: Follow clean anti-slop guidelines with minimal architecture. YAGNI.
- Dark/Light Mode Sync: All components must support seamless theme switching via `next-themes` (`defaultTheme="system"`, `enableSystem={true}`).
- Unified Color Palette: One Notion ink per section (`text-[var(--notion-*-text)]`) — shape carries identity, color carries section. Content text is `text-foreground` / `text-muted-foreground`; structure is `border-border`.
- No inline styles. Handle loading, empty and error states for every async call.

## 5. Surfaces and verification
- Screen or endpoint map: `/` (main portfolio), `/builds/[slug]` (case studies), `/artifacts`, `/api/contributions` (GitHub contributions).
- Verification skill path: None (use Vitest and local build).
- Done check: `pnpm typecheck` + `pnpm test` + `pnpm build` all pass cleanly.

## 6. Project-specific stops
- The phase checklist (Plan -> Scout -> Build -> Review -> Fix -> Verify -> Close) lives in TASKS.md, not here.
- Do not introduce runtime backend dependencies or cloud database couplings unasked.

## 7. Folder map
- `src/app/`: Next.js 16 App Router pages (`/`, `builds/[slug]`, `artifacts`, `api/contributions`).
- `src/components/`: Flat UI component files.
- `src/data/`: Static data sources, including `resume.ts`.
- `public/`: Static images, favicons, OG cards, and `llms.txt`.
- `scripts/`: Maintenance scripts (e.g., `sync-profile.mjs`).

## 8. Open decisions
- None.

## 9. Do not touch
- Static resume assets and image files in `public/` without explicit instruction.

## 10. Doc map
- `JOURNAL.md`: Work log and proof of runs.
- `README.md`: Repository overview.
