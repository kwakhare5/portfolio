import React from "react";
import { DATA } from "@/data/resume";
import {
  SketchX,
  SketchGithub,
  SketchLinkedin,
  SketchMail,
} from "@/components/stationery-icons";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  X: <SketchX className="size-3.5 shrink-0" />,
  GitHub: <SketchGithub className="size-3.5 shrink-0" />,
  LinkedIn: <SketchLinkedin className="size-3.5 shrink-0" />,
  Email: <SketchMail className="size-3.5 shrink-0" />,
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
            {contact.socials.map((social, idx) => (
              <React.Fragment key={social.name}>
                {idx > 0 && <span className="text-muted-foreground/40 select-none">·</span>}
                <a
                  href={social.url}
                  {...(social.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1 font-medium text-foreground hover:underline underline-offset-4 transition-colors"
                >
                  {SOCIAL_ICONS[social.name] ?? null}
                  <span>{social.label}</span>
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <span className="text-xs text-muted-foreground/60 select-none font-mono">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
