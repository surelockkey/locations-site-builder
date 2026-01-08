import type { Metadata } from "next"
import { TermsContent } from "@/components/sections/terms-content"
import { getSiteConfig, getPageConfig } from "@/lib/config-loader"

export async function generateMetadata(): Promise<Metadata> {
  try {
    const termsConfig = await getPageConfig("terms")
    return {
      title: termsConfig?.seo?.title || "Terms and Conditions",
      description: termsConfig?.seo?.description || "Terms and Conditions",
    }
  } catch (error) {
    console.error("[v0] Error loading terms metadata:", error)
    return {
      title: "Terms and Conditions",
      description: "Terms and Conditions",
    }
  }
}

export default async function TermsAndConditionsPage() {
  try {
    const config = await getSiteConfig()
    const termsConfig = await getPageConfig("terms")

    return (
      <>
        {/* Hero Section */}
        <section className="py-16 text-center" style={{ backgroundColor: "var(--color-muted)" }}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
              {termsConfig.seo.h1}
            </h1>
            {termsConfig.hero?.description && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{termsConfig.hero.description}</p>
            )}
          </div>
        </section>

        {/* Terms Content */}
        <TermsContent variant={config.variants?.termsContent || "1"} data={termsConfig.content} />
      </>
    )
  } catch (error) {
    console.error("[v0] Error loading terms page:", error)
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-muted-foreground">Unable to load terms and conditions. Please try again later.</p>
      </div>
    )
  }
}
