import { Phone, Mail, Clock, MapPin } from "lucide-react"

interface ContactInfoVariant3Props {
  data?: {
    phone?: string
    email?: string
    areasAndHours?: {
      display?: string
    }
    address?: string
  }
}

export default function ContactInfoVariant3({ data }: ContactInfoVariant3Props) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
          Get In Touch
        </h2>
        <p className="text-lg" style={{ color: "var(--color-text)" }}>
          We're here to help 7 days a week
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-muted)" }}>
              Phone
            </p>
            <a
              href={`tel:${data?.phone}`}
              className="text-2xl font-bold hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              {data?.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: "var(--color-secondary)", color: "white" }}>
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-muted)" }}>
              Email
            </p>
            <a
              href={`mailto:${data?.email}`}
              className="text-lg font-semibold hover:underline"
              style={{ color: "var(--color-primary)" }}
            >
              {data?.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full" style={{ backgroundColor: "var(--color-accent)", color: "white" }}>
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-muted)" }}>
              Working Hours
            </p>
            <p className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>
              {data?.areasAndHours?.display}
            </p>
          </div>
        </div>

        {data?.address && (
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full" style={{ backgroundColor: "var(--color-primary)", color: "white" }}>
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium mb-1" style={{ color: "var(--color-muted)" }}>
                Location
              </p>
              <p className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>
                {data?.address}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
