export type AccentColor = "emerald" | "amber" | "blue";

export interface ProjectSpecs {
  readonly problem: string;
  readonly architecture: string;
  readonly highlights: readonly string[];
}

export interface ProjectSpec {
  readonly title: string;
  readonly slug: string;
  readonly year: string;
  readonly oneLiner: string;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly stack: readonly string[];
  readonly specs: ProjectSpecs;
}

export interface StackCategory {
  readonly category: string;
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
  readonly accent?: AccentColor;
}

export interface StatusLink {
  readonly label: string;
  readonly url?: string;
  readonly accent?: AccentColor;
  readonly separator?: string;
}

export interface StatusItem {
  readonly prefix: string;
  readonly links?: readonly StatusLink[];
}

export interface StatusTimeline {
  readonly currently: readonly StatusItem[];
  readonly previously: readonly StatusItem[];
}

export interface ResumeData {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly bio: readonly string[];
  readonly avatarUrl: string;
  readonly status: StatusTimeline;
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
    "i'm an ai engineer and full-stack developer studying computer engineering in pune. i build ai tools and apps, from grocery shopping on whatsapp to version control for prompts.",
  ],
  avatarUrl: "/me-avatar.png",

  status: {
    currently: [
      {
        prefix: "building ",
        links: [
          { label: "grocer", url: "https://grocerr.vercel.app/", accent: "emerald" },
          { label: "swiggy builders club", url: "https://mcp.swiggy.com/builders/", accent: "amber", separator: " with " },
        ],
      },
      {
        prefix: "building indie dev tools ",
        links: [
          { label: "outpost", url: "https://dark-store-operator.vercel.app", accent: "emerald" },
          { label: "git for prompts", url: "https://gitforprompts.vercel.app/", accent: "emerald", separator: " & " },
        ],
      },
      {
        prefix: "studying computer engineering @ ",
        links: [
          { label: "adypu", url: "https://adypu.edu.in", accent: "blue" },
        ],
      },
    ],
    previously: [
      {
        prefix: "full-stack developer intern @ ",
        links: [
          { label: "ateion", accent: "emerald" },
        ],
      },
      {
        prefix: "high school education @ ",
        links: [
          { label: "wisdom high", url: "https://www.whis.edu.in/", accent: "blue" },
        ],
      },
    ],
  },

  featuredProjects: [
    {
      title: "Grocer",
      slug: "grocer",
      year: "'26",
      oneLiner: "WhatsApp grocery assistant that verifies your order against live Swiggy Instamart inventory and auto-fixes out-of-stock items.",
      liveUrl: "https://grocerr.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Grocer",
      stack: ["Python", "FastAPI", "Swiggy Instamart MCP", "WhatsApp API", "Next.js 16"],
      specs: {
        problem: "Quick-commerce carts constantly break when items go out of stock or pack sizes change, forcing you to start over.",
        architecture: "A FastAPI backend turns WhatsApp messages into a strict order contract, checks live Swiggy Instamart inventory via MCP, and automatically suggests valid swaps before you confirm checkout.",
        highlights: [
          "Direct Swiggy Instamart cart integration via Model Context Protocol (MCP)",
          "Automatic cart repair that replaces out-of-stock items without breaking dietary rules",
          "Explicit 1-tap WhatsApp checkout confirmation to prevent accidental purchases",
        ],
      },
    },
    {
      title: "Outpost",
      slug: "outpost",
      year: "'26",
      oneLiner: "Inventory replenishment decision engine for quick-commerce dark stores that forecasts stockouts and routes inter-store transfers with human-in-the-loop approval.",
      githubUrl: "https://github.com/kwakhare5/Outpost",
      stack: ["Python", "FastAPI", "LangGraph", "Next.js 16", "TypeScript", "SQLite"],
      specs: {
        problem: "Quick-commerce dark stores lose margin to sudden stockouts during demand surges and perishable food expiry, while blind auto-reorders risk phantom stock or costly emergency courier runs.",
        architecture: "A FastAPI and LangGraph 5-node state machine paired with Holt Linear demand forecasting that tracks physical FIFO inventory batches across 5 Mumbai hubs and proposes transfers or purchase orders behind a human approval gate.",
        highlights: [
          "Holt Linear double exponential smoothing evaluated on a 3-day holdout using WAPE and MAE",
          "Physical FIFO batch ledger enforcing strict conservation of mass and realistic transit ETAs",
          "Level-2 autonomy gate requiring operator sign-off with stale-state detection and idempotency locks",
        ],
      },
    },
    {
      title: "Git for Prompts",
      slug: "git-for-prompts",
      year: "'26",
      oneLiner: "Git-style version control for AI prompts with commit histories, token diffing, and multi-model evals.",
      liveUrl: "https://gitforprompts.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Git-for-Prompts",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Monaco Editor", "PostgreSQL", "Tailwind CSS"],
      specs: {
        problem: "Editing prompts in messy text files leads to broken outputs, lost versions, and unnoticed token cost spikes.",
        architecture: "A Next.js and PostgreSQL platform that stores immutable prompt versions, renders word-by-word diffs in Monaco Editor, and runs automated tests across multiple AI models simultaneously.",
        highlights: [
          "Monaco Editor diff viewer showing exact word and token changes between versions",
          "Automated test runner benchmarking accuracy, latency, and cost across models",
          "Native gfp CLI and webhooks for pulling versioned prompts straight into production code",
        ],
      },
    },
    {
      title: "Beam",
      slug: "beam",
      year: "'26",
      oneLiner: "Offline Windows 11 capsule above your taskbar with live music controls, a file shelf, a countdown, and a calendar.",
      liveUrl: "https://beamm.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/beam",
      stack: ["TypeScript", "Electron", "Vite", ".NET", "Windows SMTC"],
      specs: {
        problem: "Windows 11 scatters media controls, timers, and quick file drops across taskbar flyouts and separate apps.",
        architecture: "An Electron shell renders a 136×42 transparent capsule that reads Windows media sessions through a .NET helper, persists its position, and runs fully offline with no accounts or network calls.",
        highlights: [
          "Live SMTC media controls with seek, artwork, and automatic player switching",
          "Drag-and-drop file shelf with drag-out back to Explorer and a 50-file cap",
          "Countdown that chimes and sends a Windows notification while the pill is hidden",
          "30-check PowerShell suite covering real Explorer drags and helper crash recovery",
        ],
      },
    },
  ],

  coreStack: [
    {
      category: "Languages & Frameworks",
      items: ["TypeScript", "Python", "Next.js 16", "React 19", "FastAPI", "Node.js"],
    },
    {
      category: "AI, Agents & Workflows",
      items: ["Groq LLMs", "Cloudflare Workers", "Ollama", "LangGraph", "Agents SDK"],
    },
    {
      category: "Infrastructure & Dev Tools",
      items: ["Git", "PostgreSQL", "Supabase", "Drizzle ORM", "Docker", "Tailwind CSS v4"],
    },
  ],

  photos: [
    {
      url: "/photos/burj-khalifa-clouds.jpg",
      caption: "// downtown, dubai",
    },
    {
      url: "/photos/supertree-grove-gardens-by-the-bay.jpg",
      caption: "// gardens by the bay",
    },
    {
      url: "/photos/sheikh-zayed-grand-mosque.jpg",
      caption: "// grand mosque, abu dhabi",
    },
    {
      url: "/photos/marina-barrage-singapore.jpg",
      caption: "// marina barrage park",
    },
    {
      url: "/photos/burj-al-arab-gulf.jpg",
      caption: "// arabian gulf",
    },
    {
      url: "/photos/founders-memorial-abu-dhabi.jpg",
      caption: "// the constellation, abu dhabi",
    },
    {
      url: "/photos/dubai-marina-golden-hour.jpg",
      caption: "// dubai marina",
    },
    {
      url: "/photos/pawna-lake-sunset.jpg",
      caption: "// pawna lake sunset",
    },
    {
      url: "/photos/burj-khalifa-night.jpg",
      caption: "// burj khalifa at night",
    },
    {
      url: "/photos/dubai-at-the-top.jpg",
      caption: "// dubai from 148th floor",
    },
    {
      url: "/photos/dubai-skyline-mist.jpg",
      caption: "// dubai skyline in mist",
    },
    {
      url: "/photos/sentosa-beach-singapore.jpg",
      caption: "// sentosa island, singapore",
    },
    {
      url: "/photos/singapore-flyer-marina-bay.jpg",
      caption: "// singapore skyline",
    },
    {
      url: "/photos/lake-pichola-udaipur.jpg",
      caption: "// lake pichola, udaipur",
    },
  ],

  contact: {
    socials: [
      {
        name: "X",
        url: "https://x.com/kwakhare5",
        label: "X",
        accent: "emerald",
      },
      {
        name: "GitHub",
        url: "https://github.com/kwakhare5",
        label: "github",
        accent: "blue",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karanwakhare",
        label: "linkedin",
        accent: "blue",
      },
      {
        name: "Email",
        url: "mailto:kwakhare5@gmail.com",
        label: "kwakhare5@gmail.com",
        accent: "amber",
      },
    ],
  },
};
