# CONTEXT.md — Ubiquitous Language & Domain Terms

This file documents the core domain model and ubiquitous language used across the portfolio codebase.

## 1. Domain Terminology

- **Portfolio**: Personal developer portfolio website showcasing biography, projects, skills, coding statistics, and blog posts.
- **ResumeData**: Static and dynamic data model representing Karan Wakhare's skills, work experience, education, and projects (`src/types/resume.ts`).
- **VisitorStore**: Serverless-compatible visitor tracking engine utilizing local `/tmp` caching and remote KV fallback (`src/lib/visitor-store.ts`).
- **Heartbeat Status**: Real-time coding/online status indicator tracking workstation ping timestamps via `/api/status`.
- **WakaTime Stats**: Productivity statistics aggregated from the WakaTime API (`src/lib/get-wakatime.ts`).
- **GitHub Activity**: Dynamically fetched and ISR-cached repository and contribution statistics (`src/lib/get-github-projects.ts`).
- **Custom Cursor**: Interactive macOS-styled cursor tracking mouse movement and contextual element hover states (`src/components/layout/custom-cursor.tsx`).

## 2. Directory Architecture Standard

- `src/types/`: Central TypeScript definitions (`resume.ts`, `api.ts`, `github.ts`, `wakatime.ts`).
- `src/components/ui/`: Atomic design system components (`button.tsx`, `badge.tsx`, `avatar.tsx`, `logo-image.tsx`, `skill-icons.tsx`, `social-icons.tsx`).
- `src/components/features/`: Domain feature modules grouped by feature area (`home/`, `photos/`, `blog/`).
- `src/components/layout/`: Global layout components (`navbar.tsx`, `mode-toggle.tsx`, `theme-provider.tsx`, `photo-banner.tsx`, `custom-cursor.tsx`).
- `src/lib/`: Core backend utilities, API integration clients, and test files.
