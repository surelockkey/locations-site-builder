"use client";

// Tiles with image reveal on hover
import { Check, Car, Lock, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  id?: string;
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  link?: string;
  featured?: boolean;
}

interface ServiceListVariant2Props {
  data: {
    title?: string;
    description?: string;
    services: (string | ServiceItem)[];
    cta?: { text: string; link: string };
    note?: string;
  };
}

const iconMap: Record<string, any> = {
  car: Car,
  lock: Lock,
  "alert-circle": AlertCircle,
};

export default function ServiceListVariant2({
  data,
}: ServiceListVariant2Props) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {data.title && (
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-gray-900">
                {data.title}
              </h2>
              {data.description && (
                <p className="text-lg max-w-3xl mx-auto text-pretty text-gray-600">
                  {data.description}
                </p>
              )}
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.services.map((service, index) => {
              if (typeof service === "string") {
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="p-8">
                      <div className="flex items-start gap-3">
                        <Check
                          className="h-6 w-6 flex-shrink-0 mt-1 transition-transform group-hover:scale-110"
                          style={{ color: "var(--color-primary)" }}
                        />
                        <span className="text-lg font-semibold text-gray-900">
                          {service}
                        </span>
                      </div>
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, var(--color-primary), transparent)`,
                      }}
                    />
                  </div>
                );
              }

              const Icon =
                service.icon && iconMap[service.icon]
                  ? iconMap[service.icon]
                  : Lock;
              const imageUrl =
                service.image ||
                `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(
                  service.title
                )}`;

              return (
                <div
                  key={service.id || index}
                  className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Content - visible by default */}
                  <div
                    className="relative z-10 p-8 h-full flex flex-col transition-all duration-500"
                    style={{
                      background: "transparent",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(to bottom right, var(--color-primary), color-mix(in srgb, var(--color-primary) 30%, transparent))`,
                      }}
                    />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4">
                        <div
                          className="inline-flex p-3 rounded-xl transition-all duration-300 bg-gray-100 group-hover:bg-white/20"
                          style={{ color: "var(--color-primary)" }}
                        >
                          <Icon className="h-8 w-8 transition-transform group-hover:scale-110 group-hover:text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      {service.description && (
                        <p className="mb-6 text-gray-600 group-hover:text-white/90 transition-colors duration-300 line-clamp-2 group-hover:line-clamp-none">
                          {service.description}
                        </p>
                      )}
                      <div className="mt-auto">
                        {service.link && (
                          <div className="flex items-center gap-2 font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                            <span>Learn More</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Image - appears on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>

                  {/* Click area */}
                  {service.link && (
                    <Link href={service.link} className="absolute inset-0 z-20">
                      <span className="sr-only">{service.title}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {data.note && (
            <p className="text-center text-sm italic mb-8 text-gray-500">
              {data.note}
            </p>
          )}

          {data.cta && (
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform shadow-lg"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                <Link href={data.cta.link}>{data.cta.text}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
