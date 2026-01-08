// List-focused variant with simple layout
import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceAreasVariant2Props {
  title?: string
  description?: string
  mapImage?: string
  areas?: string[]
  centerLocation?: string
}

export default function ServiceAreasVariant2({
  title = "Areas We Cover",
  description,
  areas = [],
  centerLocation,
}: ServiceAreasVariant2Props) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
          {description && <p className="text-lg text-muted-foreground text-center mb-12">{description}</p>}

          {centerLocation && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-xl mb-1">Based in {centerLocation}</h3>
              <p className="text-muted-foreground">Serving the surrounding communities</p>
            </div>
          )}

          {areas.length > 0 && (
            <div className="columns-2 md:columns-3 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2 mb-3 break-inside-avoid">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{area}</span>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="tel:3855334270">
                <Phone className="w-5 h-5 mr-2" />
                Call for Service in Your Area
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
