// Badge-style variant with featured location
import { MapPin, CheckCircle } from "lucide-react"

interface ServiceAreasVariant4Props {
  title?: string
  description?: string
  mapImage?: string
  areas?: string[]
  centerLocation?: string
}

export default function ServiceAreasVariant4({
  title = "Areas We Cover",
  description,
  areas = [],
  centerLocation,
}: ServiceAreasVariant4Props) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
          {description && <p className="text-lg text-muted-foreground text-center mb-8">{description}</p>}

          {centerLocation && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold text-lg">Based in {centerLocation}</span>
              </div>
            </div>
          )}

          {areas.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 bg-muted hover:bg-muted/80 border px-4 py-2 rounded-full transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
