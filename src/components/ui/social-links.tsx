"use client";

import { AnimatedLink } from "@/components/ui/animated-link";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import { Icons } from "@/components/ui/social-icons";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  githubUrl?: string;
  linkedinUrl?: string;
  xUrl?: string;
  email?: string;
  className?: string;
}

export function SocialLinks({
  githubUrl = DATA.contact.social.GitHub.url,
  linkedinUrl = DATA.contact.social.LinkedIn.url,
  xUrl = DATA.contact.social.X.url,
  email = DATA.contact.email,
  className,
}: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <AnimatedLink
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        <Icons.GitHub className="size-3.5 group-hover:scale-110 transition-transform duration-150" />
        <span>GitHub</span>
      </AnimatedLink>

      <AnimatedLink
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        <Icons.LinkedIn className="size-3.5 group-hover:scale-110 transition-transform duration-150" />
        <span>LinkedIn</span>
      </AnimatedLink>

      <AnimatedLink
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        <Icons.X className="size-3.5 group-hover:scale-110 transition-transform duration-150" />
        <span>X</span>
      </AnimatedLink>

      <CopyEmailButton email={email} />

      <AnimatedLink
        href="/Karan Wakhare.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        <Icons.Resume className="size-3.5 group-hover:scale-110 transition-transform duration-150" />
        <span>Resume</span>
      </AnimatedLink>
    </div>
  );
}
