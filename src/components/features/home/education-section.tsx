"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { Education } from "@/types/resume";

import { LogoImage } from "@/components/ui/logo-image";

export default function EducationSection({ data }: { data: readonly Education[] }) {
  return (
    <div className="flex flex-col gap-6 select-none p-0">
      {data.map((edu, index: number) => (
        <div key={edu.school} className="w-full flex items-start gap-5">
          <div className="flex items-start justify-center flex-none w-[42px]">
            <LogoImage src={edu.logoUrl} alt={edu.school} fillSpace />
          </div>
          {/* Content */}
          <Link
            href={edu.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 min-w-0 pb-2 block"
          >
            <div
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-1"
            >
              <div className="flex flex-col gap-0.5">
                <div className="font-semibold leading-snug flex items-center gap-1.5 text-foreground">
                  {edu.school}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    aria-hidden
                  />
                </div>
                <div className="text-sm text-muted-foreground">{edu.degree}</div>
              </div>
              <div className="text-xs tabular-nums text-muted-foreground shrink-0 mt-1 sm:mt-0">
                {edu.start} – {edu.end}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
