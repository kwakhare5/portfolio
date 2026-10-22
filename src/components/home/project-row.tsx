"use client";

import React, { useState } from "react";
import { ChevronDown, ExternalLink, Code2 } from "lucide-react";

import type { ProjectSpec } from "@/data/resume";

export function ProjectRow({ project }: { project: ProjectSpec }) {
  const [isOpen, setIsOpen] = useState(false);
  const projectLink = project.liveUrl || project.githubUrl;

  const handleRowClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    if (window.getSelection()?.toString()) {
      return;
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleRowClick}
      className="group flex flex-col gap-2.5 py-5 sm:py-6 border-b border-border last:border-b-0 transition-colors cursor-pointer"
    >
      {/* -- Main Row Header ------------------------------------------- */}
      <div className="flex items-start sm:items-center justify-between gap-3 flex-wrap">
        <div className="flex items-baseline gap-2.5 flex-wrap">
          <h3 className="font-semibold text-base sm:text-lg text-foreground tracking-tight m-0 inline">
            {projectLink ? (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-baseline text-foreground hover:text-emerald-500 dark:hover:text-emerald-400 tracking-tight transition-colors"
              >
                <span className="editorial-link">{project.title}</span>
              </a>
            ) : (
              <span>{project.title}</span>
            )}
          </h3>
          <span className="font-mono text-xs text-muted-foreground">
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
              className="relative inline-flex items-center gap-1 py-1 px-1 -my-1 -mx-1 font-semibold text-emerald-500 dark:text-emerald-400 transition-[transform,color] duration-150 [transition-timing-function:cubic-bezier(0.2,0,0,1)] cursor-pointer active:scale-[0.97] touch-manipulation after:absolute after:-inset-2 after:content-['']"
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
              className="relative inline-flex items-center gap-1 py-1 px-1 -my-1 -mx-1 font-semibold text-blue-500 dark:text-blue-400 transition-[transform,color] duration-150 [transition-timing-function:cubic-bezier(0.2,0,0,1)] cursor-pointer active:scale-[0.97] touch-manipulation after:absolute after:-inset-2 after:content-['']"
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
            className="relative inline-flex items-center gap-1 py-1 px-1 -my-1 -mx-1 font-semibold text-amber-500 dark:text-amber-400 transition-[transform,color] duration-150 [transition-timing-function:cubic-bezier(0.2,0,0,1)] cursor-pointer active:scale-[0.97] touch-manipulation after:absolute after:-inset-2 after:content-['']"
            aria-expanded={isOpen}
          >
            <span>specs</span>
            <ChevronDown
              className={`size-3 transition-transform duration-300 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* One-Liner Description */}
      <p className="text-sm sm:text-base font-normal text-muted-foreground leading-relaxed">
        {project.oneLiner}
      </p>

      {/* Unboxed Tech Stack (Clean neutral text inline separated by middle dots) */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-mono pt-0.5 text-muted-foreground">
        {project.stack.map((tech, idx) => (
          <span key={tech} className="inline-flex items-center gap-2 whitespace-nowrap">
            {idx > 0 && <span className="select-none text-muted-foreground/50">·</span>}
            <span>{tech}</span>
          </span>
        ))}
      </div>

      {/* -- Expandable Architecture Specs Inline with GPU-composited Grid -- */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-4 pl-4 border-l-2 border-amber-500 dark:border-amber-400 space-y-3.5 text-xs py-2">
            <div className="space-y-1">
              <span className="font-mono font-medium text-foreground text-xs block">
                Problem &amp; Value
              </span>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                {project.specs.problem}
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono font-medium text-foreground text-xs block">
                System Architecture
              </span>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                {project.specs.architecture}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono font-medium text-xs block text-amber-500 dark:text-amber-400">
                Engineering Highlights
              </span>
              <ul className="space-y-1.5 pl-3.5 text-sm font-normal text-muted-foreground">
                {project.specs.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="relative before:content-['-'] before:absolute before:-left-3.5 before:text-amber-500 dark:before:text-amber-400 leading-relaxed"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
