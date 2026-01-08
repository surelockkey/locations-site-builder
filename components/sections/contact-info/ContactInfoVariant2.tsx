import { Phone, Mail, Clock } from "lucide-react"

interface ContactInfoVariant2Props {
  data?: {
    phone?: string
    email?: string
    areasAndHours?: {
      display?: string
    }
  }
}

export default function ContactInfoVariant2({ data }: ContactInfoVariant2Props) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
        Fastest Way to Reach Us
      </h3>

      <div className="grid gap-6">
        <a
          href={`tel:${data?.phone}`}
          className="flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md"
          style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
        >
          <div className="p-2 rounded-full" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--color-muted)" }}>
              Call Us
            </p>
            <p className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>
              {data?.phone}
            </p>
          </div>
        </a>

        <a
          href={`mailto:${data?.email}`}
          className="flex items-center gap-4 p-4 rounded-lg transition-all hover:shadow-md"
          style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
        >
          <div className="p-2 rounded-full" style={{ backgroundColor: "var(--color-secondary)", color: "white" }}>
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--color-muted)" }}>
              Email
            </p>
            <p className="text-lg font-semibold" style={{ color: "var(--color-primary)" }}>
              {data?.email}
            </p>
          </div>
        </a>

        <div
          className="flex items-center gap-4 p-4 rounded-lg"
          style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
        >
          <div className="p-2 rounded-full" style={{ backgroundColor: "var(--color-accent)", color: "white" }}>
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-medium" style={{ color: "var(--color-muted)" }}>
              Hours
            </p>
            <p className="text-base" style={{ color: "var(--color-text)" }}>
              {data?.areasAndHours?.display}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
