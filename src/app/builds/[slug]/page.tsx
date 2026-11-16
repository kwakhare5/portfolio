import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { SocialsFooter } from "@/components/socials-footer";
import { DATA, SITE_NAME } from "@/data/resume";
import { ProjectIcon } from "@/components/project-icon";
import {
  SketchArrow,
  SketchBackArrow,
  SketchGithub,
  SketchCheck,
} from "@/components/stationery-icons";

function getProject(slug: string) {
  return DATA.featuredProjects.find((project) => project.slug === slug);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return DATA.featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} | ${project.year}`;

  return {
    title,
    description: project.oneLiner,
    alternates: {
      canonical: `/builds/${project.slug}`,
    },
    openGraph: {
      title: `${title} | ${DATA.name}`,
      description: project.oneLiner,
      url: `${DATA.url}/builds/${project.slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/me-og.png",
          width: 1200,
          height: 630,
          alt: `${title} | ${DATA.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${DATA.name}`,
      description: project.oneLiner,
      images: ["/me-og.png"],
      creator: "@kwakhare5",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectUrl = `${DATA.url}/builds/${project.slug}`;
  const otherProjects = DATA.featuredProjects.filter((item) => item.slug !== project.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.oneLiner,
        url: project.liveUrl ?? projectUrl,
        applicationCategory: project.schemaCategory,
        operatingSystem: project.schemaPlatform,
        author: {
          "@type": "Person",
          name: DATA.name,
          url: DATA.url,
        },
        isPartOf: {
          "@type": "WebSite",
          name: `${DATA.name} Portfolio`,
          url: DATA.url,
        },
        ...(project.githubUrl ? { sameAs: [project.githubUrl] } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "home",
            item: DATA.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <section className="flex flex-col space-y-10 sm:space-y-14 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="flex items-center justify-between border-b border-border pb-3 font-sans text-sm">
        <Link
          href="/#builds"
          className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          <SketchBackArrow className="size-3.5" />
          <span>back to builds</span>
        </Link>
        <ModeToggle />
      </div>

      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <ProjectIcon project={project} className="size-6" />
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h1>
          <span className="ink-stamp">{project.year}</span>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {project.oneLiner}
        </p>

        <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[var(--notion-green-text)] hover:underline underline-offset-4"
            >
              <span>live</span>
              <SketchArrow className="size-2.5" />
            </a>
          )}
          {project.liveUrl && project.githubUrl && (
            <span className="text-muted-foreground/40 select-none">·</span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[var(--notion-blue-text)] hover:underline underline-offset-4"
            >
              <SketchGithub className="size-3.5" />
              <span>github</span>
              <SketchArrow className="size-2.5" />
            </a>
          )}
        </div>

        <div className="space-y-1 pt-1">
          <span className="font-mono text-xs text-muted-foreground block">
            technologies
          </span>
          <p className="text-xs sm:text-sm font-mono leading-relaxed">
            {project.stack.map((tech, idx) => (
              <span key={tech}>
                {idx > 0 && (
                  <span className="text-muted-foreground/40 mx-2 select-none">·</span>
                )}
                <span className="text-foreground font-medium">
                  {tech}
                </span>
              </span>
            ))}
          </p>
        </div>
      </header>

      <div className="space-y-8">
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-2.5">
            <h2 className="flex items-center gap-2 text-base sm:text-lg font-normal text-foreground tracking-tight">
              <span className="text-[var(--notion-red-text)] font-mono select-none">#</span>
              <span>problem</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.specs.problem}
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-2.5">
            <h2 className="flex items-center gap-2 text-base sm:text-lg font-normal text-foreground tracking-tight">
              <span className="text-[var(--notion-blue-text)] font-mono select-none">#</span>
              <span>architecture</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.specs.architecture}
          </p>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-2.5">
            <h2 className="flex items-center gap-2 text-base sm:text-lg font-normal text-foreground tracking-tight">
              <span className="text-[var(--notion-green-text)] font-mono select-none">#</span>
              <span>engineering highlights</span>
            </h2>
          </div>
          <ul className="space-y-2 text-sm sm:text-base font-normal text-muted-foreground">
            {project.specs.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <SketchCheck className="size-3.5 shrink-0 mt-1 text-[var(--notion-green-text)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <nav className="space-y-3 border-t border-border pt-6" aria-label="More builds">
        <p className="font-mono text-xs lowercase tracking-wide text-muted-foreground">
          more builds
        </p>
        <div className="flex flex-col">
          {otherProjects.map((other) => (
            <Link
              key={other.slug}
              href={`/builds/${other.slug}`}
              className="group flex items-center justify-between gap-3 py-3 border-b border-border last:border-b-0 rounded-md px-3 -mx-3 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <ProjectIcon project={other} />
                <span className="text-sm sm:text-base font-medium text-foreground group-hover:underline underline-offset-4 transition-all">
                  {other.title}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="ink-stamp">{other.year}</span>
                <span className="inline-flex items-center gap-0.5 font-medium text-[var(--notion-blue-text)] group-hover:underline underline-offset-4 transition-colors">
                  <span>view</span>
                  <SketchArrow className="size-2.5 opacity-80" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </nav>

      <SocialsFooter />
    </section>
  );
}
