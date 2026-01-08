import ContactInfo from "@/components/sections/contact-info";
import ContactFormSection from "@/components/sections/contact-form-section";
import FAQ from "@/components/sections/faq";
import type { PageConfig } from "@/types/config.types";
import type { ContactConfig } from "@/types/config.types";

interface ContactUsPageVariant3Props {
  siteConfig: { contact: ContactConfig };
  contactConfig: PageConfig;
}

export default function ContactUsPageVariant3({
  siteConfig,
  contactConfig,
}: ContactUsPageVariant3Props) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Hero Section with Background */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          backgroundColor: "var(--color-primary)",
          backgroundImage:
            "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {contactConfig.h1 || "Contact Us"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {contactConfig.description ||
                "Get in touch with us for all your locksmith needs."}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Asymmetric Layout */}
      <section className="py-12 md:py-16 -mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - ContactInfo (1/3) */}
            <div className="lg:col-span-1">
              {contactConfig.sections?.map((section: any, index: number) => {
                if (section.type === "contactInfo") {
                  return (
                    <div key={index} className="sticky top-8">
                      <ContactInfo variant="3" data={siteConfig.contact} />
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Right Column - Form + FAQ (2/3) */}
            <div className="lg:col-span-2 space-y-8">
              {contactConfig.sections?.map((section: any, index: number) => {
                if (section.type === "contactFormSection") {
                  return (
                    <div
                      key={index}
                      className="p-8 md:p-10 rounded-2xl shadow-xl"
                      style={{ backgroundColor: "var(--color-card)" }}
                    >
                      <ContactFormSection
                        variant={section.variant}
                        data={section.data}
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
        </div>
      </section>
    </div>
  );
}
