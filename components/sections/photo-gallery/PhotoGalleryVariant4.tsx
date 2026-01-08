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

export default function PhotoGalleryVariant4({ data }: PhotoGalleryProps) {
  const { title, description, photos } = data

  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-background-secondary)" }}>
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

        {/* Alternating wide and narrow rows */}
        <div className="space-y-6">
          {photos
            .reduce((acc: any[], photo, index) => {
              const rowIndex = Math.floor(index / 3)
              if (!acc[rowIndex]) acc[rowIndex] = []
              acc[rowIndex].push(photo)
              return acc
            }, [])
            .map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid gap-6 ${rowIndex % 2 === 0 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}
              >
                {row.map((photo: any, photoIndex: number) => (
                  <div
                    key={photoIndex}
                    className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
                  >
                    <div className={`relative ${rowIndex % 2 === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                      <Image
                        src={photo.url || "/placeholder.svg"}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
