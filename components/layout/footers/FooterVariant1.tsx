import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { SocialIcons } from "@/components/common/SocialIcons"
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

export function FooterVariant1({ branding, contact, services, footerConfig }: FooterProps) {
  return (
    <footer className="border-t" style={{ backgroundColor: "var(--color-footer-bg)" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">{branding.shortName}</h3>
            <p className="text-sm mb-4 text-white/80">
              {footerConfig.description}
            </p>
            <SocialIcons
              socialMedia={footerConfig.socialMedia}
              iconClassName="h-5 w-5 text-white"
            />
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{footerConfig.navigation.services.title}</h4>
            <ul className="space-y-2">
              {services.slice(0, footerConfig.navigation.services.limit).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:opacity-70 text-white/70 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{footerConfig.navigation.quickLinks.title}</h4>
            <ul className="space-y-2">
              {footerConfig.navigation.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:opacity-70 text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1" style={{ color: "var(--color-primary)" }} />
                <a href={`tel:${contact.phone}`} className="text-sm hover:opacity-70 text-white/70 hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1" style={{ color: "var(--color-primary)" }} />
                <a href={`mailto:${contact.email}`} className="text-sm hover:opacity-70 text-white/70 hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" style={{ color: "var(--color-primary)" }} />
                <span className="text-sm text-white/70">{contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1" style={{ color: "var(--color-primary)" }} />
                <span className="text-sm text-white/70">{footerConfig.availability}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          {footerConfig.navigation.legal && (
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {footerConfig.navigation.legal.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:opacity-70 text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <p className="text-sm text-white/70 text-center">
            © {new Date().getFullYear()} {branding.companyName}. {footerConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
