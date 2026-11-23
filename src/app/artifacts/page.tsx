import type { Metadata } from "next";
import { PageBar } from "@/components/page-bar";
import { PageHeading } from "@/components/page-heading";
import { PhotoGrid } from "@/components/photo-grid";
import { DATA, SITE_NAME } from "@/data/resume";
import { BODY } from "@/lib/typography";

const ARTIFACTS_TITLE = "Artifacts & Photography | Karan Wakhare";
const ARTIFACTS_DESCRIPTION =
  "Photos from my trips to Dubai, Singapore, Abu Dhabi, Udaipur, and Pune.";

export const metadata: Metadata = {
  title: "Artifacts & Photography",
  description: ARTIFACTS_DESCRIPTION,
  alternates: {
    canonical: "/artifacts",
  },
  openGraph: {
    title: ARTIFACTS_TITLE,
    description: ARTIFACTS_DESCRIPTION,
    url: `${DATA.url}/artifacts`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me-og.png",
        width: 1200,
        height: 630,
        alt: ARTIFACTS_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTIFACTS_TITLE,
    description: ARTIFACTS_DESCRIPTION,
    images: ["/me-og.png"],
    creator: "@kwakhare5",
  },
};

export default function ArtifactsPage() {
  const photos = DATA.photos;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: ARTIFACTS_TITLE,
    description: ARTIFACTS_DESCRIPTION,
    url: `${DATA.url}/artifacts`,
    author: {
      "@type": "Person",
      name: DATA.name,
      url: DATA.url,
    },
    associatedMedia: photos.map((photo) => ({
      "@type": "ImageObject",
      contentUrl: `${DATA.url}${photo.url}`,
      caption: photo.caption,
      name: photo.caption || "Photo by Karan Wakhare",
      author: {
        "@type": "Person",
        name: DATA.name,
      },
    })),
  };

  return (
    <section className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageBar href="/" label="back to home" />

      <header className="mt-6 flex flex-col gap-3">
        <PageHeading title="artifacts" meta={`${photos.length} photos`} />
        <p className={BODY}>{ARTIFACTS_DESCRIPTION}</p>
      </header>

      <div className="mt-6">
        <PhotoGrid photos={photos} variant="gallery" />
      </div>
    </section>
  );
}
