"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Markdown from "react-markdown";
import { Icons } from "@/components/ui/social-icons";
import { motion } from "motion/react";

// Resolve a link icon when the stored JSX component isn't available (e.g. from DB)
function LinkIcon({ icon, type, href, className }: { icon?: React.ReactNode; type?: string; href?: string; className?: string }) {
  if (icon && React.isValidElement(icon)) {
    const element = icon as React.ReactElement<{ className?: string }>;
    return React.cloneElement(element, {
      className: className || (element.props && element.props.className)
    });
  }
  if (icon) return <>{icon}</>;
  const t = (type || "").toLowerCase();
  const h = (href || "").toLowerCase();
  if (t === "source" || t === "github" || h.includes("github.com")) {
    return <Icons.GitHub className={className || "size-3"} />;
  }
  if (t === "website" || t === "live" || t === "demo" || t === "preview" || h.includes("vercel.app")) {
    return <Globe className={className || "size-3"} />;
  }
  return null;
}

interface Props {
  readonly title: string;
  readonly href?: string;
  readonly description: string;
  readonly dates: string;
  readonly image?: string;
  readonly video?: string;
  readonly links?: readonly {
    readonly icon?: React.ReactNode;
    readonly type: string;
    readonly href: string;
  }[];
  readonly className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  image,
  video,
  links,
  className,
}: Props) {
  const [imageError, setImageError] = useState(false);

  const isLink = !!href;
  
  const commonClasses = cn(
    "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:border-foreground/25 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.25)] transition-colors duration-200",
    isLink && "cursor-pointer",
    className
  );

  const cardContent = (
    <>
      {/* 16:9 aspect ratio media container */}
      <div className="w-full aspect-video shrink-0 bg-muted/20 border-b border-border/80 relative overflow-hidden">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (image && !imageError) ? (
          <div className="relative w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover bg-black"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' width='16' height='9'><rect width='16' height='9' fill='%23000000'/></svg>"
              alt={title}
              className="w-full h-full object-cover bg-black"
            />
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2.5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm truncate" title={title}>
              {title}
            </h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>

          <div className="flex items-center gap-3 shrink-0 mt-0.5">
            {links && [...links]
              .sort((a, b) => {
                const typeA = a.type.toLowerCase();
                const typeB = b.type.toLowerCase();
                const isLiveA = typeA === "live" || typeA === "website" || typeA === "demo";
                const isLiveB = typeB === "live" || typeB === "website" || typeB === "demo";
                if (isLiveA && !isLiveB) return -1;
                if (!isLiveA && isLiveB) return 1;
                return 0;
              })
              .map((link, idx) => {
                const typeLower = link.type.toLowerCase();
                const isWebsite = typeLower === "live" || typeLower === "website" || typeLower === "demo" || typeLower === "preview";
                const isGithub = typeLower === "source" || typeLower === "github";
                const cursorType = isWebsite ? "website" : isGithub ? "github" : "link";

                return (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(link.href, "_blank", "noopener,noreferrer");
                    }}
                    data-cursor-type={cursorType}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    aria-label={link.type}
                  >
                    <LinkIcon icon={link.icon} type={link.type} href={link.href} className="size-4" />
                  </button>
                );
              })}
          </div>
        </div>

        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </>
  );

  if (isLink) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-type="project"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={commonClasses}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={commonClasses}
    >
      {cardContent}
    </motion.div>
  );
}
