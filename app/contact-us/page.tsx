import { getSiteConfig, getPageConfig } from "@/lib/config-loader";
import ContactUsPage from "@/components/pages/contact-us";

export async function generateMetadata() {
  const [contactConfig, siteConfig] = await Promise.all([
    getPageConfig("contact-us"),
    getSiteConfig(),
  ]);

  const canonicalUrl = `https://${siteConfig.domain}/contact-us`;

  return {
    title: (contactConfig as any).seo?.title || (contactConfig as any).title || "Contact Us",
    description: (contactConfig as any).seo?.description || (contactConfig as any).description || "Get in touch with us",
    keywords: (contactConfig as any).seo?.keywords,
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: (contactConfig as any).seo?.title || (contactConfig as any).title || "Contact Us",
      description: (contactConfig as any).seo?.description || (contactConfig as any).description || "Get in touch with us",
      url: canonicalUrl,
    },
  };
}

export default async function ContactUsRoute({
  searchParams,
}: {
  searchParams: { variant?: string };
}) {
  const siteConfig = await getSiteConfig();

  const contactConfig = await getPageConfig("contact-us");

  const variant = siteConfig.variants.contact_us_page;

  return (
    <ContactUsPage
      siteConfig={siteConfig}
      contactConfig={contactConfig}
      variant={variant}
    />
  );
}
