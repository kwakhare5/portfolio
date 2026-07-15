export const revalidate = 3600;

import AnimatedEntrance from "@/components/animations/animated-entrance";
import { HeroGreetingText } from "@/components/features/home/hero-greeting-text";
import ContactSection from "@/components/features/home/contact-section";
import EducationSection from "@/components/features/home/education-section";
import ProjectsSection from "@/components/features/home/projects-section";
import SkillsSection from "@/components/features/home/skills-section";
import WorkExperienceSection from "@/components/features/home/work-experience-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA as STATIC_RESUME_DATA } from "@/data/resume";
import type { Education, Hackathon, WorkExperience } from "@/types/resume";

import { getGithubData } from "@/lib/get-github-projects";
import { getWakaTimeData } from "@/lib/get-wakatime";
import { WakaTimeStats } from "@/components/features/home/wakatime-stats";
import { SocialLinks } from "@/components/ui/social-links";
import nextDynamic from "next/dynamic";
import Link from "next/link";
import Markdown from "react-markdown";

const GitHubActivitySection = nextDynamic(() => import("@/components/features/home/github-activity-section"));
const HackathonsSection = nextDynamic(() => import("@/components/features/home/hackathons-section"));

const BLUR_FADE_DELAY = 0.025;

export default async function Page() {
  const name        = STATIC_RESUME_DATA.name;
  const summary     = STATIC_RESUME_DATA.summary;
  const avatarUrl   = STATIC_RESUME_DATA.avatarUrl;
  const initials    = STATIC_RESUME_DATA.initials;
  const email       = STATIC_RESUME_DATA.contact.email;
  const githubUrl   = STATIC_RESUME_DATA.contact.social.GitHub.url;
  const linkedinUrl = STATIC_RESUME_DATA.contact.social.LinkedIn.url;
  const xUrl        = STATIC_RESUME_DATA.contact.social.X.url;

  const work       = STATIC_RESUME_DATA.work;
  const education  = STATIC_RESUME_DATA.education;
  const hackathons = STATIC_RESUME_DATA.hackathons;

  const [githubData, wakatimeData] = await Promise.all([
    getGithubData(),
    getWakaTimeData(),
  ]);
  const { projects, skills } = githubData;

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero-section">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1 flex-1">
              <AnimatedEntrance delay={BLUR_FADE_DELAY} duration={0.4}>
                <HeroGreetingText name={name.split(" ")[0]} />
              </AnimatedEntrance>
              <AnimatedEntrance delay={BLUR_FADE_DELAY * 1.2} className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-muted-foreground text-sm sm:text-base font-medium">
                <span className="font-pixel text-[17px] tracking-wider text-foreground leading-none">Figuring Out</span>
                <span className="text-muted-foreground/30 select-none">•</span>
                <Link
                  href="/photos"
                  data-cursor-type="nav"
                  data-nav-label="Snapshots"
                  className="font-pixel text-[17px] tracking-wider text-emerald-500 hover:text-emerald-400 active:scale-95 transition-all focus:outline-none cursor-pointer"
                >
                  snapshots
                </Link>
              </AnimatedEntrance>

              <AnimatedEntrance delay={BLUR_FADE_DELAY * 2} className="mt-2">
                <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert text-sm sm:text-base [&_strong]:font-medium!">
                  <Markdown>{summary}</Markdown>
                </div>
              </AnimatedEntrance>
              <AnimatedEntrance delay={BLUR_FADE_DELAY * 2.5} className="mt-4">
                <div className="flex flex-col gap-4 border-t pt-4">
                  <SocialLinks
                    githubUrl={githubUrl}
                    linkedinUrl={linkedinUrl}
                    xUrl={xUrl}
                    email={email}
                  />
                </div>
              </AnimatedEntrance>
            </div>
            <AnimatedEntrance delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar id="hero-avatar" className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted overflow-hidden">
                <AvatarImage alt={name} src={avatarUrl} className="scale-125 object-cover" />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      <section id="github-activity">
        <div className="flex min-h-0 flex-col gap-y-4">
          <AnimatedEntrance delay={0} inView>
            <h2 className="text-xl font-bold">GitHub Activity</h2>
          </AnimatedEntrance>
          <AnimatedEntrance delay={0.05} inView>
            <div className="flex flex-col gap-y-4">
              <GitHubActivitySection data={{ contact: { social: { GitHub: { url: githubUrl } } } }} />
              <WakaTimeStats initialData={wakatimeData} />
            </div>
          </AnimatedEntrance>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <AnimatedEntrance delay={0} inView>
            <h2 className="text-xl font-bold">Skills</h2>
          </AnimatedEntrance>
          <AnimatedEntrance delay={0.05} inView duration={0.4}>
            <SkillsSection skills={skills} />
          </AnimatedEntrance>
        </div>
      </section>

      <section id="work-experience">
        <div className="flex min-h-0 flex-col gap-y-6">
          <AnimatedEntrance delay={0} inView>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </AnimatedEntrance>
          <AnimatedEntrance delay={0.05} inView>
            <WorkExperienceSection data={work} />
          </AnimatedEntrance>
        </div>
      </section>

      <section id="education-history">
        <div className="flex min-h-0 flex-col gap-y-6">
          <AnimatedEntrance delay={0} inView>
            <h2 className="text-xl font-bold">Education</h2>
          </AnimatedEntrance>
          <AnimatedEntrance delay={0.05} inView>
            <EducationSection data={education} />
          </AnimatedEntrance>
        </div>
      </section>

      <section id="projects">
        <AnimatedEntrance delay={0.05} inView>
          <ProjectsSection data={projects} />
        </AnimatedEntrance>
      </section>

      {hackathons && hackathons.length > 0 && (
        <section id="hackathons">
          <AnimatedEntrance delay={0.05} inView>
            <HackathonsSection data={hackathons} />
          </AnimatedEntrance>
        </section>
      )}

      <section id="contact">
        <AnimatedEntrance delay={0.05} inView>
          <ContactSection data={{ contact: { social: { X: { url: xUrl }, GitHub: { url: githubUrl }, LinkedIn: { url: linkedinUrl } }, email } }} />
        </AnimatedEntrance>
      </section>
    </main>
  );
}



