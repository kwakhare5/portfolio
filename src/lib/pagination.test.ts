import { describe, it, expect } from "vitest";
import { normalizePage, paginate } from "./pagination";

describe("pagination", () => {
  describe("normalizePage", () => {
    it("handles positive integer numbers", () => {
      expect(normalizePage(3)).toBe(3);
      expect(normalizePage(1)).toBe(1);
    });

    it("handles valid number strings", () => {
      expect(normalizePage("2")).toBe(2);
      expect(normalizePage("10")).toBe(10);
    });

    it("defaults invalid values to 1", () => {
      expect(normalizePage(0)).toBe(1);
      expect(normalizePage(-5)).toBe(1);
      expect(normalizePage("abc")).toBe(1);
      expect(normalizePage(null)).toBe(1);
      expect(normalizePage(undefined)).toBe(1);
      expect(normalizePage(1.5)).toBe(1);
    });
  });

  describe("paginate", () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    it("paginates items with default page size of 5", () => {
      const result = paginate(items, { page: 1 });
      expect(result.items).toEqual([1, 2, 3, 4, 5]);
      expect(result.pagination).toEqual({
        page: 1,
        pageSize: 5,
        totalItems: 12,
        totalPages: 3,
        hasPreviousPage: false,
        hasNextPage: true,
      });
    });

    it("paginates second page accurately", () => {
      const result = paginate(items, { page: 2, pageSize: 5 });
      expect(result.items).toEqual([6, 7, 8, 9, 10]);
      expect(result.pagination.hasPreviousPage).toBe(true);
      expect(result.pagination.hasNextPage).toBe(true);
    });

    it("paginates final page correctly", () => {
      const result = paginate(items, { page: 3, pageSize: 5 });
      expect(result.items).toEqual([11, 12]);
      expect(result.pagination.hasPreviousPage).toBe(true);
      expect(result.pagination.hasNextPage).toBe(false);
    });

    it("handles empty array gracefully", () => {
      const result = paginate([], { page: 1, pageSize: 5 });
      expect(result.items).toEqual([]);
      expect(result.pagination).toEqual({
        page: 1,
        pageSize: 5,
        totalItems: 0,
        totalPages: 1,
        hasPreviousPage: false,
        hasNextPage: false,
      });
    });
  });
});
