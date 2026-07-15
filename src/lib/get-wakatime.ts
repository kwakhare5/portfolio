const COLOR_MAP: Record<string, string> = {
  typescript: "#3178c6",
  javascript: "#f7df1e",
  python: "#ffd43b",
  react: "#61dafb",
  "react/next.js": "#61dafb",
  nextjs: "#000000",
  html: "#e34c26",
  css: "#1572b6",
  "html/css": "#e34c26",
  rust: "#ea580c",
  json: "#a855f7",
  markdown: "#14b8a6",
};

export interface LanguageStat {
  name: string;
  percent: number;
  color: string;
}

export interface WakaTimeData {
  totalHours: string;
  languages: LanguageStat[];
  editor: string;
}

export interface WakaTimeAggregatedData {
  "7days": WakaTimeData;
  "30days": WakaTimeData;
}

export const DEFAULT_WAKATIME_FALLBACK: WakaTimeData = {
  totalHours: "34 hrs 12 mins",
  languages: [
    { name: "TypeScript", percent: 55, color: "#3178c6" },
    { name: "React / Next.js", percent: 28, color: "#61dafb" },
    { name: "CSS / Tailwind", percent: 12, color: "#1572b6" },
    { name: "JSON / Config", percent: 5, color: "#a855f7" },
  ],
  editor: "Cursor",
};

const FALLBACK_7DAYS = DEFAULT_WAKATIME_FALLBACK;


const FALLBACK_30DAYS: WakaTimeData = {
  totalHours: "128 hrs 45 mins",
  languages: [
    { name: "TypeScript", percent: 52, color: "#3178c6" },
    { name: "React / Next.js", percent: 30, color: "#61dafb" },
    { name: "CSS / Tailwind", percent: 11, color: "#1572b6" },
    { name: "Python", percent: 7, color: "#ffd43b" },
  ],
  editor: "Cursor",
};

async function fetchWakaTimeRange(range: "last_7_days" | "last_30_days", retries = 2): Promise<WakaTimeData> {
  const fallback = range === "last_7_days" ? FALLBACK_7DAYS : FALLBACK_30DAYS;
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return fallback;
  }

  try {
    // WakaTime API Basic Auth requires Base64(apiKey + ":")
    const authHeader = `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`;
    const res = await fetch(`https://wakatime.com/api/v1/users/current/summaries?range=${range}`, {
      headers: {
        Authorization: authHeader,
      },
      next: { revalidate: 1800 }, // 30 minutes cache
    });

    if (res.status === 202 && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return fetchWakaTimeRange(range, retries - 1);
    }

    if (!res.ok) {
      console.warn(`WakaTime API returned HTTP ${res.status}, using cached fallback.`);
      return fallback;
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
      return fallback;
    }

    const totalHours = json.cumulative_total?.text || fallback.totalHours;

    const langStats: Record<string, number> = {};
    let totalLanguageSeconds = 0;

    json.data.forEach((day: any) => {
      if (day.languages) {
        day.languages.forEach((lang: any) => {
          langStats[lang.name] = (langStats[lang.name] || 0) + lang.total_seconds;
          totalLanguageSeconds += lang.total_seconds;
        });
      }
    });

    const sortedLanguages = Object.keys(langStats)
      .map((name) => ({ name, total_seconds: langStats[name] }))
      .sort((a, b) => b.total_seconds - a.total_seconds)
      .slice(0, 4);

    if (sortedLanguages.length === 0) {
      return fallback;
    }

    const languages = sortedLanguages.map((lang) => {
      const nameLower = lang.name.toLowerCase().replace(/\s/g, "");
      return {
        name: lang.name,
        percent: totalLanguageSeconds > 0 ? Math.round((lang.total_seconds / totalLanguageSeconds) * 100) : 0,
        color: COLOR_MAP[nameLower] || "#3178c6",
      };
    });

    const editorStats: Record<string, number> = {};
    json.data.forEach((day: any) => {
      if (day.editors) {
        day.editors.forEach((editor: any) => {
          editorStats[editor.name] = (editorStats[editor.name] || 0) + editor.total_seconds;
        });
      }
    });
    const topEditor = Object.keys(editorStats).sort((a, b) => editorStats[b] - editorStats[a])[0] || "Cursor";

    return {
      totalHours,
      languages,
      editor: topEditor,
    };
  } catch (error) {
    console.error(`Failed to fetch WakaTime summaries for ${range}:`, error);
    return fallback;
  }
}

export async function getWakaTimeData(): Promise<WakaTimeAggregatedData> {
  const [data7Days, data30Days] = await Promise.all([
    fetchWakaTimeRange("last_7_days"),
    fetchWakaTimeRange("last_30_days"),
  ]);

  return {
    "7days": data7Days,
    "30days": data30Days,
  };
}
