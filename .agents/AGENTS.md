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
- **Analytics:** Umami Cloud (Privacy-first)
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
1. **Anti-AI Slop:** Strict adherence to human writing standards. Zero decorative corporate buzzwords in blog posts.
2. **Dark/Light Mode Sync:** All custom MDX components must support seamless theme switching via `next-themes`.
3. **Fluid Typography & Motion:** Apple-grade spring physics for transitions using `motion`.
4. **Minimal Architecture:** YAGNI. Pure presentation components, tested domain helpers, zero unneeded dependencies.

---

## 5. KEY PROJECT PATTERNS
- `src/components/` — Modular UI blocks, theme toggles, and interactive demo sandboxes.
- `src/app/` — Next.js 16 App Router pages (`(home)`, `photos`, `analytics`, `blog`).
- `src/data/resume.tsx` — Centralized portfolio data source.

---

## 6. MISTAKES TO AVOID
- [2026-08-11] Raw MDX compilation had missing server component styling → Use `@content-collections/mdx` build pipeline for type-safe frontmatter.
- [2026-08-12] High contrast layout caused glare in light mode → Calibrate light mode backgrounds to soft `#f8f7f4` off-white.

---

## 7. SESSION RESUME
**Last session date:** 2026-08-25
- **Current State:** Executed comprehensive deep purge: eliminated all external tool caches and lockfiles (`.freebuff/`, `.opencode/`, `.codegraph/`, `skills-lock.json`), decoupled the entire boilerplate blog subsystem (deleted `content/*.mdx`, `content-collections.ts`, `src/app/blog/[slug]`, `src/components/mdx/`, `src/mdx-components.tsx`, `src/lib/posts.ts`, `src/lib/remark-code-meta.ts`, `public/fonts/`), uninstalled 8 unneeded dependencies (268 fewer packages), and cleaned `globals.css` and `next.config.mjs`. All unit tests, ESLint, TypeScript types, and Next.js 16 Turbopack production builds passing with 0 errors across all 8 static application routes.
- **Immediate next task:** Ready for new product showcases, UI enhancements, or custom essays.
- **Open blockers:** None.
