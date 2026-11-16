import { describe, it, expect } from "vitest";
import { getComputedLevel, splitKeywords } from "./utils";

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

describe("splitKeywords", () => {
  it("bolds weight-carrying keywords case-insensitively and keeps original casing", () => {
    expect(splitKeywords("i'm an ai engineer building for Swiggy Instamart")).toEqual([
      { text: "i'm an ", bold: false },
      { text: "ai engineer", bold: true },
      { text: " building for ", bold: false },
      { text: "Swiggy Instamart", bold: true },
    ]);
  });

  it("prefers the longest match and respects word boundaries", () => {
    expect(splitKeywords("Swiggy Instamart and swiggyish")).toEqual([
      { text: "Swiggy Instamart", bold: true },
      { text: " and swiggyish", bold: false },
    ]);
  });

  it("returns plain text untouched when no keyword is present", () => {
    expect(splitKeywords("a quiet sentence")).toEqual([
      { text: "a quiet sentence", bold: false },
    ]);
    expect(splitKeywords("")).toEqual([]);
  });
});
