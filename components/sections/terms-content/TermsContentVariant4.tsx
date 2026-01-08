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

export function TermsContentVariant4({ data }: TermsContentProps) {
  return (
    <div className="py-16" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: "var(--color-primary)", opacity: 0.1 }}>
          <p className="text-sm font-semibold" style={{ color: "var(--color-primary)", opacity: 1 }}>
            Last modified: {data.lastModified}
          </p>
        </div>

        <div className="space-y-6">
          {data.sections.map((section, index) => (
            <details key={index} className="group bg-white rounded-lg shadow-sm" open={index === 0}>
              <summary className="cursor-pointer p-6 font-semibold text-lg flex items-center justify-between hover:bg-muted/50 rounded-lg">
                <span style={{ color: "var(--color-text)" }}>{section.heading}</span>
                <span
                  className="text-2xl group-open:rotate-45 transition-transform"
                  style={{ color: "var(--color-primary)" }}
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
