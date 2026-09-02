import type { ResumeData } from "@/types/resume";

export const DATA: ResumeData = {
  name: "Karan Wakhare",
  url: "https://karan30.vercel.app",
  location: "Pune, Maharashtra",
  role: "Full Stack Developer & Indie Builder",
  description:
    "I build developer tools and web apps.",
  manifesto: [
    "exploring AI and building fast, minimal tools",
    (
      <span key="x-link">
        shipping side projects and building in public on{" "}
        <a
          href="https://x.com/kwakhare5"
          target="_blank"
          rel="noopener noreferrer"
          className="editorial-link hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-foreground transition-colors"
        >
          X
        </a>
      </span>
    ),
  ],
  avatarUrl: "/me.png",

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
          { label: "indieforest", url: "https://indieforest.vercel.app", accent: "emerald" },
          { label: "git for prompts", url: "https://gitforprompts.vercel.app/", accent: "emerald" },
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
      title: "IndieForest",
      year: "'26",
      accent: "emerald",
      oneLiner: "Visual shipping streak tracker that grows living digital trees as you push commits to GitHub.",
      liveUrl: "https://indieforest.vercel.app",
      githubUrl: "https://github.com/kwakhare5/IndieForest",
      stack: [
        { name: "Next.js 16", type: "blue" },
        { name: "React 19", type: "blue" },
        { name: "TypeScript", type: "blue" },
        { name: "Tailwind CSS v4", type: "neutral" },
        { name: "GitHub API", type: "emerald" },
        { name: "Motion", type: "amber" },
      ],
      specs: {
        problem: "Shipping side projects alone gets lonely, making it easy to lose momentum without visual feedback.",
        architecture: "Listens for GitHub push webhooks, calculates active streaks via cached ISR endpoints, and generates dynamic SVG trees without canvas overhead.",
        highlights: [
          "Sub-100ms streak verification via ISR-cached GitHub event ingestion pipeline",
          "Generative SVG tree algorithm with zero canvas dependencies",
          "Automated dynamic OG card generator for 1-click sharing to X",
        ],
      },
    },
    {
      title: "Git for Prompts",
      year: "'26",
      accent: "blue",
      oneLiner: "Version control for LLM prompts with branching and token-by-token diffing.",
      liveUrl: "https://gitforprompts.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Git-for-Prompts",
      stack: [
        { name: "Next.js 16", type: "blue" },
        { name: "TypeScript", type: "blue" },
        { name: "Drizzle ORM", type: "emerald" },
        { name: "Monaco Editor", type: "blue" },
        { name: "PostgreSQL", type: "blue" },
        { name: "Tailwind CSS", type: "neutral" },
      ],
      specs: {
        problem: "Tweaking prompts in pastebins or random notes makes it impossible to trace regressions or compare model costs.",
        architecture: "Git-like commit tree with branching and semantic token diffing across multiple LLM provider completions simultaneously.",
        highlights: [
          "Monaco Editor integration with multi-model prompt branching and syntax highlighting",
          "Parallel model evaluation runner benchmarking latency, token cost, and output consistency",
          "Type-safe PostgreSQL relational schema modeled with Drizzle ORM",
        ],
      },
    },
    {
      title: "Tonal",
      year: "'26",
      accent: "amber",
      oneLiner: "Turns raw message drafts into clear Slack, Gmail, and LinkedIn messages in under 200ms.",
      liveUrl: "https://tonall.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/tonal",
      stack: [
        { name: "Groq LLMs", type: "amber" },
        { name: "Cloudflare Workers", type: "amber" },
        { name: "TypeScript", type: "blue" },
        { name: "Next.js", type: "blue" },
        { name: "WebExtension", type: "emerald" },
      ],
      specs: {
        problem: "Corporate chat often suffers from stiff phrasing, misunderstandings, and dense buzzwords.",
        architecture: "Edge-based low-latency Groq inference runtime on Cloudflare Workers streaming inline tone adjustments directly into webmail and chat clients.",
        highlights: [
          "Sub-200ms real-time tone rewrite engine powered by ultra-low latency Groq LLMs",
          "Zero-footprint Chrome Extension integrating directly into Gmail, Slack, and LinkedIn",
          "Instant corporate jargon decoder that turns bloated office phrases into plain English",
        ],
      },
    },
    {
      title: "Grocer",
      year: "'26",
      accent: "emerald",
      oneLiner: "Tracking grocery consumption and ordering via WhatsApp before you run out.",
      githubUrl: "https://github.com/kwakhare5/Grocer",
      stack: [
        { name: "Python", type: "amber" },
        { name: "FastAPI", type: "amber" },
        { name: "AI Agents", type: "emerald" },
        { name: "WhatsApp API", type: "emerald" },
        { name: "React", type: "blue" },
      ],
      specs: {
        problem: "Manually checking the pantry and re-buying the same weekly groceries across Blinkit, Zepto, and Instamart is tedious.",
        architecture: "Local-first order history vector parsing with an autonomous agent loop predicting depletion cycles and dispatching 1-tap WhatsApp approvals.",
        highlights: [
          "Time-series consumption modeling predicting item exhaustion based on household size",
          "FastAPI async backend handling asynchronous WhatsApp webhook dialogues",
          "Zero-knowledge encrypted local storage for receipt and purchase privacy",
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
      items: ["Groq LLMs", "Cloudflare Workers", "Ollama", "LangGraph", "AI Agents", "Agents SDK"],
    },
    {
      category: "Infrastructure & Dev Tools",
      items: ["Git", "GitHub", "PostgreSQL", "Supabase", "Drizzle ORM", "Docker", "Tailwind CSS v4"],
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
    email: "kwakhare5@gmail.com",
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
