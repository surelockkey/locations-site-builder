import { Check } from "lucide-react"
import { SiteConfig } from "@/types/config.types"
import ServiceInfoCTA from "./ServiceInfoCTA"

interface ServiceInfoVariant3Props {
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

export default function ServiceInfoVariant3({ data, siteConfig }: ServiceInfoVariant3Props) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {data.title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
                {data.title}
              </h2>
            )}
            {data.description && (
              <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
                {data.description}
              </p>
            )}
          </div>

          {data.cards ? (
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {data.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: "var(--color-background)",
                    borderLeft: "4px solid var(--color-primary)",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
                    {card.title}
                  </h3>
                  <div className="space-y-4">
                    {card.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <Check className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--color-primary)" }} />
                        <span className="text-lg" style={{ color: "var(--color-text)" }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : data.items ? (
            <div className="mb-8">
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderLeft: "4px solid var(--color-primary)",
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {data.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-4">
                      <Check className="w-6 h-6 shrink-0 mt-0.5" style={{ color: "var(--color-primary)" }} />
                      <span className="text-lg" style={{ color: "var(--color-text)" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {data.cta && <ServiceInfoCTA cta={data.cta} siteConfig={siteConfig} variant="primary" />}
        </div>
      </div>
    </section>
  )
}
