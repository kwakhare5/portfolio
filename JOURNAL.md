# Product Journal

A chronological record of project milestones, features shipped, and metrics. This file is append-only.

---

## How to Maintain This Journal (For the Agent)
During the Session End ritual (called automatically whenever significant changes are made), the agent:
1. Reads the current `JOURNAL.md`.
2. Formats all work under **at most ONE date heading per calendar day** (`### [Project — Summary] YYYY-MM-DD`).
3. If today's date heading (`YYYY-MM-DD`) already exists under `## Log Entries`, merges/appends the new bullet points under `- **Shipped**:`, updates `- **Commit**:`, and updates `- **Vibe**:`.
4. If today's date heading does NOT exist, prepends a new date heading `### [Project — Summary] YYYY-MM-DD` directly under `## Log Entries` (newest date on top).

---

## Log Entries

### [Portfolio — Deep Codebase Purge, Blog Subsystem Decoupling & Tool Cleanup] 2026-08-25
- **Commit**: `2aec163`
- **Shipped**:
  - Purged external tool caches and dead CLI lockfiles (`.freebuff/`, `.opencode/`, `.codegraph/`, `skills-lock.json`).
  - Decoupled and pruned the entire boilerplate blog subsystem: deleted `content/` (8 boilerplate `.mdx` files), `content-collections.ts`, `src/app/blog/[slug]`, `src/components/mdx/` (`code-block.tsx`, `media-container.tsx`), `src/mdx-components.tsx`, `src/lib/posts.ts`, `src/lib/remark-code-meta.ts`, and `public/fonts/Geist-Regular.ttf`.
  - Uninstalled 8 unneeded heavy dependencies (`@content-collections/core`, `@content-collections/mdx`, `@content-collections/next`, `content-collections`, `remark-gfm`, `shiki`, `zod`, `@tailwindcss/typography`), reducing `node_modules` by 268 packages.
  - Simplified `next.config.mjs` by removing Content Collections wrapper and plugins.
  - Cleaned `src/app/globals.css` by stripping typography plugins and 106 lines of dead Shiki/prose overrides.
  - Rebuilt graphify knowledge graph AST (235 nodes, 256 edges, 26 communities).
  - Verified 100% test pass rate in Vitest, 0 ESLint warnings, and flawless static generation across all 8 core application routes (`/`, `/_not-found`, `/api/contributions`, `/artifacts`, `/blog`, `/robots.txt`, `/sitemap.xml`).
- **Vibe**: ⚡ Ultra-lean, zero boilerplate, 100% focused builder portfolio!

