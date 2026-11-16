export type ProjectIconKey = "tote" | "box" | "prompt" | "sound";

export interface ProjectSpecs {
  readonly problem: string;
  readonly architecture: string;
  readonly highlights: readonly string[];
  readonly status: string;
}

export interface ProjectSpec {
  readonly title: string;
  readonly slug: string;
  readonly year: string;
  readonly icon: ProjectIconKey;
  readonly oneLiner: string;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly stack: readonly string[];
  readonly schemaCategory: string;
  readonly schemaPlatform: string;
  readonly specs: ProjectSpecs;
}

export type StackIconKey = "code" | "sparkle" | "gear";

export interface StackCategory {
  readonly category: string;
  readonly icon: StackIconKey;
  readonly items: readonly string[];
}

export interface PhotoItem {
  readonly url: string;
  readonly caption: string;
}

export interface SocialItem {
  readonly name: string;
  readonly url: string;
  readonly label: string;
}

export interface ResumeData {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly bio: readonly string[];
  readonly avatarUrl: string;
  readonly featuredProjects: readonly ProjectSpec[];
  readonly coreStack: readonly StackCategory[];
  readonly photos: readonly PhotoItem[];
  readonly contact: {
    readonly socials: readonly SocialItem[];
  };
}

export const DATA: ResumeData = {
  name: "Karan Wakhare",
  url: "https://karan30.vercel.app",
  description:
    "Karan Wakhare is a computer engineering student and developer in Pune building AI tools and full-stack apps.",
  bio: [
    "i'm an ai engineer and full-stack developer studying computer engineering in pune.",
    "i build ai tools and apps, from grocery shopping on whatsapp to version control for prompts.",
    "grocer got me selected for the swiggy builder club.",
  ],
  avatarUrl: "/me-avatar.png",

  featuredProjects: [
    {
      title: "Beam",
      slug: "beam",
      year: "'26",
      icon: "sound",
      oneLiner: "One offline pill above your Windows 11 taskbar for music, files, countdowns, and a calendar — no cloud, no account.",
      liveUrl: "https://beamm.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/beam",
      stack: ["TypeScript", "Electron", "Vite", ".NET", "Windows SMTC"],
      schemaCategory: "UtilitiesApplication",
      schemaPlatform: "Windows 11",
      specs: {
        problem: "Windows 11 scatters media controls, timers, and quick file drops across taskbar flyouts and separate apps, so reaching for them breaks your flow.",
        architecture: "An Electron shell renders a transparent capsule that reads Windows media sessions through a .NET helper, keeps its position across restarts, and makes zero network calls; a global hotkey opens it to whatever the pill shows.",
        highlights: [
          "Live SMTC media controls with seek, artwork, and automatic player switching",
          "File shelf with drag-out to Explorer, Copy All straight to Ctrl+V, and missing-file badges",
          "Alt+Space opens the panel to whatever the pill shows, and the pill hides itself in fullscreen",
          "Countdown that chimes and sends a Windows notification while the pill is hidden",
          "30/30 real-app verification checks; ~90 MB memory and zero network sockets",
        ],
        status: "Shipped v0.1.1 with a one-click installer; the browser demo runs the real renderer.",
      },
    },
    {
      title: "Grocer",
      slug: "grocer",
      year: "'26",
      icon: "tote",
      oneLiner: "Text your grocery list on WhatsApp; Grocer checks live Swiggy Instamart stock, swaps what's missing, and waits for your tap before ordering.",
      liveUrl: "https://grocerr.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Grocer",
      stack: ["Python", "FastAPI", "Swiggy Instamart MCP", "WhatsApp API", "Next.js 16"],
      schemaCategory: "BusinessApplication",
      schemaPlatform: "Web",
      specs: {
        problem: "Quick-commerce carts break when items go out of stock or pack sizes change, and starting over is the only fix the apps give you.",
        architecture: "WhatsApp Cloud API feeds a FastAPI capability router; Python owns money, stock math, and checkout locks against live Swiggy Instamart via MCP, while the LLM only handles language.",
        highlights: [
          "Safety classes on every message: a read path can never reach a write path",
          "3-lock checkout: physical WhatsApp button tap only, live cart re-verification, exactly-once database guard",
          "₹1,000 cart cap, and coupons applied only when the payable total goes down",
          "Out-of-stock items reported honestly with valid swaps, never silently dropped",
          "Addresses and basket snapshots deleted after 24 hours for DPDP compliance",
        ],
        status: "293 tests (191 offline, 82 database, 20 live) and a 40/40 router eval with zero unsafe writes. Checkout is built but never live-tested — no order has been placed. Independent project, not affiliated with Swiggy.",
      },
    },
    {
      title: "Git for Prompts",
      slug: "git-for-prompts",
      year: "'26",
      icon: "prompt",
      oneLiner: "A local-first package manager for AI prompts: version, diff, and eval them offline in your terminal, then sync to a cloud studio.",
      liveUrl: "https://gitforprompts.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Git-for-Prompts",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Monaco Editor", "PostgreSQL", "Tailwind CSS"],
      schemaCategory: "DeveloperApplication",
      schemaPlatform: "Web",
      specs: {
        problem: "Prompts live in messy text files, so versions get lost, edits break outputs unseen, and token costs spike without anyone noticing.",
        architecture: "A pnpm monorepo: a CLI on in-process WebAssembly SQLite works fully offline; a Next.js and PostgreSQL studio syncs snapshots behind transaction-level advisory locks.",
        highlights: [
          "Immutable versions track templates, variables, model params, tools, and output schemas",
          "Monaco side-by-side diffs with word, variable, and model config changes",
          "Batch regression evals across Groq, OpenRouter, OpenAI, Anthropic, and Ollama",
          "API keys stored as one-way SHA-256 hashes, HMAC-signed webhooks, and an MCP manifest for Claude Desktop and Cursor",
        ],
        status: "v1.0.0 under MIT; real-PostgreSQL integration tests with zero internal mocks.",
      },
    },
    {
      title: "Outpost",
      slug: "outpost",
      year: "'26",
      icon: "box",
      oneLiner: "A replenishment decision engine for quick-commerce dark stores: forecasts stockouts, proposes transfers and reorders, and waits for human sign-off.",
      githubUrl: "https://github.com/kwakhare5/Outpost",
      stack: ["Python", "FastAPI", "LangGraph", "Next.js 16", "TypeScript", "SQLite"],
      schemaCategory: "BusinessApplication",
      schemaPlatform: "Web",
      specs: {
        problem: "Dark stores lose margin to stockouts and expiry write-offs, and sales logs hide true demand — a stocked-out SKU records zero sales.",
        architecture: "A FastAPI core and a deterministic 5-node LangGraph DAG with Holt Linear forecasting over a physical FIFO batch ledger across 3 Mumbai nodes; the same seed replays identically, and every high-consequence action waits for human approval.",
        highlights: [
          "Unconstrained demand accounting: requested = fulfilled + lost, so censored demand never becomes fake revenue",
          "Conservation of mass: destination stock credits only after dock-door crate counts, with road transit ETAs",
          "Donor safety-buffer proof before any lateral transfer; stale approvals rejected server-side with 409",
          "109 passing tests; WAPE and MAE reported on a 3-day holdout",
        ],
        status: "Live operations console on a deterministic simulator stated upfront — not a live dark store network.",
      },
    },
  ],

  coreStack: [
    {
      category: "Languages & Frameworks",
      icon: "code",
      items: ["TypeScript", "Python", "Next.js 16", "React 19", "FastAPI", "Node.js"],
    },
    {
      category: "AI, Agents & Workflows",
      icon: "sparkle",
      items: ["Groq LLMs", "Cloudflare Workers", "Ollama", "LangGraph", "Agents SDK"],
    },
    {
      category: "Infrastructure & Dev Tools",
      icon: "gear",
      items: ["Git", "PostgreSQL", "Supabase", "Drizzle ORM", "Docker", "Tailwind CSS v4"],
    },
  ],

  photos: [
    {
      url: "/photos/burj-khalifa-clouds.jpg",
      caption: "downtown, dubai",
    },
    {
      url: "/photos/supertree-grove-gardens-by-the-bay.jpg",
      caption: "gardens by the bay",
    },
    {
      url: "/photos/sheikh-zayed-grand-mosque.jpg",
      caption: "grand mosque, abu dhabi",
    },
    {
      url: "/photos/marina-barrage-singapore.jpg",
      caption: "marina barrage park",
    },
    {
      url: "/photos/burj-al-arab-gulf.jpg",
      caption: "arabian gulf",
    },
    {
      url: "/photos/founders-memorial-abu-dhabi.jpg",
      caption: "the constellation, abu dhabi",
    },
    {
      url: "/photos/dubai-marina-golden-hour.jpg",
      caption: "dubai marina",
    },
    {
      url: "/photos/pawna-lake-sunset.jpg",
      caption: "pawna lake sunset",
    },
    {
      url: "/photos/burj-khalifa-night.jpg",
      caption: "burj khalifa at night",
    },
    {
      url: "/photos/dubai-at-the-top.jpg",
      caption: "dubai from 148th floor",
    },
    {
      url: "/photos/dubai-skyline-mist.jpg",
      caption: "dubai skyline in mist",
    },
    {
      url: "/photos/sentosa-beach-singapore.jpg",
      caption: "sentosa island, singapore",
    },
    {
      url: "/photos/singapore-flyer-marina-bay.jpg",
      caption: "singapore skyline",
    },
    {
      url: "/photos/lake-pichola-udaipur.jpg",
      caption: "lake pichola, udaipur",
    },
  ],

  contact: {
    socials: [
      {
        name: "X",
        url: "https://x.com/kwakhare5",
        label: "x",
      },
      {
        name: "GitHub",
        url: "https://github.com/kwakhare5",
        label: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karanwakhare",
        label: "linkedin",
      },
      {
        name: "Email",
        url: "mailto:kwakhare5@gmail.com",
        label: "email",
      },
    ],
  },
};

export const ROLE = "AI Engineer & Full-Stack Developer";
export const SITE_NAME = `${DATA.name} Portfolio`;
export const SITE_TITLE = `${DATA.name} | ${ROLE}`;
export const SITE_DESCRIPTION = DATA.description;
