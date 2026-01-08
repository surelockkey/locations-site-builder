import type { Metadata } from "next"
import PhotoGallery from "@/components/sections/photo-gallery"
import { getPageConfig, getSiteConfig } from "@/lib/config-loader"

const siteId = process.env.NEXT_PUBLIC_SITE_ID || "utah-surelockkey"

export async function generateMetadata(): Promise<Metadata> {
  const [pageConfig, siteConfig] = await Promise.all([
    getPageConfig("gallery"),
    getSiteConfig(),
  ])

  const canonicalUrl = `https://${siteConfig.domain}/gallery`

  return {
    title: pageConfig.seo.title,
    description: pageConfig.seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageConfig.seo.title,
      description: pageConfig.seo.description,
      url: canonicalUrl,
    },
  }
}

export default async function GalleryPage() {
  const pageConfig = await getPageConfig("gallery")
  const siteConfig = await getSiteConfig()

  return (
    <main className="min-h-screen">
      {/* Hero section with H1 */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
            {pageConfig.hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {pageConfig.hero.description}
          </p>
        </div>
      </section>

      <PhotoGallery variant={siteConfig.variants.photoGallery || "1"} data={pageConfig.gallery} />
    </main>
  )
}
