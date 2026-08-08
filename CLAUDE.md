# Karan Wakhare Portfolio - CLAUDE.md
# Global rules: C:\Users\kwakh\.gemini\config\AGENTS.md (read this first)
# Project wiki: D:\workflow-main\02_Obsidian_Brain\wiki\Projects\Karan-Wakhare-Portfolio.md

---
**AI POINTER:** You are an amnesiac. DO NOT `grep` the codebase. At session start you MUST:
1. Use Obsidian MCP to read `00_System/active_project_context.md`
2. Read `wiki/hot.md` (recent context cache - ~500 words, fast)
3. Only then proceed. Do not guess architecture.
> For DB schema, file tree, and ADRs -> see `ARCHITECTURE.md` (loaded on-demand via @ZOOM).

## TECH STACK & ARCHITECTURE
- **Framework**: Next.js 16.3.0 (App Router + Turbopack)
- **UI Logic**: React 19.2.8
- **Styling**: Tailwind CSS v4.3.3 (@tailwindcss/postcss + PostCSS 8)
- **Animations**: Motion v13.0.0 (`motion/react`)
- **Content Engine**: Content Collections v0.2.1
- **Icons**: Lucide React v0.562.0
- **Testing**: Vitest v4.1.10
- **TypeScript**: TypeScript v5.9.3

## PROJECT RULES

### Data Sources - what comes from where
- Projects list: GitHub API via lib/get-github-projects.ts (1h ISR cache). Fallback: DATA.projects.
- Skills/icons: ALWAYS from static DATA in data/resume.tsx. Never from API or DB. Icon components cannot serialize.
- Everything else (bio, work, education, hackathons): static DATA in data/resume.tsx.
- Visit counter: /api/visits route. IP rate-limited & 1-count lifetime deduplication via pv_id cookie.

### Tailwind v4
- Import: @import "tailwindcss" in globals.css (not tailwind.config.js).
- Theme: @theme inline { ... } block in globals.css.
- Colors: oklch() in :root / .dark.
- Conditional classes: cn() from @/lib/utils.

### Motion / Animations
- Import motion from 'motion/react' - NOT 'framer-motion'. Package was renamed.
- BlurFade stagger: BLUR_FADE_DELAY = 0.04 multiplied by section index.
- Random values: generate in useEffect or event handlers ONLY. Never during render (hydration mismatch).

### Section IDs - must match navbar exactly
- hero-section
- work-experience
- projects
- Mismatch = broken smooth scroll. Do not rename without updating navbar.tsx.

### Before Marking Done
- `npm run build` -> zero errors.
- `npm run test` -> zero errors (Vitest for core logic).
- Check OG image (opengraph-image.tsx) still generates correctly.
- Verify dark mode toggle works.

---

## 7. PROJECT-SPECIFIC SKILLS

```
.agents\
  skills\
    my-skill-name\
      SKILL.md     <- auto-discovered, loads only in this project
```

**Use .agents/skills/ for:** domain patterns, API quirks, internal conventions unique to this codebase.
**Use global skills (workflow-main) for:** anything reusable across projects (Supabase, Stripe, Tailwind, etc.)

---

## 7. SESSION RESUME
- **Last Action:** Completed master codebase audit, removed activity online/offline status feature completely (`/api/status` & `OnlineStatusIndicator`), refactored `get-github-projects.ts` with O(1) lookup maps and helper functions, unified data types across components via `@/types/resume`, consolidated WakaTime fallbacks, and verified 100% clean production build (`13/13` prerendered).
- **State:** 5/5 Vitest tests passing, 0 TypeScript errors, 0 ESLint errors, production build ready.
- **Open Files:** `src/lib/get-github-projects.ts`, `src/app/(home)/page.tsx`.

