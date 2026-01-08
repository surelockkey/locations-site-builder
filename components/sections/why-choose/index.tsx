// Master WhyChoose component with variant selector
import WhyChooseVariant1 from "./WhyChooseVariant1"
import WhyChooseVariant2 from "./WhyChooseVariant2"
import WhyChooseVariant3 from "./WhyChooseVariant3"
import WhyChooseVariant4 from "./WhyChooseVariant4"

interface WhyChooseProps {
  variant: string
  data: any
}

export default function WhyChoose({ variant, data }: WhyChooseProps) {
  switch (variant) {
    case "variant2":
      return <WhyChooseVariant2 data={data} />
    case "variant3":
      return <WhyChooseVariant3 data={data} />
    case "variant4":
      return <WhyChooseVariant4 data={data} />
    case "variant1":
    default:
      return <WhyChooseVariant1 data={data} />
  }
}

export { WhyChoose as WhyChooseSection }
