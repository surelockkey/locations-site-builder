// Master Hero component with variant selector
import HeroVariant1 from "./HeroVariant1";
import HeroVariant2 from "./HeroVariant2";
import HeroVariant3 from "./HeroVariant3";
import HeroVariant4 from "./HeroVariant4";

export interface HeroVariantsProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: { text: string; link: string; type?: string }; // Made ctaPrimary optional
  ctaSecondary?: { text: string; link: string; type?: string };
  image?: string; // Made image optional
  imageAlt?: string;
}
interface HeroProps {
  variant: string;
  data: HeroVariantsProps;
}

export default function Hero({ variant, data }: HeroProps) {
  console.log(data);

  switch (variant) {
    case "variant2":
      return <HeroVariant2 data={data} />;
    case "variant3":
      return <HeroVariant3 data={data} />;
    case "variant4":
      return <HeroVariant4 data={data} />;
    case "variant1":
    default:
      return <HeroVariant1 data={data} />;
  }
}

export { Hero as HeroSection };
