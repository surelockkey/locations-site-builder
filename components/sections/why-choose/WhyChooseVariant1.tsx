// Icon grid 2x2
import { getServiceIcon } from "@/components/ui/service-icon";

interface WhyChooseVariant1Props {
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

export default function WhyChooseVariant1({ data }: WhyChooseVariant1Props) {
  console.log(data.features);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
              {data.title}
            </h2>
            {data.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
                {data.description}
              </p>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {data.features?.map((feature, index) => {
              const Icon = getServiceIcon(feature.icon);
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
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
    </section>
  );
}
