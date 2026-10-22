"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

export function ModeToggle({ className }: { className?: string }) {
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
      className={cn(
        "relative size-7 flex items-center justify-center p-1 text-muted-foreground hover:text-foreground transition-colors overflow-hidden touch-manipulation cursor-pointer after:absolute after:-inset-2.5 after:content-['']",
        className
      )}
    >
      {mounted && (isDark ? <Moon className="size-4" /> : <Sun className="size-4" />)}
    </button>
  );
}
