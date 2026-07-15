"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function VisitsCounter({ className }: { className?: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const isExcluded =
      typeof window !== "undefined" &&
      localStorage.getItem("exclude_visit") === "true";

    fetch(`/api/visits${isExcluded ? "?exclude=true" : ""}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch((err) => {
        console.error("Visits API error:", err);
      });
  }, []);

  return (
    <span
      className={cn(
        "text-xs text-muted-foreground select-none text-left inline-flex items-center gap-1",
        className
      )}
    >
      {count === null ? (
        <span className="animate-pulse">Counting visitors…</span>
      ) : (
        <span className="inline-flex items-center gap-1">
          You are visitor{" "}
          <span className="font-semibold text-foreground font-mono">
            #{count.toLocaleString()}
          </span>{" "}
          — thanks for stopping by
          <Image
            src="/wave.png"
            alt="👋"
            width={16}
            height={16}
            className="inline-block size-4 select-none pointer-events-none"
            unoptimized
          />
        </span>
      )}
    </span>
  );
}
