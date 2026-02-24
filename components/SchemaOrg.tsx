// Drop <SchemaOrg data={...} /> into any page's JSX to inject JSON-LD.
// No visible output — purely for search engines.

interface SchemaOrgProps {
  data: object | object[];
}

export function SchemaOrg({ data }: SchemaOrgProps) {
  const json = Array.isArray(data)
    ? { '@context': 'https://schema.org', '@graph': data }
    : { '@context': 'https://schema.org', ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
