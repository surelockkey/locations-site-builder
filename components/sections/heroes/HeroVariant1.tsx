// Classic split - Image left, text right
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroVariantsProps } from ".";
import { SiteConfig } from "@/types/config.types";

interface HeroVariant1Props {
  data: HeroVariantsProps;
  siteConfig?: SiteConfig;
}

export default function HeroVariant1({ data, siteConfig }: HeroVariant1Props) {
  // Use global phone number for phone CTAs
  const primaryLink = data.ctaPrimary?.type === "phone" && siteConfig?.contact.phone
    ? `tel:${siteConfig.contact.phone}`
    : data.ctaPrimary?.link;

  const secondaryLink = data.ctaSecondary?.type === "phone" && siteConfig?.contact.phone
    ? `tel:${siteConfig.contact.phone}`
    : data.ctaSecondary?.link;
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-background), white)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <h1
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              style={{ color: "var(--color-text)" }}
            >
              {data.title}
            </h1>
            {data.subtitle && (
              <p className="text-xl" style={{ color: "var(--color-neutral)" }}>
                {data.subtitle}
              </p>
            )}
            {data.description && (
              <p className="text-lg" style={{ color: "var(--color-neutral)" }}>
                {data.description}
              </p>
            )}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="text-lg"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                <Link href={primaryLink as string}>
                  {data.ctaPrimary?.text as string}
                </Link>
              </Button>
              {data.ctaSecondary && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                    backgroundColor: "transparent",
                  }}
                >
                  <Link href={secondaryLink as string}>
                    {data.ctaSecondary.text}
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={data.image || "/placeholder.svg"}
              alt={data.imageAlt || data.title}
              fill
              className="rounded-lg object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
