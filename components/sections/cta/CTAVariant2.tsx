// Card with form embedded
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

interface CTAVariant2Props {
  data: {
    title: string
    description?: string
    ctaPrimary: { text: string; link: string }
    showForm?: boolean
  }
}

export default function CTAVariant2({ data }: CTAVariant2Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-2xl shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">{data.title}</h2>
              {data.description && <p className="text-gray-600 text-pretty">{data.description}</p>}
            </div>

            {data.showForm ? (
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input type="tel" placeholder="Your Phone" />
                <Textarea placeholder="How can we help?" rows={4} />
                <Button size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <Button asChild size="lg">
                  <Link href={data.ctaPrimary.link}>{data.ctaPrimary.text}</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
