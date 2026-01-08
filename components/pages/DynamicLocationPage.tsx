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
import { AreasAndHoursSection } from "../sections/areas-and-hours";

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

  // Merge areasAndHours data from siteConfig
  const sections = locationConfig.sections?.map((section: any) => {
    if (section.component === "areasAndHours") {
      return {
        ...section,
        data: {
          ...section.data,
          ...siteConfig.contact.areasAndHours,
        },
      };
    }
    return section;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        variant={siteConfig.variants.hero}
        data={heroData}
        siteConfig={siteConfig}
      />

      {/* Location Page Content */}
      {locationConfig.page_data && (
        <LocationPageContent
          variant={siteConfig.variants.locationPageContent || "1"}
          data={locationConfig.page_data}
        />
      )}

      {/* Dynamic Sections */}
      {sections?.map((section: any, index: number) => {
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
            return (
              <AreasAndHoursSection
                key={index}
                {...section.data}
                siteConfig={siteConfig}
                variant={siteConfig.variants.areasAndHours}
              />
            );

          case "contactForm":
            return (
              <ContactForm
                key={index}
                siteConfig={siteConfig}
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
