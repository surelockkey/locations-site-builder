import { HelpCircle, Phone } from "lucide-react"
import Link from "next/link"
import { SiteConfig } from "@/types/config.types"

interface ServiceInfoCTAProps {
  cta: {
    title?: string
    question?: string
    subtitle?: string
    description?: string
    buttonText?: string
    phoneNumber?: string
  }
  siteConfig?: SiteConfig
  variant?: "default" | "centered" | "primary" | "bordered"
}

export default function ServiceInfoCTA({ cta, siteConfig, variant = "default" }: ServiceInfoCTAProps) {
  const phoneNumber = cta.phoneNumber || siteConfig?.contact.phone

  if (variant === "centered") {
    return (
      <div className="text-center">
        {(cta.question || cta.title) && (
          <p className="text-xl font-semibold text-gray-900 mb-2">{cta.question || cta.title}</p>
        )}
        {cta.subtitle && <p className="text-gray-600 mb-2">{cta.subtitle}</p>}
        {cta.description && (
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{cta.description}</p>
        )}
        {phoneNumber && (
          <Link
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity text-lg"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <Phone className="w-6 h-6" />
            {cta.buttonText || "Call us now"}
          </Link>
        )}
      </div>
    )
  }

  if (variant === "primary") {
    return (
      <div
        className="rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ backgroundColor: "var(--color-primary)", color: "white" }}
      >
        <div>
          {(cta.question || cta.title) && (
            <h3 className="text-2xl font-bold mb-2">{cta.question || cta.title}</h3>
          )}
          {cta.subtitle && <p className="text-white/90 mb-2">{cta.subtitle}</p>}
          {cta.description && <p className="text-white/90">{cta.description}</p>}
        </div>
        {phoneNumber && (
          <Link
            href={`tel:${phoneNumber}`}
            className="px-8 py-4 bg-white rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap"
            style={{ color: "var(--color-primary)" }}
          >
            <Phone className="w-5 h-5" />
            {cta.buttonText || "Call us now"}
          </Link>
        )}
      </div>
    )
  }

  if (variant === "bordered") {
    return (
      <div className="border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            {(cta.question || cta.title) && (
              <h3 className="text-xl font-bold mb-1" style={{ color: "var(--color-text)" }}>
                {cta.question || cta.title}
              </h3>
            )}
            {cta.subtitle && (
              <p className="mb-1" style={{ color: "var(--color-text-muted)" }}>
                {cta.subtitle}
              </p>
            )}
            {cta.description && <p style={{ color: "var(--color-text-muted)" }}>{cta.description}</p>}
          </div>
          {phoneNumber && (
            <Link
              href={`tel:${phoneNumber}`}
              className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <Phone className="w-5 h-5" />
              {cta.buttonText || "Call us now"}
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto border border-gray-200">
      <div className="flex items-center gap-4">
        <HelpCircle
          className="w-12 h-12 flex-shrink-0"
          style={{ color: "var(--color-primary)" }}
        />
        <div>
          {(cta.title || cta.question) && (
            <h3 className="text-xl font-semibold text-gray-600 mb-1">
              {cta.title || cta.question}
            </h3>
          )}
          {cta.subtitle && <p className="text-gray-600 mb-1">{cta.subtitle}</p>}
          {cta.description && <p className="text-gray-600">{cta.description}</p>}
        </div>
      </div>
      {cta.buttonText && phoneNumber && (
        <Link
          href={`tel:${phoneNumber}`}
          className="px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <Phone className="w-5 h-5" />
          {cta.buttonText}
        </Link>
      )}
    </div>
  )
}
