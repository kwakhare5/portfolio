interface Brand {
  readonly name: string;
  readonly bold: boolean;
  readonly icon?: string;
  readonly href?: string;
}

// Bold is reserved for companies I work with; tech brands get a mark, not extra weight.
const BRANDS: readonly Brand[] = [
  {
    name: "swiggy builder club",
    bold: true,
    icon: "/icons/swiggy.svg",
    href: "https://mcp.swiggy.com/builders/",
  },
  { name: "swiggy instamart", bold: true, icon: "/icons/swiggy.svg" },
  { name: "swiggy", bold: true, icon: "/icons/swiggy.svg" },
  { name: "instamart", bold: true, icon: "/icons/swiggy.svg" },
  { name: "typescript", bold: false, icon: "/icons/typescript.svg" },
  { name: "python", bold: false, icon: "/icons/python.svg" },
];

const BRAND_MAP = new Map(BRANDS.map((brand) => [brand.name, brand]));
const BRAND_PATTERN = new RegExp(`\\b(${BRANDS.map((brand) => brand.name).join("|")})\\b`, "gi");

export interface KeywordSegment {
  readonly text: string;
  readonly bold: boolean;
  readonly icon?: string;
  readonly href?: string;
}

export function splitKeywords(text: string): KeywordSegment[] {
  const segments: KeywordSegment[] = [];
  let last = 0;
  for (const match of text.matchAll(BRAND_PATTERN)) {
    const index = match.index ?? 0;
    if (index > last) segments.push({ text: text.slice(last, index), bold: false });
    const brand = BRAND_MAP.get(match[0].toLowerCase());
    segments.push({
      text: match[0],
      bold: brand?.bold ?? false,
      ...(brand?.icon ? { icon: brand.icon } : {}),
      ...(brand?.href ? { href: brand.href } : {}),
    });
    last = index + match[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last), bold: false });
  return segments;
}

export function getComputedLevel(count: number): number {
  if (count <= 0) return 0;
  if (count <= 3) return 1;
  if (count <= 9) return 2;
  if (count <= 19) return 3;
  return 4;
}
