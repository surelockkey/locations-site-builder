"use client"

import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

interface Location {
  slug: string
  title: string
  address: string
  phone: string
  image?: string
}

interface LocationListVariant4Props {
  data: {
    locations: Location[]
  }
}

export default function LocationListVariant4({ data }: LocationListVariant4Props) {
  const locations = data?.locations || []

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "var(--color-muted)" }}>
      <div className="container mx-auto max-w-5xl">
        {locations.map((location, index) => (
          <div
            key={location.slug}
            className={`group flex flex-col md:flex-row gap-6 bg-white rounded-lg p-8 mb-6 hover:shadow-2xl transition-all duration-300 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <Link href={`/locations/${location.slug}`} className="md:w-1/3">
              {location.image && (
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </Link>
            <div className="md:w-2/3 flex flex-col justify-center">
              <Link href={`/locations/${location.slug}`}>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-primary)" }}>
                  {location.title}
                </h3>
              </Link>
              <div className="flex items-start gap-3 mb-3 text-gray-600">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <p>{location.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                <a
                  href={`tel:${location.phone}`}
                  className="text-lg font-semibold hover:underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  {location.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
