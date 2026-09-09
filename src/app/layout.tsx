import { ThemeProvider } from "@/components/layout/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
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

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : DATA.url;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description || "Personal portfolio, AI agent architectures, and products by Karan Wakhare.",
  keywords: [
    "Karan Wakhare",
    "Indie Builder",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "AI Agents",
    "Portfolio",
  ],
  authors: [{ name: DATA.name, url: baseUrl }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    title: DATA.name,
    description: DATA.description || "Personal portfolio and products by Karan Wakhare.",
    url: baseUrl,
    siteName: DATA.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me-og.png",
        width: 1200,
        height: 630,
        alt: DATA.name,
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
    title: DATA.name,
    description: DATA.description || "Personal portfolio and products by Karan Wakhare.",
    card: "summary_large_image",
    images: ["/me-og.png"],
    creator: "@kwakhare5",
  },
  icons: {
    icon: "/me.png",
    shortcut: "/me.png",
    apple: "/me.png",
  },
  verification: {
    google: "d608787966abdc5e",
  },
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
      jobTitle: DATA.role,
      description: DATA.description,
      sameAs: DATA.contact.socials.map((s) => s.url),
      knowsAbout: [
        "Artificial Intelligence",
        "AI Agents",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Full-Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      url: DATA.url,
      name: `${DATA.name} — Portfolio`,
      description: "Personal developer portfolio and technical blog of Karan Wakhare.",
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
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative selection:bg-foreground selection:text-background",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 pt-8 sm:pt-14 pb-16 sm:pb-28 w-full overflow-x-hidden">
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
