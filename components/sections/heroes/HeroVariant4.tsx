// Minimal typography focus
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeroVariantsProps } from ".";

interface HeroVariant4Props {
  data: HeroVariantsProps;
}

export default function HeroVariant4({ data }: HeroVariant4Props) {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        background:
          "linear-gradient(135deg, var(--color-background), var(--color-secondary), var(--color-background))",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h1
            className="text-6xl font-black leading-tight md:text-7xl lg:text-8xl text-balance"
            style={{ color: "var(--color-text)" }}
          >
            {data.title}
          </h1>
          {data.subtitle && (
            <p
              className="mx-auto max-w-2xl text-2xl text-pretty"
              style={{ color: "var(--color-neutral)" }}
            >
              {data.subtitle}
            </p>
          )}
          {data.description && (
            <p
              className="mx-auto max-w-xl text-lg"
              style={{ color: "var(--color-neutral)" }}
            >
              {data.description}
            </p>
          )}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href={data.ctaPrimary?.link as string}>
                {data.ctaPrimary?.text}
              </Link>
            </Button>
            {data.ctaSecondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
              >
                <Link href={data.ctaSecondary.link}>
                  {data.ctaSecondary.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div
        className="absolute top-0 left-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--color-primary)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </section>
  );
}
