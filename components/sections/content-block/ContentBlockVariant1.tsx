// Alternating image left/right OR icon cards
import { Home, Car, Building2, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  car: Car,
  building: Building2,
};

export default function ContentBlockVariant1({ data }: { data: any }) {
  // Check if we have blocks array - if yes, render as icon cards
  if (data.blocks && Array.isArray(data.blocks)) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {data.title && (
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">{data.title}</h2>
              {data.content && <p className="text-lg text-gray-600 text-pretty">{data.content}</p>}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.blocks.map((block: any, index: number) => {
              const IconComponent = block.icon ? iconMap[block.icon] : null;

              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    {IconComponent && (
                      <div
                        className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-primary)" }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <CardTitle className="text-xl">{block.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{block.content}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Original layout for title/content only
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {data.title && <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">{data.title}</h2>}
          {data.content && <p className="text-lg text-gray-600 text-pretty">{data.content}</p>}
        </div>
      </div>
    </section>
  )
}
