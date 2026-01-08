import type { PageConfig, SiteConfig } from "@/types/config.types";
import { HeroSection } from "@/components/sections/heroes";
import { ServiceListSection } from "@/components/sections/service-list";
import { WhyChooseSection } from "@/components/sections/why-choose";
import { BrandsSection } from "@/components/sections/brands";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { ContentBlockSection } from "@/components/sections/content-block";
import { BrandsWeServe } from "@/components/sections/brands-we-serve";
import { ContactForm } from "@/components/sections/contact-form";
import { AreasAndHoursSection } from "@/components/sections/areas-and-hours";

interface DynamicPageProps {
  config: PageConfig;
  siteConfig: SiteConfig;
}

export function DynamicPage({ config, siteConfig }: DynamicPageProps) {
  console.log(
    "[v0] Rendering DynamicPage with sections:",
    config.sections.length
  );

  return (
    <main className="min-h-screen">
      {config.sections.map((section, index) => {
        if (!section.enabled) {
          console.log("[v0] Skipping disabled section:", section.id);
          return null;
        }

        const key = `${section.component}-${index}`;

        switch (section.component) {
          case "hero":
            return (
              <HeroSection
                key={key}
                data={section.data}
                variant={siteConfig.variants.hero}
                siteConfig={siteConfig}
              />
            );

          case "services":
            return (
              <ServiceListSection
                key={key}
                data={section.data}
                variant={siteConfig.variants.serviceList}
              />
            );

          case "whyChoose":
            return (
              <WhyChooseSection
                key={key}
                data={section.data}
                variant={siteConfig.variants.whyChoose}
              />
            );

          case "brands":
            return (
              <BrandsSection
                key={key}
                data={section.data}
                variant={siteConfig.variants.brands}
              />
            );

          case "faq":
            return (
              <FAQSection
                key={key}
                data={section.data}
                variant={siteConfig.variants.faq}
              />
            );

          case "cta":
            return (
              <CTASection
                key={key}
                data={section.data}
                variant={siteConfig.variants.cta}
              />
            );

          case "contentBlock":
            return <ContentBlockSection key={key} data={section.data} />;

          case "brandsWeServe":
            return (
              <BrandsWeServe
                key={key}
                {...section.data}
                variant={siteConfig.variants.brandsWeServe}
              />
            );

          case "areasAndHours":
            return (
              <AreasAndHoursSection
                key={key}
                {...section.data}
                variant={siteConfig.variants.areasAndHours}
              />
            );

          case "contactForm":
            return (
              <ContactForm
                key={key}
                siteConfig={siteConfig}
                {...section.data}
                variant={siteConfig.variants.contactFormSection}
              />
            );

          default:
            console.warn(
              `[v0] Unknown section component: ${section.component}`
            );
            return null;
        }
      })}
    </main>
  );
}
