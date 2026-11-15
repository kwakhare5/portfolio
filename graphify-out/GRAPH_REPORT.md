# Graph Report - Portfolio  (2026-11-15)

## Corpus Check
- 39 files · ~739,669 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 272 nodes · 314 edges · 27 communities (19 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d7c8a418`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- project-row.tsx
- dependencies
- [slug]/page.tsx
- compilerOptions
- devDependencies
- Karan Wakhare — Portfolio & Projects Showcase
- app/page.tsx
- Issue tracker: GitHub
- AGENTS.md — Portfolio Project Rules
- scripts
- include
- Architecture & Software Design Document: Karan Wakhare Portfolio
- .prettierrc.json
- Domain Docs
- sync-profile.mjs
- layout.tsx
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
1. `Log entries` - 32 edges
2. `compilerOptions` - 16 edges
3. `DATA` - 10 edges
4. `scripts` - 9 edges
5. `AGENTS.md — Portfolio Project Rules` - 8 edges
6. `getTechTagClass()` - 6 edges
7. `include` - 6 edges
8. `Karan Wakhare — Portfolio & Projects Showcase` - 6 edges
9. `Issue tracker: GitHub` - 6 edges
10. `ModeToggle()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `ProjectPage()` --calls--> `getTechTagClass()`  [EXTRACTED]
  src/app/builds/[slug]/page.tsx → src/lib/utils.ts
- `Page()` --calls--> `getTechTagClass()`  [EXTRACTED]
  src/app/page.tsx → src/lib/utils.ts
- `PhotoLightboxProps` --references--> `PhotoItem`  [EXTRACTED]
  src/components/artifacts/photo-lightbox.tsx → src/data/resume.ts
- `GitHubCalendar()` --calls--> `getComputedLevel()`  [EXTRACTED]
  src/components/home/github-calendar.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (27 total, 8 thin omitted)

### Community 0 - "project-row.tsx"
Cohesion: 0.19
Nodes (12): GREETINGS, HeroGreeting(), PROJECT_CONFIGS, ProjectRow(), ProjectStationeryConfig, SketchArrow(), SketchBox(), SketchHighlighter() (+4 more)

### Community 1 - "dependencies"
Cohesion: 0.12
Nodes (17): lucide-react, next-themes, dependencies, lucide-react, next, next-themes, react, react-dom (+9 more)

### Community 2 - "[slug]/page.tsx"
Cohesion: 0.09
Nodes (21): metadata, dynamicParams, generateMetadata(), getProject(), PROJECT_ICONS, ProjectPage(), SCHEMA_META, ArtifactsGallery() (+13 more)

### Community 3 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 4 - "devDependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+9 more)

### Community 5 - "Karan Wakhare — Portfolio & Projects Showcase"
Cohesion: 0.20
Nodes (9): 1. Clone & Install Dependencies, 2. Run Development Server, 📜 Available Scripts, 💻 Getting Started, Karan Wakhare — Portfolio & Projects Showcase, 🚀 Key Features, 📄 License, Prerequisites (+1 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.23
Nodes (10): Page(), TIME_FORMATTER, ApiResponse, ContributionDay, GitHubCalendar(), LEVEL_COLORS, MONTHS, PhotoPreview() (+2 more)

### Community 7 - "Issue tracker: GitHub"
Cohesion: 0.29
Nodes (6): Conventions, Issue tracker: GitHub, Pull requests as a triage surface, Wayfinding operations, When a skill says "fetch the relevant ticket", When a skill says "publish to the issue tracker"

### Community 8 - "AGENTS.md — Portfolio Project Rules"
Cohesion: 0.22
Nodes (8): 1. PROJECT IDENTITY, 2. TECH STACK, 3. DEV COMMANDS, 4. LOCAL RULES & DESIGN INVARIANTS, 5. KEY PROJECT PATTERNS, 6. MISTAKES TO AVOID, 7. SESSION RESUME, AGENTS.md — Portfolio Project Rules

### Community 9 - "scripts"
Cohesion: 0.13
Nodes (14): engines, node, name, private, scripts, build, dev, lint (+6 more)

### Community 10 - "include"
Cohesion: 0.22
Nodes (8): .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 11 - "Architecture & Software Design Document: Karan Wakhare Portfolio"
Cohesion: 0.29
Nodes (6): 1. High-Level Architectural Overview, 2. Layer Definitions & Bounded Contexts, 3. Architectural Rules & Best Practices, A. Presentation Layer (`src/app/` & `src/components/`), Architecture & Software Design Document: Karan Wakhare Portfolio, B. Domain & Application Layer (`src/data/` & `src/lib/`)

### Community 12 - ".prettierrc.json"
Cohesion: 0.18
Nodes (10): arrowParens, bracketSpacing, endOfLine, jsxSingleQuote, printWidth, semi, singleQuote, tabWidth (+2 more)

### Community 13 - "Domain Docs"
Cohesion: 0.33
Nodes (5): Before exploring, read these, Domain Docs, File structure, Flag ADR conflicts, Use the glossary's vocabulary

### Community 14 - "sync-profile.mjs"
Cohesion: 0.29
Nodes (6): defaultProfileDir, __dirname, __filename, resumePath, rootDir, selectedWorkMarkdown

### Community 15 - "layout.tsx"
Cohesion: 0.29
Nodes (5): geist, geistMono, jsonLd, metadata, viewport

### Community 22 - "Log entries"
Cohesion: 0.05
Nodes (42): Entry schema, [GitHub Profile — README Selected Work Sync & GitHub Sanitizer Fixes] 2026-09-29, How to maintain this journal, Log entries, [Portfolio - 7-Tier typography, heading hierarchy & design system harmonization] 2026-10-22, [Portfolio - About bio two lines, same colour, pipe titles] 2026-11-11, [Portfolio - Anchor headings, instant page render & bio narrative] 2026-10-22, [Portfolio - bio merge deployed] 2026-11-11 (+34 more)

## Knowledge Gaps
- **163 isolated node(s):** `semi`, `singleQuote`, `jsxSingleQuote`, `trailingComma`, `printWidth` (+158 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `jsxSingleQuote` to the rest of the system?**
  _163 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `[slug]/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0945945945945946 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._