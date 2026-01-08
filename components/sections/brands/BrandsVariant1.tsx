// Logo grid static
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BrandsVariant1Props {
  data: {
    title: string
    description?: string
    brands: Array<{
      name: string
      logo: string
    }>
    cta?: { text: string; link: string }
    note?: string
  }
}

export default function BrandsVariant1({ data }: BrandsVariant1Props) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">{data.title}</h2>
            {data.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">{data.description}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {data.brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 border rounded-lg hover:shadow-md transition-shadow bg-gray-50"
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>

          {data.note && <p className="text-center text-sm text-gray-600 mb-6">{data.note}</p>}

          {data.cta && (
            <div className="text-center">
              <Button asChild size="lg">
                <Link href={data.cta.link}>{data.cta.text}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
