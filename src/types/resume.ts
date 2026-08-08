export type SkillName =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "FastAPI"
  | "Tailwind CSS"
  | "HTML5"
  | "CSS3"
  | "Node.js"
  | "PostgreSQL"
  | "Supabase"
  | "Docker"
  | "Git"
  | "Vite"
  | "Java"
  | "Framer Motion";

export type SocialName = "GitHub" | "LinkedIn" | "X" | "Email" | "Resume";

export interface Education {
  readonly school: string;
  readonly href: string;
  readonly degree: string;
  readonly logoUrl: string;
  readonly start: string;
  readonly end: string;
}

export interface WorkExperience {
  readonly company: string;
  readonly href: string;
  readonly badges: readonly string[];
  readonly location: string;
  readonly title: string;
  readonly logoUrl: string;
  readonly start: string;
  readonly end: string;
  readonly description: string;
}

export interface HackathonLink {
  readonly iconName?: SocialName | string;
  readonly icon?: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly href: string;
}

export interface Hackathon {
  readonly title: string;
  readonly dates: string;
  readonly location: string;
  readonly description: string;
  readonly image: string;
  readonly links: readonly HackathonLink[];
}

export interface ProjectLink {
  readonly type: string;
  readonly href: string;
  readonly iconName?: SocialName | string;
  readonly icon?: React.ComponentType<{ className?: string }>;
}

export interface ProjectData {
  readonly title: string;
  readonly href: string;
  readonly dates: string;
  readonly active: boolean;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly image?: string;
  readonly video?: string;
}

export interface SkillItem {
  readonly name: SkillName;
  readonly iconName?: SkillName;
  readonly icon?: React.ComponentType<{ className?: string }>;
}

export interface SocialItem {
  readonly name: string;
  readonly url: string;
  readonly iconName?: SocialName;
  readonly icon?: React.ComponentType<{ className?: string }>;
  readonly navbar?: boolean;
}

export interface ResumeData {
  readonly name: string;
  readonly initials: string;
  readonly url: string;
  readonly location: string;
  readonly description: string;
  readonly summary: string;
  readonly avatarUrl: string;
  readonly bannerUrls: readonly string[];
  readonly skills: readonly SkillItem[];
  readonly contact: {
    readonly email: string;
    readonly social: Record<string, SocialItem>;
  };
  readonly work: readonly WorkExperience[];
  readonly education: readonly Education[];
  readonly projects: readonly ProjectData[];
  readonly hackathons: readonly Hackathon[];
}
