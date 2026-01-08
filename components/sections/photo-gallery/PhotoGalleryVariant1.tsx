import Image from "next/image"

interface PhotoGalleryProps {
  data: {
    title?: string
    description?: string
    photos: Array<{
      url: string
      alt: string
      caption?: string
    }>
  }
}

export default function PhotoGalleryVariant1({ data }: PhotoGalleryProps) {
  const { title, description, photos } = data

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
            {title}
          </h2>
        )}
        {description && (
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {description}
          </p>
        )}

        {/* Classic grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {photo.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-sm">{photo.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
