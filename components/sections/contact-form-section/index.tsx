import { SiteConfig } from "@/types/config.types"
import ContactFormSectionVariant1 from "./ContactFormSectionVariant1"
import ContactFormSectionVariant2 from "./ContactFormSectionVariant2"
import ContactFormSectionVariant3 from "./ContactFormSectionVariant3"
import ContactFormSectionVariant4 from "./ContactFormSectionVariant4"

interface ContactFormSectionProps {
  variant?: string
  data?: any
  siteConfig?: SiteConfig
}

export default function ContactFormSection({ variant = "1", data, siteConfig }: ContactFormSectionProps) {
  switch (variant) {
    case "1":
    case "variant1":
      return <ContactFormSectionVariant1 data={data} siteConfig={siteConfig} />
    case "2":
    case "variant2":
      return <ContactFormSectionVariant2 data={data} siteConfig={siteConfig} />
    case "3":
    case "variant3":
      return <ContactFormSectionVariant3 data={data} siteConfig={siteConfig} />
    case "4":
    case "variant4":
      return <ContactFormSectionVariant4 data={data} siteConfig={siteConfig} />
    default:
      return <ContactFormSectionVariant1 data={data} siteConfig={siteConfig} />
  }
}
