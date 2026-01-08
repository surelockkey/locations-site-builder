import { SiteConfig } from "@/types/config.types";
import { Check } from "lucide-react";
import ServiceInfoCTA from "./ServiceInfoCTA";

interface ServiceInfoVariant1Props {
  data: {
    title?: string;
    description?: string;
    items?: string[];
    cards?: Array<{
      title: string;
      items: string[];
    }>;
    cta?: {
      title?: string;
      subtitle?: string;
      description?: string;
      buttonText?: string;
      phoneNumber?: string;
    };
  };
  siteConfig?: SiteConfig;
}

export default function ServiceInfoVariant1({
  data,
  siteConfig,
}: ServiceInfoVariant1Props) {
  console.log(data);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {data.title}
          </h2>
        )}

        {data.description && (
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
            {data.description}
          </p>
        )}

        {data.cards ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {data.cards.map((card, cardIndex) => (
              <div key={cardIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {card.title}
                </h3>
                <div className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : data.items ? (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-4">
                {data.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {data.cta && <ServiceInfoCTA cta={data.cta} siteConfig={siteConfig} variant="default" />}
      </div>
    </section>
  );
}
