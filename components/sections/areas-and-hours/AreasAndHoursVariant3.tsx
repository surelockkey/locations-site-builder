// Compact grid with map on top and horizontal schedule cards
import { Clock, Calendar } from "lucide-react"

interface WorkingDay {
  day: string
  hours: string
}

interface AreasAndHoursVariant3Props {
  title?: string
  description?: string
  mapImage?: string
  mapEmbedUrl?: string
  areas?: string[]
  centerLocation?: string
  schedule: WorkingDay[]
  workingHoursTitle?: string
}

export default function AreasAndHoursVariant3({
  title = "Areas We Cover",
  description,
  mapImage = "/placeholder.svg?height=400&width=600",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1516.8301560515895!2d-111.9019372!3d40.504894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875287296f8292dd%3A0xf7bd21d4a3d3ec61!2s277%20W%2013490%20S%20A407%2C%20Draper%2C%20UT%2084020%2C%20USA!5e0!3m2!1sen!2sua!4v1767349631673!5m2!1sen!2sua",
  areas = [],
  centerLocation,
  schedule,
  workingHoursTitle = "Working Hours",
}: AreasAndHoursVariant3Props) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance text-gray-900">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto text-pretty">
              {description}
            </p>
          )}

          {/* Map Section */}
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200">
              <div className="relative w-full h-[450px]">
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

          {/* Working Hours Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: "var(--color-primary)", opacity: 0.1 }}
              >
                <Clock className="h-7 w-7" style={{ color: "var(--color-primary)" }} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{workingHoursTitle}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white rounded-xl shadow-md border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, var(--color-primary), transparent)",
                    }}
                  />
                  <div className="relative p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar
                        className="h-5 w-5 transition-transform group-hover:scale-110"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <h4 className="font-bold text-gray-900 text-lg">{item.day}</h4>
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {item.hours}
                    </p>
                  </div>
                  <div
                    className="h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
