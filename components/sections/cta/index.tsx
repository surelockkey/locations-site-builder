// Master CTA component with variant selector
import { SiteConfig } from "@/types/config.types"
import CTAVariant1 from "./CTAVariant1"
import CTAVariant2 from "./CTAVariant2"
import CTAVariant3 from "./CTAVariant3"
import CTAVariant4 from "./CTAVariant4"

interface CTAProps {
  variant: string
  data: any
  siteConfig?: SiteConfig
}

export default function CTA({ variant, data, siteConfig }: CTAProps) {
  switch (variant) {
    case "variant2":
      return <CTAVariant2 data={data} siteConfig={siteConfig} />
    case "variant3":
      return <CTAVariant3 data={data} />
    case "variant4":
      return <CTAVariant4 data={data} />
    case "variant1":
    default:
      return <CTAVariant1 data={data} />
  }
}

export { CTA as CTASection }
