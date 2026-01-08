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

export default function PhotoGalleryVariant3({ data }: PhotoGalleryProps) {
  const { title, description, photos } = data

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
            {title}
          </h2>
        )}
        {description && (
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {description}
          </p>
        )}

        {/* Large featured image with smaller grid */}
        <div className="space-y-6">
          {photos[0] && (
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[21/9]">
              <Image src={photos[0].url || "/placeholder.svg"} alt={photos[0].alt} fill className="object-cover" />
              {photos[0].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <p className="text-base">{photos[0].caption}</p>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.slice(1).map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-xs">{photo.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
