import ContactInfoVariant1 from "./ContactInfoVariant1";
import ContactInfoVariant2 from "./ContactInfoVariant2";
import ContactInfoVariant3 from "./ContactInfoVariant3";
import ContactInfoVariant4 from "./ContactInfoVariant4";

interface ContactInfoProps {
  variant?: string;
  data?: any;
}

export default function ContactInfo({ variant = "1", data }: ContactInfoProps) {
  switch (variant) {
    case "1":
    case "variant1":
      return <ContactInfoVariant1 data={data} />;
    case "2":
    case "variant2":
      return <ContactInfoVariant2 data={data} />;
    case "3":
    case "variant3":
      return <ContactInfoVariant3 data={data} />;
    case "4":
    case "variant4":
      return <ContactInfoVariant4 data={data} />;
    default:
      return <ContactInfoVariant1 data={data} />;
  }
}
