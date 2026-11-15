export function getComputedLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 9) return 2;
  if (count <= 19) return 3;
  return 4;
}

export function getTechTagClass(tech: string): string {
  const t = tech.toLowerCase();
  if (
    t.includes("typescript") ||
    t.includes("sql") ||
    t.includes("postgres") ||
    t.includes("sqlite")
  ) {
    return "notion-tag-blue";
  }
  if (
    t.includes("python") ||
    t.includes("node") ||
    t.includes(".net") ||
    t.includes("vite")
  ) {
    return "notion-tag-yellow";
  }
  if (
    t.includes("fastapi") ||
    t.includes("react") ||
    t.includes("next") ||
    t.includes("drizzle")
  ) {
    return "notion-tag-green";
  }
  if (
    t.includes("mcp") ||
    t.includes("whatsapp")
  ) {
    return "notion-tag-orange";
  }
  if (
    t.includes("docker") ||
    t.includes("electron") ||
    t.includes("smtc")
  ) {
    return "notion-tag-red";
  }
  // Warm sand/kraft paper tone for all other tools (zero gray, zero purple upfront)
  return "notion-tag-sand";
}
