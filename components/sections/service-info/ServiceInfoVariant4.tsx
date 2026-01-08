import { Check } from "lucide-react"
import { SiteConfig } from "@/types/config.types"
import ServiceInfoCTA from "./ServiceInfoCTA"

interface ServiceInfoVariant4Props {
  data: {
    title?: string
    description?: string
    items?: string[]
    cards?: Array<{
      title: string
      items: string[]
    }>
    cta?: {
      question?: string
      subtitle?: string
      description?: string
      buttonText?: string
      phoneNumber?: string
    }
  }
  siteConfig?: SiteConfig
}

export default function ServiceInfoVariant4({ data, siteConfig }: ServiceInfoVariant4Props) {
  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
                {data.title}
              </h2>
            )}

            {data.description && (
              <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
                {data.description}
              </p>
            )}

            {data.cards ? (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {data.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="rounded-xl p-6 border-2"
                    style={{ borderColor: "var(--color-primary)" }}
                  >
                    <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
                      {card.title}
                    </h3>
                    <div className="space-y-4">
                      {card.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3 group">
                          <div
                            className="w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : data.items ? (
              <div className="mb-12">
                <div className="rounded-xl p-6 border-2" style={{ borderColor: "var(--color-primary)" }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 group">
                        <div
                          className="w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: "var(--color-primary)" }}
                        >
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {data.cta && <ServiceInfoCTA cta={data.cta} siteConfig={siteConfig} variant="bordered" />}
          </div>
        </div>
      </div>
    </section>
  )
}
