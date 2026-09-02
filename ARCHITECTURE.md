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
       │   Domain & Content      │   │ Infrastructure & Data    │
       │ (Portfolio Data & MDX)  │   │      (Umami Cloud)       │
       │ - Typed Resume Data     │   │ - Real-time Telemetry    │
       │ - Content Collections   │   │ - Live Traffic iFrame    │
       │ - Interactive Photo Box │   │ - Static Route Sitemaps  │
       └─────────────────────────┘   └──────────────────────────┘
```

---

## 2. Layer Definitions & Bounded Contexts

### A. Presentation Layer (`src/app/` & `src/components/`)
- **App Router Pages**: Next.js App Router root layout (`layout.tsx`), home experience (`/`), artifacts gallery (`/artifacts`), and technical blog (`/blog`, `/blog/[slug]`).
- **Domain UI Modules**: High-cohesion presentation blocks grouped cleanly by domain:
  - `src/components/home/`: `hero-greeting.tsx`, `status-timeline.tsx`, `project-row.tsx`, `github-calendar.tsx`, `photo-preview.tsx`.
  - `src/components/artifacts/`: `artifacts-gallery.tsx`, `photo-lightbox.tsx`.
- **Layout Primitives**: Theme management (`mode-toggle.tsx`, `theme-provider.tsx`).
- **MDX Primitives**: Custom syntax-highlighted code blocks (`code-block.tsx`, `media-container.tsx`).

### B. Domain & Application Layer (`src/types/` & `src/data/` & `src/lib/`)
- **`src/types/resume.ts`**: Strict domain interfaces for `ProjectSpec`, `StackCategory`, `StatusTimeline`, `StatusItem`, `PhotoItem`, `SocialItem`, and `ResumeData`.
- **`src/data/resume.tsx`**: Single source of truth containing curated project blueprints, tech radar categories, structured timeline, and socials.
- **`src/lib/posts.ts`**: Pure, test-backed content querying module (`getSortedPosts`, `getPostBySlug`, `getAllPostSlugs`, `getAdjacentPosts`, `getPostSlug`).
- **`src/lib/pagination.ts`**: Pure, zero-dependency pagination engine with unit tests.
- **`src/lib/remark-code-meta.ts`**: MDX AST code meta title parsing plugin with unit tests.
- **`src/lib/utils.ts`**: Pure utilities (`cn`, `formatDate`) with unit tests.

### C. Content Engine (`content/` & `content-collections.ts`)
- **Content Collections**: Type-safe MDX processing with Zod schema validation, remark plugins, and GFM markdown support.

---

## 3. Architectural Rules & Best Practices

1. **Pure Presentation**: UI components consume typed data interfaces with zero hardcoded domain data duplication.
2. **Early Return Pattern**: All utility functions and components use early guard clauses rather than deep nesting.
3. **Zero Dead Code**: No unused dependencies or orphaned helper functions.
4. **Test-Backed Utilities**: All domain and transformation utilities are covered by Vitest unit tests.

