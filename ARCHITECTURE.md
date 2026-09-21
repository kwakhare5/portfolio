# Architecture & Software Design Document: Karan Wakhare Portfolio

This document outlines the software architecture, module boundaries, data flow, and separation of concerns for the portfolio codebase following **Clean Architecture & Domain-Driven Design (DDD)** principles.

---

## 1. High-Level Architectural Overview

```
               ┌────────────────────────────────────────┐
               │    Presentation Layer (App & UI)       │
               │  Next.js App Router (16.3 Turbopack)   │
               │ React 19 + Motion + Tailwind CSS v4    │
               └───────────────────┬────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                             ▼
       ┌─────────────────────────┐   ┌──────────────────────────┐
       │   Domain & Content      │   │ Infrastructure & API     │
       │  (Portfolio ResumeData) │   │ (GitHub & Vercel Edge)   │
       │ - Typed Project Specs   │   │ - Rolling 365-d Heatmap  │
       │ - Status Timeline       │   │ - Vercel Web Analytics   │
       │ - Interactive Lightbox  │   │ - Static Route Sitemaps  │
       └─────────────────────────┘   └──────────────────────────┘
```

---

## 2. Layer Definitions & Bounded Contexts

### A. Presentation Layer (`src/app/` & `src/components/`)
- **App Router Pages**: Next.js App Router root layout (`layout.tsx`), home experience (`/`), artifacts gallery (`/artifacts`), and GitHub contribution proxy (`/api/contributions`).
- **Domain UI Modules**: High-cohesion presentation blocks grouped cleanly by domain:
  - `src/components/home/`: `hero-greeting.tsx`, `status-timeline.tsx`, `project-row.tsx`, `github-calendar.tsx`, `photo-preview.tsx`.
  - `src/components/artifacts/`: `artifacts-gallery.tsx`, `photo-lightbox.tsx`.
- **Layout Primitives**: Theme toggle (`mode-toggle.tsx`).

### B. Domain & Application Layer (`src/types/` & `src/data/` & `src/lib/`)
- **`src/types/resume.ts`**: Strict domain interfaces for `ProjectSpec`, `StackCategory`, `StatusTimeline`, `StatusItem`, `PhotoItem`, `SocialItem`, and `ResumeData`.
- **`src/data/resume.tsx`**: Single source of truth containing curated project blueprints (`Grocer`, `Outpost`, `Git for Prompts`, `IndieForest`, `Tonal`), tech stack categories, structured timeline, and socials.
- **`src/lib/utils.ts`**: Pure class-merging utility (`cn`) with unit tests (`src/lib/utils.test.ts`).

---

## 3. Architectural Rules & Best Practices

1. **Pure Presentation**: UI components consume typed data interfaces with zero hardcoded domain data duplication.
2. **Unified Color Tokens**: Single canonical tokens per color family (`emerald-500 dark:emerald-400`, `blue-500 dark:blue-400`, `amber-500 dark:amber-400`, `text-foreground`, `text-muted-foreground`, `border-border`).
3. **Zero Dead Code**: No unused dependencies, pass-through wrappers, or orphaned helper functions.
4. **Test-Backed Utilities**: Domain transformation and class-merging utilities are covered by Vitest unit tests.

