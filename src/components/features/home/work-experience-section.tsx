"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { WorkExperience } from "@/types/resume";

import Markdown from "react-markdown";
import { LogoImage } from "@/components/ui/logo-image";

export default function WorkExperienceSection({ data }: { data: readonly WorkExperience[] }) {
  return (
    <div className="flex flex-col gap-8 select-none">
      {data.map((work, index: number) => (
        <div key={work.company} className="w-full flex items-start gap-5 group">
          <div className="flex items-start justify-center flex-none w-[42px]">
            <LogoImage 
              src={work.logoUrl} 
              alt={work.company} 
              fillSpace={work.company === "Ateion"} 
              backgroundColor={work.company === "Ateion" ? "#ffffff" : undefined}
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-foreground leading-snug">
                  {work.company}
                </span>
                <span className="text-sm text-muted-foreground">
                  {work.title}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs tabular-nums text-muted-foreground whitespace-nowrap shrink-0">
                {work.start} – {work.end ?? "Present"}
              </div>
            </div>

            {/* Description */}
            {work.description && (
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                <Markdown
                  components={{
                    p: ({ children }) => <p className="leading-relaxed">{children}</p>,
                    ul: ({ children }) => <ul className="flex flex-col gap-2 pl-0 my-1">{children}</ul>,
                    li: ({ children }) => (
                      <li className="flex items-start gap-2 leading-relaxed group/li">
                        <span className="flex-none select-none text-muted-foreground/30 transition-colors duration-200 group-hover/li:text-foreground/50 mt-[0.5px] sm:mt-[1px]">
                          –
                        </span>
                        <span className="flex-1 transition-colors duration-200 group-hover/li:text-foreground/80">{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                  }}
                >
                  {work.description}
                </Markdown>
              </div>
            )}

            {/* Badges */}
            {work.badges && work.badges.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {work.badges.map((badge: string) => (
                  <span
                    key={badge}
                    className="text-[11px] px-2 py-0.5 rounded-full border border-border/50 bg-muted/40 text-muted-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
