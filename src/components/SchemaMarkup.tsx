import React from 'react';

type SchemaType = 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'WebPage' | 'AboutPage' | 'CollectionPage';

interface SchemaProps {
  type?: SchemaType;
  data: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const schema = type
    ? {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
      }
    : {
        '@context': 'https://schema.org',
        ...data,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