### [Portfolio — Deep Codebase Cleanup, Reorganization & Decoupling] 2026-08-23
- **Commit**: `a974d30`
- **Shipped**:
  - Connected native unedited original [`public/me.jpg`](file:///D:/Portfolio/public/me.jpg) (1512×1512) for the home page avatar with standard `unoptimized` object-cover and zero artificial scale or translate transforms.
  - Updated [`src/app/blog/page.tsx`](file:///D:/Portfolio/src/app/blog/page.tsx) with the clean subtitle ("Essays on building things, life lessons, and figuring it out along the way") and minimal cooking notice with direct X link.
  - Audited mobile responsiveness across viewport sizes (`360px` to `4K`): added `flex-wrap` and mobile gap padding to home masthead navigation to prevent clipping on small phone screens.
  - Unified top navigation bar on [`src/app/blog/[slug]/page.tsx`](file:///D:/Portfolio/src/app/blog/%5Bslug%5D/page.tsx) with left-aligned back navigation and right-aligned `ModeToggle` theme switcher, achieving 100% header consistency across all pages.
  - Refined timeline affordances in [`src/components/home/status-timeline.tsx`](file:///D:/Portfolio/src/components/home/status-timeline.tsx) to prevent false `.editorial-link` hover triggers on non-hyperlinked entries.
  - Polished [`src/components/artifacts/photo-lightbox.tsx`](file:///D:/Portfolio/src/components/artifacts/photo-lightbox.tsx) with `backdrop-blur-md`, accessible `focus-visible` keyboard rings, and spring physics feedback.
  - Simplified directory architecture: flattened `src/components/features/...` into clean `src/components/home/` and `src/components/artifacts/`, and permanently purged the redundant `src/components/features` directory.
  - Renamed components to intuitive self-describing names: `PhotoPreview` (`src/components/home/photo-preview.tsx`), `ArtifactsGallery` (`src/components/artifacts/artifacts-gallery.tsx`), and `PhotoLightbox` (`src/components/artifacts/photo-lightbox.tsx`).
  - Fixed copy button bug in `src/components/mdx/code-block.tsx`: refined `handleCopy` to extract text exclusively from the inner `<code>` element, preventing title/filename banner text from being copied.
  - Added direct `blog` link to top masthead in-page navigation (`builds · activity · artifacts · blog · socials`) on the home page for instant discovery of technical articles.
  - Cleaned up non-standard Satori CSS properties (`textWrap: balance`) in `src/app/blog/[slug]/opengraph-image.tsx` for clean OpenGraph image rendering.
  - Purged leftover `pnpm-workspace.yaml` and pruned redundant type re-exports in `project-row.tsx`.
  - Synchronized `CONTEXT.md` and `ARCHITECTURE.md` with new component paths.
  - Replaced multi-byte Unicode box-drawing dashes (`─`) across JSX and CSS comments with standard ASCII dashes, eliminating Turbopack Rust string highlighter panics.
  - Converted JSON-LD structured data from `<Script>` to native `<script type="application/ld+json">`, resolving React 19 client-side script execution warnings.
  - Stripped UTF-8 BOM artifacts from all source files.
  - Purged `graphify-out/` and stale caches for true minimal architecture.
  - Extracted reusable `PhotoLightbox` modal primitive, deduplicating 100+ lines of modal and keyboard navigation logic between `photo-gallery.tsx` and `artifacts-gallery-view.tsx`.
  - Built pure, test-backed content querying module `src/lib/posts.ts` with 5 Vitest tests and integrated across `/blog`, `/blog/[slug]`, and `sitemap.ts`.
  - Migrated hardcoded hero "currently" and "previously" timeline status into typed domain models in `src/types/resume.ts` and `src/data/resume.tsx`, rendering via modular `StatusTimeline` component.
  - Purged unused legacy public assets (`adypu.png`, `ateion.png`) and updated `components.json` for Tailwind CSS v4 CSS-first configuration.
  - Hardened Shiki MDX codeblock type safety with `BundledLanguage` typing.
  - Expanded test suite to 18 unit tests passing across all utilities.
  - Performed deep codebase cleanup: simplified helper logic in `project-row.tsx` with dictionary lookups, trimmed empty code blocks and trailing noise in `use-is-mounted.ts` and `pagination.ts`, and verified 0 dead exports with Knip.
  - Converted and added 2 new architectural & travel captures to the Artifacts gallery (`singapore-flyer-marina-bay.jpg` and `lake-pichola-udaipur.jpg`), bringing the collection to 15 curated images.
  - Implemented casual lowercase typography across all top nav links, section headers (`featured builds`, `activity`, `daily drivers & tooling`, `artifacts`), and subpage titles with unbolded `font-normal` weight.
  - Hardened web security (OWASP compliance) with strict **Content Security Policy (CSP)** in `next.config.mjs`, HSTS, X-Frame-Options, X-Content-Type-Options, and verified `rel="noopener noreferrer"` attributes.
  - Created dedicated `/api/contributions` route handler with 1-hour ISR revalidation and graceful error fallback.
  - Implemented instant client-side cache hydration via `localStorage` in `github-calendar.tsx`, completely eliminating skeleton lag and cache refresh glitches.
  - Configured immutable caching headers (`Cache-Control: public, max-age=31536000, immutable`) for static photos and vector assets.
  - Enabled gzip/brotli compression and package tree-shaking for `lucide-react`, `motion`, and `content-collections`.
  - Calibrated Hero timeline into a crisp 3-bullet **`currently`** (`@ adypu`, `@ indieforest` & `@ git for prompts`, and exploring AI workflows & web tools) and 2-bullet **`previously`** (`@ ateion`, `@ wisdom high`).
  - Standardized bold typography (`font-weight: 600`) globally across all `.editorial-link` anchors, action triggers (`[live ↗]`, `[code ↗]`, `[specs ▾]`), and social handles.
  - Harmonized subroute navigation icons: standardized all back navigation buttons to Lucide `<ArrowLeft className="size-3.5" />` across `/artifacts`, `/blog`, and `/blog/[slug]`.
  - Upgraded gallery action trigger to Next.js client-side `<Link>` for instant zero-reload transitions to `/artifacts`.
  - Harmonized section header label tokens: converted `Gallery` badge in Artifacts to a clean `font-mono text-xs text-muted-foreground/60` text span matching `Stack` and `GitHub`.
  - Purged obsolete `work` and `education` schema types and cleaned all unused destructuring across data models.
  - Restored role subtitle to **"Full Stack Developer & Indie Builder"** in [`src/data/resume.tsx`](file:///D:/Portfolio/src/data/resume.tsx).
  - Made project titles directly clickable in [`src/components/features/home/project-row.tsx`](file:///D:/Portfolio/src/components/features/home/project-row.tsx) to open the live site or code repository in a new tab.
  - Streamlined the Socials epilogue section by removing the open conversation sentence and focusing directly on the `"Find me on"` handle row.
  - Added **Socials** (`#socials`) anchor to the top masthead navigation bar and styled the epilogue section with a clean `"Find me on"` prefix and handle format across X, GitHub, LinkedIn, and Email.
  - Calibrated education timeline in [`src/data/resume.tsx`](file:///D:/Portfolio/src/data/resume.tsx): Ajeenkya DY Patil University (`B.E. in Computer Engineering`, 2023–2027) and Wisdom High International School (`Cambridge IGCSE`, 2017–2021).
  - Pruned project showcase to the 4 flagship 2026 builds across [`src/data/resume.tsx`](file:///D:/Portfolio/src/data/resume.tsx) and [`README.md`](file:///D:/Portfolio/README.md): **IndieForest**, **Git for Prompts**, **Tonal**, and **Grocer**.
  - Replaced all outdated and placeholder project data with 100% genuine verified 2026 builds across [`src/data/resume.tsx`](file:///D:/Portfolio/src/data/resume.tsx) and [`README.md`](file:///D:/Portfolio/README.md): **IndieForest**, **Git for Prompts** (Drizzle + Monaco Editor), **Tonal** (Groq LLMs + Cloudflare Workers tone translator), **Grocer** (WhatsApp quick commerce prediction). Purged fake audio player logic.
  - Executed final deep cleanup: purged unused `public/fonts/` legacy font assets, removed unused `theme` variable in `mode-toggle.tsx`, cleaned trailing whitespace, and synchronized graphify knowledge graph AST (277 nodes, 27 communities).
  - Fixed avatar blur by adding `unoptimized` prop to `<Image>` in [`src/app/(home)/page.tsx`](file:///D:/Portfolio/src/app/%28home%29/page.tsx), delivering the full native 512x512 original `me.webp` directly without Next.js thumbnail downsampling artifacts.
  - Implemented end-to-end mobile optimizations: added touch targets and `onTouchStart` cell inspection to GitHub heatmap, mobile-friendly touch dismissal with close button `X` in the Artifacts lightbox, responsive container padding (`px-4 sm:px-6`, `overflow-x-hidden`), and calibrated action button tap padding across project rows.
  - Consolidated PreFill into **Grocer** (`src/data/resume.tsx`) without a broken `liveUrl` link, referencing the on-device browser extension and GitHub repository.
  - Calibrated avatar framing on [`public/me.webp`](file:///D:/Portfolio/public/me.webp) with `object-cover object-[50%_40%] scale-135` for balanced face and shoulder framing.
  - Re-ordered greeting and role in masthead (`HeroGreeting` on top followed by `Full-Stack Developer & Indie Builder` subtitle).
  - Eliminated avatar blur by removing artificial CSS scale distortion (`scale-150`), setting high-density Retina sizing (`sizes="(max-width: 640px) 128px, 160px"`, `quality={95}`), and using natural focal framing (`object-[50%_35%]`).
  - Re-ordered masthead hierarchy and vertical spacing: placed role eyebrow (`Full-Stack Developer & Indie Builder`) directly above `HeroGreeting`, aligned avatar (`size-16 sm:size-20`) to top right without splitting text blocks, and set spacious vertical rhythm (`space-y-4`) to the bio paragraph and manifesto.
  - Calibrated avatar portrait framing (`object-cover object-[48%_45%] scale-150`) in [`src/app/(home)/page.tsx`](file:///D:/Portfolio/src/app/%28home%29/page.tsx) to center Karan's face in the circular frame.
  - Streamlined open network epilogue section by removing the secondary coffee invite and keeping the direct builder statement.
  - Calibrated developer bio, role, and manifesto across [`src/data/resume.tsx`](file:///D:/Portfolio/src/data/resume.tsx) and [`src/app/(home)/page.tsx`](file:///D:/Portfolio/src/app/%28home%29/page.tsx) to authentic, direct builder copy ("Full-Stack Developer & Indie Builder").
  - Re-architected **GitHub Activity Heatmap** (`src/components/features/home/github-calendar.tsx`) to native scalable SVG (`viewBox`), eliminating all horizontal scrolling / sliding and rendering seamlessly in one unified container starting from New Year Jan.
  - Locked in **Option 2: Minimalist Inline Tag Cloud** for Daily Drivers & Tooling with semantic category dot indicators and responsive pill tags.
  - Built and integrated native zero-dependency **GitHub Heatmap** component (`src/components/features/home/github-calendar.tsx`) under `#activity`, querying real-time contributions for `kwakhare5`.
  - Completely purged `/analytics` page directory and removed all nav links and sitemap entries.
  - Temporarily hid blog links from top navigation and sitemap while preserving content for later activation.
  - Streamlined in-page navigation to: `Builds` (`#builds`) · `Activity` (`#activity`) · `Artifacts` (`#artifacts`).
  - Renamed Photos gallery section to **Artifacts** (`#artifacts` in navigation and page layout) to match a clean engineering aesthetic.
  - Refined Daily Drivers & Tooling Stack into 3 honest, high-signal categories:
    - *Languages & Frameworks*: TypeScript · Python · Next.js 16 · React 19 · FastAPI · Node.js
    - *AI, Agents & Workflows*: PyTorch · Ollama · LangGraph · Web Audio API · Agents SDK
    - *Infrastructure & Dev Tools*: Git · GitHub · PostgreSQL · Supabase · Prisma ORM · Docker · Tailwind CSS v4
  - Updated section badge to `Stack` and lightbox accessibility labels to `Enlarged artifact preview`.
  - Executed full codebase deep audit, reviewing every line across configuration, data models, components, routes, and styles.
  - Purged 4 unused packages from `package.json` (`class-variance-authority`, `@radix-ui/react-slot`, `react-github-calendar`, `react-markdown`) and fixed package typo.
  - Deleted 238 lines of dead GitHub API polling logic (`src/lib/get-github-projects.ts` and test file).
  - Deleted unused legacy image files (`public/pace.png`, `public/wisdom.png`, `public/sg.webp`, `public/resume.docx`).
  - Re-architected data domain into a strict, unified single source of truth in `src/types/resume.ts` and `src/data/resume.tsx`.
  - Decoupled `src/app/(home)/page.tsx` from ~350 lines of duplicate hardcoded data, turning it into a pure presentation layer.
  - Fixed SEO bug in `src/app/sitemap.ts` where dynamic MDX blog posts were dropped and added `/blog` to indexed routes.
  - Streamlined `src/app/globals.css` by purging dead brand, chart, and sidebar tokens.
  - Replaced legacy tests with 13 comprehensive Vitest unit tests covering `pagination.ts`, `utils.ts`, and `remark-code-meta.ts`.
  - Synchronized `CONTEXT.md` and `ARCHITECTURE.md` to reflect the clean modular design.
  - Re-added **Wisdom High International School** (`2017 – 2021` · Cambridge IGCSE) to the Journey & Experience timeline.
  - Carefully calibrated typographic scale and hierarchy across all sections (greeting, subtitle, manifesto, project rows, radar, timeline, photos, and epilogue).
  - Enlarged avatar to prominent `size-20 sm:size-24` (80–96px) in masthead.
  - Completely unboxed project tech stack into clean inline text separated by middle dots (`·`), eliminating all tag boxes.
  - Restored clean unboxed Photos gallery (`src/components/features/home/photo-gallery.tsx`) with lightbox modal and added `Photos` anchor to in-page navigation.
  - Streamlined timeline by removing high school entry, keeping only Ateion internship and ADYPU engineering degree.
  - Overhauled layout with generous, airy editorial spacing (`space-y-16 sm:space-y-20`, `py-5 sm:py-6` project rows).
  - Built interactive Web Audio synthesis demo player inside the Tonal project specs drawer.
  - Implemented subtle semantic color system (Emerald for live status & production links, Warm Amber for manifesto & architecture highlights, Slate Blue for code links & frameworks).
  - Engineered Apple-grade micro-animations: staggered spring reveals down page sections, GPU-composited link underline draws on hover, fluid AnimatePresence height expansion on project architecture drawers, and photo hover spring physics.
  - Fully unboxed all container boxes and removed all pill badges for a pure, clean linear layout.
  - Built interactive Linear System Project Rows with 1-click expandable architecture specs drawer (`src/components/features/home/project-row.tsx`) for IndieForest, Grocer, Git for Prompts, Tonal, and PreFill.
  - Structured split tabular timeline comparing dates and engineering contributions for Ateion internship and ADYPU Computer Engineering degree.
  - Built Off-Screen Life & Artifacts gallery (`src/components/features/home/snapshots-strip.tsx`) with monospace captions and full-screen lightbox modal.
  - Purged 16 legacy UI components and dependencies.
  - Updated graphify knowledge graph and verified Vitest test suite and Next.js Turbopack build passing with 0 errors.
  - Permanently purged stray local subfolders: deleted `.freebuff/`, `.opencode/`, `.codegraph/`, and `scratch/`.
  - Reorganized and deduplicated [`.gitignore`](file:///d:/Portfolio/.gitignore), removing legacy template entries while preserving core ignores for `.content-collections` and build artifacts.
  - Normalized `CompanyLogo` in [`experience.tsx`](file:///d:/Portfolio/src/components/features/home/experience.tsx) to eliminate Ateion hardcoding, clipping, and dark mode glare.
  - Purged dead assets and unused components: deleted `public/dubai desert.jpg`, `public/wave.png`, and `src/components/ui/badge.tsx`.
  - Hoisted JSON-LD structured data in [`blog/[slug]/page.tsx`](file:///d:/Portfolio/src/app/blog/%5Bslug%5D/page.tsx) to Next.js `<Script strategy="beforeInteractive">` to resolve React 19 console warning.
  - Hoisted ESM imports in [`github-activity.tsx`](file:///d:/Portfolio/src/components/features/home/github-activity.tsx) and removed unused `initials` variable in [`(home)/page.tsx`](file:///d:/Portfolio/src/app/%28home%29/page.tsx).
  - Modernized 404 error page typography and theme navigation in [`not-found.tsx`](file:///d:/Portfolio/src/app/not-found.tsx).
  - Wired macOS custom cursor attributes (`data-cursor-type="pagination-prev/next"`) on blog pagination in [`blog/page.tsx`](file:///d:/Portfolio/src/app/blog/page.tsx).
  - Fixed malformed closing tags in [`code-block.tsx`](file:///d:/Portfolio/src/components/mdx/code-block.tsx).
  - Restored natural mouse wheel, trackpad, and touch scrolling inside the Umami analytics frame while keeping scrollbars 100% invisible.
  - Expanded frame viewport height (`h-[920px] sm:h-[1050px]`) so core telemetry panels fit smoothly without cramped scrolling.
  - Removed sync badge and subtitle clutter from [`/analytics`](file:///d:/Portfolio/src/app/analytics/page.tsx), creating a minimal, clean typography header.
  - Connected 100% real-time Umami Cloud telemetry (`https://cloud.umami.is/share/7DGQy2ryhcONdeR5`) with zero API key dependencies and zero Pro plan requirements.
  - Permanently removed the profile visitor counter: deleted `visits-counter.tsx`, `visitor-store.ts`, and the `/api/visits` route handler.
  - Simplified the footer into a clean copyright notice and direct link to public live Umami analytics (`/analytics`).
  - Unified all analytics into **Umami Cloud** as the single source of truth, completely purging Upstash Redis and multi-service desync.
  - Resolved Vercel deployment crash by regenerating and synchronizing [`pnpm-lock.yaml`](file:///d:/Portfolio/pnpm-lock.yaml) with exact pruned dependencies.
  - Upgraded full stack to latest releases: **Next.js 16.3.2 (Turbopack)**, **Lucide React 1.33.0**, **Motion 13.1.1**, **PostCSS 8.5.26**, **@content-collections/core 0.15.2**, **Vitest 4.1.11**.
  - Pruned micro-wrappers: deleted `animated-link.tsx`, `copy-email-button.tsx`, `avatar.tsx`, and `logo-image.tsx`, consolidating directly into feature components.
  - Modernized `media-container.tsx` to native Next.js `<Image>` and centralized `DATA.photos` in `resume.tsx`.
  - Configured 1280x720 16:9 viewport on automatic screenshot generator with `object-cover object-top` to preserve full top navigation bars.
  - Completed whole-codebase deep clean and dead code purge: deleted unused local fonts `public/fonts/Geist-Bold.woff`, `Geist-Regular.woff`, `VT323.ttf`, and `VT323.woff`.
  - Removed dead component exports `SkillIcon` & `SKILL_ICON_MAP` from `skill-icons.tsx` and `SocialIcon` from `social-icons.tsx`.
  - Streamlined data models and pruned unreferenced fields (`initials`, `iconName`, `navbar`) across `resume.ts` and `resume.tsx`.
  - Centralized single source of truth `SKILL_ICONS` lookup dictionary, eliminating redundant local icon maps.
  - Replaced JavaScript `useTheme()` + `setTimeout` render waterfalls in `social-icons.tsx` with zero-overhead CSS color variables.
  - Fixed education card interaction to prevent opening empty `#` tabs on placeholder URLs.
  - Upgraded Unsplash photos in `resume.tsx` to 1600px Retina resolution (`w=1600&q=85&auto=format&fit=crop`) and fixed media query typo in `polaroid-gallery.tsx` with responsive `quality={95}`.
  - Implemented `requestAnimationFrame` coalescing, hardware-accelerated `translate3d`, and `prefers-reduced-motion` in `custom-cursor.tsx` for zero-jitter 120Hz/144Hz tracking.
  - Added GPU layer containment (`contain: strict`) on `particles.tsx` and capped DPR scaling on `flickering-grid.tsx` for 0% CPU drain when idle.
  - Added unmount guards on matrix decode interval in `hero-greeting.tsx` and smooth image load fade-in transitions in `project-card.tsx`.
  - Hardened security headers in `next.config.mjs` with HSTS, CSP, X-DNS-Prefetch, and strict iframe sandboxing on `/analytics`.
  - Sanitized JSON-LD script serialization against XSS across root layout and blog post templates.
  - Added text rendering and subpixel antialiasing in `globals.css`.
  - Resolved project preview image visibility by eliminating React hydration `opacity-0` gate in `project-card.tsx` and removed 30-day `minimumCacheTTL` in `next.config.mjs` to allow instant image refresh.
- **Vibe**: ⚡ Zero lag, razor-sharp Retina visuals, rock-solid security, and pristine code architecture!
