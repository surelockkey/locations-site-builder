// Modern bento grid layout with dynamic sizing
import { ArrowRight, Car, Lock, AlertCircle, Sparkles } from "lucide-react"
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

interface ServiceListVariant3Props {
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

export default function ServiceListVariant3({ data }: ServiceListVariant3Props) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {data.title && (
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-balance text-gray-900">
              {data.title}
            </h2>
          )}
          {data.description && (
            <p className="text-lg mb-16 text-center text-pretty max-w-3xl mx-auto text-gray-600">
              {data.description}
            </p>
          )}

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.services.map((service, index) => {
              if (typeof service === "string") {
                return (
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
                )
              }

              const imageUrl =
                service.image || `/placeholder.svg?height=500&width=600&query=${encodeURIComponent(service.title)}`
              const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : Lock

              return (
                <Link
                  key={service.id || index}
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

                  <div className="relative h-full min-h-[300px] p-6 md:p-8 flex flex-col justify-end text-white">
                    <div className="mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                        <Icon className="h-8 w-8 md:h-10 md:w-10" />
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-2 transition-all duration-300">
                      {service.title}
                    </h3>

                    {service.description && (
                      <p className="text-white/90 text-sm mb-4 transition-all duration-300 line-clamp-2">
                        {service.description}
                      </p>
                    )}

                    <div className="flex items-center gap-2 font-semibold text-sm">
                      <span className="group-hover:underline">Learn More</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
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

          {data.note && (
            <p className="text-center text-sm italic mb-8 text-gray-600 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full mx-auto w-fit">
              {data.note}
            </p>
          )}

          {data.cta && (
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                style={{ backgroundColor: "var(--color-primary)", color: "white" }}
              >
                <Link href={data.cta.link}>{data.cta.text}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
