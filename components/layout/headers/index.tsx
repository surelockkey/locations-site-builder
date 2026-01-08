import { HeaderVariant1 } from "./HeaderVariant1"
import { HeaderVariant2 } from "./HeaderVariant2"
import { HeaderVariant3 } from "./HeaderVariant3"
import { HeaderVariant4 } from "./HeaderVariant4"

interface HeaderProps {
  variant?: string
  branding: {
    companyName: string
    shortName: string
    logo?: string
    logoAlt?: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    address: string
  }
  navigation: Array<{
    label: string
    href: string
  }>
}

export function Header({ variant = "variant1", ...props }: HeaderProps) {
  switch (variant) {
    case "variant2":
      return <HeaderVariant2 {...props} />
    case "variant3":
      return <HeaderVariant3 {...props} />
    case "variant4":
      return <HeaderVariant4 {...props} />
    default:
      return <HeaderVariant1 {...props} />
  }
}

export { HeaderVariant1, HeaderVariant2, HeaderVariant3, HeaderVariant4 }
