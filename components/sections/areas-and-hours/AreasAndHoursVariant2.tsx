// Vertical timeline with areas list
import { Clock, MapPin } from "lucide-react"

interface WorkingDay {
  day: string
  hours: string
}

interface AreasAndHoursVariant2Props {
  title?: string
  description?: string
  mapImage?: string
  mapEmbedUrl?: string
  areas?: string[]
  centerLocation?: string
  schedule: WorkingDay[]
  workingHoursTitle?: string
}

export default function AreasAndHoursVariant2({
  title = "Areas We Cover",
  description,
  mapImage = "/placeholder.svg?height=400&width=600",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1516.8301560515895!2d-111.9019372!3d40.504894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287296f8292dd%3A0xf7bd21d4a3d3ec61!2s277%20W%2013490%20S%20A407%2C%20Draper%2C%20UT%2084020%2C%20USA!5e0!3m2!1sen!2sua!4v1767349631673!5m2!1sen!2sua",
  areas = [],
  centerLocation,
  schedule,
  workingHoursTitle = "Working Hours",
}: AreasAndHoursVariant2Props) {
  return (
    <section className="py-8 bg-gradient-to-b from-white via-gray-50 to-white">
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Map */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200">
                <div className="relative w-full h-[600px]">
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
              </div>
            </div>

            {/* Right Column: Working Hours Timeline */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 h-full">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: "var(--color-primary)", opacity: 0.1 }}
                    >
                      <Clock className="h-6 w-6" style={{ color: "var(--color-primary)" }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{workingHoursTitle}</h3>
                  </div>
                </div>

                <div className="relative">
                  {/* Timeline Line */}
                  <div
                    className="absolute left-4 top-0 bottom-0 w-0.5"
                    style={{ backgroundColor: "var(--color-primary)", opacity: 0.2 }}
                  />

                  {/* Timeline Items */}
                  <div className="space-y-4">
                    {schedule.map((item, index) => (
                      <div key={index} className="relative flex gap-4 group">
                        <div className="flex-shrink-0 relative z-10">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-white shadow-md transition-transform group-hover:scale-110"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          />
                        </div>
                        <div className="flex-1 pt-0.5 pb-2">
                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 group-hover:border-gray-200 group-hover:shadow-md transition-all">
                            <div className="font-bold text-gray-900 mb-1">{item.day}</div>
                            <div
                              className="text-sm font-medium"
                              style={{ color: "var(--color-primary)" }}
                            >
                              {item.hours}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas List Below */}
          {areas && areas.length > 0 && (
            <div className="mt-12">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "var(--color-primary)", opacity: 0.1 }}
                  >
                    <MapPin className="h-6 w-6" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Service Areas</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {areas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      />
                      <span className="text-sm font-medium text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
