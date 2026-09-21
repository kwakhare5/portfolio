# AGENTS.md — Portfolio Project Rules

---

## 1. PROJECT IDENTITY
- **Name:** Personal Engineering Portfolio & Projects Showcase
- **Goal:** Showcase high-end AI engineering projects, live prototypes, and interactive case studies.
- **Status:** Active
- **Repo:** https://github.com/kwakhare5/portfolio

---

## 2. TECH STACK
- **Framework:** Next.js 16.3.2 (Turbopack + App Router) + React 19.2.8 + TypeScript 5.9
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss` 4.3.3) + Motion 13
- **Analytics:** Vercel Web Analytics (`@vercel/analytics`)
- **Testing:** Vitest

---

## 3. DEV COMMANDS
```bash
npm run dev          # Start local Next.js dev server
npm run build        # Build production static export & SSR
npm test             # Run Vitest test suite
npm run lint         # Check ESLint & TypeScript types
```

---

## 4. LOCAL RULES & DESIGN INVARIANTS
1. **Anti-AI Slop:** Strict adherence to human writing standards. Zero decorative corporate buzzwords.
2. **Dark/Light Mode Sync:** All components must support seamless theme switching via `next-themes` (`defaultTheme="system"`, `enableSystem={true}`).
3. **Unified Color Palette:** Single canonical shade per color family (`emerald-500 dark:emerald-400`, `blue-500 dark:blue-400`, `amber-500 dark:amber-400`, `text-foreground`, `text-muted-foreground`, `border-border`).
4. **Minimal Architecture:** YAGNI. Pure presentation components, tested domain helpers, zero unneeded dependencies or pass-through wrappers.

---

## 5. KEY PROJECT PATTERNS
- `src/components/` — Modular UI blocks (`home/`, `artifacts/`, `layout/`).
- `src/app/` — Next.js 16 App Router pages (`(home)`, `artifacts`, `api/contributions`).
- `src/data/resume.tsx` — Centralized portfolio data source (`Grocer`, `Outpost`, `Git for Prompts`, `IndieForest`, `Tonal`).

---

## 6. MISTAKES TO AVOID
- [2026-08-12] High contrast layout caused glare in light mode → Calibrate light mode backgrounds to soft `#f8f7f4` off-white (`oklch(0.985 0.002 90)`).
- [2026-09-29] Solid `emerald-600` 10×10px SVG squares with gray borders looked twice as dark as 12px green text → Use soft `emerald-500 dark:emerald-400` opacity steps (`/20`, `/40`, `/65`, `/85`) without gray outlines on heatmap squares.

---

## 7. SESSION RESUME
**Last session date:** 2026-09-29
- **Current State:** Added `Outpost` (`https://dark-store-operator.vercel.app` | `https://github.com/kwakhare5/Outpost`) to Featured Builds (`#2` after `Grocer`) and `status.currently`. Fixed GitHub activity heatmap (`?y=last` rolling 365 days, `getComputedLevel` client-side intensity tiers, soft `emerald-500 dark:emerald-400` opacity steps without muddy gray outlines, and `finally` loading state fix). Standardized all site colors to single canonical tokens, removed the arrow next to project titles, colored `[live]` (emerald), `[code]` (blue), and `[specs]` (amber) buttons directly while making tech stack tags uniform muted monospace (`readonly string[]`). Executed full codebase cleanup: deleted orphaned `src/app/blog/page.tsx`, `src/components/layout/theme-provider.tsx`, `.freebuff/`, `components.json`, and `CLAUDE.md`; simplified `mode-toggle.tsx`, `status-timeline.tsx`, `globals.css`, `utils.ts`, and `resume.ts`; and aligned `ARCHITECTURE.md`, `CONTEXT.md`, `README.md`, `sitemap.ts`, and `next.config.mjs`. Preserved `public/me.png` at full original resolution.
- **Immediate next task:** Ready for deployment.
- **Open blockers:** None.
