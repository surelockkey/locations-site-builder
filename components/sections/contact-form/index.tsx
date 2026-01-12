import { SiteConfig } from "@/types/config.types";
import ContactFormVariant1 from "./ContactFormVariant1";
import ContactFormVariant2 from "./ContactFormVariant2";
import ContactFormVariant3 from "./ContactFormVariant3";
import ContactFormVariant4 from "./ContactFormVariant4";

interface ContactFormProps {
  variant?: number;
  siteConfig?: SiteConfig;

  [key: string]: unknown;
}

export default function ContactForm({
  variant = 1,
  siteConfig,
  ...props
}: ContactFormProps) {
  // Extract contact info from siteConfig
  const contactProps = siteConfig?.contact
    ? {
        phone: siteConfig.contact.phoneDisplay,
        email: siteConfig.contact.email,
        address: siteConfig.contact.address,
      }
    : {};

  // Merge contactProps with any explicitly passed props (explicit props take precedence)
  const mergedProps = {
    ...contactProps,
    ...props,
    siteConfig,
  };

  switch (variant) {
    case 2:
      return <ContactFormVariant2 {...mergedProps} />;
    case 3:
      return <ContactFormVariant3 {...mergedProps} />;
    case 4:
      return <ContactFormVariant4 {...mergedProps} />;
    case 1:
    default:
      return <ContactFormVariant1 {...mergedProps} />;
  }
}

export { ContactForm };
