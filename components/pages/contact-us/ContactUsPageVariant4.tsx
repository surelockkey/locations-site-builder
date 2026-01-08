import ContactInfo from "@/components/sections/contact-info"
import ContactFormSection from "@/components/sections/contact-form-section"
import FAQ from "@/components/sections/faq"
import type { PageConfig } from "@/types/config.types"
import type { ContactConfig } from "@/types/config.types"

interface ContactUsPageVariant4Props {
  siteConfig: { contact: ContactConfig }
  contactConfig: PageConfig
}

export default function ContactUsPageVariant4({ siteConfig, contactConfig }: ContactUsPageVariant4Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      {/* Compact Hero Section */}
      <section className="py-8 md:py-12 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--color-text)" }}>
                {contactConfig.h1 || "Contact Us"}
              </h1>
              <p className="text-base md:text-lg mt-2" style={{ color: "var(--color-text)" }}>
                {contactConfig.description || "Get in touch with us for all your locksmith needs."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Sidebar Layout */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - ContactInfo */}
            <div className="lg:col-span-1">
              {contactConfig.sections?.map((section: any, index: number) => {
                if (section.type === "contactInfo") {
                  return (
                    <div key={index} className="lg:sticky lg:top-8">
                      <ContactInfo variant={section.variant} data={siteConfig.contact} />
                    </div>
                  )
                }
                return null
              })}
            </div>

            {/* Main Content - Form + FAQ */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {contactConfig.sections?.map((section: any, index: number) => {
                  if (section.type === "contactFormSection") {
                    return (
                      <div key={index}>
                        <ContactFormSection variant={section.variant} data={section.data} />
                      </div>
                    )
                  }
                  if (section.type === "faq") {
                    return (
                      <div key={index}>
                        <FAQ variant={section.variant} data={section.data} />
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
