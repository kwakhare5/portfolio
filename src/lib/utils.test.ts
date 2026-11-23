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
  it("bolds company names case-insensitively and keeps original casing", () => {
    expect(splitKeywords("i'm an ai engineer building for Swiggy Instamart")).toEqual([
      { text: "i'm an ai engineer building for ", bold: false },
      { text: "Swiggy Instamart", bold: true, icon: "/icons/swiggy.svg" },
    ]);
  });

  it("adds brand marks to tech names without bolding them", () => {
    expect(splitKeywords("TypeScript and Python")).toEqual([
      { text: "TypeScript", bold: false, icon: "/icons/typescript.svg" },
      { text: " and ", bold: false },
      { text: "Python", bold: false, icon: "/icons/python.svg" },
    ]);
  });

  it("keeps Instamart bold with the Swiggy mark", () => {
    expect(splitKeywords("live Instamart stock")).toEqual([
      { text: "live ", bold: false },
      { text: "Instamart", bold: true, icon: "/icons/swiggy.svg" },
      { text: " stock", bold: false },
    ]);
  });

  it("links the Swiggy Builder Club as one bold phrase", () => {
    expect(splitKeywords("i'm part of the Swiggy Builder Club for it")).toEqual([
      { text: "i'm part of the ", bold: false },
      {
        text: "Swiggy Builder Club",
        bold: true,
        icon: "/icons/swiggy.svg",
        href: "https://mcp.swiggy.com/builders/",
      },
      { text: " for it", bold: false },
    ]);
  });

  it("leaves tools, roles and programs plain", () => {
    expect(splitKeywords("whatsapp, mcp, ai engineer, builder club")).toEqual([
      { text: "whatsapp, mcp, ai engineer, builder club", bold: false },
    ]);
  });

  it("prefers the longest match and respects word boundaries", () => {
    expect(splitKeywords("Swiggy Instamart and swiggyish")).toEqual([
      { text: "Swiggy Instamart", bold: true, icon: "/icons/swiggy.svg" },
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
