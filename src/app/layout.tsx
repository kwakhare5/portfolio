import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import { DATA, ROLE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/data/resume";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: SITE_TITLE,
    template: `%s | ${DATA.name}`,
  },
  description: SITE_DESCRIPTION,
  category: "technology",
  classification: "Engineering Portfolio & Software Showcase",
  keywords: [
    "Karan Wakhare",
    "AI Engineer",
    "Full Stack Developer",
    "AI Agents",
    "MCP",
    "Next.js",
    "React 19",
    "TypeScript",
    "Python",
    "FastAPI",
    "LangGraph",
    "Groq",
    "Tailwind CSS",
    "Swiggy Instamart",
    "Grocer",
    "Outpost",
    "Git for Prompts",
    "Beam",
    "Pune",
    "India",
    "Indie Builder",
    "Portfolio",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: DATA.url,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me-og.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    card: "summary_large_image",
    images: ["/me-og.png"],
    creator: "@kwakhare5",
    site: "@kwakhare5",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${DATA.url}/#person`,
      name: DATA.name,
      url: DATA.url,
      image: `${DATA.url}/me-og.png`,
      jobTitle: ROLE,
      description: SITE_DESCRIPTION,
      email: DATA.contact.socials.find((s) => s.url.startsWith("mailto:"))?.url.replace("mailto:", ""),
      sameAs: DATA.contact.socials
        .filter((s) => s.url.startsWith("http"))
        .map((s) => s.url),
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Ajeenkya DY Patil University",
        url: "https://adypu.edu.in",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "AI Agents",
        "Model Context Protocol (MCP)",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Full-Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      url: DATA.url,
      name: `${DATA.name} | Portfolio`,
      description: "Personal developer portfolio of Karan Wakhare.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${DATA.url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased relative selection:bg-foreground selection:text-background ${geist.variable} ${geistMono.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 w-full overflow-x-hidden">
            {children}
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Analytics />
      </body>
    </html>
  );
}
