# Karan Wakhare — Portfolio

A high-performance, modern developer portfolio built with Next.js 16 (App Router + Turbopack), React 19, Tailwind CSS v4, Motion v12, and TypeScript 5.9.

---

## Key Features

- **Real-Time Online Status Engine**: Integrates with a background Windows PowerShell service (`ping-status.ps1`) to display active working status ("Working" / "Offline active Xm ago") with a 75-second heartbeat window and local fallback timestamp caching.
- **Permanent Unique Visitor Tracking**: Deduplicates visits per person lifetime using `pv_id` cookies and IP signature hashes, synced with real CounterAPI baseline data.
- **Centered Visitor Analytics Modal**: White-theme dialog matching the website's CSS design system (`bg-card opacity-100 border border-border`) with soft dark backdrop dimming (`bg-black/60`) and a compact SVG 14-day growth trend chart.
- **WakaTime & GitHub Integrations**: Live coding activity statistics and GitHub repository showcases with 100% uptime fallback data.
- **Matrix Scramble Greeting**: Dynamic hero section greeting text decoding matrix effect.

---

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router + Turbopack)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4.1.18 (@tailwindcss/postcss)
- **Animations**: Motion v12.23.27 (`motion/react`)
- **Content Pipeline**: Content Collections v0.2.1
- **Icons**: Lucide React v0.562.0
- **Testing**: Vitest v4.1.10
- **Language**: TypeScript v5.9.3

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or pnpm
- PowerShell 5.1/7 (for Windows status ping script)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/kwakhare5/portfolio.git
cd portfolio
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
STATUS_API_SECRET="your-secret-uuid"
KV_STATUS_URL="https://keyvalue.immanuel.co/api/KeyVal/GetValue/YOUR_HASH/status"
STATUS_API_WRITE_URL="https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/YOUR_HASH/status"
WAKATIME_API_KEY="your-wakatime-api-key"
GITHUB_TOKEN="your-github-token"
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Next.js development server with Turbopack |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run test` | Run Vitest unit test suite |
| `npm run lint` | Run Next.js ESLint checks |

---

## Windows Status Ping Service Setup

To enable automated real-time "Working" status tracking while logged into Windows:

```powershell
# Run the 1-click Windows Startup task installer
powershell -ExecutionPolicy Bypass -File scripts/install-startup.ps1
```

---

## License

MIT License © 2026 Karan Wakhare
