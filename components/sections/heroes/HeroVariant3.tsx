// Diagonal split modern
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroVariantsProps } from ".";
import { SiteConfig } from "@/types/config.types";

interface HeroVariant3Props {
  data: HeroVariantsProps;
  siteConfig?: SiteConfig;
}

export default function HeroVariant3({ data, siteConfig }: HeroVariant3Props) {
  // Use global phone number for phone CTAs
  const primaryLink = data.ctaPrimary?.type === "phone" && siteConfig?.contact.phone
    ? `tel:${siteConfig.contact.phone}`
    : data.ctaPrimary?.link;

  const secondaryLink = data.ctaSecondary?.type === "phone" && siteConfig?.contact.phone
    ? `tel:${siteConfig.contact.phone}`
    : data.ctaSecondary?.link;
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="relative z-10 space-y-6">
            <div
              className="inline-block rounded-full px-4 py-1 text-sm font-medium"
              style={{ backgroundColor: "var(--color-accent)", color: "white" }}
            >
              Professional Service
            </div>
            <h1
              className="text-5xl font-extrabold leading-tight lg:text-6xl text-balance"
              style={{ color: "var(--color-text)" }}
            >
              {data.title}
            </h1>
            {data.subtitle && (
              <p
                className="text-xl text-pretty"
                style={{ color: "var(--color-neutral)" }}
              >
                {data.subtitle}
              </p>
            )}
            {data.description && (
              <p className="text-lg" style={{ color: "var(--color-neutral)" }}>
                {data.description}
              </p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row">
              {data.ctaPrimary && (
                <Button asChild size="lg" className="text-lg rounded-full">
                  <Link href={primaryLink as string}>
                    {data.ctaPrimary.text}
                  </Link>
                </Button>
              )}
              {data.ctaSecondary && (
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="text-lg rounded-full"
                >
                  <Link href={secondaryLink as string}>
                    {data.ctaSecondary.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Image with Diagonal Clip */}
          <div className="relative">
            <div className="relative h-[450px] lg:h-[550px] overflow-hidden">
              <div className="absolute inset-0 rotate-3 scale-105 transform">
                <Image
                  src={data.image || "/placeholder.svg"}
                  alt={data.imageAlt || data.title}
                  fill
                  className="rounded-3xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div
              className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-50 blur-3xl"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <div
              className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-50 blur-3xl"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
