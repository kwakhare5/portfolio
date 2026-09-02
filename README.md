# Karan Wakhare — Portfolio & Projects Showcase

A high-performance, modern developer portfolio and project showcase built with Next.js 16 (App Router + Turbopack), React 19, Tailwind CSS v4, Motion, and TypeScript.

---

## 🚀 Key Features

- **GitHub Activity Heatmap**: Responsive, zero-dependency SVG contribution heatmap rendering current calendar year activity directly from GitHub.
- **Showcase of AI & Engineering Builds (2026)**:
  - **IndieForest**: Gamified momentum and shipping accountability platform for indie developers.
  - **Git for Prompts**: Version control system for AI prompts with branching, automated evals, and diffing.
  - **Tonal**: Two-way tone translator for Gmail, Slack, and LinkedIn powered by Groq LLMs and Cloudflare Workers.
  - **Grocer**: Multi-platform quick commerce AI assistant predicting pantry depletion and automating WhatsApp restocking.
- **Artifacts Gallery**: Interactive photo and prototype gallery with keyboard navigation and fullscreen lightbox.
- **Tooling Radar**: Minimalist tag cloud tracking core languages, AI agent runtimes, and infrastructure stacks.
- **SEO & Discoverability**: Dynamic XML sitemap (`/sitemap.xml`), `robots.txt`, and Schema.org `Person` & `WebSite` JSON-LD graphs.
- **Fluid Micro-Interactions**: Apple-grade spring physics, interactive architecture spec drawers, and seamless theme switching.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.2 (App Router + Turbopack)
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations**: Motion (`motion/react`)
- **Content Engine**: Content Collections (`@content-collections/mdx`)
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
NEXT_PUBLIC_UMAMI_WEBSITE_ID="523ba8f6-640f-44a2-8150-09f701687782"
GITHUB_TOKEN="your-github-token"
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
