import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || DATA.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${DATA.name} — AI Engineer & Full-Stack Developer`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  category: "technology",
  classification: "Engineering Portfolio & Software Showcase",
  keywords: [
    "Karan Wakhare",
    "Full Stack Developer",
    "Software Engineer",
    "AI Engineer",
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
    "Tonal",
    "Pune",
    "India",
    "Indie Builder",
    "Portfolio",
  ],
  authors: [{ name: DATA.name, url: baseUrl }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    title: `${DATA.name} — AI Engineer & Full-Stack Developer`,
    description: DATA.description,
    url: baseUrl,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me-og.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name} — AI Engineer & Full-Stack Developer`,
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
    title: `${DATA.name} — AI Engineer & Full-Stack Developer`,
    description: DATA.description,
    card: "summary_large_image",
    images: ["/me-og.png"],
    creator: "@kwakhare5",
    site: "@kwakhare5",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "d608787966abdc5e",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
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
      image: `${DATA.url}/me.png`,
      jobTitle: "AI Engineer & Full-Stack Developer",
      description: DATA.description,
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
      name: `${DATA.name} — Portfolio`,
      description: "Personal developer portfolio of Karan Wakhare.",
      inLanguage: "en-US",
      publisher: {
        "@id": `${DATA.url}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${DATA.url}/#profilepage`,
      url: DATA.url,
      name: `${DATA.name} — Personal Engineering Portfolio`,
      mainEntity: {
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
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative selection:bg-foreground selection:text-background",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="max-w-[720px] mx-auto px-6 sm:px-8 pt-8 sm:pt-14 pb-16 sm:pb-28 w-full overflow-x-hidden">
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
