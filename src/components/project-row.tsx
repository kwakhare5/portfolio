import type { ProjectSpec } from "@/data/resume";
import { ProjectIcon } from "@/components/project-icon";
import { EntryRow } from "@/components/entry-row";

export function ProjectRow({
  project,
  showDescription = true,
}: {
  readonly project: ProjectSpec;
  readonly showDescription?: boolean;
}) {
  return (
    <EntryRow
      icon={
        <ProjectIcon
          project={project}
          className="size-4 transition-transform duration-200 group-hover:scale-105"
        />
      }
      title={project.title}
      href={`/builds/${project.slug}`}
      liveUrl={project.liveUrl}
      description={showDescription ? project.oneLiner : undefined}
      showView
    />
  );
}
