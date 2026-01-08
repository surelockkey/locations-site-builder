import BrandsWeServeVariant1 from "./BrandsWeServeVariant1";
import BrandsWeServeVariant2 from "./BrandsWeServeVariant2";
import BrandsWeServeVariant3 from "./BrandsWeServeVariant3";
import BrandsWeServeVariant4 from "./BrandsWeServeVariant4";

interface BrandsWeServeProps {
  variant?: string | number;
  data?: any;
  title?: string;
  description?: string;
  brands?: Array<{ name: string; logo: string }>;
}

export default function BrandsWeServe({
  variant = "1",
  data,
  title,
  description,
  brands,
}: BrandsWeServeProps) {
  // Combine props - prioritize individual props over data object
  const componentProps = {
    title: title || data?.title,
    description: description || data?.description,
    brands: brands || data?.brands || [],
  };

  const variantNumber = typeof variant === "string" ? parseInt(variant) : variant;

  switch (variantNumber) {
    case 2:
      return <BrandsWeServeVariant2 {...componentProps} />;
    case 3:
      return <BrandsWeServeVariant3 {...componentProps} />;
    case 4:
      return <BrandsWeServeVariant4 {...componentProps} />;
    case 1:
    default:
      return <BrandsWeServeVariant1 {...componentProps} />;
  }
}

export { BrandsWeServe };
