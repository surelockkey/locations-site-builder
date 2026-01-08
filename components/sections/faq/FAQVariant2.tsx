// Two-column layout
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQVariant2Props {
  data: {
    title: string
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export default function FAQVariant2({ data }: FAQVariant2Props) {
  const midpoint = Math.ceil(data.faqs.length / 2)
  const leftFaqs = data.faqs.slice(0, midpoint)
  const rightFaqs = data.faqs.slice(midpoint)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center text-balance">{data.title}</h2>

          <div className="grid gap-8 lg:grid-cols-2">
            <Accordion type="single" collapsible className="w-full">
              {leftFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`left-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              {rightFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`right-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
