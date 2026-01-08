"use client";

import type { SiteConfig, ServiceConfig } from "@/lib/config-loader";
import Hero from "@/components/sections/heroes";
import ContentBlock from "@/components/sections/content-block";
import ServiceList from "@/components/sections/service-list";
import ServiceInfo from "@/components/sections/service-info";
import WhyChoose from "@/components/sections/why-choose";
import ContactForm from "@/components/sections/contact-form";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import LocationPageContent from "@/components/sections/location-page-content";

interface DynamicLocationPageProps {
  siteConfig: SiteConfig;
  locationConfig: ServiceConfig;
}

export default function DynamicLocationPage({
  siteConfig,
  locationConfig,
}: DynamicLocationPageProps) {
  console.log("[v0] Rendering location page:", locationConfig.title);
  console.log("[v0] Location sections:", locationConfig.sections?.length || 0);

  const heroData = locationConfig.hero || {
    title: locationConfig.title,
    subtitle: locationConfig.subtitle,
    description: locationConfig.description,
    image: locationConfig.image,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero variant={siteConfig.variants.hero} data={heroData} />

      {/* Location Page Content */}
      {locationConfig.page_data && (
        <LocationPageContent
          variant={siteConfig.variants.locationPageContent || "1"}
          data={locationConfig.page_data}
        />
      )}

      {/* Dynamic Sections */}
      {locationConfig.sections?.map((section: any, index: number) => {
        switch (section.type) {
          case "serviceInfo":
            return (
              <ServiceInfo
                key={index}
                variant={siteConfig.variants.serviceInfo || "1"}
                data={section.data || section}
              />
            );

          case "contentBlock":
            return (
              <ContentBlock
                key={index}
                variant={siteConfig.variants.contentBlock}
                data={section.data || section}
              />
            );

          case "serviceList":
            return (
              <ServiceList
                key={index}
                variant={siteConfig.variants.serviceList}
                data={section.data || section}
              />
            );

          case "whyChoose":
            return (
              <WhyChoose
                key={index}
                variant={siteConfig.variants.whyChoose}
                data={section.data || section}
              />
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
                variant={siteConfig.variants.contactForm || 1}
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
            console.warn(`Unknown section type: ${section.type}`);
            return null;
        }
      })}
    </div>
  );
}
