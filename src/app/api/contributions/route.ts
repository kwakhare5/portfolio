import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const currentYear = new Date().getFullYear();
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/kwakhare5?y=${currentYear}`,
      {
        next: { revalidate: 3600 },
        headers: {
          "User-Agent": "Portfolio-App/1.0",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API responded with status ${res.status}`);
    }

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching contributions:', error);
    return NextResponse.json(
      { total: {}, contributions: [] },
      {
        status: 200, // Return empty fallback data gracefully with short cache
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  }
}
