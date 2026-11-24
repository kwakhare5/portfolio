import Link from "next/link";
import { Fragment } from "react";
import type { ReactNode } from "react";
import { ProjectRow } from "@/components/project-row";
import { EntryRow } from "@/components/entry-row";
import { GitHubCalendar } from "@/components/github-calendar";
import { PhotoGrid } from "@/components/photo-grid";
import { LocalClock } from "@/components/local-clock";
import { ModeToggle } from "@/components/mode-toggle";
import { SectionLabel } from "@/components/section-label";
import { DATA, ROLE } from "@/data/resume";
import {
  SketchGithub,
  SketchX,
  SketchLinkedin,
  SketchMail,
} from "@/components/stationery-icons";
import { KeywordText } from "@/components/keyword-text";
import { LINK_MUTED, LINK_SOCIAL } from "@/lib/styles";
import { BODY, BODY_MUTED, LABEL, TITLE } from "@/lib/typography";

const SOCIAL_ICON: Record<string, ReactNode> = {
  X: <SketchX className="size-3.5 shrink-0 text-foreground" />,
  GitHub: <SketchGithub className="size-3.5 shrink-0 text-foreground" />,
  LinkedIn: <SketchLinkedin className="size-3.5 shrink-0 text-[var(--notion-blue-text)]" />,
  Email: <SketchMail className="size-3.5 shrink-0 text-[var(--notion-red-text)]" />,
};

const INK = {
  blue: "text-[var(--notion-blue-text)]",
  amber: "text-[var(--notion-amber-text)]",
  green: "text-[var(--notion-green-text)]",
} as const;

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${DATA.url}/#profilepage`,
  url: DATA.url,
  name: `${DATA.name} | Personal Engineering Portfolio`,
  mainEntity: { "@id": `${DATA.url}/#person` },
};

export default function Page() {
  const { name, avatarUrl, featuredProjects, coreStack, bio, contact } = DATA;
  const firstName = name.split(" ")[0];

  return (
    <main className="w-full flex flex-col space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* -- 1. Masthead & In-Page Navigation -------------------------------- */}
      <section
        className="reveal flex flex-col gap-6"
        style={{ animationDelay: "0ms" }}
      >
        {/* Nav Bar */}
        <div className={`flex items-center justify-between gap-2 border-b border-border pb-3 ${LABEL}`}>
          <nav className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a href="#builds" className={LINK_MUTED}>
              builds
            </a>
            <Link href="/artifacts" className={LINK_MUTED}>
              artifacts
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LocalClock />
            <ModeToggle />
          </div>
        </div>

        {/* Name, Role & Avatar */}
        <div className="flex items-center justify-between gap-5">
          <div className="space-y-1.5">
            <h1 className={TITLE}>Hi, I&apos;m {firstName}</h1>
            <p className={BODY_MUTED}>{ROLE}</p>
          </div>

          <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-border bg-muted shadow-xs">
            {/* One avatar file: the original me.png. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatarUrl}
              alt={name}
              width={1768}
              height={1768}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>

        {/* About */}
        <div className={`space-y-3 ${BODY}`}>
          {bio.map((paragraph, idx) => (
            <p key={idx}><KeywordText text={paragraph} /></p>
          ))}
          <p>
            find me on{" "}
            {contact.socials.map((social, idx) => (
              <Fragment key={social.name}>
                {idx > 0 && (idx === contact.socials.length - 1 ? ", or " : ", ")}
                <a
                  href={social.url}
                  {...(social.url.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={LINK_SOCIAL}
                >
                  {SOCIAL_ICON[social.name] ?? null}
                  <span>{social.name === "Email" ? "email" : social.name}</span>
                </a>
              </Fragment>
            ))}
            .
          </p>
        </div>
      </section>

      {/* -- 2. Builds ------------------------------------------------------- */}
      <section
        id="builds"
        className="reveal space-y-2"
        style={{ animationDelay: "100ms" }}
      >
        <SectionLabel ink={INK.blue} title="builds" meta="projects" />

        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* -- 3. Tech Stack & Tooling ----------------------------------------- */}
      <section
        id="stack"
        className="reveal space-y-2"
        style={{ animationDelay: "200ms" }}
      >
        <SectionLabel ink={INK.amber} title="stack" meta="tools" />

        <div className="flex flex-col">
          {coreStack.map((group) => (
            <EntryRow
              key={group.category}
              title={group.category}
              description={
                <>
                  {group.items.map((item, idx) => (
                    <span key={item}>
                      {item}
                      {idx < group.items.length - 1 && (
                        <span className="text-muted-foreground select-none">, </span>
                      )}
                    </span>
                  ))}
                </>
              }
            />
          ))}
        </div>
      </section>

      {/* -- 4. GitHub Activity --------------------------------------------- */}
      <section
        id="activity"
        className="reveal space-y-2"
        style={{ animationDelay: "300ms" }}
      >
        <SectionLabel ink={INK.green} title="activity" meta="GitHub" />

        <GitHubCalendar />
      </section>

      {/* -- 5. Artifacts ---------------------------------------------------- */}
      <section
        id="artifacts"
        className="reveal space-y-2"
        style={{ animationDelay: "400ms" }}
      >
        <SectionLabel ink={INK.blue} title="artifacts" meta="gallery" />

        <PhotoGrid photos={DATA.photos} variant="preview" />
      </section>
    </main>
  );
}
