import { FooterVariant1 } from "./FooterVariant1"
import { FooterVariant2 } from "./FooterVariant2"
import { FooterVariant3 } from "./FooterVariant3"
import { FooterVariant4 } from "./FooterVariant4"
import type { FooterConfig } from "@/types/config.types"

interface FooterProps {
  variant?: string
  branding: {
    companyName: string
    shortName: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    email: string
    address: string
  }
  services: Array<{
    title: string
    slug: string
  }>
  footerConfig: FooterConfig
}

export function Footer({ variant = "variant1", ...props }: FooterProps) {
  switch (variant) {
    case "variant2":
      return <FooterVariant2 {...props} />
    case "variant3":
      return <FooterVariant3 {...props} />
    case "variant4":
      return <FooterVariant4 {...props} />
    default:
      return <FooterVariant1 {...props} />
  }
}

export { FooterVariant1, FooterVariant2, FooterVariant3, FooterVariant4 }
