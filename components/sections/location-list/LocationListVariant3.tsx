"use client"

import Link from "next/link"
import { MapPin, Phone, ArrowRight } from "lucide-react"

interface Location {
  slug: string
  title: string
  address: string
  phone: string
  image?: string
}

interface LocationListVariant3Props {
  data: {
    locations: Location[]
  }
}

export default function LocationListVariant3({ data }: LocationListVariant3Props) {
  const locations = data?.locations || []

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.slug}
              className="group flex gap-4 bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {location.image && (
                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link href={`/locations/${location.slug}`}>
                    <h3
                      className="text-xl font-semibold mb-2 group-hover:underline"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {location.title}
                    </h3>
                  </Link>
                  <div className="flex items-start gap-2 mb-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                    <a
                      href={`tel:${location.phone}`}
                      className="hover:underline"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
                <Link
                  href={`/locations/${location.slug}`}
                  className="flex items-center gap-2 mt-4 text-sm"
                  style={{ color: "var(--color-primary)" }}
                >
                  View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
