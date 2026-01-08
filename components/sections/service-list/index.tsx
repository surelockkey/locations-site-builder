// Master ServiceList component with variant selector
import ServiceListVariant1 from "./ServiceListVariant1";
import ServiceListVariant2 from "./ServiceListVariant2";
import ServiceListVariant3 from "./ServiceListVariant3";
import ServiceListVariant4 from "./ServiceListVariant4";

interface ServiceListProps {
  variant: string;
  data: any;
}

export default function ServiceList({ variant, data }: ServiceListProps) {
  switch (variant) {
    case "variant2":
      return <ServiceListVariant2 data={data} />;
    case "variant3":
      return <ServiceListVariant3 data={data} />;
    case "variant4":
      return <ServiceListVariant4 data={data} />;
    case "variant1":
      return <ServiceListVariant1 data={data} />;
    default:
      <div></div>;
  }
}

export { ServiceList as ServiceListSection };
