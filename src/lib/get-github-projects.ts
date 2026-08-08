import { DATA } from "@/data/resume";
import React from "react";

export interface ProjectLink {
  readonly type: string;
  readonly href: string;
  readonly icon?: React.ReactNode;
}

export interface Project {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  readonly dates: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly video: string;
  readonly links: readonly ProjectLink[];
}

export interface GithubData {
  readonly projects: readonly Project[];
  readonly skills: readonly string[];
}

interface GithubRepo {
  readonly name: string;
  readonly fork: boolean;
  readonly topics?: readonly string[];
  readonly language?: string | null;
  readonly homepage?: string | null;
  readonly html_url: string;
  readonly stargazers_count: number;
  readonly pushed_at?: string;
  readonly updated_at?: string;
  readonly description?: string | null;
}

const LANGUAGE_SKILL_MAP: Record<string, string> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  python: "Python",
  java: "Java",
  html: "HTML5",
  css: "CSS3",
};

const TOPIC_SKILL_MAP: Record<string, string> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  js: "JavaScript",
  python: "Python",
  java: "Java",
  react: "React",
  reactjs: "React",
  react19: "React",
  nextjs: "Next.js",
  "next.js": "Next.js",
  node: "Node.js",
  nodejs: "Node.js",
  "node.js": "Node.js",
  postgresql: "PostgreSQL",
  postgres: "PostgreSQL",
  docker: "Docker",
  git: "Git",
  html: "HTML5",
  html5: "HTML5",
  css: "CSS3",
  css3: "CSS3",
  tailwind: "Tailwind CSS",
  tailwindcss: "Tailwind CSS",
  "framer-motion": "Framer Motion",
  framermotion: "Framer Motion",
  supabase: "Supabase",
  fastapi: "FastAPI",
  vite: "Vite",
};

const SKILL_PRIORITY: readonly string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Python",
  "FastAPI",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Git",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vite",
  "Supabase",
  "Java",
];

const ALLOWED_PROJECTS = ["git-for-prompts", "tonal", "prefill"];

function extractSkillsFromRepo(repo: GithubRepo, skillSet: Set<string>): void {
  if (repo.language) {
    const matched = LANGUAGE_SKILL_MAP[repo.language.toLowerCase()];
    if (matched) skillSet.add(matched);
  }

  if (repo.topics) {
    repo.topics.forEach((topic) => {
      const matched = TOPIC_SKILL_MAP[topic.toLowerCase()];
      if (matched) skillSet.add(matched);
    });
  }
}

function formatTitle(name: string): string {
  return name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function sortSkills(skillSet: Set<string>): string[] {
  const allSkills = new Set([...SKILL_PRIORITY, ...skillSet]);
  return Array.from(allSkills).sort((a, b) => {
    const indexA = SKILL_PRIORITY.indexOf(a);
    const indexB = SKILL_PRIORITY.indexOf(b);
    const valA = indexA === -1 ? 999 : indexA;
    const valB = indexB === -1 ? 999 : indexB;
    return valA - valB;
  });
}

export async function getGithubData(): Promise<GithubData> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const endpoint = token
      ? "https://api.github.com/user/repos?per_page=100&sort=pushed&direction=desc&visibility=all"
      : "https://api.github.com/users/kwakhare5/repos?per_page=100&sort=pushed&direction=desc";

    const headers: Record<string, string> = {
      "User-Agent": "kwakhare5-portfolio",
      Accept: "application/vnd.github.v3+json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    let res = await fetch(endpoint, {
      headers,
      next: { revalidate: 600 },
    });

    // Self-healing: if token is invalid or expired (401/403), fallback to public request without token
    if (!res.ok && token && (res.status === 401 || res.status === 403)) {
      console.warn(`GitHub token is invalid or expired (status ${res.status}). Retrying using public user API...`);
      const publicEndpoint = "https://api.github.com/users/kwakhare5/repos?per_page=100&sort=pushed&direction=desc";
      const publicHeaders = { ...headers };
      delete publicHeaders["Authorization"];

      res = await fetch(publicEndpoint, {
        headers: publicHeaders,
        next: { revalidate: 600 },
      });
    }

    if (!res.ok) {
      throw new Error(`GitHub API returned status ${res.status}`);
    }

    const repos = (await res.json()) as readonly GithubRepo[];
    if (!Array.isArray(repos)) {
      throw new Error("Invalid response format from GitHub API");
    }

    // Filter out forks and include strictly allowed showcase projects
    const ownRepos = repos.filter((repo) => {
      if (repo.fork) return false;
      const lowerName = repo.name.toLowerCase();
      return ALLOWED_PROJECTS.some((allowed) => lowerName.includes(allowed));
    });

    const sortedRepos = [...ownRepos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    const skillSet = new Set<string>();

    const projects: Project[] = sortedRepos.map((repo) => {
      const title = formatTitle(repo.name);
      const technologies = repo.topics && repo.topics.length > 0
        ? repo.topics
        : (repo.language ? [repo.language] : []);

      extractSkillsFromRepo(repo, skillSet);

      const fallbackLinks: ProjectLink[] = [];
      if (repo.homepage) {
        fallbackLinks.push({ type: "Live", href: repo.homepage });
      }
      fallbackLinks.push({ type: "GitHub", href: repo.html_url });

      // Match against static DATA project to preserve videos, images, and custom metadata
      const staticProj = DATA.projects.find((p) => {
        const pHref = p.href.toLowerCase();
        const repoHref = repo.html_url.toLowerCase();
        const homepage = (repo.homepage || "").toLowerCase();
        const pTitle = p.title.toLowerCase();
        const rTitle = title.toLowerCase();
        return (
          pHref === repoHref ||
          (homepage && pHref === homepage) ||
          pHref.includes(repo.name.toLowerCase()) ||
          pTitle === rTitle ||
          pTitle.includes(rTitle) ||
          rTitle.includes(pTitle)
        );
      });

      const projectLinks = staticProj ? [...staticProj.links] : [...fallbackLinks];
      if (repo.homepage) {
        const hasLive = projectLinks.some(
          (l) => l.type.toLowerCase() === "live" || l.type.toLowerCase() === "website"
        );
        if (!hasLive) {
          projectLinks.push({ type: "Live", href: repo.homepage });
        }
      }

      return {
        title: staticProj ? staticProj.title : title,
        href: staticProj ? staticProj.href : (repo.homepage || repo.html_url),
        description: repo.description || (staticProj ? staticProj.description : ""),
        dates: staticProj ? staticProj.dates : new Date(repo.pushed_at || repo.updated_at || Date.now()).getFullYear().toString(),
        technologies: (technologies && technologies.length > 0) ? technologies : (staticProj ? staticProj.technologies : []),
        image: staticProj ? staticProj.image : "",
        video: staticProj ? staticProj.video : "",
        links: projectLinks,
      };
    });

    const skills = sortSkills(skillSet);

    return { projects, skills };
  } catch (error) {
    // Fallback to static portfolio dataset on network failure or rate limit
    return {
      projects: DATA.projects as unknown as Project[],
      skills: DATA.skills.map((s) => s.name),
    };
  }
}

