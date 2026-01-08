"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Location {
  slug: string;
  title: string;
  address: string;
  phone: string;
  image?: string;
}

interface LocationListVariant1Props {
  data: {
    locations: Location[];
  };
}

export default function LocationListVariant1({
  data,
}: LocationListVariant1Props) {
  const locations = data?.locations || [];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card
              key={location.slug}
              // 🔥 ВАЖЛИВО:
              // p-0 — прибирає будь-які відступи всередині картки (це має прибрати білу смугу зверху)
              // overflow-hidden — обрізає картинку по кутах
              // border-0 — якщо у вас подвійні рамки, можна додати цей клас
              className="h-full flex flex-col p-0 overflow-hidden hover:shadow-xl transition-all duration-300 border-border group"
            >
              <Link
                href={`/locations/${location.slug}`}
                className="flex flex-col flex-grow"
              >
                {/* Верхня частина: Картинка */}
                {/* aspect-video тримає пропорцію 16:9. w-full розтягує на всю ширину */}
                {location.image ? (
                  <div className="relative w-full aspect-video bg-gray-100">
                    <img
                      src={location.image}
                      alt={location.title}
                      // object-cover гарантує, що фото заповнить весь блок без білих смуг
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  // Заглушка, якщо фото немає
                  <div className="w-full aspect-video bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* Середня частина: Контент */}
                {/* Додаємо p-6 ТУТ, бо ми забрали його з головної картки (p-0) */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {location.title}
                  </h3>
                  <div className="flex items-start gap-2.5 text-muted-foreground mt-1">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Нижня частина: Телефон */}
              {/* mt-auto притискає до низу. px-6 pb-6 додають відступи знизу і збоку */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <a
                    href={`tel:${location.phone}`}
                    className="text-sm font-medium hover:underline transition-colors"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
