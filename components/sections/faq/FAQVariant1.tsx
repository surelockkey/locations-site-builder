// Simple accordion
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQVariant1Props {
  data: {
    title: string
    faqs?: Array<{
      question: string
      answer: string
    }>
    questions?: Array<{
      question: string
      answer: string
    }>
  }
}

export default function FAQVariant1({ data }: FAQVariant1Props) {
  const faqItems = data.faqs || data.questions || []

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">{data.title}</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
