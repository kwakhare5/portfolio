# Architecture & Software Design Document: Karan Wakhare Portfolio

This document outlines the software architecture, module boundaries, data flow, and separation of concerns for the portfolio codebase following **Clean Architecture & Domain-Driven Design (DDD)** principles.

---

## 1. High-Level Architectural Overview

```
               ┌────────────────────────────────────────┐
               │    Presentation Layer (App & UI)       │
               │  Next.js App Router (16.1.1 Turbopack)  │
               │ React 19 + Motion v12 + Tailwind v4    │
               └───────────────────┬────────────────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                             ▼
       ┌─────────────────────────┐   ┌──────────────────────────┐
       │   Domain Use Cases      │   │ Infrastructure & Data    │
       │  (Visitor & Project)    │   │ (APIs, KV & Fallbacks)   │
       │ - Visitor Store         │   │ - KeyValue Storage       │
       │ - GitHub & WakaTime     │   │ - CounterAPI             │
       │ - Status Heartbeat      │   │ - Local File Cache       │
       └─────────────────────────┘   └──────────────────────────┘
```

---

## 2. Layer Definitions & Bounded Contexts

### A. Presentation Layer (`src/app/` & `src/components/`)
- **App Router Pages**: Clean server components rendering static and dynamic views (`/`, `/blog`, `/photos`).
- **Section Components**: Modular layout sections (`projects-section.tsx`, `github-activity-section.tsx`, `work-experience-section.tsx`).
- **Shared UI Components**: Single-purpose UI components (`visitor-popover.tsx`, `online-status-indicator.tsx`, `project-card.tsx`).

### B. Domain & Application Layer (`src/lib/`)
- **`visitor-store.ts`**: Encapsulates 14-day history calculations, total unique counting, and CounterAPI baseline synchronization.
- **`get-github-projects.ts`**: Manages GitHub API project fetching with 1-hour ISR cache and static data fallbacks.
- **`get-wakatime.ts`**: Encapsulates Basic Auth WakaTime statistics fetching with 100% uptime fallback data.
- **`sound-synthesis.ts`**: Web Audio API sound synthesizer engine.

### C. Infrastructure Layer (`src/app/api/`)
- **`/api/status`**: Handles real-time POST heartbeats from Windows `ping-status.ps1` with 75s threshold and local timestamp fallback caching.
- **`/api/visits`**: Handles GET/POST visitor tracking with `pv_id` cookie & IP signature hash deduplication.

---

## 3. Architectural Rules & Best Practices

1. **Early Return Pattern**: All API handlers and utility functions use early guard clauses rather than deep nesting.
2. **Library-First Principle**: Uses standard libraries (`lucide-react`, `motion`, `@tailwindcss/postcss`) rather than bespoke reinvented helpers.
3. **No Mixed Concerns**: Database/KV storage calls are isolated in `/api/` routes and domain stores; UI components consume typed API interfaces.
