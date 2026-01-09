import ContactInfo from "@/components/sections/contact-info";
import ContactFormSection from "@/components/sections/contact-form-section";
import FAQ from "@/components/sections/faq";
import type { PageConfig, SiteConfig } from "@/types/config.types";
import type { ContactConfig } from "@/types/config.types";

interface ContactUsPageVariant1Props {
  siteConfig: SiteConfig;
  contactConfig: PageConfig;
}

export default function ContactUsPageVariant1({
  siteConfig,
  contactConfig,
}: ContactUsPageVariant1Props) {
  console.log(contactConfig);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            {contactConfig.h1 || "Contact Us"}
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl"
            style={{ color: "var(--color-text)" }}
          >
            {contactConfig.description ||
              "Get in touch with us for all your locksmith needs."}
          </p>
        </div>
      </section>

      {/* Main Content - Two Columns */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {contactConfig.sections?.map((section: any, index: number) => {
              if (section.type === "contactInfo") {
                return (
                  <div key={index}>
                    <ContactInfo
                      variant={siteConfig.variants.contactInfo}
                      data={siteConfig.contact}
                    />
                  </div>
                );
              }
              if (section.type === "contactFormSection") {
                return (
                  <div key={index}>
                    <ContactFormSection
                      variant={siteConfig.variants.contactFormSection}
                      data={section.data}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {contactConfig.sections?.map((section: any, index: number) => {
            if (section.type === "faq") {
              return (
                <div key={index} className="max-w-4xl mx-auto">
                  <FAQ variant={section.variant} data={section.data} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>
    </div>
  );
}
