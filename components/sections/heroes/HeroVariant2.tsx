// Full background with overlay
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeroVariantsProps } from ".";
import { SiteConfig } from "@/types/config.types";

interface HeroVariant2Props {
  data: HeroVariantsProps;
  siteConfig?: SiteConfig;
}

export default function HeroVariant2({ data, siteConfig }: HeroVariant2Props) {
  // Use global phone number for phone CTAs
  const primaryLink = data.ctaPrimary?.type === "phone" && siteConfig?.contact.phone
    ? `tel:${siteConfig.contact.phone}`
    : data.ctaPrimary?.link;

  const secondaryLink = data.ctaSecondary?.type === "phone" && siteConfig?.contact.phone
    ? `tel:${siteConfig.contact.phone}`
    : data.ctaSecondary?.link;
  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.imageAlt || data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <div className="max-w-3xl space-y-6 text-white">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-balance">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="text-xl md:text-2xl text-gray-100 text-pretty">
              {data.subtitle}
            </p>
          )}
          {data.description && (
            <p className="text-lg text-gray-200">{data.description}</p>
          )}
          {(data.ctaPrimary || data.ctaSecondary) && (
            <div className="flex flex-col gap-4 sm:flex-row">
              {data.ctaPrimary && (
                <Button
                  asChild
                  size="lg"
                  className="text-lg"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "white",
                  }}
                >
                  <Link href={primaryLink as string}>
                    {data.ctaPrimary.text}
                  </Link>
                </Button>
              )}
              {data.ctaSecondary && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                >
                  <Link href={secondaryLink as string}>
                    {data.ctaSecondary.text}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
