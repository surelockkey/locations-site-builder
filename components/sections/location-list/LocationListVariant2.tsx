"use client"

import Link from "next/link"
import { MapPin, Phone, ChevronRight } from "lucide-react"

interface Location {
  slug: string
  title: string
  address: string
  phone: string
  image?: string
}

interface LocationListVariant2Props {
  data: {
    locations: Location[]
  }
}

export default function LocationListVariant2({ data }: LocationListVariant2Props) {
  const locations = data?.locations || []

  return (
    <section className="py-16 px-4" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-4">
          {locations.map((location) => (
            <div
              key={location.slug}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <Link href={`/locations/${location.slug}`} className="block">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-primary)" }}>
                      {location.title}
                    </h3>
                    <div className="flex items-start gap-2 mb-2 text-gray-600">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                      <p className="text-sm">{location.address}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                <a
                  href={`tel:${location.phone}`}
                  className="text-sm hover:underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  {location.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
