"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then(mod => mod.GitHubCalendar), {
  ssr: false,
});
import { useIsMounted } from "@/hooks/use-is-mounted";

export default function GitHubActivitySection({
  data,
}: {
  data: {
    contact: {
      social: {
        GitHub: {
          url: string;
        };
      };
    };
  };
}) {
  const { theme, systemTheme } = useTheme();
  const mounted = useIsMounted();

  // Render a skeleton until client hydrates — this prevents SSR issues
  // and defers the GitHub API call until after first paint
  if (!mounted) {
    return <div className="h-[120px] w-full animate-pulse bg-muted/60 rounded-xl" />;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const explicitTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark:  ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const username = data?.contact?.social?.GitHub?.url?.split("/").pop() || "kwakhare5";

  return (
    <div className="w-full overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 flex justify-start sm:justify-center select-none py-1">
      <div className="min-w-[650px] sm:min-w-0 sm:w-full [&_svg]:w-full [&_svg]:h-auto">
        <GitHubCalendar
          username={username}
          year={new Date().getFullYear()}
          colorScheme={isDark ? "dark" : "light"}
          theme={explicitTheme}
          fontSize={12}
          blockSize={11}
          blockMargin={4}
        />
      </div>
    </div>
  );
}



