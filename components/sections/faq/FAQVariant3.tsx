// Categorized tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQVariant3Props {
  data: {
    title: string
    faqs: Array<{
      question: string
      answer: string
    }>
  }
}

export default function FAQVariant3({ data }: FAQVariant3Props) {
  const midpoint = Math.ceil(data.faqs.length / 2)
  const general = data.faqs.slice(0, midpoint)
  const services = data.faqs.slice(midpoint)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">{data.title}</h2>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Accordion type="single" collapsible>
                {general.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="services">
              <Accordion type="single" collapsible>
                {services.map((faq, index) => (
                  <AccordionItem key={index} value={`services-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
