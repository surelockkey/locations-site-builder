import { Card } from "@/components/ui/card";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandsWeServeVariant1Props {
  title?: string;
  description?: string;
  brands?: Brand[];
}

export default function BrandsWeServeVariant1({
  title = "We Serve",
  description,
  brands = [],
}: BrandsWeServeVariant1Props) {
  return (
    <section className="py-16 bg-background pb-20">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance text-gray-900">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-16">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain transition-all"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
