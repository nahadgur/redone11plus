'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Search, GraduationCap, Building2, ChevronRight, Rocket,
  BookOpen, MapPin, Clock, ClipboardList,
} from 'lucide-react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SchoolEntry {
  id: string;
  name: string;
  shortName: string;
  category: 'grammar' | 'private';
  examFormat: string;
  location: string;
  gender: 'boys' | 'girls' | 'mixed';
  subjects: string[];         // subject IDs available for this school's mock
  officialAdmissionsUrl?: string;
  note?: string;
}

// ─── School data ─────────────────────────────────────────────────────────────

const SCHOOLS: SchoolEntry[] = [
  // ── GRAMMAR SCHOOLS ──────────────────────────────────────────────────────
  { id: 'qe-boys', name: "Queen Elizabeth's School (Barnet)", shortName: 'QE Barnet', category: 'grammar', examFormat: 'GL Assessment (2-stage)', location: 'Barnet, North London', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.qebarnet.co.uk/admissions-information/admissions/' },
  { id: 'henrietta-barnett', name: 'The Henrietta Barnett School', shortName: 'HBS', category: 'grammar', examFormat: 'GL Assessment (2-stage)', location: 'Hampstead Garden Suburb, North London', gender: 'girls', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.hbschool.org.uk/admissions/' },
  { id: 'wilsons', name: "Wilson's School", shortName: "Wilson's", category: 'grammar', examFormat: 'Sutton SET (2-stage)', location: 'Wallington, Sutton', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.wilsons.school/admissions/' },
  { id: 'tiffin-girls', name: "Tiffin Girls' School", shortName: 'Tiffin Girls', category: 'grammar', examFormat: 'School own papers (2-stage)', location: 'Kingston upon Thames', gender: 'girls', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.tiffingirls.org/admissions/year-7/', note: 'Tiffin Girls sets its own papers. Stage 2 is not released publicly.' },
  { id: 'tiffin', name: 'Tiffin School', shortName: 'Tiffin', category: 'grammar', examFormat: 'School own papers (2-stage)', location: 'Kingston upon Thames', gender: 'boys', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.tiffinschool.co.uk/admissions/year-7-admissions/' },
  { id: 'st-olaves', name: "St Olave's Grammar School", shortName: "St Olave's", category: 'grammar', examFormat: "St Olave's SET (2-stage)", location: 'Orpington, Bromley', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.saintolaves.net/admissions' },
  { id: 'latymer', name: 'The Latymer School', shortName: 'Latymer', category: 'grammar', examFormat: 'GL Assessment', location: 'Edmonton, North London', gender: 'mixed', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.latymer.co.uk/admissions/' },
  { id: 'nonsuch', name: 'Nonsuch High School for Girls', shortName: 'Nonsuch', category: 'grammar', examFormat: 'Sutton SET (2-stage)', location: 'Cheam, Sutton', gender: 'girls', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.nonsuchschool.org/admissions/' },
  { id: 'wallington-girls', name: 'Wallington High School for Girls', shortName: 'Wallington Girls', category: 'grammar', examFormat: 'Sutton SET (2-stage)', location: 'Wallington, Sutton', gender: 'girls', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.wallingtongirls.org.uk/admissions/' },
  { id: 'sutton-grammar', name: 'Sutton Grammar School', shortName: 'Sutton Grammar', category: 'grammar', examFormat: 'Sutton SET (2-stage)', location: 'Sutton, Surrey', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.suttongrammar.sutton.sch.uk/admissions/' },
  { id: 'colchester-rgs', name: 'Colchester Royal Grammar School', shortName: 'CRGS', category: 'grammar', examFormat: 'CSSE (Essex)', location: 'Colchester, Essex', gender: 'boys', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.crgs.co.uk/admissions/', note: 'CRGS uses CSSE (Consortium of Selective Schools in Essex) papers.' },
  { id: 'altrincham-girls', name: 'Altrincham Grammar School for Girls', shortName: 'AGGS', category: 'grammar', examFormat: 'CEM (Trafford)', location: 'Altrincham, Greater Manchester', gender: 'girls', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.aggs.trafford.sch.uk/admissions/' },
  { id: 'pates-grammar', name: "Pate's Grammar School", shortName: "Pate's", category: 'grammar', examFormat: 'GL Assessment', location: 'Cheltenham, Gloucestershire', gender: 'mixed', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.pates.gloucs.sch.uk/admissions/' },
  { id: 'king-edward-vi-girls', name: 'King Edward VI High School for Girls', shortName: 'KEHS Birmingham', category: 'grammar', examFormat: 'KEHS own papers', location: 'Birmingham', gender: 'girls', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.kehsbirmingham.org/admissions/' },
  { id: 'reading-school', name: 'Reading School', shortName: 'Reading School', category: 'grammar', examFormat: 'GL Assessment', location: 'Reading, Berkshire', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.reading-school.co.uk/admissions/' },
  { id: 'newstead-wood', name: 'Newstead Wood School', shortName: 'Newstead Wood', category: 'grammar', examFormat: 'GL Assessment (2-stage)', location: 'Orpington, Bromley', gender: 'girls', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.newsteadwood.co.uk/admissions/' },
  // ── PRIVATE SCHOOLS ──────────────────────────────────────────────────────
  { id: 'spgs-girls', name: "St Paul's Girls' School", shortName: 'SPGS', category: 'private', examFormat: 'SPGS own papers (Maths, English + interview)', location: 'Brook Green, West London', gender: 'girls', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.spgs.org/admissions/' },
  { id: 'guildford-high', name: 'Guildford High School', shortName: 'Guildford High', category: 'private', examFormat: 'Own papers (3 subjects + General)', location: 'Guildford, Surrey', gender: 'girls', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.guildfordhigh.co.uk/admissions/' },
  { id: 'st-pauls', name: "St Paul's School", shortName: "St Paul's", category: 'private', examFormat: 'ISEB Pre-Test + own papers + interview', location: 'Barnes, West London', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.stpaulsschool.org.uk/admissions/' },
  { id: 'nlcs-girls', name: 'North London Collegiate School', shortName: 'NLCS', category: 'private', examFormat: 'NLCS own papers (Maths, English + interview)', location: 'Edgware, North London', gender: 'girls', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.nlcs.org.uk/admissions/' },
  { id: 'kcs-wimbledon', name: "King's College School (Wimbledon)", shortName: 'KCS Wimbledon', category: 'private', examFormat: 'KCS own papers (Maths, English, Reasoning + interview)', location: 'Wimbledon, South London', gender: 'boys', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.kcs.org.uk/admissions/' },
  { id: 'colsg-girls', name: 'City of London School for Girls', shortName: 'CLSG', category: 'private', examFormat: 'ISEB Pre-Test or own papers', location: 'Barbican, City of London', gender: 'girls', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.clsg.org.uk/admissions/' },
  { id: 'mcs-oxford', name: 'Magdalen College School (Oxford)', shortName: 'MCS Oxford', category: 'private', examFormat: 'MCS own papers (Maths, English + interview)', location: 'Oxford', gender: 'boys', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.mcsoxford.org/admissions/' },
  { id: 'cls-boys', name: 'City of London School', shortName: 'CLS', category: 'private', examFormat: 'CLS own papers (Maths, English)', location: 'Blackfriars, City of London', gender: 'boys', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.clsb.org.uk/admissions/' },
  { id: 'habs-boys', name: "Haberdashers' Boys' School", shortName: 'Habs Boys', category: 'private', examFormat: 'Own papers (Maths, English, Reasoning)', location: 'Borehamwood, Hertfordshire', gender: 'boys', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.habsboys.org.uk/admissions/' },
  { id: 'habs-girls', name: "Haberdashers' Girls' School", shortName: 'Habs Girls', category: 'private', examFormat: 'Own papers (Maths, English, Reasoning)', location: 'Borehamwood, Hertfordshire', gender: 'girls', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.habsgirls.org.uk/admissions/' },
  { id: 'wycombe-abbey', name: 'Wycombe Abbey', shortName: 'Wycombe Abbey', category: 'private', examFormat: 'Own papers (Maths, English + interview)', location: 'High Wycombe, Buckinghamshire', gender: 'girls', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.wycombeabbey.com/admissions/' },
  { id: 'godolphin-latymer', name: 'Godolphin and Latymer School', shortName: 'Godolphin', category: 'private', examFormat: 'Own papers (Maths, English + interview)', location: 'Hammersmith, West London', gender: 'girls', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.godolphinandlatymer.com/admissions/' },
  { id: 'highgate', name: 'Highgate School', shortName: 'Highgate', category: 'private', examFormat: 'ISEB Pre-Test + own papers + interview', location: 'Highgate, North London', gender: 'mixed', subjects: ['maths', 'english', 'verbal', 'nonverbal'], officialAdmissionsUrl: 'https://www.highgateschool.org.uk/admissions/' },
  { id: 'latymer-upper', name: 'Latymer Upper School', shortName: 'Latymer Upper', category: 'private', examFormat: 'Own papers (Maths, English + interview)', location: 'Hammersmith, West London', gender: 'mixed', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.latymer-upper.org/admissions/' },
  { id: 'jags', name: "James Allen's Girls' School", shortName: 'JAGS', category: 'private', examFormat: 'Own papers (Maths, English + interview)', location: 'Dulwich, South London', gender: 'girls', subjects: ['maths', 'english'], officialAdmissionsUrl: 'https://www.jags.org.uk/admissions/' },
  { id: 'wimbledon-high', name: 'Wimbledon High School', shortName: 'Wimbledon High', category: 'private', examFormat: 'GDST own papers (Maths, English, Reasoning)', location: 'Wimbledon, South London', gender: 'girls', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.wimbledonhigh.gdst.net/admissions/' },
  { id: 'dulwich-college', name: 'Dulwich College', shortName: 'Dulwich College', category: 'private', examFormat: 'Own papers (Maths, English, Reasoning)', location: 'Dulwich, South London', gender: 'boys', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.dulwich.org.uk/admissions/' },
  { id: 'alleyn', name: "Alleyn's School", shortName: "Alleyn's", category: 'private', examFormat: 'Own papers (Maths, English, Reasoning)', location: 'Dulwich, South London', gender: 'mixed', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.alleyns.org.uk/admissions/' },
  { id: 'south-hampstead', name: 'South Hampstead High School', shortName: 'South Hampstead', category: 'private', examFormat: 'GDST own papers (Maths, English, Reasoning)', location: 'Hampstead, North London', gender: 'girls', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.shhs.gdst.net/admissions/' },
  { id: 'manchester-grammar', name: 'Manchester Grammar School', shortName: 'MGS', category: 'private', examFormat: 'Own papers (Maths, English, Reasoning + interview)', location: 'Rusholme, Manchester', gender: 'boys', subjects: ['maths', 'english', 'verbal'], officialAdmissionsUrl: 'https://www.mgs.org/admissions/' },
];

const SUBJECT_LABELS: Record<string, string> = {
  maths: 'Maths',
  english: 'English',
  verbal: 'Verbal Reasoning',
  nonverbal: 'Non-Verbal Reasoning',
};

// ─── School Card ──────────────────────────────────────────────────────────────

function SchoolCard({ school }: { school: SchoolEntry }) {
  const router = useRouter();
  const isGrammar = school.category === 'grammar';

  const handleStartMock = (subjectId: string) => {
    const params = new URLSearchParams({
      schoolId: school.id,
      schoolType: isGrammar ? 'grammar' : 'independent',
      subject: subjectId,
      quizType: 'multiple-choice',
      mode: 'exam',
      count: '25',
      duration: '45',
    });
    router.push(`/quiz?${params.toString()}`);
  };

  return (
    <div className={`bg-white rounded-2xl border overflow-hidden transition-all hover:shadow-md ${
      isGrammar ? 'border-slate-200 hover:border-indigo-200' : 'border-slate-200 hover:border-emerald-200'
    }`}>
      {/* Card header */}
      <div className={`p-4 border-b ${isGrammar ? 'bg-indigo-50 border-indigo-100' : 'bg-emerald-50 border-emerald-100'}`}>
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-black text-slate-900 text-sm leading-snug">{school.name}</h3>
            <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
              <MapPin size={10} className="shrink-0" />
              {school.location} · {school.gender === 'boys' ? 'Boys' : school.gender === 'girls' ? 'Girls' : 'Mixed'}
            </div>
          </div>
          {school.officialAdmissionsUrl && (
            <a
              href={school.officialAdmissionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 text-[10px] font-bold flex items-center gap-0.5 px-2 py-1 rounded-lg border transition-colors ${
                isGrammar
                  ? 'text-indigo-600 border-indigo-200 hover:bg-indigo-100'
                  : 'text-emerald-600 border-emerald-200 hover:bg-emerald-100'
              }`}
            >
              Admissions ↗
            </a>
          )}
        </div>
        <div className={`mt-2 inline-flex items-center gap-1 px-2.5 py-1 bg-white border rounded-lg text-[11px] font-medium ${
          isGrammar ? 'border-indigo-100 text-indigo-700' : 'border-emerald-100 text-emerald-700'
        }`}>
          <BookOpen size={10} />
          {school.examFormat}
        </div>
      </div>

      {/* Mock exam buttons */}
      <div className="p-4">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1">
          <ClipboardList size={10} /> Sit a themed mock
        </p>
        <div className="flex flex-wrap gap-2">
          {school.subjects.map((subjectId) => (
            <button
              key={subjectId}
              onClick={() => handleStartMock(subjectId)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${
                isGrammar
                  ? 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-400'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-400'
              }`}
            >
              <Rocket size={11} />
              {SUBJECT_LABELS[subjectId] || subjectId}
            </button>
          ))}
        </div>

        {school.note && (
          <p className="text-[11px] text-slate-400 mt-3 leading-relaxed italic">{school.note}</p>
        )}

        <div className="mt-3 flex items-center gap-3 text-[10px] text-slate-400 font-medium">
          <span className="flex items-center gap-1"><Clock size={9} /> 45 mins</span>
          <span className="flex items-center gap-1"><ClipboardList size={9} /> 25 questions</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function PapersPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'grammar' | 'private'>('all');

  const filtered = useMemo(() => {
    return SCHOOLS.filter((s) => {
      const q = search.toLowerCase();
      const matchesSearch =
        s.name.toLowerCase().includes(q) ||
        s.shortName.toLowerCase().includes(q) ||
        s.location.toLowerCase().includes(q);
      const matchesFilter = filter === 'all' || s.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const grammarSchools = filtered.filter((s) => s.category === 'grammar');
  const privateSchools = filtered.filter((s) => s.category === 'private');

  return (
    <>
      <SiteNav />

      <main className="bg-white min-h-screen">

        {/* ── Hero ── */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-violet-50 pt-20 pb-14 px-4 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-indigo-200">
              <ClipboardList size={12} /> School-Themed Mock Exams
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              School-themed practice papers
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-8">
              Sit a mock exam themed around your target school's format and subjects. Each paper is
              25 questions, timed at 45 minutes, and designed to reflect the real entrance exam style.
            </p>

            <div className="flex flex-wrap gap-4 mb-2">
              {[
                { value: `${SCHOOLS.length}`, label: 'Schools covered' },
                { value: `${SCHOOLS.filter(s => s.category === 'grammar').length}`, label: 'Grammar schools' },
                { value: `${SCHOOLS.filter(s => s.category === 'private').length}`, label: 'Independent schools' },
                { value: 'Free', label: 'Access (for now)' },
              ].map((s) => (
                <div key={s.label} className="px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-sm text-center min-w-[110px]">
                  <div className="text-xl font-black text-indigo-600">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Search & Filter ── */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by school name or location…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
              />
            </div>
            <div className="flex gap-2">
              {(['all', 'grammar', 'private'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold capitalize transition-all border ${
                    filter === f
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {f === 'all' ? 'All Schools' : f === 'grammar' ? 'Grammar' : 'Independent'}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <Search size={32} className="mx-auto mb-3 opacity-30" />
              <p className="font-semibold">No schools found for &ldquo;{search}&rdquo;</p>
            </div>
          )}
        </section>

        {/* ── Grammar Schools ── */}
        {grammarSchools.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 pb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                <GraduationCap size={16} className="text-indigo-600" />
              </div>
              <h2 className="text-xl font-black text-slate-900">Grammar Schools</h2>
              <span className="px-2.5 py-0.5 text-xs font-bold bg-indigo-100 text-indigo-700 rounded-full">{grammarSchools.length}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {grammarSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </section>
        )}

        {/* ── Independent Schools ── */}
        {privateSchools.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 pb-20">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Building2 size={16} className="text-emerald-600" />
              </div>
              <h2 className="text-xl font-black text-slate-900">Independent Schools</h2>
              <span className="px-2.5 py-0.5 text-xs font-bold bg-emerald-100 text-emerald-700 rounded-full">{privateSchools.length}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {privateSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="bg-indigo-50 border-t border-indigo-100 py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-3">
              Want a general 11+ mock instead?
            </h2>
            <p className="text-slate-500 mb-6">
              Choose your exam style and start a general mock — not tied to a specific school.
            </p>
            <Link
              href="/mock-exams"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
            >
              General mock exams <ChevronRight size={18} />
            </Link>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
