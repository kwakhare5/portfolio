import React from "react";
import { DATA } from "@/data/resume";

const ACCENT_CLASS: Record<string, string> = {
  emerald: "notion-green-hover",
  blue:    "notion-blue-hover",
  amber:   "notion-amber-hover",
};

export function SocialsFooter() {
  const { contact } = DATA;

  return (
    <footer id="socials" className="pt-4 border-t border-border">
      <div className="flex flex-wrap items-center gap-y-2 gap-x-2.5 text-xs sm:text-sm font-mono text-muted-foreground">
        <span className="text-foreground font-medium">find me on</span>
        <span className="text-muted-foreground hidden sm:inline">-</span>
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
          {contact.socials.map((social, idx) => (
            <React.Fragment key={social.name}>
              {idx > 0 && <span className="text-muted-foreground">/</span>}
              <a
                href={social.url}
                {...(social.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`editorial-link text-foreground ${ACCENT_CLASS[social.accent ?? "blue"] ?? "notion-blue-hover"}`}
              >
                {social.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
