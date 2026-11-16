import type { Metadata } from 'next';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { SocialsFooter } from '@/components/socials-footer';
import { PhotoGrid } from '@/components/photo-grid';
import { DATA, SITE_NAME } from '@/data/resume';
import { SketchBackArrow, SketchCamera } from '@/components/stationery-icons';

const ARTIFACTS_TITLE = "Artifacts & Photography — Karan Wakhare";
const ARTIFACTS_DESCRIPTION = "High-resolution architectural captures, travel photography, and daily moments by Karan Wakhare across Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.";

export const metadata: Metadata = {
  title: 'Artifacts & Photography',
  description: ARTIFACTS_DESCRIPTION,
  alternates: {
    canonical: '/artifacts',
  },
  openGraph: {
    title: ARTIFACTS_TITLE,
    description: ARTIFACTS_DESCRIPTION,
    url: `${DATA.url}/artifacts`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/me-og.png',
        width: 1200,
        height: 630,
        alt: ARTIFACTS_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ARTIFACTS_TITLE,
    description: ARTIFACTS_DESCRIPTION,
    images: ['/me-og.png'],
    creator: '@kwakhare5',
  },
};

export default function ArtifactsPage() {
  const photos = DATA.photos;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: ARTIFACTS_TITLE,
    description: ARTIFACTS_DESCRIPTION,
    url: `${DATA.url}/artifacts`,
    author: {
      '@type': 'Person',
      name: DATA.name,
      url: DATA.url,
    },
    associatedMedia: photos.map((photo) => ({
      '@type': 'ImageObject',
      contentUrl: `${DATA.url}${photo.url}`,
      caption: photo.caption,
      name: photo.caption || 'Photo by Karan Wakhare',
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
          className="relative inline-flex items-center gap-1.5 font-medium text-muted-foreground underline underline-offset-4 decoration-muted-foreground/40 hover:text-foreground hover:decoration-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:-inset-2 after:content-[''] touch-manipulation"
        >
          <SketchBackArrow className="size-3.5" />
          <span>back to home</span>
        </Link>
        <ModeToggle />
      </div>

      {/* Header Intro */}
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <SketchCamera className="size-6 text-[var(--notion-blue-text)] shrink-0" />
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
            artifacts
          </h1>
          <span className="ink-stamp">
            {photos.length} captures
          </span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Moments and places from wandering around Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.
        </p>
      </header>

      {/* Interactive Grid & Lightbox */}
      <PhotoGrid photos={photos} variant="gallery" />

      {/* Socials Footer */}
      <SocialsFooter />
    </section>
  );
}
