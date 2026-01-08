import { getSiteConfig, getPageConfig } from "@/lib/config-loader";
import ContactUsPage from "@/components/pages/contact-us";

export async function generateMetadata() {
  const contactConfig = await getPageConfig("contact-us");

  return {
    title: contactConfig.title || "Contact Us",
    description: contactConfig.description || "Get in touch with us",
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
