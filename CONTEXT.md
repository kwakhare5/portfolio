# CONTEXT.md — Ubiquitous Language & Domain Terms

This file documents the core domain model and ubiquitous language used across the portfolio codebase.

## 1. Domain Terminology

- **Portfolio**: Personal engineering portfolio and interactive project showcase of Karan Wakhare.
- **ResumeData**: Centralized type-safe data model representing Karan Wakhare's skills, builds (`Grocer`, `Outpost`, `Git for Prompts`, `Beam`), work experience, education, manifesto, photos, and socials (`src/data/resume.ts`).
- **Featured Builds**: Curated showcase of deep engineering projects with expandable architecture specs, highlights, and live demos (`src/components/home/project-row.tsx`).
- **Build Case Study**: Indexable page at `/builds/[slug]` with the problem, architecture, engineering highlights, stack, and live/code links.
- **GitHub Activity Heatmap**: Real-time scalable SVG contribution calendar querying rolling 365-day GitHub activity (`src/components/home/github-calendar.tsx` & `src/app/api/contributions/route.ts`).
- **Artifacts Gallery**: Interactive photo gallery with keyboard navigation and fullscreen lightbox inspection (`src/components/artifacts/artifacts-gallery.tsx` & `src/components/artifacts/photo-lightbox.tsx`).
