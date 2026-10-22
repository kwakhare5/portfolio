import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModeToggle } from '@/components/layout/mode-toggle';
import { SocialsFooter } from '@/components/layout/socials-footer';
import { ArtifactsGallery } from '@/components/artifacts/artifacts-gallery';
import { DATA } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Artifacts & Photography',
  description: 'High-resolution architectural captures, travel photography, and daily moments by Karan Wakhare across Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.',
  alternates: {
    canonical: '/artifacts',
  },
  openGraph: {
    title: 'Artifacts & Photography — Karan Wakhare',
    description: 'High-resolution architectural captures, travel photography, and daily moments by Karan Wakhare across Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.',
    url: 'https://karan30.vercel.app/artifacts',
    siteName: 'Karan Wakhare',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/me-og.png',
        width: 1200,
        height: 630,
        alt: 'Artifacts & Photography — Karan Wakhare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artifacts & Photography — Karan Wakhare',
    description: 'High-resolution architectural captures, travel photography, and daily moments by Karan Wakhare across Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.',
    images: ['/me-og.png'],
    creator: '@kwakhare5',
  },
};

export default function ArtifactsPage() {
  const photos = DATA.photos || [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Artifacts & Photography — Karan Wakhare',
    description: 'High-resolution architectural captures, travel photography, and daily moments by Karan Wakhare.',
    url: `${DATA.url}/artifacts`,
    author: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
    },
    associatedMedia: photos.map((photo) => ({
      '@type': 'ImageObject',
      contentUrl: `${DATA.url}${photo.url}`,
      caption: photo.caption.replace(/^\/\/\s*/, ''),
      name: photo.caption.replace(/^\/\/\s*/, '') || 'Photo by Karan Wakhare',
      author: {
        '@type': 'Person',
        name: DATA.name,
      },
    })),
  };


  return (
    <section className="flex flex-col space-y-10 sm:space-y-14 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-border pb-3 font-sans text-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="size-3.5" />
          <span>back to home</span>
        </Link>
        <ModeToggle />
      </div>

      {/* Header Intro */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            artifacts
          </h1>
          <span className="border border-border rounded px-1.5 py-0.5 text-muted-foreground text-xs font-mono">
            {photos.length} captures
          </span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Moments and places from wandering around Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.
        </p>
      </div>

      {/* Interactive Grid & Lightbox */}
      <ArtifactsGallery photos={photos} />

      {/* Socials Footer */}
      <SocialsFooter />
    </section>
  );
}
