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

export function TermsContentVariant3({ data }: TermsContentProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden md:block">
            <div className="sticky top-24 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground mb-4">CONTENTS</p>
              {data.sections.map((section, index) => (
                <a
                  key={index}
                  href={`#section-${index}`}
                  className="block text-sm py-1 hover:underline"
                  style={{ color: "var(--color-text)" }}
                >
                  {section.heading}
                </a>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-sm text-muted-foreground mb-8">Last modified: {data.lastModified}</p>

            <div className="space-y-12">
              {data.sections.map((section, index) => (
                <div key={index} id={`section-${index}`} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
