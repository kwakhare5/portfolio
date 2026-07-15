"use client";

import { useState } from "react";
import React from "react";
import { WakaTimeAggregatedData, DEFAULT_WAKATIME_FALLBACK } from "@/lib/get-wakatime";

type RangeType = "7days" | "30days";

interface WakaTimeStatsProps {
  initialData: WakaTimeAggregatedData;
}


export function WakaTimeStats({ initialData }: WakaTimeStatsProps) {
  const [range, setRange] = useState<RangeType>("7days");

  const rawData = initialData ? initialData[range] : null;
  const data = (rawData && rawData.languages && rawData.languages.length > 0)
    ? rawData
    : DEFAULT_WAKATIME_FALLBACK;

  return (
    <div className="w-full flex flex-col gap-3 text-xs sm:text-sm text-muted-foreground select-none mt-2">
        {/* Row 2: Metadata Sentence & Range Toggle */}
        <div className="flex items-center justify-between gap-4 mt-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="font-medium text-foreground truncate">
              Coded {data.totalHours} {range === "7days" ? "in the last 7 days" : "in the last 30 days"}
            </span>
          </div>

          {/* Minimal text-based range toggle */}
          <div className="flex items-center text-[11px] sm:text-xs font-mono tracking-wide text-muted-foreground/40 select-none shrink-0">
            <button
              onClick={() => setRange("7days")}
              data-cursor-type="nav"
              data-nav-label="7 Days View"
              className={`hover:text-foreground transition-colors duration-150 focus:outline-none cursor-pointer ${
                range === "7days" ? "text-foreground font-semibold" : "text-muted-foreground/60"
              }`}
            >
              7d
            </button>
            <span className="mx-1.5 select-none">/</span>
            <button
              onClick={() => setRange("30days")}
              data-cursor-type="nav"
              data-nav-label="30 Days View"
              className={`hover:text-foreground transition-colors duration-150 focus:outline-none cursor-pointer ${
                range === "30days" ? "text-foreground font-semibold" : "text-muted-foreground/60"
              }`}
            >
              30d
            </button>
          </div>
        </div>

        {/* Row 3: Thin Language Distribution Bar & Inline Legend */}
        <div className="flex flex-col gap-2">
          {/* Thin Progress Bar (4px) */}
          <div 
            style={{ 
              height: "4px", 
              width: "100%", 
              backgroundColor: "rgba(120, 120, 120, 0.12)", 
              borderRadius: "99px", 
              display: "flex", 
              overflow: "hidden" 
            }}
          >
            {data.languages.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percent}%`,
                  height: "100%",
                  backgroundColor: lang.color
                }}
                className="transition-all duration-500"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          {/* Languages Legend */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-muted-foreground">
            {data.languages.map((lang, index) => (
              <React.Fragment key={lang.name}>
                {index > 0 && <span className="text-muted-foreground/30 select-none">•</span>}
                <div className="flex items-center gap-1.5">
                  <span
                    className="shrink-0"
                    style={{ 
                      width: "6px", 
                      height: "6px", 
                      borderRadius: "50%", 
                      backgroundColor: lang.color,
                      display: "inline-block"
                    }}
                  />
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground/60">{lang.percent}%</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
    </div>
  );
}
