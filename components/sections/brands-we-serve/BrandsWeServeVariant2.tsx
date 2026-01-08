import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandsWeServeVariant2Props {
  title?: string;
  description?: string;
  brands: Brand[];
}

export default function BrandsWeServeVariant2({
  title,
  description,
  brands,
}: BrandsWeServeVariant2Props) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance text-gray-900">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-muted-foreground text-center mb-8 text-sm">
            {description}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="relative w-24 h-12">
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                fill
                className="object-contain transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
