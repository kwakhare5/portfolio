"use client";

import { DATA } from "@/data/resume";
import { VisitsCounter } from "./visits-counter";
import { SocialLinks } from "@/components/ui/social-links";

export default function ContactSection({
  data,
}: {
  data: {
    contact: {
      email: string;
      social: {
        X: { url: string };
        GitHub: { url: string };
        LinkedIn: { url: string };
      };
    };
  };
}) {
  const xUrl        = data?.contact?.social?.X?.url        ?? DATA.contact.social.X.url;
  const githubUrl   = data?.contact?.social?.GitHub?.url   ?? DATA.contact.social.GitHub.url;
  const linkedinUrl = data?.contact?.social?.LinkedIn?.url ?? DATA.contact.social.LinkedIn.url;
  const email       = data?.contact?.email                 ?? DATA.contact.email;

  return (
    <div className="flex flex-col gap-6 border-t pt-8">
      {/* Top row: name + socials */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-foreground">{DATA.name}</span>
          <span className="text-xs text-muted-foreground">{DATA.location} · Full-Stack AI Developer</span>
        </div>

        {/* Social + Resume links */}
        <SocialLinks
          githubUrl={githubUrl}
          linkedinUrl={linkedinUrl}
          xUrl={xUrl}
          email={email}
          className="gap-3"
        />
      </div>

      {/* Bottom row: copyright + views */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted-foreground border-t pt-4">
        <span>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</span>
        <VisitsCounter />
      </div>
    </div>
  );
}



