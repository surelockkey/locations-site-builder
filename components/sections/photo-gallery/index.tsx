import PhotoGalleryVariant1 from "./PhotoGalleryVariant1"
import PhotoGalleryVariant2 from "./PhotoGalleryVariant2"
import PhotoGalleryVariant3 from "./PhotoGalleryVariant3"
import PhotoGalleryVariant4 from "./PhotoGalleryVariant4"

interface PhotoGalleryProps {
  variant?: string
  data: any
}

export default function PhotoGallery({ variant = "1", data }: PhotoGalleryProps) {
  switch (variant) {
    case "1":
      return <PhotoGalleryVariant1 data={data} />
    case "2":
      return <PhotoGalleryVariant2 data={data} />
    case "3":
      return <PhotoGalleryVariant3 data={data} />
    case "4":
      return <PhotoGalleryVariant4 data={data} />
    default:
      return <PhotoGalleryVariant1 data={data} />
  }
}
