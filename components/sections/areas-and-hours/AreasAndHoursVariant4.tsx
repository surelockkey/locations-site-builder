// Asymmetric bento grid with interactive cards
import { Clock, MapPin, Navigation } from "lucide-react";

interface WorkingDay {
  day: string;
  hours: string;
}

interface AreasAndHoursVariant4Props {
  title?: string;
  description?: string;
  mapImage?: string;
  mapEmbedUrl?: string;
  areas?: string[];
  centerLocation?: string;
  schedule: WorkingDay[];
  workingHoursTitle?: string;
}

export default function AreasAndHoursVariant4({
  title = "Areas We Cover",
  description,
  mapImage = "/placeholder.svg?height=400&width=600",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1516.8301560515895!2d-111.9019372!3d40.504894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287296f8292dd%3A0xf7bd21d4a3d3ec61!2s277%20W%2013490%20S%20A407%2C%20Draper%2C%20UT%2084020%2C%20USA!5e0!3m2!1sen!2usa!4v1767349631673!5m2!1sen!2usa",
  areas = [],
  centerLocation,
  schedule,
  workingHoursTitle = "Working Hours",
}: AreasAndHoursVariant4Props) {
  return (
    <section className="py-8 bg-white">
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

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large Map Card - Takes 2 columns */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 h-[500px] lg:h-full">
                <div className="relative w-full h-full">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Navigation
                      className="h-4 w-4"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      Service Area
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), transparent)",
                }}
              />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      opacity: 0.1,
                    }}
                  >
                    <Clock
                      className="h-6 w-6"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {workingHoursTitle}
                  </h3>
                </div>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 px-4 rounded-lg bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
                    >
                      <span className="font-semibold text-gray-900 text-sm">
                        {item.day}
                      </span>
                      <span
                        className="text-xs font-bold transition-all group-hover:scale-110"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
