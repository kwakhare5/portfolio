import { describe, it, expect } from "vitest";
import { getComputedLevel, getTechInkClass } from "./utils";

describe("getComputedLevel", () => {
  it("assigns distinct intensity tiers without collapsing high commit days under a 122-commit outlier", () => {
    expect(getComputedLevel(0)).toBe(0);
    expect(getComputedLevel(2)).toBe(1);
    expect(getComputedLevel(7)).toBe(2);
    expect(getComputedLevel(14)).toBe(3);
    expect(getComputedLevel(32)).toBe(4);
    expect(getComputedLevel(44)).toBe(4);
    expect(getComputedLevel(122)).toBe(4);
  });
});

describe("getTechInkClass", () => {
  it("maps technologies to subtle borderless Notion stationery ink classes", () => {
    expect(getTechInkClass("TypeScript")).toBe("notion-ink-blue");
    expect(getTechInkClass("Tailwind CSS")).toBe("notion-ink-blue");
    expect(getTechInkClass("Python")).toBe("notion-ink-yellow");
    expect(getTechInkClass("FastAPI")).toBe("notion-ink-green");
    expect(getTechInkClass("Supabase")).toBe("notion-ink-green");
    expect(getTechInkClass("LangGraph")).toBe("notion-ink-orange");
    expect(getTechInkClass("Groq LLMs")).toBe("notion-ink-orange");
    expect(getTechInkClass("Cloudflare Workers")).toBe("notion-ink-amber");
    expect(getTechInkClass("Agents SDK")).toBe("notion-ink-amber");
    expect(getTechInkClass("Docker")).toBe("notion-ink-red");
    expect(getTechInkClass("Git")).toBe("notion-ink-red");
    expect(getTechInkClass("Custom Tool")).toBe("notion-ink-sand");
  });
});
