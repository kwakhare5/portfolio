export function getComputedLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 9) return 2;
  if (count <= 19) return 3;
  return 4;
}

export function getTechColorName(
  tech: string
): "blue" | "yellow" | "green" | "orange" | "amber" | "red" | "sand" {
  const t = tech.toLowerCase();
  if (
    t.includes("typescript") ||
    t.includes("sql") ||
    t.includes("postgres") ||
    t.includes("sqlite") ||
    t.includes("tailwind")
  ) {
    return "blue";
  }
  if (
    t.includes("python") ||
    t.includes("node") ||
    t.includes(".net") ||
    t.includes("vite")
  ) {
    return "yellow";
  }
  if (
    t.includes("fastapi") ||
    t.includes("react") ||
    t.includes("next") ||
    t.includes("drizzle") ||
    t.includes("supabase")
  ) {
    return "green";
  }
  if (
    t.includes("groq") ||
    t.includes("ollama") ||
    t.includes("langgraph") ||
    t.includes("mcp") ||
    t.includes("whatsapp")
  ) {
    return "orange";
  }
  if (t.includes("cloudflare") || t.includes("agent")) {
    return "amber";
  }
  if (
    t.includes("docker") ||
    t.includes("electron") ||
    t.includes("smtc") ||
    t.startsWith("git") ||
    /\bgit\b/.test(t)
  ) {
    return "red";
  }
  // Warm sand/kraft paper tone for all other tools (zero gray, zero purple upfront)
  return "sand";
}

export function getTechInkClass(tech: string): string {
  return `notion-ink-${getTechColorName(tech)}`;
}
