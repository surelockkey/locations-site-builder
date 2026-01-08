"use client";

interface ServiceSection {
  title: string;
  content: string;
  services: string[];
}

interface LocationPageContentData {
  images: string[];
  sections: ServiceSection[];
}

interface LocationPageContentVariant1Props {
  data: LocationPageContentData;
}

export default function LocationPageContentVariant1({
  data,
}: LocationPageContentVariant1Props) {
  const { images, sections } = data;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Service Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => {
          // Get one image per section
          const sectionImage = images[index];
          const isImageOnRight = index % 2 !== 0; // Alternating: even index = left, odd = right

          return (
            <section
              key={index}
              className="rounded-2xl p-6 md:p-8 border"
              style={{
                backgroundColor: "var(--color-section-bg-emergency, #ffffff)",
                borderColor: "var(--color-section-border-emergency, #e5e7eb)",
              }}
            >
              {/* Section Header */}
              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--color-text, #1f2937)" }}
              >
                {section.title}
              </h2>

              {/* Grid Layout: Text/Image on top, Lists below */}
              {sectionImage ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Image on left for even index, right for odd */}
                  {!isImageOnRight && (
                    <div className="relative h-48 overflow-hidden rounded-xl">
                      <img
                        src={sectionImage}
                        alt={`${section.title}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Section Content */}
                  <div>
                    <p
                      className="text-lg leading-relaxed"
                      style={{ color: "var(--color-text-muted, #6b7280)" }}
                    >
                      {section.content}
                    </p>
                  </div>

                  {/* Image on right for odd index */}
                  {isImageOnRight && (
                    <div className="relative h-48 overflow-hidden rounded-xl">
                      <img
                        src={sectionImage}
                        alt={`${section.title}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
              ) : (
                // No image: full width text
                <div className="mb-8">
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--color-text-muted, #6b7280)" }}
                  >
                    {section.content}
                  </p>
                </div>
              )}

              {/* Services Lists in 2 columns */}
              {section.services && section.services.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First half of services */}
                  <div className="rounded-xl p-6 bg-gray-50/50">
                    <ul className="space-y-2">
                      {section.services
                        .slice(0, Math.ceil(section.services.length / 2))
                        .map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2"
                            style={{ color: "var(--color-text-muted, #6b7280)" }}
                          >
                            <span
                              style={{ color: "var(--color-icon-emergency, #ef4444)" }}
                              className="mt-1 flex-shrink-0"
                            >
                              ✓
                            </span>
                            <span>{service}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Second half of services */}
                  <div className="rounded-xl p-6 bg-gray-50/50">
                    <ul className="space-y-2">
                      {section.services
                        .slice(Math.ceil(section.services.length / 2))
                        .map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2"
                            style={{ color: "var(--color-text-muted, #6b7280)" }}
                          >
                            <span
                              style={{ color: "var(--color-icon-emergency, #ef4444)" }}
                              className="mt-1 flex-shrink-0"
                            >
                              ✓
                            </span>
                            <span>{service}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
