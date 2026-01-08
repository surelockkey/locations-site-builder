import { Phone, Mail, Clock } from "lucide-react"

interface ContactInfoVariant4Props {
  data?: {
    phone?: string
    email?: string
    areasAndHours?: {
      display?: string
    }
  }
}

export default function ContactInfoVariant4({ data }: ContactInfoVariant4Props) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--color-text)" }}>
        Contact Information
      </h2>

      <div className="space-y-8">
        <div className="border-l-4 pl-6" style={{ borderColor: "var(--color-primary)" }}>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>
              Phone
            </span>
          </div>
          <a
            href={`tel:${data?.phone}`}
            className="text-2xl font-bold hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            {data?.phone}
          </a>
        </div>

        <div className="border-l-4 pl-6" style={{ borderColor: "var(--color-secondary)" }}>
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5" style={{ color: "var(--color-secondary)" }} />
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>
              Email
            </span>
          </div>
          <a
            href={`mailto:${data?.email}`}
            className="text-xl font-semibold hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            {data?.email}
          </a>
        </div>

        <div className="border-l-4 pl-6" style={{ borderColor: "var(--color-accent)" }}>
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>
              Hours
            </span>
          </div>
          <p className="text-lg font-medium" style={{ color: "var(--color-text)" }}>
            {data?.areasAndHours?.display}
          </p>
        </div>
      </div>
    </div>
  )
}
