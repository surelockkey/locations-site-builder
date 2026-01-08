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

export function TermsContentVariant2({ data }: TermsContentProps) {
  return (
    <div className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-sm mb-8 pb-4 border-b" style={{ color: "var(--color-primary)" }}>
            Last modified: {data.lastModified}
          </p>

          <div className="space-y-10">
            {data.sections.map((section, index) => (
              <div key={index} className="border-l-4 pl-6" style={{ borderColor: "var(--color-primary)" }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--color-text)" }}>
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
