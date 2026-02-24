'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  GraduationCap, Building2, MapPin, BookOpen, Users,
  Calendar, FileText, ChevronRight, ExternalLink, CheckCircle, Rocket,
} from 'lucide-react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { SCHOOLS } from '@/lib/schools';

// ─── Static data for known schools ───────────────────────────────────────────
// Sources: official school admissions pages only. No unofficial claims made.

interface SchoolDetail {
  admissionsUrl?: string;
  entryStages?: string;
  placesAvailable?: string;
  examNotes?: string;
  registrationWindow?: string;
  resultsTimeline?: string;
  catchmentArea?: string | boolean;
}

const SCHOOL_DETAILS: Record<string, SchoolDetail> = {
  'qe-boys': {
    admissionsUrl: 'https://www.qebarnet.co.uk/admissions-information/admissions/',
    entryStages: 'Stage 1 (GL Assessment papers) → results → CAF',
    placesAvailable: '180 per year',
    examNotes: 'Two papers: English (inc. comprehension) and Maths, each approx. 50 minutes. All multiple-choice. GL Assessment. No VR/NVR at Stage 1.',
    registrationWindow: 'Opens ~1 May, closes ~11 July (Year 5)',
    resultsTimeline: 'Early October; National Offers Day 1 March',
    catchmentArea: false,
  },
  'henrietta-barnett': {
    admissionsUrl: 'https://www.hbschool.org.uk/admissions/',
    entryStages: 'Round 1 (GL Assessment — VR, NVR, English) → top 300 → Round 2 (school-set Maths & English)',
    placesAvailable: '120 per year',
    examNotes: 'Round 1 is GL Assessment multiple-choice covering English, Verbal Reasoning and Non-Verbal Reasoning. Round 2 is set by the school and tests Maths and English comprehension/writing. HBS does not release Round 2 past papers.',
    registrationWindow: 'Opens 1 April, closes 11 July (Year 5)',
    resultsTimeline: 'Round 1 results late September; Round 2 early October; Offers 1 March',
    catchmentArea: 'No catchment for Round 1. Post-Round 2, priority given to candidates within 3 miles.',
  },
  'wilsons': {
    admissionsUrl: 'https://www.wilsons.school/admissions/',
    entryStages: 'Sutton SET (Stage 1, shared) → Stage 2 (Wilson\'s-specific) → CAF',
    placesAvailable: '180 per year',
    examNotes: 'SET tests Maths and English only (no VR/NVR). Stage 2 includes Maths, English and aptitude tests for Sport and Music. SET registration is shared across all Sutton grammar schools.',
    registrationWindow: 'SET registration opens 1 May, closes 1 August (Year 5)',
    resultsTimeline: 'SET late September; Stage 2 early October; Offers 1 March',
    catchmentArea: 'No catchment area. Places offered by score across the country.',
  },
  'tiffin-girls': {
    admissionsUrl: 'https://www.tiffingirls.org/admissions/year-7/',
    entryStages: 'Stage 1 (school-set English & Maths) → top ~450 → Stage 2 (written papers)',
    placesAvailable: '180 per year',
    examNotes: 'Both stages set by the school. Stage 1 is partly multiple-choice. Stage 2 is written and not released publicly. Combined score weighted 60% English, 40% Maths.',
    registrationWindow: 'Opens 3 June, closes 1 September (Year 5)',
    resultsTimeline: 'Stage 1 results 15 October; Stage 2 November; Offers 1 March',
    catchmentArea: 'Yes — 44 defined postal districts. Most places go to children in the catchment area.',
  },
  'tiffin': {
    admissionsUrl: 'https://www.tiffinschool.co.uk/admissions/year-7-admissions/',
    entryStages: 'Stage 1 (school-set English & Maths) → top ~450 → Stage 2 (written papers)',
    placesAvailable: '180 per year',
    examNotes: 'Stage 1 Maths includes a mix of multiple-choice and grid-answer questions. Stage 2 papers are written and not released publicly. Up to 10% of places reserved for Music/Sport aptitude.',
    registrationWindow: 'Opens 4 June, closes 3 September (Year 5)',
    resultsTimeline: 'Stage 1 results 15 October; Stage 2 November; Offers 1 March',
    catchmentArea: 'Yes — Inner Priority Area (<10km) and Outer Priority Area (10–14km from school).',
  },
  'st-olaves': {
    admissionsUrl: 'https://www.saintolaves.net/admissions',
    entryStages: "SET Stage 1 (VR, NVR, Maths, English) → top 450 → Stage 2 (Maths & English written)",
    placesAvailable: '124 per year',
    examNotes: "Stage 1 (SET) is a 1-hour multiple-choice paper with approx. 60 questions across four sections. Top 450 sit Stage 2 which consists of two 1-hour written papers set by the school. No past papers released for Stage 2.",
    registrationWindow: 'Closes 9 July (Year 5)',
    resultsTimeline: 'Stage 1 results mid-October; Stage 2 14 November; Offers 1 March',
    catchmentArea: false,
  },
  'sutton-grammar': {
    admissionsUrl: 'https://www.suttongrammar.sutton.sch.uk/admissions/',
    entryStages: 'Sutton SET (Stage 1) → Stage 2 (shared with Wilson\'s and Wallington County)',
    placesAvailable: '120 per year (boys only)',
    examNotes: 'SET tests Maths and English only. Stage 2 is a written exam shared with Wilson\'s and Wallington County Grammar. Each school applies its own weighting and pass mark to the combined scores.',
    registrationWindow: 'SET opens 1 May, closes 1 August (Year 5)',
    resultsTimeline: 'SET late September; Stage 2 early October; Offers 1 March',
    catchmentArea: false,
  },
  'nonsuch': {
    admissionsUrl: 'https://www.nonsuchschool.org/admissions/',
    entryStages: 'Sutton SET (Stage 1) → NWSEE Stage 2 (shared with Wallington Girls)',
    placesAvailable: '120 per year (girls only)',
    examNotes: 'The Nonsuch and Wallington Second Stage Entrance Examination (NWSEE) is shared between Nonsuch and Wallington High School for Girls. Stage 2 consists of English (extended writing) and Maths (written). No comprehension in Stage 2 English.',
    registrationWindow: 'SET opens 1 May, closes 1 August (Year 5)',
    resultsTimeline: 'SET late September; Stage 2 October; Offers 1 March',
    catchmentArea: false,
  },
};

export default function SchoolPageClient({ params }: { params: { id: string } }) {
  const school = SCHOOLS.find((s) => s.id === params.id);
  if (!school) notFound();

  const s = school as any;
  const detail = SCHOOL_DETAILS[school.id];
  const isGrammar = school.category === 'grammar';
  const accentColor = isGrammar ? 'indigo' : 'emerald';

  const subjectLabels: Record<string, string> = {
    maths: 'Maths',
    english: 'English',
    'verbal-reasoning': 'Verbal Reasoning',
    'non-verbal-reasoning': 'Non-Verbal Reasoning',
  };

  return (
    <>