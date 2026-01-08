import LocationListVariant1 from "./LocationListVariant1";
import LocationListVariant2 from "./LocationListVariant2";
import LocationListVariant3 from "./LocationListVariant3";
import LocationListVariant4 from "./LocationListVariant4";

interface LocationListProps {
  variant?: string;
  data: any;
}

export default function LocationList({ variant, data }: LocationListProps) {
  switch (variant) {
    case "1":
      return <LocationListVariant1 data={data} />;
    case "2":
      return <LocationListVariant2 data={data} />;
    case "3":
      return <LocationListVariant3 data={data} />;
    case "4":
      return <LocationListVariant4 data={data} />;
    default:
      return <LocationListVariant1 data={data} />;
  }
}
