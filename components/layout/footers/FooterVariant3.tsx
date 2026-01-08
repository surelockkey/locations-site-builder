import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";
import type { FooterConfig } from "@/types/config.types";

interface FooterProps {
  branding: {
    companyName: string;
    shortName: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: string;
  };
  services: Array<{
    title: string;
    slug: string;
  }>;
  footerConfig: FooterConfig;
}

export function FooterVariant3({ branding, contact, services, footerConfig }: FooterProps) {
  return (
    <footer style={{ backgroundColor: "var(--color-background)" }}>
      <div
        style={{
          background:
            "linear-gradient(90deg, var(--color-accent), var(--color-primary))",
          color: "white",
        }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-3">
              {footerConfig.emergencyTitle}
            </h3>
            <p className="mb-6 text-white/90 text-lg">
              {footerConfig.emergencySubtitle}
            </p>
            <a
              href={`tel:${contact.phone}`}
              className="inline-block text-4xl font-bold hover:underline tracking-wide"
            >
              {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              {branding.shortName}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin
                  className="h-4 w-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <span style={{ color: "var(--color-text)" }}>
                  {contact.address}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail
                  className="h-4 w-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <a
                  href={`mailto:${contact.email}`}
                  style={{ color: "var(--color-text)" }}
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock
                  className="h-4 w-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <span style={{ color: "var(--color-text)" }}>{footerConfig.availability}</span>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {footerConfig.navigation.services.title}
            </h4>
            <ul className="space-y-2">
              {services.slice(0, footerConfig.navigation.services.limit).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:opacity-70"
                    style={{ color: "var(--color-neutral)" }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {footerConfig.navigation.quickLinks.title}
            </h4>
            <ul className="space-y-2">
              {footerConfig.navigation.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-70"
                    style={{ color: "var(--color-neutral)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 text-center text-sm"
          style={{ color: "var(--color-neutral)" }}
        >
          <p>
            © {new Date().getFullYear()} {branding.companyName}. {footerConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
