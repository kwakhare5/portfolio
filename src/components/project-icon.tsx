import type { ProjectIconKey, ProjectSpec } from "@/data/resume";
import {
  SketchTote,
  SketchBox,
  SketchPromptBranch,
  SketchSoundPill,
} from "@/components/stationery-icons";

const ICON_MAP: Record<ProjectIconKey, typeof SketchTote> = {
  tote: SketchTote,
  box: SketchBox,
  prompt: SketchPromptBranch,
  sound: SketchSoundPill,
};

const ICON_INK: Record<ProjectIconKey, string> = {
  tote: "text-[var(--notion-green-text)]",
  box: "text-[var(--notion-red-text)]",
  prompt: "text-[var(--notion-yellow-text)]",
  sound: "text-[var(--notion-orange-text)]",
};

export function ProjectIcon({
  project,
  className = "size-4 shrink-0",
}: {
  project: ProjectSpec;
  className?: string;
}) {
  const Icon = ICON_MAP[project.icon];
  return <Icon className={`${className} ${ICON_INK[project.icon]}`} />;
}
