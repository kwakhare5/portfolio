"use client";

import React, { useState } from "react";
import { ChevronDown, ExternalLink, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import type { ProjectSpec } from "@/types/resume";


const TECH_COLOR_MAP: Record<string, string> = {
  emerald: "text-emerald-600/90 dark:text-emerald-400/90",
  amber: "text-amber-600/90 dark:text-amber-400/90",
  blue: "text-blue-600/90 dark:text-blue-400/90",
};

export function ProjectRow({ project }: { project: ProjectSpec }) {
  const [isOpen, setIsOpen] = useState(false);
  const projectLink = project.liveUrl || project.githubUrl;

  const getTechColor = (type?: "emerald" | "amber" | "blue" | "neutral") => {
    return (type && TECH_COLOR_MAP[type]) || "text-muted-foreground/80";
  };

  const handleRowClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If the click is on an interactive element like a link or button, don't trigger the row link
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    if (projectLink) {
      window.open(projectLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleRowClick}
      className={`group flex flex-col gap-2.5 py-5 sm:py-6 border-b border-border/40 last:border-b-0 transition-colors ${
        projectLink ? "cursor-pointer" : ""
      }`}
    >
      {/* -- Main Row Header ------------------------------------------- */}
      <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <span className="font-semibold text-base sm:text-lg text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 tracking-tight transition-colors">
            <span className="editorial-link">{project.title}</span>
          </span>
          <span className="font-mono text-xs text-muted-foreground/60">
            {project.year}
          </span>
        </div>

        {/* Action Links & Specs Toggle */}
        <div className="flex items-center gap-3 sm:gap-3.5 text-xs font-mono">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 py-0.5 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors editorial-link active:scale-95"
            >
              <span>live</span>
              <ExternalLink className="size-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 py-0.5 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors editorial-link active:scale-95"
            >
              <span>code</span>
              <Code2 className="size-3" />
            </a>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="inline-flex items-center gap-1 py-0.5 font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer active:scale-95"
            aria-expanded={isOpen}
          >
            <span>specs</span>
            <ChevronDown
              className={`size-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-500" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* One-Liner Description */}
      <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
        {project.oneLiner}
      </p>

      {/* Unboxed Tech Stack (Clean text inline separated by middle dots) */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono pt-0.5">
        {project.stack.map((tech, idx) => (
          <React.Fragment key={tech.name}>
            {idx > 0 && <span className="text-muted-foreground/30 select-none">·</span>}
            <span className={getTechColor(tech.type)}>
              {tech.name}
            </span>
          </React.Fragment>
        ))}
      </div>

      {/* -- Expandable Architecture Specs Inline with Fluid Motion -- */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 pl-4 border-l-2 border-amber-500/60 space-y-3.5 text-xs sm:text-sm py-2">
              <div className="space-y-1">
                <span className="font-mono font-medium text-foreground text-xs block">
                  Problem &amp; Value
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {project.specs.problem}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono font-medium text-foreground text-xs block">
                  System Architecture
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {project.specs.architecture}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono font-medium text-foreground text-xs block text-amber-600 dark:text-amber-400">
                  Engineering Highlights
                </span>
                <ul className="space-y-1.5 pl-3.5 text-xs text-muted-foreground">
                  {project.specs.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="relative before:content-['-'] before:absolute before:-left-3.5 before:text-amber-500/80 leading-relaxed"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
