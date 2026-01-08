"use client"

// Scrolling marquee
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BrandsVariant2Props {
  data: {
    title: string
    description?: string
    brands: Array<{
      name: string
      logo: string
    }>
    cta?: { text: string; link: string }
    note?: string
  }
}

export default function BrandsVariant2({ data }: BrandsVariant2Props) {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">{data.title}</h2>
          {data.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">{data.description}</p>
          )}
        </div>

        {/* Marquee */}
        <div className="relative mb-8">
          <div className="flex gap-12 animate-marquee">
            {[...data.brands, ...data.brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-16 relative">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  fill
                  className="object-contain grayscale opacity-60"
                />
              </div>
            ))}
          </div>
        </div>

        {data.note && <p className="text-center text-sm text-gray-600 mb-6">{data.note}</p>}

        {data.cta && (
          <div className="text-center">
            <Button asChild size="lg">
              <Link href={data.cta.link}>{data.cta.text}</Link>
            </Button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
