import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  loadSiteConfig,
  loadServiceConfig,
  getSiteId,
} from "@/lib/config-loader";
import DynamicServicePage from "@/components/pages/DynamicServicePage";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services
export async function generateStaticParams() {
  const serviceSlugs = [
    "automotive-locksmith",
    "emergency-locksmith",
    "mobile-locksmith",
    "car-key-programming",
    "car-key-replacement",
    "lock-installation-replacement",
    "lock-repair-maintenance",
  ];

  return serviceSlugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const siteId = getSiteId();

  try {
    const serviceConfig = await loadServiceConfig(siteId, slug);
    const siteConfig = await loadSiteConfig(siteId);

    const canonicalUrl = `https://${siteConfig.domain}/services/${slug}`;

    return {
      title: serviceConfig.seo.title,
      description: serviceConfig.seo.description,
      keywords: serviceConfig.seo.keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: serviceConfig.seo.title,
        description: serviceConfig.seo.description,
        siteName: siteConfig.branding.companyName,
        url: canonicalUrl,
      },
    };
  } catch (error) {
    console.error("[v0] Service metadata error:", error);
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const siteId = getSiteId();

  try {
    const [siteConfig, serviceConfig] = await Promise.all([
      loadSiteConfig(siteId),
      loadServiceConfig(siteId, slug),
    ]);

    return (
      <DynamicServicePage
        siteConfig={siteConfig}
        serviceConfig={serviceConfig}
      />
    );
  } catch (error) {
    console.error("[v0] Failed to load service page:", error);
    notFound();
  }
}
