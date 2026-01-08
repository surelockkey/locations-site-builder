// Master Brands component with variant selector
import BrandsVariant1 from "./BrandsVariant1"
import BrandsVariant2 from "./BrandsVariant2"
import BrandsVariant3 from "./BrandsVariant3"
import BrandsVariant4 from "./BrandsVariant4"

interface BrandsProps {
  variant: string
  data: any
}

export default function Brands({ variant, data }: BrandsProps) {
  switch (variant) {
    case "variant2":
      return <BrandsVariant2 data={data} />
    case "variant3":
      return <BrandsVariant3 data={data} />
    case "variant4":
      return <BrandsVariant4 data={data} />
    case "variant1":
    default:
      return <BrandsVariant1 data={data} />
  }
}

export { Brands as BrandsSection }
