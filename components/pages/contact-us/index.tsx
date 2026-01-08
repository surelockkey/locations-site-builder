import ContactUsPageVariant1 from "./ContactUsPageVariant1";
import ContactUsPageVariant2 from "./ContactUsPageVariant2";
import ContactUsPageVariant3 from "./ContactUsPageVariant3";
import ContactUsPageVariant4 from "./ContactUsPageVariant4";
import type { PageConfig, SiteConfig } from "@/types/config.types";
import type { ContactConfig } from "@/types/config.types";

interface ContactUsPageProps {
  siteConfig: SiteConfig;
  contactConfig: PageConfig;
  variant?: string;
}

export default function ContactUsPage({
  siteConfig,
  contactConfig,
  variant = "1",
}: ContactUsPageProps) {
  const props = { siteConfig, contactConfig };

  switch (variant) {
    case "2":
      return <ContactUsPageVariant2 {...props} />;
    case "3":
      return <ContactUsPageVariant3 {...props} />;
    case "4":
      return <ContactUsPageVariant4 {...props} />;
    case "1":
    default:
      return <ContactUsPageVariant1 {...props} />;
  }
}
