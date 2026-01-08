"use client";

import type { SiteConfig, ServiceConfig } from "@/lib/config-loader";
import Hero from "@/components/sections/heroes";
import ContentBlock from "@/components/sections/content-block";
import ServiceList from "@/components/sections/service-list";
import ServiceInfo from "@/components/sections/service-info";
import WhyChoose from "@/components/sections/why-choose";
import Brands from "@/components/sections/brands";
import BrandsWeServe from "@/components/sections/brands-we-serve";
import ContactForm from "@/components/sections/contact-form";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import CallUs from "@/components/common/CallUs";
import ContactUs from "@/components/common/ContactUs";

interface DynamicServicePageProps {
  siteConfig: SiteConfig;
  serviceConfig: ServiceConfig;
}

export default function DynamicServicePage({
  siteConfig,
  serviceConfig,
}: DynamicServicePageProps) {
  console.log("[v0] Rendering service page:", serviceConfig.title);
  console.log("[v0] Service sections:", serviceConfig.sections?.length || 0);

  const heroData = serviceConfig.hero || {
    title: serviceConfig.title,
    subtitle: serviceConfig.subtitle,
    description: serviceConfig.description,
    image: serviceConfig.image,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero variant={siteConfig.variants.hero} data={heroData} />

      {/* Dynamic Sections */}
      {serviceConfig.sections?.map((section: any, index: number) => {
        console.log("[v0] Rendering section:", section.type);

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
                // variant={siteConfig.variants.contentBlock}
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

          case "contactForm":
            return (
              <ContactForm
                key={index}
                variant={siteConfig.variants.contactFormSection}
                {...section.data}
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
