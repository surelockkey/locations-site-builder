// Cards with hover effects
import { getServiceIcon } from "@/components/ui/service-icon";
import { Card, CardContent } from "@/components/ui/card";

interface WhyChooseVariant3Props {
  data: {
    title: string;
    description?: string;
    features?: Array<{
      icon?: string;
      title: string;
      description: string;
    }>;
    reasons?: Array<{
      icon?: string;
      title: string;
      description: string;
    }>;
  };
}

export default function WhyChooseVariant3({ data }: WhyChooseVariant3Props) {
  const items = data.features || data.reasons || [];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {items.map((feature, index) => {
              const Icon = getServiceIcon(feature.icon || "award");
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                        <Icon className="h-7 w-7 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
