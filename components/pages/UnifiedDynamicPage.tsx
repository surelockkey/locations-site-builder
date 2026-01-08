"use client";

import type { SiteConfig } from "@/lib/config-loader";
import type { PageConfig, ServicePageConfig } from "@/types/config.types";

// Extended interface for service and location configs with additional fields
interface ExtendedServiceConfig extends ServicePageConfig {
  description?: string;
  image?: string;
  page_data?: any;
}

import Hero from "@/components/sections/heroes";
import { HeroSection } from "@/components/sections/heroes";
import ContentBlock from "@/components/sections/content-block";
import { ContentBlockSection } from "@/components/sections/content-block";
import ServiceList from "@/components/sections/service-list";
import { ServiceListSection } from "@/components/sections/service-list";
import ServiceInfo from "@/components/sections/service-info";
import WhyChoose from "@/components/sections/why-choose";
import { WhyChooseSection } from "@/components/sections/why-choose";
import Brands from "@/components/sections/brands";
import { BrandsSection } from "@/components/sections/brands";
import BrandsWeServe from "@/components/sections/brands-we-serve";
import { BrandsWeServe as BrandsWeServeAlt } from "@/components/sections/brands-we-serve";
import ContactForm from "@/components/sections/contact-form";
import { ContactForm as ContactFormAlt } from "@/components/sections/contact-form";
import FAQ from "@/components/sections/faq";
import { FAQSection } from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import { CTASection } from "@/components/sections/cta";
import LocationPageContent from "@/components/sections/location-page-content";
import { AreasAndHoursSection } from "@/components/sections/areas-and-hours";
import CallUs from "@/components/common/CallUs";
import ContactUs from "@/components/common/ContactUs";

// Unified props that support all three page types
interface UnifiedDynamicPageProps {
  siteConfig: SiteConfig;
  // For service and location pages
  serviceConfig?: ExtendedServiceConfig;
  locationConfig?: ExtendedServiceConfig;
  // For generic dynamic pages
  config?: PageConfig;
  // Page type identifier
  pageType?: "service" | "location" | "dynamic";
}

