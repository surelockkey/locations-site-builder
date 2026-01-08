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

export default function PhotoGalleryVariant2({ data }: PhotoGalleryProps) {
  const { title, description, photos } = data

  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-background-secondary)" }}>
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

        {/* Masonry-style layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white">
                <div className="relative">
                  <Image
                    src={photo.url || "/placeholder.svg"}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {photo.caption && (
                  <div className="p-4">
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {photo.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
