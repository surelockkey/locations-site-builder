import { Card } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

interface ServiceAreasVariant1Props {
  title?: string
  description?: string
  mapImage?: string
  areas?: string[]
  centerLocation?: string
}

export default function ServiceAreasVariant1({
  title = "Areas We Cover",
  description,
  mapImage = "/placeholder.svg?height=400&width=800",
  areas = [],
  centerLocation,
}: ServiceAreasVariant1Props) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
        {description && (
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{description}</p>
        )}

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden">
            <div className="relative w-full h-[400px]">
              <Image src={mapImage || "/placeholder.svg"} alt="Service area map" fill className="object-cover" />
            </div>
          </Card>

          <div>
            {centerLocation && (
              <div className="flex items-start gap-3 mb-6 p-4 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Service Center</h3>
                  <p className="text-muted-foreground">{centerLocation}</p>
                </div>
              </div>
            )}

            {areas.length > 0 && (
              <div>
                <h3 className="font-semibold text-xl mb-4">We Serve These Areas:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
