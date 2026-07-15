"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Hackathon, HackathonLink } from "@/types/resume";
import { LogoImage } from "@/components/ui/logo-image";
import { motion } from "motion/react";
import React from "react";

export default function HackathonsSection({ data }: { data: readonly Hackathon[] }) {
  return (
    <div className="flex flex-col gap-8 select-none p-0">
      {data.map((project, index: number) => (
        <div key={project.title} className="w-full flex items-start gap-5">
          <div className="flex items-start justify-center flex-none w-[42px]">
            <LogoImage src={project.image} alt={project.title} />
          </div>
          {/* Content */}
          <div className="flex-1 min-w-0 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-foreground leading-snug">
                  {project.title}
                </span>
                <span className="text-sm text-muted-foreground">
                  {project.location}
                </span>
              </div>
              <div className="text-xs tabular-nums text-muted-foreground shrink-0 mt-1 sm:mt-0">
                {project.dates}
              </div>
            </div>

            {project.description && (
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="mt-3 flex flex-row flex-wrap items-start gap-2">
                {project.links?.map((link: HackathonLink, idx: number) => (

                  <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
                    <Badge title={link.title} className="flex gap-1.5 items-center px-2 py-0.5 bg-muted/40 hover:bg-muted/60 text-muted-foreground border-border/50 transition-colors">
                      {link.icon && React.createElement(link.icon, { className: "h-3 w-3" })}
                      <span className="text-[11px]">{link.title}</span>
                    </Badge>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
