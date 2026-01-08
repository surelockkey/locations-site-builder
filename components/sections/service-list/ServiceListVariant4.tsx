// Asymmetric grid with featured card
import { Car, Lock, AlertCircle, ArrowRight, Sparkles } from "lucide-react"
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

interface ServiceListVariant4Props {
  data: {
    title?: string
    description?: string
    services: (string | ServiceItem)[]
    cta?: { text: string; link: string }
    note?: string
  }
}

const iconMap: Record<string, any> = {
  car: Car,
  lock: Lock,
  "alert-circle": AlertCircle,
  sparkles: Sparkles,
}

export default function ServiceListVariant4({ data }: ServiceListVariant4Props) {
  const serviceItems = data.services.filter(s => typeof s !== "string") as ServiceItem[]
  const stringServices = data.services.filter(s => typeof s === "string") as string[]

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-balance text-gray-900">
              {data.title}
            </h2>
          )}
          {data.description && (
            <p className="text-lg mb-16 text-center text-pretty max-w-3xl mx-auto text-gray-600">
              {data.description}
            </p>
          )}

          {serviceItems.length > 0 && (
            <div className="mb-12">
              {/* First section: 1 large card right + 3 cards left in column */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* 3 cards in 1 column on the left */}
                <div className="grid grid-cols-1 gap-6">
                  {serviceItems.slice(0, 3).map((service, idx) => {
                    const imageUrl = service.image || `/placeholder.svg?height=400&width=500&query=${encodeURIComponent(service.title)}`
                    const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Lock

                    return (
                      <Link
                        key={service.id || idx}
                        href={service.link || "#"}
                        className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={imageUrl || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/50 transition-all duration-500" />
                        </div>

                        <div className="relative h-full min-h-[200px] p-6 flex flex-col justify-end text-white">
                          <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                            <div className="inline-flex p-2 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                              <Icon className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold mb-2 transition-all duration-300">
                            {service.title}
                          </h3>

                          {service.description && (
                            <p className="text-white/90 text-xs mb-2 transition-all duration-300 line-clamp-2">
                              {service.description}
                            </p>
                          )}

                          <div className="flex items-center gap-2 font-semibold text-xs">
                            <span className="group-hover:underline">Learn More</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>

                        <div
                          className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        />
                      </Link>
                    )
                  })}
                </div>

                {/* 1 large featured card on the right */}
                {serviceItems[3] && (() => {
                  const service = serviceItems[3]
                  const imageUrl = service.image || `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(service.title)}`
                  const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Lock

                  return (
                    <Link
                      key={service.id || 3}
                      href={service.link || "#"}
                      className="lg:col-span-2 group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
                    >
                      <div className="absolute inset-0">
                        <Image
                          src={imageUrl || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/50 transition-all duration-500" />
                      </div>

                      <div className="relative h-full min-h-[300px] lg:min-h-[624px] p-8 md:p-10 flex flex-col justify-end text-white">
                        <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                          <div className="inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                            <Icon className="h-10 w-10 md:h-12 md:w-12" />
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-4xl font-bold mb-3 transition-all duration-300">
                          {service.title}
                        </h3>

                        {service.description && (
                          <p className="text-white/90 text-base md:text-lg mb-4 transition-all duration-300 line-clamp-3 max-w-2xl">
                            {service.description}
                          </p>
                        )}

                        <div className="flex items-center gap-2 font-semibold text-base">
                          <span className="group-hover:underline">Learn More</span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>

                      <div
                        className="absolute top-0 left-0 w-2 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                    </Link>
                  )
                })()}
              </div>

              {/* Bottom row: 3 cards */}
              {serviceItems.length > 4 && (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {serviceItems.slice(4, 7).map((service, idx) => {
                    const imageUrl = service.image || `/placeholder.svg?height=400&width=500&query=${encodeURIComponent(service.title)}`
                    const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Lock

                    return (
                      <Link
                        key={service.id || idx + 4}
                        href={service.link || "#"}
                        className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={imageUrl || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/50 transition-all duration-500" />
                        </div>

                        <div className="relative h-full min-h-[200px] p-6 flex flex-col justify-end text-white">
                          <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                            <div className="inline-flex p-2 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                              <Icon className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold mb-2 transition-all duration-300">
                            {service.title}
                          </h3>

                          {service.description && (
                            <p className="text-white/90 text-xs mb-2 transition-all duration-300 line-clamp-2">
                              {service.description}
                            </p>
                          )}

                          <div className="flex items-center gap-2 font-semibold text-xs">
                            <span className="group-hover:underline">Learn More</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>

                        <div
                          className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        />
                      </Link>
                    )
                  })}
                </div>
              )}

              {/* Any remaining cards */}
              {serviceItems.length > 7 && (
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                  {serviceItems.slice(7).map((service, idx) => {
                    const imageUrl = service.image || `/placeholder.svg?height=400&width=500&query=${encodeURIComponent(service.title)}`
                    const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Lock

                    return (
                      <Link
                        key={service.id || idx + 7}
                        href={service.link || "#"}
                        className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
                      >
                        <div className="absolute inset-0">
                          <Image
                            src={imageUrl || "/placeholder.svg"}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent group-hover:from-black/70 group-hover:via-black/50 transition-all duration-500" />
                        </div>

                        <div className="relative h-full min-h-[200px] p-6 flex flex-col justify-end text-white">
                          <div className="mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                            <div className="inline-flex p-2 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                              <Icon className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold mb-2 transition-all duration-300">
                            {service.title}
                          </h3>

                          {service.description && (
                            <p className="text-white/90 text-xs mb-2 transition-all duration-300 line-clamp-2">
                              {service.description}
                            </p>
                          )}

                          <div className="flex items-center gap-2 font-semibold text-xs">
                            <span className="group-hover:underline">Learn More</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>

                        <div
                          className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        />
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )}

          {/* String services */}
          {stringServices.length > 0 && (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {stringServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl p-6 transition-all duration-300 bg-white border-2 border-gray-200 hover:border-transparent hover:shadow-xl hover:scale-105"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg transition-colors" style={{ backgroundColor: "var(--color-primary)", opacity: 0.1 }}>
                      <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" style={{ color: "var(--color-primary)" }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {service}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {data.note && (
            <div className="text-center mb-8">
              <p className="text-sm italic text-gray-600 bg-gray-50 inline-block px-8 py-3 rounded-full border border-gray-200">
                {data.note}
              </p>
            </div>
          )}

          {data.cta && (
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                style={{ backgroundColor: "var(--color-primary)", color: "white" }}
              >
                <Link href={data.cta.link} className="flex items-center gap-2">
                  {data.cta.text}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
