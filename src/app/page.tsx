import Image from "next/image";
import Link from "next/link";
import { HeroGreeting } from "@/components/hero-greeting";
import { ProjectRow } from "@/components/project-row";
import { GitHubCalendar } from "@/components/github-calendar";
import { PhotoGrid } from "@/components/photo-grid";
import { LocalClock } from "@/components/local-clock";
import { ModeToggle } from "@/components/mode-toggle";
import { SocialsFooter } from "@/components/socials-footer";
import { DATA } from "@/data/resume";
import type { StackIconKey } from "@/data/resume";
import { SketchCode, SketchSparkle, SketchGear, SketchGithub } from "@/components/stationery-icons";
import { KeywordText } from "@/components/keyword-text";

const STACK_ICON: Record<StackIconKey, typeof SketchCode> = {
  code: SketchCode,
  sparkle: SketchSparkle,
  gear: SketchGear,
};

const NAV_LINK =
  "relative inline-flex items-center font-medium text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:text-foreground hover:decoration-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary py-1 px-1 -my-1 -mx-1 after:absolute after:-inset-2 after:content-[''] touch-manipulation";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${DATA.url}/#profilepage`,
  url: DATA.url,
  name: `${DATA.name} | Personal Engineering Portfolio`,
  mainEntity: { "@id": `${DATA.url}/#person` },
};

export default function Page() {
  const { name, avatarUrl, featuredProjects, coreStack, bio } = DATA;
  const firstName = name.split(" ")[0];

  return (
    <main className="w-full flex flex-col space-y-14 sm:space-y-20 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* -- 1. Masthead & In-Page Navigation -------------------------------- */}
      <section
        className="reveal flex flex-col gap-6 sm:gap-7"
        style={{ animationDelay: "0ms" }}
      >
        {/* Nav Bar */}
        <div className="flex items-center justify-between gap-2 text-sm font-sans border-b border-border pb-3">
          <nav className="flex flex-wrap items-center gap-3 sm:gap-5 text-muted-foreground text-sm">
            <a href="#builds" className={NAV_LINK}>
              builds
            </a>
            <Link href="/artifacts" className={NAV_LINK}>
              artifacts
            </Link>
            <a href="#socials" className={NAV_LINK}>
              socials
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LocalClock />
            <ModeToggle />
          </div>
        </div>

        {/* Name & Avatar */}
        <div className="flex items-center justify-between gap-5 pt-1">
          <div className="space-y-2">
            <HeroGreeting name={firstName} />
            <p className="font-mono text-xs sm:text-sm text-muted-foreground tracking-normal flex flex-wrap items-center gap-1.5 lowercase">
              <a
                href="https://github.com/kwakhare5"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1 text-foreground hover:text-foreground font-medium underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:-inset-1.5 after:content-[''] touch-manipulation"
              >
                <SketchGithub className="size-3.5 shrink-0" />
                kwakhare5
              </a>
              <span className="text-muted-foreground/50 select-none">·</span>
              <span>typescript / python</span>
              <span className="text-muted-foreground/50 select-none">·</span>
              <span>ai systems &amp; full-stack</span>
            </p>
          </div>

          <div className="relative size-16 sm:size-20 shrink-0 overflow-hidden rounded-full border border-border bg-muted shadow-xs">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              priority
              sizes="(max-width: 640px) 64px, 80px"
              quality={90}
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-3 sm:space-y-3.5 text-sm sm:text-base leading-relaxed text-foreground font-normal">
          {bio.map((paragraph, idx) => (
            <p key={idx}><KeywordText text={paragraph} /></p>
          ))}
        </div>
      </section>

      {/* -- 2. Builds ------------------------------------------------------- */}
      <section
        id="builds"
        className="reveal space-y-2"
        style={{ animationDelay: "60ms" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-[var(--notion-blue-text)] font-mono select-none">#</span>
            <span>builds</span>
          </h2>
          <span
            className="font-mono text-xs text-muted-foreground"
            aria-label={`${featuredProjects.length} builds`}
          >
            {featuredProjects.length}
          </span>
        </div>

        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* -- 3. Tech Stack & Tooling ----------------------------------------- */}
      <section
        id="stack"
        className="reveal space-y-4"
        style={{ animationDelay: "120ms" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-[var(--notion-amber-text)] font-mono select-none">#</span>
            <span>stack</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">tooling</span>
        </div>

        <div className="space-y-3.5 pt-1">
          {coreStack.map((group) => {
            const Icon = STACK_ICON[group.icon];

            return (
              <div key={group.category} className="space-y-1">
                <span className="font-mono text-xs font-medium text-muted-foreground inline-flex items-center gap-1.5">
                  <Icon className="size-3 shrink-0 text-[var(--notion-amber-text)]" />
                  <span>{group.category}</span>
                </span>
                <p className="text-xs sm:text-sm font-mono leading-relaxed">
                  {group.items.map((item, idx) => (
                    <span key={item}>
                      {idx > 0 && (
                        <span className="text-muted-foreground/40 mx-2 select-none">·</span>
                      )}
                      <span className="text-foreground font-medium select-none">
                        {item}
                      </span>
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* -- 4. GitHub Activity --------------------------------------------- */}
      <section
        id="activity"
        className="reveal space-y-4"
        style={{ animationDelay: "180ms" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-[var(--notion-green-text)] font-mono select-none">#</span>
            <span>activity</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">github</span>
        </div>

        <GitHubCalendar />
      </section>

      {/* -- 5. Artifacts ---------------------------------------------------- */}
      <section
        id="artifacts"
        className="reveal space-y-4"
        style={{ animationDelay: "240ms" }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <h2 className="text-base sm:text-lg font-normal text-foreground tracking-tight flex items-center gap-2">
            <span className="text-[var(--notion-blue-text)] font-mono select-none">#</span>
            <span>artifacts</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground">gallery</span>
        </div>

        <PhotoGrid photos={DATA.photos} variant="preview" />
      </section>

      {/* -- 6. Socials Footer ----------------------------------------------- */}
      <div className="reveal" style={{ animationDelay: "300ms" }}>
        <SocialsFooter />
      </div>
    </main>
  );
}
