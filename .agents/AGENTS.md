# AGENTS.md — Portfolio Project Rules

> **MANDATORY INSTRUCTION:** Read and obey the global master rules at C:\Users\kwakh\.agents\AGENTS.md. Treat this file as project-specific facts and invariants that override or extend global rules.


---

## 1. PROJECT IDENTITY
- **Name:** Personal Engineering Portfolio & Projects Showcase
- **Goal:** Showcase high-end AI engineering projects, live prototypes, and interactive case studies.
- **Status:** Active
- **Repo:** https://github.com/kwakhare5/portfolio

---

## 2. TECH STACK
- **Framework:** Next.js 16.3.2 (Turbopack + App Router) + React 19.2.8 + TypeScript 5.9
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss` 4.3.3) + CSS animations
- **Analytics:** Vercel Web Analytics (`@vercel/analytics`)
- **Testing:** Vitest

---

## 3. DEV COMMANDS
```bash
pnpm dev             # Start local Next.js dev server
pnpm build           # Build production bundle
pnpm test            # Run Vitest once
pnpm typecheck       # Type-check with TypeScript
pnpm lint            # Run ESLint
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
- `src/app/` — Next.js 16 App Router pages (`/`, `builds/[slug]`, `artifacts`, `api/contributions`).
- `src/data/resume.ts` — Centralized portfolio data source (`Grocer`, `Outpost`, `Git for Prompts`, `Tonal`).

---

## 6. MISTAKES TO AVOID
- [2026-08-12] High contrast layout caused glare in light mode → Calibrate light mode backgrounds to soft `#f8f7f4` off-white (`oklch(0.985 0.002 90)`).
- [2026-09-29] Solid `emerald-600` 10×10px SVG squares with gray borders looked twice as dark as 12px green text → Use soft `emerald-500 dark:emerald-400` opacity steps (`/20`, `/40`, `/65`, `/85`) without gray outlines on heatmap squares.

---

## 7. SESSION RESUME
See `JOURNAL.md` for the current state and proof log.
