// Master FAQ component with variant selector
import FAQVariant1 from "./FAQVariant1"
import FAQVariant2 from "./FAQVariant2"
import FAQVariant3 from "./FAQVariant3"
import FAQVariant4 from "./FAQVariant4"

interface FAQProps {
  variant: string
  data: any
}

export default function FAQ({ variant, data }: FAQProps) {
  switch (variant) {
    case "variant2":
      return <FAQVariant2 data={data} />
    case "variant3":
      return <FAQVariant3 data={data} />
    case "variant4":
      return <FAQVariant4 data={data} />
    case "variant1":
    default:
      return <FAQVariant1 data={data} />
  }
}

export { FAQ as FAQSection }
