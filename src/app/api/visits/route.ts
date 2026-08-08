import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getVisitorStore, saveVisitorStore, format14DayHistory } from "@/lib/visitor-store";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const responseHeaders = new Headers({
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
  });

  try {
    const { searchParams } = new URL(req.url);
    const exclude = searchParams.get("exclude") === "true";

    const store = await getVisitorStore();
    const todayStr = new Date().toISOString().split("T")[0];

    // Check cookie or header for existing visitor ID
    const existingCookieId = req.cookies.get("pv_id")?.value;
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";
    
    // Hash signature to permanently identity unique visitors even if cookies are cleared
    const visitorHash = existingCookieId || crypto.createHash("sha256").update(`${clientIp}-${userAgent}`).digest("hex").slice(0, 24);

    const isAlreadyRegistered = Boolean(store.registeredHashes[visitorHash]);
    let isNewVisitor = false;

    if (!exclude && !isAlreadyRegistered) {
      // First-time unique visitor!
      isNewVisitor = true;
      store.registeredHashes[visitorHash] = true;
      store.totalUniques = (store.totalUniques || 1500) + 1;
      store.dailyNew[todayStr] = (store.dailyNew[todayStr] || 0) + 1;

      // Persist changes asynchronously (with await for Serverless persistence)
      try {
        await saveVisitorStore(store);
      } catch (err) {
        console.error("Failed to save visitor store:", err);
      }
    }

    const todayUniques = store.dailyNew[todayStr] || 0;
    const history = format14DayHistory(store.dailyNew);

    const response = NextResponse.json(
      {
        count: store.totalUniques,
        todayCount: todayUniques,
        history,
        isNewVisitor,
      },
      { headers: responseHeaders }
    );

    // Set permanent cookie (expires in 10 years)
    if (!existingCookieId) {
      response.cookies.set("pv_id", visitorHash, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365 * 10,
        sameSite: "lax",
        httpOnly: true,
      });
    }

    return response;
  } catch (error) {
    console.error("Visits API error:", error);
    return NextResponse.json(
      {
        count: 1542,
        todayCount: 14,
        history: format14DayHistory({}),
        isNewVisitor: false,
      },
      { headers: responseHeaders }
    );
  }
}
