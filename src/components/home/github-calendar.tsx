"use client";

import React, { useEffect, useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: {
    lastYear?: number;
    [year: string]: number | undefined;
  };
  contributions: ContributionDay[];
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const CACHE_KEY = "gh_contributions_cache_v2";

export function getComputedLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 9) return 2;
  if (count <= 19) return 3;
  return 4;
}

export function GitHubCalendar() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [loading]);

  useEffect(() => {
    let isMounted = true;

    const fetchContributions = async () => {
      // 1. Try local cache first
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const json = JSON.parse(cached);
          if (isMounted && json?.contributions?.length > 0) {
            setData(json);
            setLoading(false);
          }
        }
      } catch {}

      // 2. Fetch fresh data
      try {
        const res = await fetch("/api/contributions");
        if (!res.ok) throw new Error("Failed to fetch contributions");
        const json: ApiResponse = await res.json();
        if (isMounted && json.contributions?.length > 0) {
          setData(json);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(json));
          } catch {}
        }
      } catch {
        // Fallback handled gracefully by state
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Group contributions by weeks (7 days per column)
  const { weeks, monthLabels, totalCount } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { weeks: [], monthLabels: [], totalCount: 0 };
    }

    const contributions = data.contributions;
    const currentYear = new Date().getFullYear().toString();
    const total =
      data.total?.lastYear ??
      data.total?.[currentYear] ??
      contributions.reduce((acc, curr) => acc + curr.count, 0);

    const weekColumns: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // First day day-of-week (0 = Sun, 1 = Mon, ..., 6 = Sat)
    const firstDate = new Date(contributions[0].date);
    const firstDayIndex = firstDate.getUTCDay();

    // Pad beginning of first week if needed
    for (let i = 0; i < firstDayIndex; i++) {
      currentWeek.push({ date: "", count: 0, level: -1 });
    }

    contributions.forEach((day) => {
      currentWeek.push({
        ...day,
        level: getComputedLevel(day.count),
      });
      if (currentWeek.length === 7) {
        weekColumns.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: 0, level: -1 });
      }
      weekColumns.push(currentWeek);
    }

    // Determine month label positions while preventing overlap on partial leading months
    const rawLabels: { month: string; xPos: number }[] = [];
    let lastMonth = -1;

    weekColumns.forEach((week, weekIdx) => {
      const validDay = week.find((d) => d.date !== "");
      if (validDay) {
        const month = new Date(validDay.date).getUTCMonth();
        if (month !== lastMonth) {
          rawLabels.push({ month: MONTHS[month], xPos: weekIdx * 13 });
          lastMonth = month;
        }
      }
    });

    const labels = rawLabels.filter((lbl, idx) => {
      if (idx === 0 && rawLabels.length > 1 && rawLabels[1].xPos - lbl.xPos < 26) {
        return false;
      }
      return true;
    });

    return { weeks: weekColumns, monthLabels: labels, totalCount: total };
  }, [data]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "fill-emerald-500/20 dark:fill-emerald-400/20";
      case 2:
        return "fill-emerald-500/40 dark:fill-emerald-400/40";
      case 3:
        return "fill-emerald-500/65 dark:fill-emerald-400/65";
      case 4:
        return "fill-emerald-500/85 dark:fill-emerald-400/85";
      case 0:
      default:
        return "fill-zinc-100 dark:fill-zinc-800/60";
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Header Info */}
      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pb-1 flex-wrap gap-1">
        <span>
          {loading ? (
            <span className="animate-pulse">Loading contributions...</span>
          ) : (
            <span>
              <strong className="text-foreground font-semibold">{totalCount.toLocaleString()}</strong> contributions in the last year
            </span>
          )}
        </span>

        <a
          href="https://github.com/kwakhare5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-blue-500 dark:hover:text-blue-400 transition-colors editorial-link"
        >
          <span>@kwakhare5</span>
          <ExternalLink className="size-3" />
        </a>
      </div>

      {/* Unified Non-Sliding Heatmap Container */}
      <div className="relative w-full border border-border rounded-lg p-2.5 sm:p-4 bg-card">
        {loading ? (
          <div className="h-[100px] w-full flex items-center justify-center text-xs font-mono text-muted-foreground animate-pulse">
            Fetching GitHub activity...
          </div>
        ) : weeks.length > 0 ? (
          <div className="w-full flex flex-col gap-2 select-none">
            {/* Scrollable grid wrapper for mobile with full 10px crisp squares */}
            <div
              ref={scrollRef}
              className="w-full overflow-x-auto pb-1 -mb-1 scrollbar-none"
            >
              <div className="min-w-[690px] sm:min-w-0 w-full">
                {/* Native Scalable SVG Grid */}
                <svg
                  viewBox={`0 0 ${Math.max(weeks.length * 13 + 5, 690)} 110`}
                  className="w-full h-auto overflow-visible"
                >
                  {/* Month Labels */}
                  {monthLabels.map((lbl, i) => (
                    <text
                      key={i}
                      x={lbl.xPos}
                      y={10}
                      className="fill-muted-foreground font-mono text-[9px]"
                    >
                      {lbl.month}
                    </text>
                  ))}

                  {/* Day Rectangles */}
                  {weeks.map((week, wIdx) =>
                    week.map((day, dIdx) => {
                      if (day.level === -1) return null;
                      return (
                        <rect
                          key={`${wIdx}-${dIdx}`}
                          x={wIdx * 13}
                          y={dIdx * 13 + 18}
                          width={10}
                          height={10}
                          rx={2}
                          ry={2}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          onTouchStart={() => setHoveredDay(day)}
                          className={`cursor-pointer transition-all duration-150 hover:stroke-foreground/40 ${getLevelColor(
                            day.level
                          )}`}
                        />
                      );
                    })
                  )}
                </svg>
              </div>
            </div>

            {/* Footer with Legend & Tooltip detail */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-0 text-[11px] font-mono text-muted-foreground pt-1.5 border-t border-border">
              <div className="min-h-[16px]">
                {hoveredDay ? (
                  <span className="text-foreground">
                    <strong className="text-foreground">{hoveredDay.count}</strong> contribution
                    {hoveredDay.count === 1 ? "" : "s"} on {formatDate(hoveredDay.date)}
                  </span>
                ) : (
                  <span>Hover / tap a square for details</span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-[10px] self-end sm:self-auto">
                <span>Less</span>
                <div className="size-[9px] rounded-[2px] bg-zinc-100 dark:bg-zinc-800/60" />
                <div className="size-[9px] rounded-[2px] bg-emerald-500/20 dark:bg-emerald-400/20" />
                <div className="size-[9px] rounded-[2px] bg-emerald-500/40 dark:bg-emerald-400/40" />
                <div className="size-[9px] rounded-[2px] bg-emerald-500/65 dark:bg-emerald-400/65" />
                <div className="size-[9px] rounded-[2px] bg-emerald-500/85 dark:bg-emerald-400/85" />
                <span>More</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[100px] w-full flex items-center justify-center text-xs font-mono text-muted-foreground">
            Activity telemetry temporarily unavailable.
          </div>
        )}
      </div>
    </div>
  );
}
