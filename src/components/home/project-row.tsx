"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ProjectSpec } from "@/data/resume";
import {
  SketchArrow,
  SketchTote,
  SketchBox,
  SketchPromptBranch,
  SketchSoundPill,
} from "./stationery-icons";

interface ProjectStationeryConfig {
  readonly icon: React.ReactNode;
  readonly tagClass: string;
  readonly iconColorClass: string;
}

const PROJECT_CONFIGS: Record<string, ProjectStationeryConfig> = {
  grocer: {
    icon: <SketchTote className="size-4 shrink-0" />,
    tagClass: "notion-tag-green",
    iconColorClass: "text-[var(--notion-green-text)]",
  },
  outpost: {
    icon: <SketchBox className="size-4 shrink-0" />,
    tagClass: "notion-tag-red",
    iconColorClass: "text-[var(--notion-red-text)]",
  },
  "git-for-prompts": {
    icon: <SketchPromptBranch className="size-4 shrink-0" />,
    tagClass: "notion-tag-blue",
    iconColorClass: "text-[var(--notion-blue-text)]",
  },
  beam: {
    icon: <SketchSoundPill className="size-4 shrink-0" />,
    tagClass: "notion-tag-yellow",
    iconColorClass: "text-[var(--notion-yellow-text)]",
  },
};

export function ProjectRow({ project }: { readonly project: ProjectSpec }) {
  const router = useRouter();
  const config = PROJECT_CONFIGS[project.slug] ?? {
    icon: <SketchBox className="size-4 shrink-0" />,
    tagClass: "notion-tag-sand",
    iconColorClass: "text-muted-foreground",
  };

  const handleRowClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    if (window.getSelection()?.toString()) {
      return;
    }
    router.push(`/builds/${project.slug}`);
  };

  return (
    <div
      onClick={handleRowClick}
      className="group flex flex-col gap-2 py-4 border-b border-border last:border-b-0 rounded-md px-3 -mx-3 hover:bg-muted/40 transition-colors cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className={`${config.iconColorClass} transition-transform duration-200 group-hover:scale-105`}>
            {config.icon}
          </span>
          <h3 className="font-semibold text-sm sm:text-base text-foreground tracking-tight flex items-center gap-2">
            <Link
              href={`/builds/${project.slug}`}
              className="hover:underline underline-offset-4 text-foreground"
              onClick={(e) => e.stopPropagation()}
            >
              {project.title}
            </Link>
            <span className="ink-stamp">
              {project.year}
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`notion-tag ${config.tagClass}`}
            >
              <span>live</span>
              <SketchArrow className="size-2.5" />
            </a>
          )}
          <Link
            href={`/builds/${project.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="notion-tag notion-tag-sand hover:opacity-85 transition-opacity"
          >
            <span>view</span>
            <SketchArrow className="size-2.5" />
          </Link>
        </div>
      </div>

      <p className="text-xs sm:text-sm font-normal text-muted-foreground leading-relaxed line-clamp-2">
        {project.oneLiner}
      </p>
    </div>
  );
}
