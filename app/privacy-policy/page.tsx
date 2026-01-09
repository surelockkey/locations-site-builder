import type { Metadata } from "next"
import { TermsContent } from "@/components/sections/terms-content"
import { getSiteConfig, getPageConfig } from "@/lib/config-loader"

export async function generateMetadata(): Promise<Metadata> {
  try {
    const [privacyConfig, siteConfig] = await Promise.all([
      getPageConfig("privacy"),
      getSiteConfig(),
    ])

    const canonicalUrl = `https://${siteConfig.domain}/privacy-policy`

    return {
      title: privacyConfig?.seo?.title || "Privacy Policy",
      description: privacyConfig?.seo?.description || "Privacy Policy",
      robots: {
        index: false,
        follow: true,
      },
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: privacyConfig?.seo?.title || "Privacy Policy",
        description: privacyConfig?.seo?.description || "Privacy Policy",
        url: canonicalUrl,
      },
    }
  } catch (error) {
    console.error("[v0] Error loading privacy metadata:", error)
    return {
      title: "Privacy Policy",
      description: "Privacy Policy",
    }
  }
}

export default async function PrivacyPolicyPage() {
  try {
    const config = await getSiteConfig()
    const privacyConfig = await getPageConfig("privacy")

    return (
      <>
        {/* Hero Section */}
        <section className="py-16 text-center" style={{ backgroundColor: "var(--color-muted)" }}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
              {privacyConfig.seo.h1}
            </h1>
            {privacyConfig.hero?.description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{privacyConfig.hero.description}</p>
            )}
          </div>
        </section>

        {/* Privacy Content */}
        <TermsContent variant={config.variants?.termsContent || "1"} data={privacyConfig.content} />
      </>
    )
  } catch (error) {
    console.error("[v0] Error loading privacy page:", error)
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Unable to load privacy policy. Please try again later.</p>
      </div>
    )
  }
}
