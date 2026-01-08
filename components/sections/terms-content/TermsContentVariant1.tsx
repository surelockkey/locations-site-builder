import { Card } from "@/components/ui/card"

interface Section {
  heading: string
  content: string
}

interface TermsContentProps {
  data: {
    lastModified: string
    sections: Section[]
  }
}

export function TermsContentVariant1({ data }: TermsContentProps) {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-sm text-muted-foreground mb-8">Last modified: {data.lastModified}</p>

        <div className="space-y-8">
          {data.sections.map((section, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                {section.heading}
              </h2>
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
