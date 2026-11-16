import { describe, it, expect } from "vitest";
import { getComputedLevel } from "./utils";

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
