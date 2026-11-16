"use client";

import { useEffect, useState } from "react";
import { SketchClock } from "@/components/stationery-icons";

const TIME_FORMATTER = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

export function LocalClock() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => setTimeStr(TIME_FORMATTER.format(new Date()));
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  if (!timeStr) return null;

  return (
    <span className="text-muted-foreground text-xs sm:text-sm font-mono hidden sm:inline-flex items-center gap-1.5">
      <SketchClock className="size-3 text-muted-foreground/70 shrink-0" />
      <span>Pune {timeStr}</span>
    </span>
  );
}
