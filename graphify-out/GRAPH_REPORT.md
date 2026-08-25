# Graph Report - Portfolio  (2026-08-25)

## Corpus Check
- 39 files · ~654,486 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 235 nodes · 256 edges · 26 communities (18 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7705663d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- (home)/page.tsx
- dependencies
- resume.ts
- compilerOptions
- devDependencies
- Karan Wakhare — Portfolio & Projects Showcase
- layout.tsx
- components.json
- AGENTS.md — Portfolio Project Rules
- package.json
- include
- 2. Layer Definitions & Bounded Contexts
- .prettierrc.json
- eslint.config.mjs
- next.config.mjs
- postcss.config.mjs
- Log Entries
- CONTEXT.md — Ubiquitous Language & Domain Terms
- route.ts
- not-found.tsx
- AGENTS.md
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `AGENTS.md — Portfolio Project Rules` - 8 edges
3. `scripts` - 7 edges
4. `DATA` - 7 edges
5. `tailwind` - 6 edges
6. `aliases` - 6 edges
7. `ModeToggle()` - 6 edges
8. `cn()` - 6 edges
9. `include` - 6 edges
10. `Karan Wakhare — Portfolio & Projects Showcase` - 6 edges

## Surprising Connections (you probably didn't know these)
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `PhotoLightboxProps` --references--> `PhotoItem`  [EXTRACTED]
  src/components/artifacts/photo-lightbox.tsx → src/types/resume.ts
- `StatusTimelineProps` --references--> `StatusTimeline`  [EXTRACTED]
  src/components/home/status-timeline.tsx → src/types/resume.ts
- `ModeToggle()` --calls--> `cn()`  [EXTRACTED]
  src/components/layout/mode-toggle.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (26 total, 8 thin omitted)

### Community 0 - "(home)/page.tsx"
Cohesion: 0.13
Nodes (13): staggerVariants, ApiResponse, ContributionDay, GitHubCalendar(), MONTHS, GREETINGS, HeroGreeting(), PhotoPreview() (+5 more)

### Community 1 - "dependencies"
Cohesion: 0.10
Nodes (21): clsx, lucide-react, motion, next-themes, dependencies, clsx, lucide-react, motion (+13 more)

### Community 2 - "resume.ts"
Cohesion: 0.13
Nodes (15): metadata, ArtifactsGallery(), PhotoLightbox(), PhotoLightboxProps, DATA, AccentColor, PhotoItem, ProjectSpec (+7 more)

### Community 3 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 4 - "devDependencies"
Cohesion: 0.11
Nodes (19): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+11 more)

### Community 5 - "Karan Wakhare — Portfolio & Projects Showcase"
Cohesion: 0.18
Nodes (10): 1. Clone & Install Dependencies, 2. Configure Environment Variables, 3. Run Development Server, 📜 Available Scripts, 💻 Getting Started, Karan Wakhare — Portfolio & Projects Showcase, 🚀 Key Features, 📄 License (+2 more)

### Community 6 - "layout.tsx"
Cohesion: 0.17
Nodes (11): metadata, geist, geistMono, jsonLd, metadata, RootLayout(), emptySubscribe(), ModeToggle() (+3 more)

### Community 7 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 8 - "AGENTS.md — Portfolio Project Rules"
Cohesion: 0.22
Nodes (8): 1. PROJECT IDENTITY, 2. TECH STACK, 3. DEV COMMANDS, 4. LOCAL RULES & DESIGN INVARIANTS, 5. KEY PROJECT PATTERNS, 6. MISTAKES TO AVOID, 7. SESSION RESUME, AGENTS.md — Portfolio Project Rules

### Community 9 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, private, scripts, build, dev, lint (+4 more)

### Community 10 - "include"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 11 - "2. Layer Definitions & Bounded Contexts"
Cohesion: 0.25
Nodes (7): 1. High-Level Architectural Overview, 2. Layer Definitions & Bounded Contexts, 3. Architectural Rules & Best Practices, A. Presentation Layer (`src/app/` & `src/components/`), Architecture & Software Design Document: Karan Wakhare Portfolio, B. Domain & Application Layer (`src/types/` & `src/data/` & `src/lib/`), C. Content Engine (`content/` & `content-collections.ts`)

### Community 12 - ".prettierrc.json"
Cohesion: 0.18
Nodes (10): arrowParens, bracketSpacing, endOfLine, jsxSingleQuote, printWidth, semi, singleQuote, tabWidth (+2 more)

### Community 22 - "Log Entries"
Cohesion: 0.33
Nodes (5): How to Maintain This Journal (For the Agent), Log Entries, [Portfolio — Deep Codebase Cleanup, Reorganization & Decoupling] 2026-08-23, [Portfolio — Whole-Codebase Audit, Dead Code Purge & Architecture Organization] 2026-08-25, Product Journal

### Community 28 - "CONTEXT.md — Ubiquitous Language & Domain Terms"
Cohesion: 0.50
Nodes (3): 1. Domain Terminology, 2. Directory Architecture Standard, CONTEXT.md — Ubiquitous Language & Domain Terms

## Knowledge Gaps
- **131 isolated node(s):** `semi`, `singleQuote`, `jsxSingleQuote`, `trailingComma`, `printWidth` (+126 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `jsxSingleQuote` to the rest of the system?**
  _131 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `(home)/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13450292397660818 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `resume.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12615384615384614 - nodes in this community are weakly interconnected._