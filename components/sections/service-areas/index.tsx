import ServiceAreasVariant1 from "./ServiceAreasVariant1"
import ServiceAreasVariant2 from "./ServiceAreasVariant2"
import ServiceAreasVariant3 from "./ServiceAreasVariant3"
import ServiceAreasVariant4 from "./ServiceAreasVariant4"

interface ServiceAreasProps {
  variant?: number
  [key: string]: unknown
}

export default function ServiceAreas({ variant = 1, ...props }: ServiceAreasProps) {
  switch (variant) {
    case 2:
      return <ServiceAreasVariant2 {...props} />
    case 3:
      return <ServiceAreasVariant3 {...props} />
    case 4:
      return <ServiceAreasVariant4 {...props} />
    case 1:
    default:
      return <ServiceAreasVariant1 {...props} />
  }
}

export { ServiceAreas }
