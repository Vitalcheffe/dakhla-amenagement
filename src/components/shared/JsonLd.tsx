import { JsonLd } from '@/lib/structured-data';

/**
 * Renders one or more JSON-LD script tags.
 * Usage in server components:
 *   <JsonLdScript schema={organizationSchema()} />
 *   <JsonLdScript schema={[schema1, schema2]} />
 */
export function JsonLdScript({ schema }: { schema: JsonLd | JsonLd[] }) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
