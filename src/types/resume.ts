export type AccentColor = "emerald" | "amber" | "blue" | "neutral";

export interface ProjectTech {
  readonly name: string;
  readonly type?: AccentColor;
}

export interface ProjectSpecs {
  readonly problem: string;
  readonly architecture: string;
  readonly highlights: readonly string[];
}

export interface ProjectSpec {
  readonly title: string;
  readonly year: string;
  readonly accent?: AccentColor;
  readonly oneLiner: string;
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly stack: readonly ProjectTech[];
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
  readonly accent?: "emerald" | "blue" | "amber";
}

export interface StatusLink {
  readonly label: string;
  readonly url?: string;
  readonly accent?: "emerald" | "blue" | "amber";
  readonly separator?: string;
}

export interface StatusItem {
  readonly prefix: string;
  readonly links?: readonly StatusLink[];
  readonly suffix?: string;
}

export interface StatusTimeline {
  readonly currently: readonly StatusItem[];
  readonly previously: readonly StatusItem[];
}

export interface ResumeData {
  readonly name: string;
  readonly url: string;
  readonly location: string;
  readonly role: string;
  readonly description: string;
  readonly manifesto?: readonly (string | React.ReactNode)[];
  readonly avatarUrl: string;
  readonly status: StatusTimeline;
  readonly featuredProjects: readonly ProjectSpec[];
  readonly coreStack: readonly StackCategory[];
  readonly photos: readonly PhotoItem[];
  readonly contact: {
    readonly email: string;
    readonly socials: readonly SocialItem[];
  };
}
