# Graph Report - Portfolio  (2026-09-29)

## Corpus Check
- 34 files · ~655,116 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 213 nodes · 237 edges · 23 communities (16 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d6882fde`
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
- AGENTS.md — Portfolio Project Rules
- package.json
- include
- Architecture & Software Design Document: Karan Wakhare Portfolio
- .prettierrc.json
- eslint.config.mjs
- next.config.mjs
- postcss.config.mjs
- Log entries
- CONTEXT.md — Ubiquitous Language & Domain Terms
- route.ts
- not-found.tsx
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `AGENTS.md — Portfolio Project Rules` - 8 edges
3. `scripts` - 7 edges
4. `DATA` - 7 edges
5. `cn()` - 6 edges
6. `include` - 6 edges
7. `Log entries` - 6 edges
8. `Karan Wakhare — Portfolio & Projects Showcase` - 6 edges
9. `ModeToggle()` - 5 edges
10. `PhotoItem` - 5 edges

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

## Communities (23 total, 7 thin omitted)

### Community 0 - "(home)/page.tsx"
Cohesion: 0.19
Nodes (9): staggerVariants, GREETINGS, HeroGreeting(), PhotoPreview(), ProjectRow(), StatusTimeline(), StatusTimelineProps, ProjectSpec (+1 more)

### Community 1 - "dependencies"
Cohesion: 0.09
Nodes (23): clsx, lucide-react, motion, next-themes, dependencies, clsx, lucide-react, motion (+15 more)

### Community 2 - "resume.ts"
Cohesion: 0.14
Nodes (13): metadata, ArtifactsGallery(), PhotoLightbox(), PhotoLightboxProps, DATA, AccentColor, PhotoItem, ProjectSpecs (+5 more)

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
Cohesion: 0.16
Nodes (13): geist, geistMono, jsonLd, metadata, RootLayout(), ApiResponse, ContributionDay, getComputedLevel() (+5 more)

### Community 8 - "AGENTS.md — Portfolio Project Rules"
Cohesion: 0.22
Nodes (8): 1. PROJECT IDENTITY, 2. TECH STACK, 3. DEV COMMANDS, 4. LOCAL RULES & DESIGN INVARIANTS, 5. KEY PROJECT PATTERNS, 6. MISTAKES TO AVOID, 7. SESSION RESUME, AGENTS.md — Portfolio Project Rules

### Community 9 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, private, scripts, build, dev, lint (+4 more)

### Community 10 - "include"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 11 - "Architecture & Software Design Document: Karan Wakhare Portfolio"
Cohesion: 0.29
Nodes (6): 1. High-Level Architectural Overview, 2. Layer Definitions & Bounded Contexts, 3. Architectural Rules & Best Practices, A. Presentation Layer (`src/app/` & `src/components/`), Architecture & Software Design Document: Karan Wakhare Portfolio, B. Domain & Application Layer (`src/types/` & `src/data/` & `src/lib/`)

### Community 12 - ".prettierrc.json"
Cohesion: 0.18
Nodes (10): arrowParens, bracketSpacing, endOfLine, jsxSingleQuote, printWidth, semi, singleQuote, tabWidth (+2 more)

### Community 22 - "Log entries"
Cohesion: 0.15
Nodes (12): Entry schema, [GitHub Profile — README Selected Work Sync & GitHub Sanitizer Fixes] 2026-09-29, How to maintain this journal, Log entries, [Portfolio — Deep Codebase Cleanup, Reorganization & Decoupling] 2026-08-23, [Portfolio — Deep Codebase Purge, Blog Subsystem Decoupling & Tool Cleanup] 2026-08-25, [Portfolio — Featured Builds Real-Time Scope & Copy Alignment] 2026-09-09, [Portfolio - GitHub Activity Heatmap Fix & Project Row UX Polish] 2026-09-29 (+4 more)

### Community 28 - "CONTEXT.md — Ubiquitous Language & Domain Terms"
Cohesion: 0.50
Nodes (3): 1. Domain Terminology, 2. Directory Architecture Standard, CONTEXT.md — Ubiquitous Language & Domain Terms

## Knowledge Gaps
- **116 isolated node(s):** `semi`, `singleQuote`, `jsxSingleQuote`, `trailingComma`, `printWidth` (+111 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `jsxSingleQuote` to the rest of the system?**
  _116 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `resume.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14130434782608695 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._