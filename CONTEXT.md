# CONTEXT.md — Ubiquitous Language & Domain Terms

This file documents the core domain model and ubiquitous language used across the portfolio codebase.

## 1. Domain Terminology

- **Portfolio**: Personal engineering portfolio and interactive project showcase of Karan Wakhare.
- **ResumeData**: Centralized type-safe data model representing Karan Wakhare's skills, builds (`Grocer`, `Outpost`, `Git for Prompts`, `IndieForest`, `Tonal`), work experience, education, manifesto, photos, and socials (`src/types/resume.ts` & `src/data/resume.tsx`).
- **Featured Builds**: Curated showcase of deep engineering projects with expandable architecture specs, highlights, and live demos (`src/components/home/project-row.tsx`).
- **GitHub Activity Heatmap**: Real-time scalable SVG contribution calendar querying rolling 365-day GitHub activity (`src/components/home/github-calendar.tsx` & `src/app/api/contributions/route.ts`).
- **Artifacts Gallery**: Interactive photo gallery with keyboard navigation and fullscreen lightbox inspection (`src/components/artifacts/artifacts-gallery.tsx` & `src/components/artifacts/photo-lightbox.tsx`).

## 2. Directory Architecture Standard

- `src/types/`: Central TypeScript domain definitions (`resume.ts`).
- `src/data/`: Centralized static and dynamic data source (`resume.tsx`).
- `src/components/home/`: Home page modular presentation components (`hero-greeting.tsx`, `status-timeline.tsx`, `project-row.tsx`, `github-calendar.tsx`, `photo-preview.tsx`).
- `src/components/artifacts/`: Artifacts gallery view and fullscreen lightbox (`artifacts-gallery.tsx`, `photo-lightbox.tsx`).
- `src/components/layout/`: Global layout & theme components (`mode-toggle.tsx`).
- `src/lib/`: Core utilities (`utils.ts`) and unit tests (`utils.test.ts`).
