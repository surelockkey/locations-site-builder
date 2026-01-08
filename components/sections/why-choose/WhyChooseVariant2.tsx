// Timeline vertical
import { getServiceIcon } from "@/components/ui/service-icon";

interface WhyChooseVariant2Props {
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

export default function WhyChooseVariant2({ data }: WhyChooseVariant2Props) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              {data.title}
            </h2>
            {data.description && (
              <p className="text-lg text-gray-600 text-pretty">
                {data.description}
              </p>
            )}
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {data.features?.map((feature, index) => {
                const Icon = getServiceIcon(feature.icon);
                return (
                  <div key={index} className="relative flex gap-6">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 border-4 border-white shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1 max-w-2xl">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
