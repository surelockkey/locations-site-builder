import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface ServiceItem {
  id?: string
  title: string
  description?: string
  icon?: string
  image?: string
  link?: string
  featured?: boolean
}

interface ServiceListVariant1Props {
  data: {
    title?: string
    description?: string
    services: (string | ServiceItem)[]
    cta?: { text: string; link: string }
    note?: string
  }
}

export default function ServiceListVariant1({ data }: ServiceListVariant1Props) {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {data.title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">{data.title}</h2>
            {data.description && (
              <p className="text-lg max-w-3xl mx-auto text-pretty text-gray-600">{data.description}</p>
            )}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, index) => {
            if (typeof service === "string") {
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
                  </div>
                </div>
              )
            }

            const imageUrl =
              service.image || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(service.title)}`

            return (
              <Link
                key={service.id || index}
                href={service.link || "#"}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-xl transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  {service.description && <p className="text-sm mb-4 text-gray-600">{service.description}</p>}
                  <span className="font-medium group-hover:underline" style={{ color: "var(--color-primary)" }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {data.note && <p className="text-center text-sm italic mt-8 text-gray-500">{data.note}</p>}

        {data.cta && (
          <div className="text-center mt-12">
            <Button asChild size="lg" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <Link href={data.cta.link}>{data.cta.text}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
