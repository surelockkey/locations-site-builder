// Marquee-style scrolling variant
import Image from "next/image"

interface Brand {
  name: string
  logo: string
}

interface BrandsWeServeVariant4Props {
  title?: string
  description?: string
  brands: Brand[]
}

export default function BrandsWeServeVariant4({ title, description, brands }: BrandsWeServeVariant4Props) {
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
        {description && <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">{description}</p>}
      </div>

      <div className="relative">
        <div className="flex gap-12 animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div key={index} className="relative w-32 h-16 flex-shrink-0">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
