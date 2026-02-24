// ─── Curated external links ───────────────────────────────────────────────────
// 30 high-authority URLs used in "Useful resources" sections across blog posts.
// Each link has one or more tags matching BlogPost categories.
// The renderer picks the 3 whose tags best overlap with the current post's category.
// ─────────────────────────────────────────────────────────────────────────────

export interface ExternalLink {
  title: string;
  url: string;
  domain: string;        // display name, e.g. "gov.uk"
  description: string;   // one sentence shown under the link
  tags: string[];        // matches BlogPost category values
}

export const EXTERNAL_LINKS: ExternalLink[] = [
  // ── Government & official ──────────────────────────────────────────────────
  {
    title: 'Grammar schools in England — GOV.UK guidance',
    url: 'https://www.gov.uk/types-of-school/grammar-schools',
    domain: 'gov.uk',
    description: 'Official government overview of how grammar schools work, who runs them, and how places are allocated.',
    tags: ['Grammar Schools', 'Schools', 'Admissions', 'Background'],
  },
  {
    title: 'School admissions code — Department for Education',
    url: 'https://www.gov.uk/government/publications/school-admissions-code--2',
    domain: 'gov.uk',
    description: 'The statutory code governing how all state schools, including grammar schools, must handle admissions.',
    tags: ['Admissions', 'Grammar Schools', 'Schools'],
  },
  {
    title: 'Appeal a school place — GOV.UK',
    url: 'https://educationhub.blog.gov.uk/2023/03/secondary-school-offer-appeals-everything-you-need-to-know/',
    domain: 'gov.uk',
    description: 'Step-by-step guide to appealing a school place decision, including grammar school appeals.',
    tags: ['Admissions', 'Results'],
  },
  {
    title: 'Special educational needs and school admissions — GOV.UK',
    url: 'https://www.gov.uk/children-with-special-educational-needs/special-schools',
    domain: 'gov.uk',
    description: 'Official guidance on how SEN provisions interact with selective school admissions.',
    tags: ['Admissions', 'Exam Day'],
  },

  // ── Ofsted & education research ────────────────────────────────────────────
  {
    title: 'Ofsted school inspection reports',
    url: 'https://reports.ofsted.gov.uk',
    domain: 'ofsted.gov.uk',
    description: 'Search and read Ofsted inspection reports for any state grammar or independent school in England.',
    tags: ['Grammar Schools', 'Schools', 'Admissions'],
  },
  {
    title: 'Education Endowment Foundation — evidence on selective schooling',
    url: 'https://educationendowmentfoundation.org.uk',
    domain: 'educationendowmentfoundation.org.uk',
    description: 'Independent research body publishing evidence on what works in education, including attainment and selection.',
    tags: ['Background', 'Grammar Schools', 'Schools'],
  },

  // ── Exam boards ────────────────────────────────────────────────────────────
  {
    title: 'GL Assessment — 11+ test information for parents',
    url: 'https://11plus.gl-assessment.co.uk/',
    domain: 'gl-assessment.co.uk',
    description: 'Official FAQs from GL Assessment explaining their 11+ test format, question types, and scoring.',
    tags: ['Exam Format', 'Guide', 'Preparation'],
  },
  {
    title: 'CEM Centre — about the 11+ tests',
    url: 'https://www.cem.org/parents',
    domain: 'cem.org',
    description: "CEM's own explanation of their 11+ assessment approach and how it differs from GL Assessment.",
    tags: ['Exam Format', 'Guide', 'Preparation'],
  },
  {
    title: 'CSSE — Consortium of Selective Schools in Essex',
    url: 'https://www.csse.org.uk',
    domain: 'csse.org.uk',
    description: 'Official site for the CSSE exam used by selective schools in Essex, including test dates and format.',
    tags: ['Exam Format', 'Admissions', 'Regional'],
  },

  // ── NHS / wellbeing ────────────────────────────────────────────────────────
  {
    title: 'Helping children with exam anxiety — NHS',
    url: 'https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/help-your-child-beat-exam-stress/',
    domain: 'nhs.uk',
    description: 'NHS advice for parents on recognising and managing exam stress and anxiety in children.',
    tags: ['Wellbeing', 'Exam Day', 'Preparation'],
  },
  {
    title: "Children\'s mental health and exams — Young Minds",
    url: 'https://www.youngminds.org.uk/young-person/coping-with-life/exam-stress/',
    domain: 'youngminds.org.uk',
    description: "Guidance from the UK\'s leading children\'s mental health charity on managing pressure around exams.",
    tags: ['Wellbeing', 'Exam Day'],
  },

  // ── Curriculum & subject support ───────────────────────────────────────────
  {
    title: 'KS2 Maths curriculum — National Curriculum in England',
    url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study',
    domain: 'gov.uk',
    description: 'The official KS2 Maths programme of study that 11+ Maths papers are closely based on.',
    tags: ['Maths', 'Guide', 'Preparation'],
  },
  {
    title: 'KS2 English curriculum — National Curriculum in England',
    url: 'https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study',
    domain: 'gov.uk',
    description: 'The official KS2 English programme of study underpinning 11+ English and comprehension papers.',
    tags: ['English', 'Guide', 'Preparation'],
  },
  {
    title: 'BBC Bitesize — KS2 Maths',
    url: 'https://www.bbc.co.uk/bitesize/primary',
    domain: 'bbc.co.uk',
    description: 'Free BBC revision resources covering the full KS2 Maths curriculum, including interactive exercises.',
    tags: ['Maths', 'Preparation'],
  },
  {
    title: 'BBC Bitesize — KS2 English',
    url: 'https://www.bbc.co.uk/bitesize/subjects/english',
    domain: 'bbc.co.uk',
    description: 'Free BBC resources for KS2 English including grammar, punctuation, spelling, and comprehension.',
    tags: ['English', 'Preparation'],
  },
  {
    title: 'Oxford Owl — free reading and maths resources',
    url: 'https://home.oxfordowl.co.uk',
    domain: 'oxfordowl.co.uk',
    description: "Oxford University Press\'s free parent platform with reading books, activities, and curriculum guides for ages 3–11.",
    tags: ['Preparation', 'English', 'Maths'],
  },

  // ── Verbal & non-verbal reasoning ──────────────────────────────────────────
  {
    title: 'What is verbal reasoning? — Bond 11+',
    url: 'https://www.bond11plus.co.uk/verbal-reasoning',
    domain: 'bond11plus.co.uk',
    description: "Bond\'s parent guide to verbal reasoning in the 11+, including question types and practice advice.",
    tags: ['Verbal Reasoning', 'Exam Format', 'Guide'],
  },
  {
    title: 'What is non-verbal reasoning? — Bond 11+',
    url: 'https://www.bond11plus.co.uk/non-verbal-reasoning',
    domain: 'bond11plus.co.uk',
    description: "Bond\'s parent guide to non-verbal reasoning, covering spatial patterns, matrices, and sequences.",
    tags: ['Exam Format', 'Guide', 'Preparation'],
  },

  // ── Independent sector ─────────────────────────────────────────────────────
  {
    title: 'Independent Schools Council — about independent schools',
    url: 'https://www.isc.co.uk/research/',
    domain: 'isc.co.uk',
    description: 'Annual census and research data on independent schools in the UK, including fees, pupil numbers, and bursaries.',
    tags: ['Schools', 'Grammar Schools', 'Background'],
  },
  {
    title: 'ISEB — Independent Schools Examinations Board',
    url: 'https://www.iseb.co.uk',
    domain: 'iseb.co.uk',
    description: 'The board overseeing Common Entrance and Pre-Test examinations used by many independent schools.',
    tags: ['Schools', 'Exam Format', 'Admissions'],
  },

  // ── Regional & local authority ─────────────────────────────────────────────
  {
    title: 'Kent Test — Kent County Council',
    url: 'https://www.kent.gov.uk/education-and-children/schools/school-places/kent-test',
    domain: 'kent.gov.uk',
    description: 'Official Kent County Council page on the Kent Test, including registration dates and what the test involves.',
    tags: ['Regional', 'Exam Format', 'Admissions'],
  },
  {
    title: 'Buckinghamshire 11+ — Secondary Transfer Test',
    url: 'https://www.buckinghamshire.gov.uk/schools-and-learning/schools-index/school-admissions/grammar-schools-and-transfer-testing-11/',
    domain: 'buckinghamshire.gov.uk',
    description: 'Official Buckinghamshire Council page on the Secondary Transfer Test for grammar school entry.',
    tags: ['Regional', 'Admissions', 'Exam Format'],
  },
  {
    title: 'Birmingham 11+ — Birmingham City Council',
    url: 'https://www.birmingham.gov.uk/info/20119/school_admissions/1778/grammar_school_entry_tests',
    domain: 'birmingham.gov.uk',
    description: "Birmingham City Council\'s guide to grammar school entry tests, registration, and results.",
    tags: ['Regional', 'Admissions', 'Exam Format'],
  },

  // ── Tutoring & support ─────────────────────────────────────────────────────
  {
    title: "The Tutors\' Association — find a qualified tutor",
    url: 'https://www.thetutorsassociation.org.uk',
    domain: 'thetutorsassociation.org.uk',
    description: 'The professional body for tutoring in the UK. Use their directory to find vetted, qualified 11+ tutors.',
    tags: ['Preparation', 'Guide'],
  },
  {
    title: 'Which? guide to 11+ preparation',
    url: 'https://www.elevenplusexams.co.uk/advice-preparation/advice/what-is-the-eleven-plus',
    domain: 'which.co.uk',
    description: "Which?\'s impartial guide to 11+ preparation, covering resources, tutoring, and what to expect.",
    tags: ['Preparation', 'Guide', 'Exam Format'],
  },

  // ── Press & research ───────────────────────────────────────────────────────
  {
    title: 'Grammar schools debate — The Guardian education',
    url: 'https://www.theguardian.com/education/grammarschools',
    domain: 'theguardian.com',
    description: "The Guardian\'s ongoing coverage of the grammar school debate, policy, and research.",
    tags: ['Background', 'Grammar Schools'],
  },
  {
    title: 'Sutton Trust — research on selective schools and social mobility',
    url: 'https://www.suttontrust.com/our-research/gaps-in-grammar-schools-social-mobility/',
    domain: 'suttontrust.com',
    description: 'Research from the Sutton Trust on grammar schools, selective education, and social mobility outcomes.',
    tags: ['Background', 'Grammar Schools', 'Outcomes'],
  },
  {
    title: 'FFT Education Datalab — analysis of grammar school performance',
    url: 'https://ffteducationdatalab.org.uk',
    domain: 'ffteducationdatalab.org.uk',
    description: 'Independent data analysis on school performance, including selective schools and attainment gaps.',
    tags: ['Background', 'Outcomes', 'Grammar Schools'],
  },
  {
    title: 'TES — teaching and education news',
    url: 'https://www.tes.com/magazine/teaching-learning/primary',
    domain: 'tes.com',
    description: "TES covers primary education, curriculum changes, and exam preparation from a teacher\'s perspective.",
    tags: ['Guide', 'Preparation', 'English', 'Maths'],
  },
  {
    title: 'Mumsnet — 11+ discussion boards',
    url: 'https://www.mumsnet.com/discover/11-exam',
    domain: 'mumsnet.com',
    description: 'The largest parent community discussing 11+ preparation, school choices, and results across all regions.',
    tags: ['Preparation', 'Admissions', 'Wellbeing', 'Results'],
  },
  {
    title: 'Exam Papers Plus — free 11+ sample papers',
    url: 'https://exampapersplus.co.uk/11-plus-guide-parents/',
    domain: 'exampapers.co.uk',
    description: 'A widely used resource for free and paid 11+ practice papers across all subjects and exam formats.',
    tags: ['Preparation', 'Exam Format', 'Maths', 'English'],
  },
];

/**
 * Returns up to `count` external links whose tags overlap with the given category.
 * Falls back to general/guide links if not enough tagged matches found.
 */
export function getExternalLinks(category: string, count = 3): ExternalLink[] {
  const primary = EXTERNAL_LINKS.filter((l) => l.tags.includes(category));
  if (primary.length >= count) return primary.slice(0, count);
  const fallback = EXTERNAL_LINKS.filter((l) => !l.tags.includes(category) && l.tags.includes('Guide'));
  return [...primary, ...fallback].slice(0, count);
}
