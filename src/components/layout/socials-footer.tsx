import React from "react";
import { DATA } from "@/data/resume";

export function SocialsFooter({ id = "socials" }: { id?: string }) {
  const { contact } = DATA;

  return (
    <footer id={id} className="pt-4 border-t border-border">
      <div className="flex flex-wrap items-center gap-y-2 gap-x-2.5 text-xs sm:text-sm font-mono text-muted-foreground">
        <span className="text-foreground font-medium">find me on</span>
        <span className="text-muted-foreground hidden sm:inline">-</span>
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5">
          {contact.socials.map((social, idx) => {
            const hoverColor =
              social.accent === "emerald"
                ? "hover:text-emerald-500 dark:hover:text-emerald-400"
                : social.accent === "amber"
                  ? "hover:text-amber-500 dark:hover:text-amber-400"
                  : "hover:text-blue-500 dark:hover:text-blue-400";
            return (
              <React.Fragment key={social.name}>
                {idx > 0 && <span className="text-muted-foreground">/</span>}
                <a
                  href={social.url}
                  {...(social.url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`editorial-link text-foreground ${hoverColor}`}
                >
                  {social.label}
                </a>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
