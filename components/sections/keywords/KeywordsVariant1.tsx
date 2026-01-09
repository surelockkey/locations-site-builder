interface KeywordsVariant1Props {
  keywords: string | string[];
  title?: string;
}

export default function KeywordsVariant1({ keywords, title = "Keywords" }: KeywordsVariant1Props) {
  const keywordArray = Array.isArray(keywords)
    ? keywords
    : keywords.split(',').map(k => k.trim());

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {keywordArray.map((keyword, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-gray-300 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
