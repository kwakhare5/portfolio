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

export function ProjectIcon({
  project,
  className = "size-4 shrink-0",
}: {
  project: ProjectSpec;
  className?: string;
}) {
  const Icon = ICON_MAP[project.icon];
  return <Icon className={`${className} text-[var(--notion-blue-text)]`} />;
}
