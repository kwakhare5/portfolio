# Graph Report - Portfolio  (2026-08-14)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 377 nodes · 563 edges · 24 communities (21 shown, 3 thin omitted)
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 60 edges (avg confidence: 0.68)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f1365d7d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- cn
- dependencies
- (home)/page.tsx
- compilerOptions
- devDependencies
- resume.tsx
- [slug]/page.tsx
- components.json
- get-github-projects.ts
- package.json
- navbar.tsx
- blog/page.tsx
- .prettierrc.json
- visitor-store.ts
- social-icons.tsx
- opengraph-image.tsx
- photos/page.tsx
- content-collections.ts
- eslint.config.mjs
- next.config.mjs
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `cn()` - 31 edges
2. `compilerOptions` - 16 edges
3. `DATA` - 9 edges
4. `useBrandColorTheme()` - 7 edges
5. `getGithubData()` - 7 edges
6. `scripts` - 7 edges
7. `useIsMounted()` - 6 edges
8. `include` - 6 edges
9. `aliases` - 6 edges
10. `tailwind` - 6 edges

## Surprising Connections (you probably didn't know these)
- `posts` --indirect_call--> `remarkCodeMeta()`  [INFERRED]
  content-collections.ts → src/lib/remark-code-meta.ts
- `RootLayout()` --calls--> `cn()`  [EXTRACTED]
  src/app/layout.tsx → src/lib/utils.ts
- `ModeToggle()` --calls--> `cn()`  [EXTRACTED]
  src/components/layout/mode-toggle.tsx → src/lib/utils.ts
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/layout/navbar.tsx → src/lib/utils.ts
- `CodeBlock()` --calls--> `cn()`  [EXTRACTED]
  src/components/mdx/code-block.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (24 total, 3 thin omitted)

### Community 0 - "cn"
Cohesion: 0.07
Nodes (33): geist, geistMono, metadata, RootLayout(), vt323, FlickeringGrid(), FlickeringGridProps, Dot (+25 more)

### Community 1 - "dependencies"
Cohesion: 0.04
Nodes (45): class-variance-authority, clsx, @content-collections/mdx, lucide-react, motion, next-themes, dependencies, class-variance-authority (+37 more)

### Community 2 - "(home)/page.tsx"
Cohesion: 0.08
Nodes (31): HackathonsSection, Page(), revalidate, EducationSection(), GREETINGS, HeroGreetingText(), SkillsSection(), RangeType (+23 more)

### Community 3 - "compilerOptions"
Cohesion: 0.07
Nodes (29): ./.content-collections/generated, dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+21 more)

### Community 4 - "devDependencies"
Cohesion: 0.07
Nodes (27): @content-collections/core, @content-collections/next, eslint, eslint-config-next, devDependencies, @content-collections/core, @content-collections/next, eslint (+19 more)

### Community 5 - "resume.tsx"
Cohesion: 0.21
Nodes (20): ICON_MAP, SkillsSectionProps, Css3(), Docker(), FastAPI(), FramerMotion(), Git(), Html5() (+12 more)

### Community 6 - "[slug]/page.tsx"
Cohesion: 0.13
Nodes (13): Blog(), getSortedPosts(), CodeBlock(), CodeBlockProps, extractLanguage(), MediaContainer(), MediaContainerProps, Button (+5 more)

### Community 7 - "components.json"
Cohesion: 0.10
Nodes (19): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+11 more)

### Community 8 - "get-github-projects.ts"
Cohesion: 0.16
Nodes (14): ProjectsSection(), DATA, ALLOWED_PROJECTS, extractSkillsFromRepo(), formatTitle(), getGithubData(), GithubData, GithubRepo (+6 more)

### Community 9 - "package.json"
Cohesion: 0.15
Nodes (12): engines, node, name, private, scripts, build, dev, lint (+4 more)

### Community 10 - "navbar.tsx"
Cohesion: 0.24
Nodes (9): GitHubActivitySection, GitHubActivitySection(), GitHubCalendar, ModeToggle(), NAV_SECTIONS, Navbar(), scrollToSection(), emptySubscribe() (+1 more)

### Community 11 - "blog/page.tsx"
Cohesion: 0.26
Nodes (9): BlogPage(), metadata, AnimatedEntrance(), AnimatedEntranceProps, normalizePage(), paginate(), PaginatedResult, PaginationOptions (+1 more)

### Community 12 - ".prettierrc.json"
Cohesion: 0.18
Nodes (10): arrowParens, bracketSpacing, endOfLine, jsxSingleQuote, printWidth, semi, singleQuote, tabWidth (+2 more)

### Community 13 - "visitor-store.ts"
Cohesion: 0.33
Nodes (9): dynamic, GET(), DailyVisitorStat, format14DayHistory(), getInitialStore(), getVisitorStore(), LOCAL_CACHE_PATH, saveVisitorStore() (+1 more)

### Community 14 - "social-icons.tsx"
Cohesion: 0.33
Nodes (8): Email(), GitHub(), Globe(), IconProps, LinkedIn(), Resume(), useBrandColorTheme(), X()

### Community 15 - "opengraph-image.tsx"
Cohesion: 0.32
Nodes (7): alt, contentType, getAvatarBase64(), getFontData(), Image(), size, styles

### Community 16 - "photos/page.tsx"
Cohesion: 0.33
Nodes (4): metadata, Photo, PHOTOS, PolaroidGrid()

### Community 17 - "content-collections.ts"
Cohesion: 0.60
Nodes (3): posts, remarkCodeMeta(), UnistNode

## Knowledge Gaps
- **159 isolated node(s):** `FlickeringGridProps`, `Dot`, `ParticlesProps`, `Props`, `CursorSetting` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `navbar.tsx`, `(home)/page.tsx`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `FlickeringGridProps`, `Dot`, `ParticlesProps` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `cn` be split into smaller, more focused modules?**
  _Cohesion score 0.06823529411764706 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.044444444444444446 - nodes in this community are weakly interconnected._
- **Should `(home)/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08013937282229965 - nodes in this community are weakly interconnected._