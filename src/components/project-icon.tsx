import type { ProjectIconKey, ProjectSpec } from "@/data/resume";
import {
  SketchTote,
  SketchBox,
  SketchPromptBranch,
  SketchSoundPill,
} from "@/components/stationery-icons";

const ICON_META: Record<ProjectIconKey, { Icon: typeof SketchTote; ink: string }> = {
  tote: { Icon: SketchTote, ink: "text-[var(--notion-green-text)]" },
  box: { Icon: SketchBox, ink: "text-[var(--notion-red-text)]" },
  prompt: { Icon: SketchPromptBranch, ink: "text-[var(--notion-blue-text)]" },
  sound: { Icon: SketchSoundPill, ink: "text-[var(--notion-yellow-text)]" },
};

export function projectInkClass(key: ProjectIconKey): string {
  return ICON_META[key].ink;
}

export function ProjectIcon({
  project,
  className = "size-4 shrink-0",
}: {
  project: ProjectSpec;
  className?: string;
}) {
  const { Icon, ink } = ICON_META[project.icon];
  return <Icon className={`${className} ${ink}`} />;
}
