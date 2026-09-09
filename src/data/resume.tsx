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
      title: "Grocer",
      year: "'26",
      accent: "emerald",
      oneLiner: "WhatsApp grocery assistant that verifies your order against live Swiggy Instamart inventory and auto-fixes out-of-stock items.",
      liveUrl: "https://grocerr.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Grocer",
      stack: [
        { name: "Python", type: "amber" },
        { name: "FastAPI", type: "amber" },
        { name: "Swiggy Instamart MCP", type: "emerald" },
        { name: "WhatsApp API", type: "emerald" },
        { name: "Next.js 16", type: "blue" },
      ],
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
      title: "Git for Prompts",
      year: "'26",
      accent: "blue",
      oneLiner: "Git-style version control for AI prompts with commit histories, token diffing, and multi-model evals.",
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
      title: "IndieForest",
      year: "'26",
      accent: "emerald",
      oneLiner: "Interactive 3D isometric island that turns your daily GitHub commits and Stripe revenue into growing digital forests.",
      liveUrl: "https://indieforest.vercel.app",
      githubUrl: "https://github.com/kwakhare5/IndieForest",
      stack: [
        { name: "Next.js 16", type: "blue" },
        { name: "React Three Fiber", type: "amber" },
        { name: "Three.js", type: "amber" },
        { name: "Supabase", type: "emerald" },
        { name: "TypeScript", type: "blue" },
        { name: "Tailwind CSS v4", type: "neutral" },
      ],
      specs: {
        problem: "Building side projects alone can feel lonely and unrewarding without a visual way to track consistency.",
        architecture: "A Next.js and Three.js diorama that syncs with GitHub commits to grow pine trees and Stripe webhooks to grow golden oaks on an expanding isometric island.",
        highlights: [
          "Living 3D WebGL diorama built with React Three Fiber and low-poly procedural assets",
          "Dual-grove engine growing code trees from commits and gold trees from Stripe sales",
          "Burnout protection shields and dynamic SVG badges for GitHub profile READMEs",
        ],
      },
    },
    {
      title: "Tonal",
      year: "'26",
      accent: "amber",
      oneLiner: "Chrome extension that rewrites rough drafts into clear Slack, Gmail, and LinkedIn messages in under 200ms.",
      liveUrl: "https://tonall.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/tonal",
      stack: [
        { name: "Groq LLMs", type: "amber" },
        { name: "Cloudflare Workers", type: "amber" },
        { name: "TypeScript", type: "blue" },
        { name: "Next.js", type: "blue" },
        { name: "Chrome Extension", type: "emerald" },
      ],
      specs: {
        problem: "Drafting emails and workplace chat messages often sounds stiff, wordy, or blunt, causing unnecessary back-and-forth.",
        architecture: "A Chrome extension using Shadow DOM for style isolation that streams text to Groq LLMs on Cloudflare Workers, replacing words directly in your text box without leaking API keys.",
        highlights: [
          "Sub-200ms edge inference powered by Groq LPUs on Cloudflare Workers",
          "Shadow DOM encapsulation preventing style collisions in Gmail, Slack, and LinkedIn",
          "Offline tone engine with 30+ fallback rules that work even without an internet connection",
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
