import React from "react";
import type { StatusTimeline as StatusTimelineType } from "@/types/resume";

interface StatusTimelineProps {
  readonly status: StatusTimelineType;
}

export function StatusTimeline({ status }: StatusTimelineProps) {
  const sections = [
    { title: "currently", items: status.currently },
    { title: "previously", items: status.previously },
  ] as const;

  return (
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t border-border">
      {sections.map((section) => (
        <div key={section.title} className="space-y-2.5">
          <h3 className="text-xs sm:text-[13px] font-mono text-muted-foreground lowercase tracking-wide">
            {section.title}
          </h3>
          <ul className="space-y-2.5 text-sm sm:text-base text-foreground font-normal leading-relaxed list-none pl-0">
            {section.items.map((item, idx) => (
              <li key={idx}>
                {item.prefix}
                {item.links?.map((link, linkIdx) => {
                  const hoverClass =
                    link.accent === "blue"
                      ? "hover:text-blue-500 dark:hover:text-blue-400"
                      : link.accent === "amber"
                      ? "hover:text-amber-500 dark:hover:text-amber-400"
                      : "hover:text-emerald-500 dark:hover:text-emerald-400";
                  const separator = link.separator ?? " & ";
                  return (
                    <React.Fragment key={link.label}>
                      {linkIdx > 0 && separator}
                      {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`editorial-link text-foreground ${hoverClass} transition-colors`}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span className="font-medium text-foreground">
                          {link.label}
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
                {item.suffix}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
