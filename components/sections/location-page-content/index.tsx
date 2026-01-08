import LocationPageContentVariant1 from "./LocationPageContentVariant1";

interface LocationPageContentProps {
  variant?: string;
  data: any;
}

export default function LocationPageContent({
  variant = "1",
  data,
}: LocationPageContentProps) {
  switch (variant) {
    case "1":
    default:
      return <LocationPageContentVariant1 data={data} />;
  }
}
