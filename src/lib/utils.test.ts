import { describe, it, expect } from "vitest";
import { cn } from "./utils";
import { getComputedLevel } from "@/components/home/github-calendar";

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
});
