// Split 50/50 image/content
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CTAVariant3Props {
  data: {
    title: string
    description?: string
    ctaPrimary: { text: string; link: string }
    image?: string
    showForm?: boolean
  }
}

export default function CTAVariant3({ data }: CTAVariant3Props) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={data.image || "/placeholder.svg?height=500&width=600"}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 text-balance">{data.title}</h2>
            {data.description && <p className="text-lg text-gray-600 text-pretty">{data.description}</p>}
            <Button asChild size="lg" className="text-lg">
              <Link href={data.ctaPrimary.link}>{data.ctaPrimary.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
