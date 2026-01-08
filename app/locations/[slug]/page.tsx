import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { loadSiteConfig, loadLocationConfig, getSiteId } from "@/lib/config-loader"
import DynamicLocationPage from "@/components/pages/DynamicLocationPage"

interface LocationPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all locations
export async function generateStaticParams() {
  const locationSlugs = ["draper"]

  return locationSlugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const siteId = getSiteId()

  try {
    const locationConfig = await loadLocationConfig(siteId, slug)
    const siteConfig = await loadSiteConfig()

    const canonicalUrl = `https://${siteConfig.domain}/locations/${slug}`

    return {
      title: locationConfig.seo.title,
      description: locationConfig.seo.description,
      keywords: locationConfig.seo.keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: locationConfig.seo.title,
        description: locationConfig.seo.description,
        siteName: siteConfig.branding.companyName,
        url: canonicalUrl,
      },
    }
  } catch (error) {
    console.error("[v0] Location metadata error:", error)
    return {
      title: "Location Not Found",
      description: "The requested location could not be found.",
    }
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const siteId = getSiteId()

  console.log("[v0] Loading location page:", slug)

  try {
    const [siteConfig, locationConfig] = await Promise.all([loadSiteConfig(), loadLocationConfig(siteId, slug)])

    console.log("[v0] Location config loaded:", locationConfig.title)
    console.log("[v0] Sections count:", locationConfig.sections?.length || 0)

    return <DynamicLocationPage siteConfig={siteConfig} locationConfig={locationConfig} />
  } catch (error) {
    console.error("[v0] Failed to load location page:", error)
    notFound()
  }
}
