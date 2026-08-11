import React from 'react';

type SchemaType = 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList';

interface SchemaProps {
  type: SchemaType;
  data: Record<string, any>;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
