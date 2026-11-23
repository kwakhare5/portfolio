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
    "Karan Wakhare is an AI engineer and full stack developer in Pune. He builds AI products and web apps. His work includes a WhatsApp grocery assistant and a tool for saving and comparing AI prompts.",
  bio: [
    "i'm a computer engineering student in Pune. i build AI products and full-stack apps with TypeScript and Python.",
    "Grocer is my WhatsApp grocery assistant. i'm part of the Swiggy Builder Club for it.",
    "i take photos when i travel.",
  ],
  avatarUrl: "/me.png",

  featuredProjects: [
    {
      title: "Beam",
      slug: "beam",
      icon: "sound",
      oneLiner: "A small pill above your Windows 11 taskbar for music, files, timers, and your calendar. It works offline, with no account.",
      liveUrl: "https://beamm.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/beam",
      stack: ["TypeScript", "Electron", "Vite", ".NET", "Windows SMTC"],
      schemaCategory: "UtilitiesApplication",
      schemaPlatform: "Windows 11",
      specs: {
        problem: "Windows 11 keeps media controls, timers, and quick file drops in different places. Reaching them breaks what you are doing.",
        architecture: "A small app sits above the taskbar and shows what is playing in Windows. It remembers where you put it, and a hotkey opens it. It never connects to the internet.",
        highlights: [
          "Play, pause, skip, and switch players without leaving your work.",
          "Drag files out to Explorer, or copy them all with one click.",
          "Press Alt+Space to open the panel. The pill hides itself in fullscreen.",
          "A timer chimes and sends a Windows notification while the pill is hidden.",
          "30 checks on the real app, about 90 MB of memory, and no network calls.",
        ],
        status: "v0.1.1 is out with a one-click installer. The browser demo runs the real app.",
      },
    },
    {
      title: "Grocer",
      slug: "grocer",
      icon: "tote",
      oneLiner: "Send Grocer your grocery list on WhatsApp. It checks live Instamart stock, suggests swaps for anything missing, and waits for your tap before ordering.",
      liveUrl: "https://grocerr.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Grocer",
      stack: ["Python", "FastAPI", "Swiggy Instamart MCP", "WhatsApp API", "Next.js 16"],
      schemaCategory: "BusinessApplication",
      schemaPlatform: "Web",
      specs: {
        problem: "Grocery apps make you start over when one item is out of stock or a pack size changes. Fixing one item should not mean rebuilding the cart.",
        architecture: "WhatsApp passes your message to a Python server. The server checks stock, prices, and checkout with live Instamart data. The AI only reads the message. Nothing is ordered until you tap the WhatsApp button.",
        highlights: [
          "Checks live stock and prices before it asks you to confirm.",
          "Suggests a real replacement when an item is out of stock.",
          "One WhatsApp tap approves the order. Nothing is ordered without it.",
          "Caps the cart at ₹1,000, and applies a coupon only if the total drops.",
          "Deletes addresses and basket data after 24 hours.",
        ],
        status: "293 tests pass. Checkout is built, but I have not placed a real order yet.",
      },
    },
    {
      title: "Git for Prompts",
      slug: "git-for-prompts",
      icon: "prompt",
      oneLiner: "Save every version of an AI prompt, compare changes, and test old versions offline from your terminal.",
      liveUrl: "https://gitforprompts.vercel.app/",
      githubUrl: "https://github.com/kwakhare5/Git-for-Prompts",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Monaco Editor", "PostgreSQL", "Tailwind CSS"],
      schemaCategory: "DeveloperApplication",
      schemaPlatform: "Web",
      specs: {
        problem: "Prompts live in loose text files. Old versions get lost, small edits can break the output, and the cost creeps up without anyone noticing.",
        architecture: "The command-line tool uses a local database, so it works offline. A web studio syncs your versions to Postgres when you want to share them.",
        highlights: [
          "Each version keeps its template, variables, model settings, tools, and expected output.",
          "Compare two versions side by side and see exactly what changed.",
          "Run a batch of test prompts across Groq, OpenAI, Anthropic, and Ollama.",
          "API keys are stored as one-way hashes, webhooks are signed, and Claude Desktop and Cursor can connect through MCP.",
        ],
        status: "v1.0.0, MIT licensed. The tests run against a real Postgres database.",
      },
    },
    {
      title: "Outpost",
      slug: "outpost",
      icon: "box",
      oneLiner: "A planning tool for stores that deliver groceries in minutes. It spots likely stockouts and suggests stock moves or reorders. A person approves each one.",
      githubUrl: "https://github.com/kwakhare5/Outpost",
      stack: ["Python", "FastAPI", "LangGraph", "Next.js 16", "TypeScript", "SQLite"],
      schemaCategory: "BusinessApplication",
      schemaPlatform: "Web",
      specs: {
        problem: "These stores lose money when popular items run out or stock expires. Sales logs hide it because a sold-out item records zero sales.",
        architecture: "A Python server reads stock and sales and plans the next few days. It uses sample data from three Mumbai stores, so the same data always gives the same plan. Anything risky waits for a person to approve it.",
        highlights: [
          "Counts lost sales, not just fulfilled ones, so demand is not hidden.",
          "Moves stock only after the crates are counted at the dock.",
          "Checks that the sending store still has enough stock before a transfer.",
          "Rejects an approval if the stock changed after the plan was made.",
          "109 tests pass. Forecasts are checked against three days of held-back data.",
        ],
        status: "The live console uses sample data, not a real store network.",
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
      caption: "gardens by the bay, singapore",
    },
    {
      url: "/photos/sheikh-zayed-grand-mosque.jpg",
      caption: "grand mosque, abu dhabi",
    },
    {
      url: "/photos/marina-barrage-singapore.jpg",
      caption: "marina barrage, singapore",
    },
    {
      url: "/photos/burj-al-arab-gulf.jpg",
      caption: "arabian gulf, dubai",
    },
    {
      url: "/photos/founders-memorial-abu-dhabi.jpg",
      caption: "founders memorial, abu dhabi",
    },
    {
      url: "/photos/dubai-marina-golden-hour.jpg",
      caption: "dubai marina",
    },
    {
      url: "/photos/pawna-lake-sunset.jpg",
      caption: "pawna lake, lonavala",
    },
    {
      url: "/photos/burj-khalifa-night.jpg",
      caption: "burj khalifa at night, dubai",
    },
    {
      url: "/photos/dubai-at-the-top.jpg",
      caption: "at the top, dubai",
    },
    {
      url: "/photos/dubai-skyline-mist.jpg",
      caption: "dubai skyline",
    },
    {
      url: "/photos/sentosa-beach-singapore.jpg",
      caption: "sentosa island, singapore",
    },
    {
      url: "/photos/singapore-flyer-marina-bay.jpg",
      caption: "singapore flyer, singapore",
    },
    {
      url: "/photos/lake-pichola-udaipur.jpg",
      caption: "lake pichola, udaipur",
    },
  ],

  contact: {
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/kwakhare5",
      },
      {
        name: "X",
        url: "https://x.com/kwakhare5",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karanwakhare",
      },
      {
        name: "Email",
        url: "mailto:kwakhare5@gmail.com",
      },
    ],
  },
};

export const ROLE = "AI Engineer & Full Stack Developer";
export const SITE_NAME = `${DATA.name} Portfolio`;
export const SITE_TITLE = `${DATA.name} | ${ROLE}`;
export const SITE_DESCRIPTION = DATA.description;
