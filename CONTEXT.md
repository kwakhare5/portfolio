# CONTEXT.md — Ubiquitous Language & Domain Terms

This file documents the core domain model and ubiquitous language used across the portfolio codebase.

## 1. Domain Terminology

- **Portfolio**: Personal engineering portfolio and interactive project showcase of Karan Wakhare.
- **ResumeData**: Centralized type-safe data model representing Karan Wakhare's skills, builds, work experience, education, manifesto, photos, and socials (`src/types/resume.ts` & `src/data/resume.tsx`).
- **Featured Builds**: Curated showcase of deep engineering projects with interactive specs, architecture blueprints, and live demos (`src/components/home/project-row.tsx`).
- **GitHub Activity Heatmap**: Real-time scalable SVG contribution calendar querying GitHub (`src/components/home/github-calendar.tsx`).
- **Artifacts Gallery**: Interactive photo gallery with keyboard navigation and fullscreen lightbox inspection (`src/components/artifacts/artifacts-gallery.tsx` & `src/components/artifacts/photo-lightbox.tsx`).
- **Content Engine**: Type-safe MDX pipeline powered by Content Collections and Shiki syntax highlighting (`content-collections.ts`).

## 2. Directory Architecture Standard

- `src/types/`: Central TypeScript domain definitions (`resume.ts`).
- `src/data/`: Centralized static and dynamic data source (`resume.tsx`).
- `src/components/home/`: Home page modular presentation components (`hero-greeting.tsx`, `status-timeline.tsx`, `project-row.tsx`, `github-calendar.tsx`, `photo-preview.tsx`).
- `src/components/artifacts/`: Artifacts gallery view and fullscreen lightbox (`artifacts-gallery.tsx`, `photo-lightbox.tsx`).
- `src/components/layout/`: Global layout & theme components (`mode-toggle.tsx`, `theme-provider.tsx`).
- `src/components/mdx/`: Custom MDX rendering blocks (`code-block.tsx`, `media-container.tsx`).
- `src/lib/`: Core utilities & content engine (`pagination.ts`, `posts.ts`, `remark-code-meta.ts`, `utils.ts`) and unit tests.
- `content/`: Markdown/MDX technical articles.
