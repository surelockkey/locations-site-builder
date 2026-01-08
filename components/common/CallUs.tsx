interface CallUsProps {
  title?: string
  description?: string
  phone: string
  buttonText?: string
}

export default function CallUs({ title, description, phone, buttonText = "Call Us" }: CallUsProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex items-center justify-between gap-6">
      <div className="flex-1">
        {title && (
          <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--color-text)" }}>
            {title}
          </h3>
        )}
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>
      <a
        href={`tel:${phone}`}
        className="px-6 py-3 rounded-lg font-semibold text-white transition-colors whitespace-nowrap flex-shrink-0"
        style={{
          backgroundColor: "var(--color-primary)",
        }}
      >
        {buttonText}
      </a>
    </div>
  )
}
