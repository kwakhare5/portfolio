import React from "react";
import type { StatusTimeline as StatusTimelineType } from "@/types/resume";

interface StatusTimelineProps {
  readonly status: StatusTimelineType;
}

export function StatusTimeline({ status }: StatusTimelineProps) {
  const { currently, previously } = status;

  return (
    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 border-t border-border/40">
      {/* CURRENTLY */}
      <div className="space-y-2.5">
        <h3 className="text-xs sm:text-[13px] font-mono text-muted-foreground/70 lowercase tracking-wide">
          currently
        </h3>
        <ul className="space-y-2.5 text-sm sm:text-base text-foreground/90 font-normal leading-relaxed list-none pl-0">
          {currently.map((item, idx) => (
            <li key={idx}>
              {item.prefix}
              {item.links?.map((link, linkIdx) => {
                const hoverClass =
                  link.accent === "blue"
                    ? "hover:text-blue-600 dark:hover:text-blue-400"
                    : link.accent === "amber"
                    ? "hover:text-amber-600 dark:hover:text-amber-400"
                    : "hover:text-emerald-600 dark:hover:text-emerald-400";
                const separator = link.separator ?? " & ";
                return (
                  <React.Fragment key={link.label}>
                    {linkIdx > 0 && separator}
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`editorial-link ${hoverClass} transition-colors`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground/90">
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

      {/* PREVIOUSLY */}
      <div className="space-y-2.5">
        <h3 className="text-xs sm:text-[13px] font-mono text-muted-foreground/70 lowercase tracking-wide">
          previously
        </h3>
        <ul className="space-y-2.5 text-sm sm:text-base text-foreground/90 font-normal leading-relaxed list-none pl-0">
          {previously.map((item, idx) => (
            <li key={idx}>
              {item.prefix}
              {item.links?.map((link, linkIdx) => {
                const hoverClass =
                  link.accent === "blue"
                    ? "hover:text-blue-600 dark:hover:text-blue-400"
                    : "hover:text-emerald-600 dark:hover:text-emerald-400";
                return (
                  <React.Fragment key={link.label}>
                    {linkIdx > 0 && " & "}
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`editorial-link text-foreground/90 ${hoverClass} transition-colors`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="font-medium text-foreground/90">
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
    </div>
  );
}
