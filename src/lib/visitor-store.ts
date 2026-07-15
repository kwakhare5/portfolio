import fs from "fs";
import path from "path";
import os from "os";

export interface DailyVisitorStat {
  date: string; // YYYY-MM-DD
  count: number;
}

export interface VisitorStoreData {
  totalUniques: number;
  dailyNew: Record<string, number>;
  registeredHashes: Record<string, boolean>;
}

const KV_STORE_URL = process.env.KV_VISITORS_URL || "https://keyvalue.immanuel.co/api/KeyVal/GetValue/ycfkcou0/portfolio_visitors_v4";
const KV_WRITE_URL = process.env.KV_VISITORS_WRITE_URL || "https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/ycfkcou0/portfolio_visitors_v4";

// Use os.tmpdir() for Vercel Serverless Function read/write compatibility
const LOCAL_CACHE_PATH = path.join(os.tmpdir(), "visitor-cache.json");

// Real baseline initialized from CounterAPI (260)
function getInitialStore(): VisitorStoreData {
  const today = new Date();
  const dailyNew: Record<string, number> = {};
  
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    dailyNew[dateStr] = 0;
  }

  return {
    totalUniques: 260,
    dailyNew,
    registeredHashes: {},
  };
}

let inMemoryStore: VisitorStoreData | null = null;

export async function getVisitorStore(): Promise<VisitorStoreData> {
  if (inMemoryStore) {
    return inMemoryStore;
  }

  // 1. Try remote KV
  try {
    const res = await fetch(KV_STORE_URL, { cache: "no-store" });
    if (res.ok) {
      const text = await res.text();
      const clean = text.replace(/^"|"$/g, "").trim();
      if (clean && clean.startsWith("{")) {
        const parsed = JSON.parse(clean);
        if (parsed && typeof parsed.totalUniques === "number" && parsed.totalUniques >= 260) {
          inMemoryStore = parsed;
          return parsed;
        }
      }
    }
  } catch (err) {
    // KV fetch silent fallback
  }

  // 2. Try tmpdir file cache
  try {
    if (fs.existsSync(LOCAL_CACHE_PATH)) {
      const fileData = fs.readFileSync(LOCAL_CACHE_PATH, "utf-8");
      const parsed = JSON.parse(fileData);
      if (parsed && typeof parsed.totalUniques === "number" && parsed.totalUniques >= 260) {
        inMemoryStore = parsed;
        return parsed;
      }
    }
  } catch (err) {
    // file fallback ignore
  }

  // 3. Baseline 260 from CounterAPI
  inMemoryStore = getInitialStore();
  saveVisitorStore(inMemoryStore);
  return inMemoryStore;
}

export async function saveVisitorStore(store: VisitorStoreData): Promise<void> {
  inMemoryStore = store;

  // Persist to tmpdir for Vercel Serverless compatibility
  try {
    const dir = path.dirname(LOCAL_CACHE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOCAL_CACHE_PATH, JSON.stringify(store), "utf-8");
  } catch (err) {
    // local file save ignore
  }

  // Persist remote KV
  try {
    const encoded = encodeURIComponent(JSON.stringify(store));
    await fetch(`${KV_WRITE_URL}/${encoded}`, {
      method: "POST",
      cache: "no-store",
    });
  } catch (err) {
    // remote KV save silent catch
  }
}

export function format14DayHistory(dailyNew: Record<string, number>): DailyVisitorStat[] {
  const result: DailyVisitorStat[] = [];
  const today = new Date();

  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    result.push({
      date: dateStr,
      count: dailyNew[dateStr] || 0,
    });
  }

  return result;
}
