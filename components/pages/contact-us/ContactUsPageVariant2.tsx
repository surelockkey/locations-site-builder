import ContactInfo from "@/components/sections/contact-info";
import ContactFormSection from "@/components/sections/contact-form-section";
import FAQ from "@/components/sections/faq";
import type { PageConfig } from "@/types/config.types";
import type { ContactConfig } from "@/types/config.types";

interface ContactUsPageVariant2Props {
  siteConfig: { contact: ContactConfig };
  contactConfig: PageConfig;
}

export default function ContactUsPageVariant2({
  siteConfig,
  contactConfig,
}: ContactUsPageVariant2Props) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Hero Section with Centered Title */}
      <section className="py-16 md:py-20 text-center">
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: "var(--color-text)" }}
          >
            {contactConfig.h1 || "Contact Us"}
          </h1>
          <p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text)" }}
          >
            {contactConfig.description ||
              "Get in touch with us for all your locksmith needs."}
          </p>
          <div
            className="mt-6 h-1 w-24 mx-auto rounded-full"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
        </div>
      </section>

      {/* Main Content - Full Width Stacked */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {contactConfig.sections?.map((section: any, index: number) => {
              if (section.type === "contactFormSection") {
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-lg"
                  >
                    <ContactFormSection
                      variant={section.variant}
                      data={section.data}
                    />
                  </div>
                );
              }
              if (section.type === "contactInfo") {
                return (
                  <div key={index}>
                    <ContactInfo
                      variant={section.variant}
                      data={siteConfig.contact}
                    />
                  </div>
                );
              }
              if (section.type === "faq") {
                return (
                  <div key={index}>
                    <FAQ variant={section.variant} data={section.data} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
