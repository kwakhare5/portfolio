import React from "react";
import { ProjectCard } from "./project-card";
import { Project } from "@/lib/get-github-projects";

export default function ProjectsSection({ data }: { data: readonly Project[] }) {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-xl font-bold">Build Log</h2>
          <p className="text-sm text-muted-foreground">
            A collection of functional software and interactive systems designed to solve real problems, learn new stacks, and explore code.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {data.map((project) => (
            <React.Fragment key={project.title}>
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
