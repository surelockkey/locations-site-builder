// Card-based variant with hover effects
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface Brand {
  name: string
  logo: string
}

interface BrandsWeServeVariant3Props {
  title?: string
  description?: string
  brands: Brand[]
}

export default function BrandsWeServeVariant3({ title, description, brands }: BrandsWeServeVariant3Props) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h2>}
        {description && (
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">{description}</p>
        )}

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="p-4 flex flex-col items-center justify-center hover:shadow-md hover:border-primary transition-all group"
            >
              <div className="relative w-full h-12 mb-2">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                {brand.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
