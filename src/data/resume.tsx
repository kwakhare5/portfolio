import { Css3, Docker, FastAPI, FramerMotion, Git, Html5, Java, Javascript, NextjsIconDark, Nodejs, Postgresql, Python, ReactLight, Supabase, Tailwind, Typescript, Vite } from '@/components/ui/skill-icons';

export const DATA = {
  name: "Karan Wakhare",
  initials: "KW",
  url: "https://karan30.vercel.app",
  location: "Pune, Maharashtra",

  description:
    "figuring out",
  summary:
    "I am a **Full-Stack AI Developer** focused on building end-to-end AI agent systems and high-fidelity user experiences. I design interactive web applications using **React**, **Next.js**, **TypeScript**, and **Python**.",

  avatarUrl: "/me.webp",
  bannerUrls: ["/sg.webp"],
  skills: [
    { name: "CSS3", icon: Css3 },
    { name: "Docker", icon: Docker },
    { name: "FastAPI", icon: FastAPI },
    { name: "Framer Motion", icon: FramerMotion },
    { name: "Git", icon: Git },
    { name: "HTML5", icon: Html5 },
    { name: "Java", icon: Java },
    { name: "JavaScript", icon: Javascript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Supabase", icon: Supabase },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "TypeScript", icon: Typescript },
    { name: "Vite", icon: Vite }
  ],

  contact: {
    email: "kwakhare5@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kwakhare5",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karanwakhare",
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/kwakhare5",
        navbar: false,
      },

      email: {
        name: "Send Email",
        url: "mailto:kwakhare5@gmail.com",
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Ateion",
      href: "#",
      badges: [],
      location: "Pune, Maharashtra",
      title: "Application Developer Intern",
      logoUrl: "/ateion.png",
      start: "Feb 2026",
      end: "June 2026",
      description:
        "- Engineered scalable web applications utilizing the MERN stack (**React.js, Node.js, Express.js, MongoDB**), integrating robust **RESTful APIs** to enable dynamic data handling and seamless frontend-backend communication.\n- Designed and implemented responsive, high-fidelity user interfaces, focusing on accessibility, usability, and frontend performance optimization to improve page loading speeds.\n- Led a development team to build production-ready client applications, managing task distribution, **Git version control**, debugging, testing, and deployment workflows to guarantee timely delivery.",
    }
  ],
  education: [
    {
      school: "Ajeenkya DY Patil College",
      href: "#",
      degree: "Bachelor of Engineering (Computer Engineering)",
      logoUrl: "/adypu.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Pace Junior Science College",
      href: "#",
      degree: "High School (11-12)",
      logoUrl: "/pace.png",
      start: "May 2021",
      end: "Mar 2023",
    },
    {
      school: "Wisdom High International School - India",
      href: "#",
      degree: "Cambridge IGCSE (CAIE) • Grade: 7th - 10th",
      logoUrl: "/wisdom.png",
      start: "May 2017",
      end: "Mar 2021",
    }
  ],
  projects: [
    {
      title: "Git for Prompts",
      href: "https://github.com/kwakhare5/git-for-prompts",
      dates: "2025",
      active: true,
      description:
        "A version control system specifically designed for LLM prompts. Track prompt iterations, diff responses, run automated evaluations, and collaborate on prompt engineering workflows seamlessly.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kwakhare5/git-for-prompts",
        },
      ],
      image: "/git-for-prompts.png",
      video: "",
    },
    {
      title: "Tonal",
      href: "https://github.com/kwakhare5/tonal",
      dates: "2025",
      active: true,
      description:
        "An AI-powered audio generation and voice synthesis platform. Features real-time voice cloning, custom text-to-speech pipelines, and multi-track audio editing for content creators.",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "PyTorch",
        "Tailwind CSS",
        "Web Audio API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kwakhare5/tonal",
        },
      ],
      image: "/tonal.png",
      video: "",
    },
    {
      title: "PreFill",
      href: "https://github.com/kwakhare5/prefill",
      dates: "2024",
      active: true,
      description:
        "Smart form auto-filler extension powered by local LLMs. Learns user context securely on-device to intelligently complete complex web forms, job applications, and survey responses.",
      technologies: [
        "TypeScript",
        "React",
        "WebExtension API",
        "Ollama",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kwakhare5/prefill",
        },
      ],
      image: "/prefill.png",
      video: "",
    },
  ],
  hackathons: [],
};