export default function UnifiedDynamicPage({
  siteConfig,
  serviceConfig,
  locationConfig,
  config,
  pageType = "dynamic",
}: UnifiedDynamicPageProps) {
  // Determine which config to use
  const activeConfig = serviceConfig || locationConfig || config;

  if (!activeConfig) {
    console.error("[UnifiedDynamicPage] No config provided");
    return null;
  }

  console.log(
    `[UnifiedDynamicPage] Rendering ${pageType} page:`,
    "title" in activeConfig ? activeConfig.title : "N/A"
  );

  // Handle PageConfig (from DynamicPage)
  if (config && "sections" in config && Array.isArray(config.sections)) {
    console.log(
      "[UnifiedDynamicPage] Rendering with PageConfig sections:",
      config.sections.length
    );

    return (
      <main className="min-h-screen">
        {config.sections.map((section, index) => {
          if (!section.enabled) {
            console.log("[UnifiedDynamicPage] Skipping disabled section:", section.id);
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
                <BrandsWeServeAlt
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
                <ContactFormAlt
                  key={key}
                  siteConfig={siteConfig}
                  {...section.data}
                  variant={siteConfig.variants.contactFormSection}
                />
              );

            default:
              console.warn(
                `[UnifiedDynamicPage] Unknown section component: ${section.component}`
              );
              return null;
          }
        })}
      </main>
    );
  }

  // Handle ServiceConfig/LocationConfig (from DynamicServicePage and DynamicLocationPage)
  const serviceOrLocationConfig = serviceConfig || locationConfig;

  if (serviceOrLocationConfig && "sections" in serviceOrLocationConfig) {
    console.log(
      "[UnifiedDynamicPage] Service/Location sections:",
      serviceOrLocationConfig.sections?.length || 0
    );

    const heroData = serviceOrLocationConfig.hero || {
      title: serviceOrLocationConfig.title,
      subtitle: serviceOrLocationConfig.subtitle,
      description: serviceOrLocationConfig.description,
      image: serviceOrLocationConfig.image,
    };

    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <Hero variant={siteConfig.variants.hero} data={heroData} siteConfig={siteConfig} />

        {/* Location Page Content (only for location pages) */}
        {pageType === "location" && locationConfig?.page_data && (
          <LocationPageContent
            variant={siteConfig.variants.locationPageContent || "1"}
            data={locationConfig.page_data}
          />
        )}

        {/* Dynamic Sections */}
        {serviceOrLocationConfig.sections?.map((section: any, index: number) => {
          console.log("[UnifiedDynamicPage] Rendering section:", section.type);

          switch (section.type) {
            case "serviceInfo":
              return (
                <ServiceInfo
                  siteConfig={siteConfig}
                  key={index}
                  variant={siteConfig.variants.serviceInfo || "1"}
                  data={section.data || section}
                />
              );

            case "contentBlock":
              return (
                <ContentBlock
                  key={index}
                  data={section.data || section}
                />
              );

            case "serviceList":
              return (
                <div key={index}>
                  <ServiceList
                    variant={siteConfig.variants.serviceList}
                    data={section.data || section}
                  />
                  {section.data?.cta && (
                    <div className="container mx-auto max-w-6xl px-4 pb-16">
                      <CallUs
                        description={section.data.cta.description}
                        phone={siteConfig.contact.phone}
                        buttonText={section.data.cta.text || "Call Us"}
                      />
                    </div>
                  )}
                </div>
              );

            case "whyChoose":
              return (
                <WhyChoose
                  key={index}
                  variant={siteConfig.variants.whyChoose}
                  data={section.data || section}
                />
              );

            case "brands":
              return (
                <Brands
                  key={index}
                  variant={siteConfig.variants.brands}
                  data={section.data || section}
                />
              );

            case "brandsWeServe":
              const sectionData = section.data || section;
              const transformedBrands =
                sectionData.brands?.map(
                  (brand: string | { name: string; logo: string }) => {
                    if (typeof brand === "string") {
                      return {
                        name: brand,
                        logo: `/placeholder.svg?height=60&width=120&query=${encodeURIComponent(
                          brand + " logo"
                        )}`,
                      };
                    }
                    return brand;
                  }
                ) || [];

              return (
                <div key={index}>
                  <BrandsWeServe
                    variant={siteConfig.variants.brandsWeServe || 1}
                    data={{
                      ...sectionData,
                      brands: transformedBrands,
                    }}
                  />
                  {sectionData.cta && (
                    <div className="container mx-auto max-w-6xl px-4 pb-16">
                      <ContactUs
                        description={sectionData.cta.description}
                        buttonText={sectionData.cta.text || "Contact Us"}
                        link={sectionData.cta.link || "#contact"}
                      />
                    </div>
                  )}
                </div>
              );

            case "gallery":
              const galleryData = section.data || section;
              return (
                <section key={index} className="py-16 px-4 bg-white">
                  <div className="container mx-auto max-w-6xl">
                    <h2
                      className="text-3xl font-bold text-center mb-12"
                      style={{ color: "var(--color-text)" }}
                    >
                      {galleryData.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {galleryData.images?.map((image: any, imgIndex: number) => (
                        <div
                          key={imgIndex}
                          className="relative aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={image.url || image}
                            alt={image.alt || `Gallery image ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "map":
              const mapData = section.data || section;
              return (
                <section key={index} className="py-16 px-4 bg-gray-50">
                  <div className="container mx-auto max-w-6xl">
                    {mapData.title && (
                      <h2
                        className="text-3xl font-bold text-center mb-8"
                        style={{ color: "var(--color-text)" }}
                      >
                        {mapData.title}
                      </h2>
                    )}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        src={mapData.embedUrl}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </section>
              );

            case "contactForm":
              return (
                <ContactForm
                  key={index}
                  siteConfig={siteConfig}
                  variant={siteConfig.variants.contactFormSection || 1}
                  {...section.data}
                  data={section.data || section}
                />
              );

            case "faq":
              return (
                <FAQ
                  key={index}
                  variant={siteConfig.variants.faq}
                  data={section.data || section}
                />
              );

            case "cta":
              return (
                <CTA
                  key={index}
                  variant={siteConfig.variants.cta}
                  data={section.data || section}
                />
              );

            default:
              console.warn(`[UnifiedDynamicPage] Unknown section type: ${section.type}`);
              return null;
          }
        })}
      </div>
    );
  }

  console.error("[UnifiedDynamicPage] Invalid config structure");
  return null;
}
