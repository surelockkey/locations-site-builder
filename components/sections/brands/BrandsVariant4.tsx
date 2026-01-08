// Interactive cards with hover info
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BrandsVariant4Props {
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

export default function BrandsVariant4({ data }: BrandsVariant4Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">{data.title}</h2>
            {data.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">{data.description}</p>
            )}
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {data.brands.map((brand, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="relative h-20 w-full mb-2">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <p className="text-center text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors">
                    {brand.name}
                  </p>
                </CardContent>
              </Card>
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
