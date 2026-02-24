// Server component — handles metadata + schema injection
// The actual UI is in SchoolPageClient (client component)
import type { Metadata } from 'next';
import { SCHOOLS } from '@/lib/schools';
import { schoolPageSchema } from '@/lib/schemas';
import SchoolPageClient from './SchoolPageClient';
import catalog from '@/data/schools.catalog.json';

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return (catalog as { id: string }[]).map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const school = SCHOOLS.find((s) => s.id === params.id);
  if (!school) return {};

  const s = school as any;
  const city: string = s.location?.city ?? 'UK';
  const area: string = s.location?.area ?? city;
  const description = `${school.name} 11+ admissions guide. Exam format, key dates, subjects tested and free themed mock exams to help your child prepare for entrance.`;

  const schema = schoolPageSchema({
    id: school.id,
    name: school.name,
    description,
    city,
    category: school.category,
    admissionsUrl: undefined,
  });

  return {
    title: `${school.name} — 11+ Admissions & Mock Exams`,
    description,
    alternates: { canonical: `/schools/${school.id}` },
    openGraph: {
      title: `${school.name} — 11+ Admissions`,
      description,
      locale: 'en_GB',
      type: 'website',
    },
    keywords: [
      school.name,
      `${school.name} 11+`,
      `${school.name} admissions`,
      `${area} grammar school`,
      '11 plus entrance exam',
      'mock exam',
    ],
    other: {
      'schema-org': JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schema,
      }),
    },
  };
}

export default function SchoolPage({ params }: Props) {
  return <SchoolPageClient params={params} />;
}
