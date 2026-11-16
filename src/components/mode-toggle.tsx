"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { SketchMoon, SketchSun } from "@/components/stationery-icons";

const emptySubscribe = () => () => {};

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative size-7 flex items-center justify-center p-1 text-muted-foreground hover:text-foreground transition-colors overflow-hidden touch-manipulation cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:-inset-2.5 after:content-['']"
    >
      {mounted && (isDark ? <SketchMoon className="size-4" /> : <SketchSun className="size-4" />)}
    </button>
  );
}
