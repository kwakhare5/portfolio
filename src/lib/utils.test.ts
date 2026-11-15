import { describe, it, expect } from "vitest";
import { getComputedLevel, getTechTagClass } from "./utils";

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

describe("getTechTagClass", () => {
  it("maps technologies to silent Notion stationery pastel tag classes with zero gray or purple", () => {
    expect(getTechTagClass("TypeScript")).toBe("notion-tag-blue");
    expect(getTechTagClass("Python")).toBe("notion-tag-yellow");
    expect(getTechTagClass("FastAPI")).toBe("notion-tag-green");
    expect(getTechTagClass("Swiggy Instamart MCP")).toBe("notion-tag-orange");
    expect(getTechTagClass("Docker")).toBe("notion-tag-red");
    expect(getTechTagClass("Tailwind CSS")).toBe("notion-tag-sand");
    expect(getTechTagClass("LangGraph")).toBe("notion-tag-sand");
  });
});
