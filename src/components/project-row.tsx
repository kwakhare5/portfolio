import Link from "next/link";
import type { ProjectSpec } from "@/data/resume";
import { ProjectIcon } from "@/components/project-icon";
import { SketchArrow } from "@/components/stationery-icons";

export function ProjectRow({ project }: { readonly project: ProjectSpec }) {
  return (
    <div className="group relative flex flex-col gap-2 py-4 border-b border-border last:border-b-0 rounded-md px-3 -mx-3 hover:bg-muted/40 transition-colors">
      <Link
        href={`/builds/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="absolute inset-0 z-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      />

      <div className="relative z-10 pointer-events-none flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <ProjectIcon
            project={project}
            className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <h3 className="font-semibold text-sm sm:text-base text-foreground tracking-tight flex items-center gap-2">
            <span>{project.title}</span>
            <span className="ink-stamp">
              {project.year}
            </span>
          </h3>
        </div>

        <div className="pointer-events-none flex items-center gap-1.5 shrink-0 font-mono text-xs">
          {project.liveUrl && (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto relative inline-flex items-center gap-0.5 font-medium text-[var(--notion-blue-text)] hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:-inset-2 after:content-[''] touch-manipulation"
              >
                <span>live</span>
                <SketchArrow className="size-2.5" />
              </a>
              <span className="text-muted-foreground/40 select-none">·</span>
            </>
          )}
          <span className="inline-flex items-center gap-0.5 font-medium text-[var(--notion-blue-text)] group-hover:underline underline-offset-4 transition-colors">
            <span>view</span>
            <SketchArrow className="size-2.5 opacity-80" />
          </span>
        </div>
      </div>

      <p className="relative z-10 pointer-events-none text-xs sm:text-sm font-normal text-muted-foreground leading-relaxed line-clamp-2">
        {project.oneLiner}
      </p>
    </div>
  );
}
