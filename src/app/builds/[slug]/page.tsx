import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBar } from "@/components/page-bar";
import { PageHeading } from "@/components/page-heading";
import { SectionLabel } from "@/components/section-label";
import { ProjectRow } from "@/components/project-row";
import { DATA, SITE_NAME } from "@/data/resume";
import { ProjectIcon } from "@/components/project-icon";
import { SketchGlobe, SketchGithub, SketchCheck } from "@/components/stationery-icons";
import { KeywordText } from "@/components/keyword-text";
import { LINK_ACTION } from "@/lib/styles";
import { BODY, LABEL, META, MICRO, ROW_TEXT } from "@/lib/typography";

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

  const title = project.title;
  const fullTitle = `${project.title} | ${DATA.name}`;

  return {
    title,
    description: project.oneLiner,
    alternates: {
      canonical: `/builds/${project.slug}`,
    },
    openGraph: {
      title: fullTitle,
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
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
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
        image: `${DATA.url}/me-og.png`,
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
    <section className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageBar href="/#builds" label="back to builds" />

      <header className="mt-6 flex flex-col gap-3">
        <PageHeading
          icon={<ProjectIcon project={project} className="size-6" />}
          title={project.title}
        />

        <p className={BODY}>
          <KeywordText text={project.oneLiner} />
        </p>

        <div className={`flex flex-wrap items-center gap-3 ${LABEL}`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_ACTION}
            >
              <SketchGlobe className="size-3.5" />
              <span>live</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_ACTION}
            >
              <SketchGithub className="size-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>

        <div className="space-y-1 pt-1">
          <span className={`block ${META}`}>tools</span>
          <p className={ROW_TEXT}>
            {project.stack.map((tech, idx) => (
              <span key={tech}>
                {tech}
                {idx < project.stack.length - 1 && (
                  <span className="text-muted-foreground select-none">, </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </header>

      <div className="mt-6 space-y-10">
        <section className="space-y-2">
          <SectionLabel ink="text-[var(--notion-red-text)]" title="the problem" />
          <p className={BODY}>
            <KeywordText text={project.specs.problem} />
          </p>
        </section>

        <section className="space-y-2">
          <SectionLabel ink="text-[var(--notion-blue-text)]" title="how it works" />
          <p className={BODY}>
            <KeywordText text={project.specs.architecture} />
          </p>
        </section>

        <section className="space-y-2">
          <SectionLabel ink="text-[var(--notion-green-text)]" title="highlights" />
          <ul className={`space-y-2 ${BODY}`}>
            {project.specs.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <SketchCheck className="size-3.5 shrink-0 mt-1.5 text-[var(--notion-green-text)]" />
                <span><KeywordText text={highlight} /></span>
              </li>
            ))}
          </ul>
          <p className={`pt-1 ${MICRO}`}>
            <KeywordText text={project.specs.status} />
          </p>
        </section>
      </div>

      <nav className="mt-10 border-t border-border pt-6" aria-label="Other builds">
        <p className={META}>other builds</p>
        <div className="mt-2 flex flex-col">
          {otherProjects.map((other) => (
            <ProjectRow key={other.slug} project={other} showDescription={false} />
          ))}
        </div>
      </nav>
    </section>
  );
}
