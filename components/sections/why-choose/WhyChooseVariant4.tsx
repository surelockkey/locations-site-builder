// Modern card grid with hover effects
import { getServiceIcon } from "@/components/ui/service-icon";

interface WhyChooseVariant4Props {
  data: {
    title: string;
    description?: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

export default function WhyChooseVariant4({ data }: WhyChooseVariant4Props) {
  console.log(data);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              {data.title}
            </h2>
            {data.description && (
              <p className="text-lg text-gray-600 text-pretty max-w-3xl mx-auto">
                {data.description}
              </p>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {data.features?.map((feature, index) => {
              const Icon = getServiceIcon(feature.icon);
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Gradient background on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary), transparent)",
                    }}
                  />

                  <div className="relative p-8">
                    {/* Icon with animated background */}
                    <div className="mb-6 relative">
                      <div
                        className="inline-flex p-4 rounded-2xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: "var(--color-primary)",
                          opacity: 0.1,
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            backgroundColor: "var(--color-primary)",
                            filter: "blur(12px)",
                          }}
                        />
                        <Icon
                          className="h-8 w-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
                          style={{ color: "var(--color-primary)" }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-900 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 max-w-xl">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
