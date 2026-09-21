# Karan Wakhare — Portfolio & Projects Showcase

A high-performance, modern developer portfolio and project showcase built with Next.js 16 (App Router + Turbopack), React 19, Tailwind CSS v4, Motion, and TypeScript.

---

## 🚀 Key Features

- **GitHub Activity Heatmap**: Responsive, zero-dependency SVG contribution heatmap rendering rolling 365-day activity directly from GitHub.
- **Showcase of AI & Engineering Builds (2026)**:
  - **Grocer**: WhatsApp grocery assistant verifying orders against live Swiggy Instamart inventory via MCP and auto-fixing out-of-stock items.
  - **Outpost**: Quick-commerce inventory replenishment decision engine forecasting stockouts and routing inter-store transfers with human-in-the-loop approval.
  - **Git for Prompts**: Git-style version control for AI prompts with commit histories, token diffing, and multi-model evals.
  - **IndieForest**: Interactive 3D isometric WebGL island turning daily GitHub commits and Stripe revenue into growing digital forests.
  - **Tonal**: Chrome extension rewriting rough drafts into clear Slack, Gmail, and LinkedIn messages in under 200ms via Groq LPUs on Cloudflare Workers.
- **Artifacts Gallery**: Interactive photo gallery with keyboard navigation and fullscreen lightbox.
- **Tooling Radar**: Minimalist tag cloud tracking core languages, AI agent runtimes, and infrastructure stacks.
- **SEO & Discoverability**: Dynamic XML sitemap (`/sitemap.xml`), `robots.txt`, and Schema.org `Person` & `WebSite` JSON-LD graphs.
- **Fluid Micro-Interactions**: Expandable architecture spec drawers and seamless system/manual theme switching.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.2 (App Router + Turbopack)
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations**: Motion (`motion/react`)
- **Analytics**: Vercel Web Analytics (`@vercel/analytics`)
- **Testing**: Vitest
- **Language**: TypeScript 5.9

---

## 💻 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/kwakhare5/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL="https://karan30.vercel.app"
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js development server with Turbopack |
| `npm run build` | Build optimized production bundle & static pages |
| `npm run start` | Start production server |
| `npm run test` | Run Vitest unit test suite |
| `npm run lint` | Run Next.js ESLint checks |

---

## 📄 License

MIT License © 2026 Karan Wakhare
