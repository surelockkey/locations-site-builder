// Full-width banner centered
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTAVariant1Props {
  data: {
    title: string
    description?: string
    ctaPrimary: { text: string; link: string }
    showForm?: boolean
  }
}

export default function CTAVariant1({ data }: CTAVariant1Props) {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4 text-balance">{data.title}</h2>
          {data.description && <p className="text-xl text-blue-100 mb-8 text-pretty">{data.description}</p>}
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href={data.ctaPrimary.link}>{data.ctaPrimary.text}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
