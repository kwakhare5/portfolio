import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ModeToggle } from '@/components/layout/mode-toggle';
import { ArtifactsGallery } from '@/components/artifacts/artifacts-gallery';
import { DATA } from '@/data/resume';

export const metadata: Metadata = {
  title: 'Artifacts',
  description: 'High-resolution architectural captures, travel photography, and daily moments.',
  openGraph: {
    title: 'Artifacts — Karan Wakhare',
    description: 'High-resolution architectural captures, travel photography, and daily moments.',
    url: 'https://karan30.vercel.app/artifacts',
  },
};

export default function ArtifactsPage() {
  const photos = DATA.photos || [];

  return (
    <section className="flex flex-col min-h-screen space-y-8 antialiased">
      {/* Top Navigation */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 font-mono text-xs">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer editorial-link"
        >
          <ArrowLeft className="size-3.5" />
          <span>back to home</span>
        </Link>
        <ModeToggle className="size-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
      </div>

      {/* Header Intro */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-normal tracking-tight text-foreground">
            artifacts
          </h1>
          <span className="border border-border/70 rounded px-1.5 py-0.5 text-muted-foreground text-xs font-mono">
            {photos.length} captures
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Moments and places from wandering around Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.
        </p>
      </div>

      {/* Interactive Grid & Lightbox */}
      <ArtifactsGallery photos={photos} />
    </section>
  );
}
