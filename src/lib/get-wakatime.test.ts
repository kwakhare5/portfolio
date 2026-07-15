import { describe, it, expect, vi, beforeEach } from "vitest";
import { getWakaTimeData } from "./get-wakatime";

global.fetch = vi.fn();

describe("getWakaTimeData", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    process.env.WAKATIME_API_KEY = "fake-key";
  });

  it("should return fallback data if API key is missing", async () => {
    delete process.env.WAKATIME_API_KEY;
    const res = await getWakaTimeData();
    expect(res["7days"].totalHours).toBeDefined();
    expect(res["7days"].languages.length).toBeGreaterThan(0);
    expect(res["30days"].totalHours).toBeDefined();
    expect(res["30days"].languages.length).toBeGreaterThan(0);
  });

  it("should aggregate languages and editor correctly for both ranges", async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [
            {
              languages: [
                { name: "TypeScript", total_seconds: 3600 },
                { name: "React", total_seconds: 1800 }
              ],
              editors: [
                { name: "VS Code", total_seconds: 5000 }
              ]
            }
          ],
          cumulative_total: { text: "1 hr 30 mins" }
        })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: [
            {
              languages: [
                { name: "TypeScript", total_seconds: 7200 },
                { name: "React", total_seconds: 3600 }
              ],
              editors: [
                { name: "VS Code", total_seconds: 10000 }
              ]
            }
          ],
          cumulative_total: { text: "3 hrs" }
        })
      });

    const res = await getWakaTimeData();

    expect(res["7days"].totalHours).toBe("1 hr 30 mins");
    expect(res["7days"].editor).toBe("VS Code");
    expect(res["7days"].languages[0].name).toBe("TypeScript");
    expect(res["7days"].languages[0].percent).toBe(67);
    expect(res["7days"].languages[1].name).toBe("React");
    expect(res["7days"].languages[1].percent).toBe(33);

    expect(res["30days"].totalHours).toBe("3 hrs");
    expect(res["30days"].editor).toBe("VS Code");
  });
});
