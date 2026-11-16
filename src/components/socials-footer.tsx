import React from "react";
import { DATA } from "@/data/resume";
import {
  SketchX,
  SketchGithub,
  SketchLinkedin,
  SketchMail,
} from "@/components/stationery-icons";

interface SocialMeta {
  readonly icon: React.ReactNode;
  readonly colorClass: string;
}

const SOCIAL_MAP: Record<string, SocialMeta> = {
  X: {
    icon: <SketchX className="size-3.5 shrink-0" />,
    colorClass: "text-[var(--notion-green-text)]",
  },
  GitHub: {
    icon: <SketchGithub className="size-3.5 shrink-0" />,
    colorClass: "text-[var(--notion-blue-text)]",
  },
  LinkedIn: {
    icon: <SketchLinkedin className="size-3.5 shrink-0" />,
    colorClass: "text-[var(--notion-blue-text)]",
  },
  Email: {
    icon: <SketchMail className="size-3.5 shrink-0" />,
    colorClass: "text-[var(--notion-amber-text)]",
  },
};

export function SocialsFooter() {
  const { contact } = DATA;

  return (
    <footer id="socials" className="pt-6 border-t border-border">
      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-3 text-xs sm:text-sm font-mono text-muted-foreground">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-foreground font-medium">find me on</span>
          <span className="text-muted-foreground/60 select-none">—</span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {contact.socials.map((social, idx) => {
              const meta = SOCIAL_MAP[social.name] ?? {
                icon: null,
                colorClass: "text-foreground",
              };

              return (
                <React.Fragment key={social.name}>
                  {idx > 0 && <span className="text-muted-foreground/40 select-none">·</span>}
                  <a
                    href={social.url}
                    {...(social.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`inline-flex items-center gap-1 font-medium ${meta.colorClass} hover:underline underline-offset-4 transition-colors`}
                  >
                    {meta.icon}
                    <span>{social.label}</span>
                  </a>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <span className="text-xs text-muted-foreground/60 select-none font-mono">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
