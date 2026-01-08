// Modern split layout with map and schedule
import { SiteConfig } from "@/types/config.types";
import { Clock } from "lucide-react";

interface WorkingDay {
  day: string;
  hours: string;
}

interface AreasAndHoursVariant1Props {
  title?: string;
  description?: string;
  mapImage?: string;
  mapEmbedUrl?: string;
  areas?: string[];
  centerLocation?: string;
  schedule: WorkingDay[];
  workingHoursTitle?: string;
  siteConfig?: SiteConfig;
}

export default function AreasAndHoursVariant1({
  title = "Areas We Cover",
  description,
  mapEmbedUrl,
  schedule,
  siteConfig,
  workingHoursTitle = "Working Hours",
}: AreasAndHoursVariant1Props) {
  "s";
  siteConfig?.contact.areasAndHours.mapEmbedUrl;

  return (
    <section className="py-8 pb-30 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto text-pretty">
              {description}
            </p>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full min-h-[500px]">
              <div className="relative w-full h-full">
                <iframe
                  src={siteConfig?.contact.areasAndHours.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Working Hours */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8 h-full">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {workingHoursTitle}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {siteConfig?.contact.areasAndHours.schedule?.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-4 px-4 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                      >
                        <span className="font-semibold text-gray-900 text-lg">
                          {item.day}
                        </span>
                        <span
                          className="font-medium text-base"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {item.hours}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
