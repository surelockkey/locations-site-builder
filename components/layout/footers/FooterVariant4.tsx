import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export function FooterVariant4({ branding, contact, services, footerConfig }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t-4"
      style={{ backgroundColor: "var(--color-footer-bg)", borderColor: "var(--color-primary)" }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="inline-block mb-6 p-4 rounded-2xl" style={{ backgroundColor: "var(--color-primary)" }}>
              <h3 className="text-3xl font-bold text-white">{branding.shortName}</h3>
            </div>
            <p className="text-base mb-8 leading-relaxed text-white/80">
              {footerConfig.tagline}
            </p>
            <SocialIcons
              socialMedia={footerConfig.socialMedia}
              variant="rounded"
              iconClassName="h-6 w-6 text-white"
              className="flex gap-4 mb-8"
            />
            <Button
              size="lg"
              className="text-lg px-8"
              style={{ backgroundColor: "var(--color-accent)", color: "white" }}
              asChild
            >
              <a href={`tel:${contact.phone}`}>
                <Phone className="h-5 w-5 mr-2" />
                {footerConfig.emergencyButtonText}
              </a>
            </Button>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{footerConfig.navigation.services.title}</h4>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
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
            <h4 className="font-semibold mb-4 text-white">{footerConfig.navigation.company.title}</h4>
            <ul className="space-y-2">
              {footerConfig.navigation.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:opacity-70 text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
                <a href={`tel:${contact.phone}`} className="hover:opacity-70 text-white/70 hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
                <a href={`mailto:${contact.email}`} className="hover:opacity-70 text-white/70 hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" style={{ color: "var(--color-primary)" }} />
                <span className="text-white/70">{contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {currentYear} {branding.companyName}. {footerConfig.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            {footerConfig.navigation.legal.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:opacity-70 text-white/70 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
