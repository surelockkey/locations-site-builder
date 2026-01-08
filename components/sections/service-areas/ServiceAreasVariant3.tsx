// Map-centered variant with grid areas
import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ServiceAreasVariant3Props {
  title?: string
  description?: string
  mapImage?: string
  areas?: string[]
  centerLocation?: string
}

export default function ServiceAreasVariant3({
  title = "Areas We Cover",
  description,
  mapImage = "/world-map-vintage.png",
  areas = [],
  centerLocation,
}: ServiceAreasVariant3Props) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
        {description && (
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{description}</p>
        )}

        <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-8">
          <Image src={mapImage || "/placeholder.svg"} alt="Service area map" fill className="object-cover" />
          {centerLocation && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">{centerLocation}</span>
              </div>
            </div>
          )}
        </div>

        {areas.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {areas.map((area, index) => (
              <Card key={index} className="p-3 text-center hover:shadow-md hover:border-primary transition-all">
                <span className="text-sm font-medium">{area}</span>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
