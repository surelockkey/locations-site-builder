// Master ContentBlock component
import ContentBlockVariant1 from "./ContentBlockVariant1";

interface ContentBlockProps {
  data: any;
}

export default function ContentBlock({ data }: ContentBlockProps) {
  return <ContentBlockVariant1 data={data} />;
}

export { ContentBlock as ContentBlockSection };
