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
        "relative flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors overflow-hidden",
        className
      )}
    >
      {mounted && (isDark ? <Moon className="size-[15px]" /> : <Sun className="size-[15px]" />)}
    </button>
  );
}
