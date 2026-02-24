// lib/schemas.ts
// Pre-built JSON-LD schema objects for each page type.
// Import the relevant builder and pass to <SchemaOrg data={...} />.

const BASE = 'https://www.11plusexampapers.com';
const ORG_NAME = '11 Plus Exam Papers';
const LOGO = `${BASE}/logo.png`;

// ─── Organisation (used on homepage + sitewide) ───────────────────────────────
export const orgSchema = {
  '@type': 'Organization',
  '@id': `${BASE}/#org`,
  name: ORG_NAME,
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: LOGO,
  },
  sameAs: [],
};

// ─── Website with Sitelinks Searchbox ────────────────────────────────────────
export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: ORG_NAME,
  publisher: { '@id': `${BASE}/#org` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE}/schools?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ─── Homepage ─────────────────────────────────────────────────────────────────
export const homepageSchemas = [
  orgSchema,
  websiteSchema,
  {
    '@type': 'WebPage',
    '@id': `${BASE}/#webpage`,
    url: BASE,
    name: '11 Plus Exam Papers — Free Mock Exams & Practice Questions',
    description:
      'Free 11+ mock exams, practice questions and resources for grammar and independent school entrance. Covers Maths, English, Verbal and Non-Verbal Reasoning.',
    isPartOf: { '@id': `${BASE}/#website` },
    publisher: { '@id': `${BASE}/#org` },
    inLanguage: 'en-GB',
  },
];

// ─── Blog article ─────────────────────────────────────────────────────────────
export function articleSchema({
  slug,
  title,
  description,
  datePublished,
  dateModified,
}: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}) {
  const pageUrl = `${BASE}/blog/${slug}`;
  return [
    orgSchema,
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      url: pageUrl,
      headline: title,
      description,
      datePublished,
      dateModified: dateModified ?? datePublished,
      author: { '@id': `${BASE}/#org` },
      publisher: { '@id': `${BASE}/#org` },
      isPartOf: { '@id': `${BASE}/#website` },
      inLanguage: 'en-GB',
      mainEntityOfPage: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
        { '@type': 'ListItem', position: 3, name: title, item: pageUrl },
      ],
    },
  ];
}

// ─── School profile page ──────────────────────────────────────────────────────
export function schoolPageSchema({
  id,
  name,
  description,
  city,
  category,
  admissionsUrl,
}: {
  id: string;
  name: string;
  description: string;
  city: string;
  category: 'grammar' | 'private';
  admissionsUrl?: string;
}) {
  const pageUrl = `${BASE}/schools/${id}`;
  return [
    orgSchema,
    {
      '@type': 'EducationalOrganization',
      '@id': `${pageUrl}#school`,
      name,
      description,
      url: admissionsUrl ?? pageUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressCountry: 'GB',
      },
      educationalCredentialAwarded: '11+ Entrance',
    },
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: `${name} — 11+ Admissions & Mock Exams`,
      description,
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': `${pageUrl}#school` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Schools', item: `${BASE}/schools` },
        { '@type': 'ListItem', position: 3, name, item: pageUrl },
      ],
    },
  ];
}

// ─── Subject page ─────────────────────────────────────────────────────────────
export function subjectPageSchema({
  slug,
  label,
  description,
}: {
  slug: string;
  label: string;
  description: string;
}) {
  const pageUrl = `${BASE}/subjects/${slug}`;
  return [
    orgSchema,
    {
      '@type': 'Course',
      '@id': `${pageUrl}#course`,
      name: `11+ ${label}`,
      description,
      provider: { '@id': `${BASE}/#org` },
      educationalLevel: 'Primary',
      teaches: label,
      url: pageUrl,
      isAccessibleForFree: true,
      inLanguage: 'en-GB',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Subjects', item: `${BASE}/subjects` },
        { '@type': 'ListItem', position: 3, name: label, item: pageUrl },
      ],
    },
  ];
}

// ─── Tutor city page ──────────────────────────────────────────────────────────
export function tutorPageSchema({
  city,
  cityLabel,
}: {
  city: string;
  cityLabel: string;
}) {
  const pageUrl = `${BASE}/tutors/${city}`;
  return [
    orgSchema,
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: `11+ Tutors in ${cityLabel}`,
      description: `Find experienced 11+ tutors in ${cityLabel} to help your child prepare for grammar and independent school entrance exams.`,
      provider: { '@id': `${BASE}/#org` },
      areaServed: {
        '@type': 'City',
        name: cityLabel,
        addressCountry: 'GB',
      },
      serviceType: '11+ Tutoring',
      url: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Tutors', item: `${BASE}/tutors` },
        { '@type': 'ListItem', position: 3, name: `${cityLabel} Tutors`, item: pageUrl },
      ],
    },
  ];
}

// ─── Mock exams / papers page ─────────────────────────────────────────────────
export const mockExamsSchema = [
  orgSchema,
  {
    '@type': 'ItemList',
    name: '11+ Mock Exams',
    description: 'Free 11+ mock exams covering Maths, English, Verbal and Non-Verbal Reasoning.',
    url: `${BASE}/mock-exams`,
    numberOfItems: 4,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Maths Mock Exam',              url: `${BASE}/mock-exams` },
      { '@type': 'ListItem', position: 2, name: 'English Mock Exam',            url: `${BASE}/mock-exams` },
      { '@type': 'ListItem', position: 3, name: 'Verbal Reasoning Mock Exam',   url: `${BASE}/mock-exams` },
      { '@type': 'ListItem', position: 4, name: 'Non-Verbal Reasoning Mock Exam', url: `${BASE}/mock-exams` },
    ],
  },
];

// ─── FAQ schema helper (reusable on any page) ─────────────────────────────────
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
