import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { FooterConfig } from "@/types/config.types"

interface FooterProps {
  branding: {
    companyName: string
    shortName: string
  }
  contact: {
    phone: string
    phoneDisplay: string
    email: string
    address: string
  }
  services: Array<{
    title: string
    slug: string
  }>
  footerConfig: FooterConfig
}

export function FooterVariant2({ branding, contact, services, footerConfig }: FooterProps) {
  return (
    <footer
      style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", color: "white" }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">{branding.companyName}</h2>
            <p className="text-white/90 mb-8 text-lg max-w-md">
              {footerConfig.description}
            </p>
            <Button
              size="lg"
              className="text-lg px-8"
              style={{ backgroundColor: "white", color: "var(--color-primary)" }}
              asChild
            >
              <a href={`tel:${contact.phone}`}>
                <Phone className="h-5 w-5 mr-2" />
                {footerConfig.callButtonText} {contact.phoneDisplay}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">{footerConfig.navigation.services.title}</h4>
              <ul className="space-y-2">
                {services.slice(0, footerConfig.navigation.services.limit).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-sm text-white/80 hover:text-white">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${contact.phone}`} className="hover:text-white">
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>{contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>
            © {new Date().getFullYear()} {branding.companyName}. {footerConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
