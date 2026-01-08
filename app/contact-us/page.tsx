import { getSiteConfig, getPageConfig } from "@/lib/config-loader";
import ContactUsPage from "@/components/pages/contact-us";

export async function generateMetadata() {
  const [contactConfig, siteConfig] = await Promise.all([
    getPageConfig("contact-us"),
    getSiteConfig(),
  ]);

  const canonicalUrl = `https://${siteConfig.domain}/contact-us`;

  return {
    title: (contactConfig as any).title || "Contact Us",
    description: (contactConfig as any).description || "Get in touch with us",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: (contactConfig as any).title || "Contact Us",
      description: (contactConfig as any).description || "Get in touch with us",
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
