import { describe, it, expect } from "vitest";
import { cn, formatDate } from "./utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names and handles conditions", () => {
      expect(cn("px-2", "py-1")).toBe("px-2 py-1");
      expect(cn("px-2", false && "hidden", "py-1")).toBe("px-2 py-1");
    });

    it("handles Tailwind merge conflicts correctly", () => {
      expect(cn("px-2", "px-4")).toBe("px-4");
      expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
    });
  });

  describe("formatDate", () => {
    it("formats ISO date string in UTC long format", () => {
      const formatted = formatDate("2026-08-22");
      expect(formatted).toBe("August 22, 2026");
    });

    it("formats Date instance accurately", () => {
      const date = new Date("2025-12-25T00:00:00Z");
      expect(formatDate(date)).toBe("December 25, 2025");
    });
  });
});
