# Graph Report - Portfolio  (2026-11-16)

## Corpus Check
- 39 files · ~742,063 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 298 nodes · 372 edges · 26 communities (19 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d17a6604`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- stationery-icons.tsx
- dependencies
- resume.ts
- compilerOptions
- devDependencies
- Karan Wakhare — Portfolio & Projects Showcase
- app/page.tsx
- Issue tracker: GitHub
- AGENTS.md — Portfolio Project Rules
- scripts
- layout.tsx
- Architecture & Software Design Document: Karan Wakhare Portfolio
- .prettierrc.json
- Domain Docs
- sync-profile.mjs
- [Portfolio — Layout Redesign, Unified Notion Tag System & Dead Code Purge] 2026-11-15
- eslint.config.mjs
- next.config.mjs
- postcss.config.mjs
- Log entries
- CONTEXT.md — Ubiquitous Language & Domain Terms
- route.ts
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `Log entries` - 32 edges
2. `compilerOptions` - 16 edges
3. `[Portfolio — Layout Redesign, Unified Notion Tag System & Dead Code Purge] 2026-11-15` - 11 edges
4. `DATA` - 10 edges
5. `scripts` - 9 edges
6. `AGENTS.md — Portfolio Project Rules` - 8 edges
7. `getTechInkClass()` - 6 edges
8. `include` - 6 edges
9. `Karan Wakhare — Portfolio & Projects Showcase` - 6 edges
10. `Issue tracker: GitHub` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ProjectPage()` --calls--> `getTechInkClass()`  [EXTRACTED]
  src/app/builds/[slug]/page.tsx → src/lib/utils.ts
- `PhotoLightboxProps` --references--> `PhotoItem`  [EXTRACTED]
  src/components/artifacts/photo-lightbox.tsx → src/data/resume.ts
- `GitHubCalendar()` --calls--> `getComputedLevel()`  [EXTRACTED]
  src/components/home/github-calendar.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (26 total, 7 thin omitted)

### Community 0 - "stationery-icons.tsx"
Cohesion: 0.11
Nodes (25): dynamicParams, generateMetadata(), getProject(), ProjectPage(), renderProjectIcon(), SCHEMA_META, metadata, PROJECT_CONFIGS (+17 more)

### Community 1 - "dependencies"
Cohesion: 0.12
Nodes (17): lucide-react, next-themes, dependencies, lucide-react, next, next-themes, react, react-dom (+9 more)

### Community 2 - "resume.ts"
Cohesion: 0.13
Nodes (14): metadata, ArtifactsGallery(), PhotoLightbox(), PhotoLightboxProps, SketchCamera(), SketchPin(), SocialsFooter(), AccentColor (+6 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (27): dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts (+19 more)

### Community 4 - "devDependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, postcss, @types/node, @types/react (+9 more)

### Community 5 - "Karan Wakhare — Portfolio & Projects Showcase"
Cohesion: 0.20
Nodes (9): 1. Clone & Install Dependencies, 2. Run Development Server, 📜 Available Scripts, 💻 Getting Started, Karan Wakhare — Portfolio & Projects Showcase, 🚀 Key Features, 📄 License, Prerequisites (+1 more)

### Community 6 - "app/page.tsx"
Cohesion: 0.10
Nodes (21): TIME_FORMATTER, ApiResponse, ContributionDay, GitHubCalendar(), LEVEL_COLORS, MONTHS, GREETINGS, HeroGreeting() (+13 more)

### Community 7 - "Issue tracker: GitHub"
Cohesion: 0.29
Nodes (6): Conventions, Issue tracker: GitHub, Pull requests as a triage surface, Wayfinding operations, When a skill says "fetch the relevant ticket", When a skill says "publish to the issue tracker"

### Community 8 - "AGENTS.md — Portfolio Project Rules"
Cohesion: 0.22
Nodes (8): 1. PROJECT IDENTITY, 2. TECH STACK, 3. DEV COMMANDS, 4. LOCAL RULES & DESIGN INVARIANTS, 5. KEY PROJECT PATTERNS, 6. MISTAKES TO AVOID, 7. SESSION RESUME, AGENTS.md — Portfolio Project Rules

### Community 9 - "scripts"
Cohesion: 0.13
Nodes (14): engines, node, name, private, scripts, build, dev, lint (+6 more)

### Community 10 - "layout.tsx"
Cohesion: 0.29
Nodes (5): geist, geistMono, jsonLd, metadata, viewport

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
Cohesion: 0.22
Nodes (8): bioText, defaultProfileDir, __dirname, __filename, resumePath, rootDir, selectedWorkMarkdown, stackMarkdown

### Community 15 - "[Portfolio — Layout Redesign, Unified Notion Tag System & Dead Code Purge] 2026-11-15"
Cohesion: 0.18
Nodes (11): [Portfolio — Layout Redesign, Unified Notion Tag System & Dead Code Purge] 2026-11-15, Work card 10: Dead-code purge following transition to borderless stationery typography, Work card 1: Notion color token unification, project clickability, and dead code cleanup, Work card 2: Playful Notion stationery theme, hand-drawn monoline icons, and nav refinement, Work card 3: Silent stationery palette refinement, eliminating gray/purple, and removing animated hover tints, Work card 4: Subtle stationery ink typography for tech stack and project technologies, Work card 5: Project sequence reordering, nav reduction, and cross-repo GitHub profile synchronization, Work card 6: Balanced silent ink palette, refined hero pen underline, and ubiquitous project icons (+3 more)

### Community 22 - "Log entries"
Cohesion: 0.05
Nodes (38): Entry schema, [GitHub Profile — README Selected Work Sync & GitHub Sanitizer Fixes] 2026-09-29, How to maintain this journal, Log entries, [Portfolio - 7-Tier typography, heading hierarchy & design system harmonization] 2026-10-22, [Portfolio - About bio two lines, same colour, pipe titles] 2026-11-11, [Portfolio - Anchor headings, instant page render & bio narrative] 2026-10-22, [Portfolio - bio merge deployed] 2026-11-11 (+30 more)

## Knowledge Gaps
- **172 isolated node(s):** `semi`, `singleQuote`, `jsxSingleQuote`, `trailingComma`, `printWidth` (+167 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Log entries` connect `Log entries` to `[Portfolio — Layout Redesign, Unified Notion Tag System & Dead Code Purge] 2026-11-15`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `semi`, `singleQuote`, `jsxSingleQuote` to the rest of the system?**
  _172 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `stationery-icons.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11088709677419355 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `resume.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13230769230769232 - nodes in this community are weakly interconnected._