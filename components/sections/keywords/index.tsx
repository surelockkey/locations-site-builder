import KeywordsVariant1 from "./KeywordsVariant1";

interface KeywordsProps {
  keywords: string | string[];
  title?: string;
  variant?: string;
}

export default function Keywords({ keywords, title, variant = "1" }: KeywordsProps) {
  if (!keywords || (Array.isArray(keywords) && keywords.length === 0)) {
    return null;
  }

  return <KeywordsVariant1 keywords={keywords} title={title} />;
}

export { Keywords as KeywordsSection };
