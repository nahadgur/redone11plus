import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface Props { params: { slug: string } }

const POSTS: Record<string, { title: string; desc: string; content: string }> = {
  'how-to-use-mock-exams': {
    title: 'How to use 11+ mock exams properly',
    desc: 'A simple structure for timing, marking, and turning mistakes into a plan.',
    content: `
Mock exams are one of the most powerful tools in 11+ preparation — but only if you use them well. Sitting a paper and checking the score is not enough.

**Before the exam**
Set proper conditions: a quiet room, a timer, no interruptions. Your child should sit the paper as if it were the real thing. This builds the mental stamina needed for exam day.

**During marking**
Don't just mark right and wrong. For every incorrect answer, write down the topic (e.g. "fractions", "comprehension inference"). This gives you a topic-level picture of where the gaps are.

**After the exam**
Group mistakes by topic, not by paper. Three mistakes in fractions across three papers is more important than one mistake in geometry. Address the most common topics first.

**Timing**
Aim for one mock exam every 2–3 weeks in the 6 months before the exam. Doing them too frequently leads to repetition without learning. Spacing them out lets your child consolidate topics between sessions.

**Review sessions**
A mock exam with no review is wasted. Set aside 30–45 minutes after each paper to go through wrong answers together. Explain the correct approach, don't just show the answer.
    `,
  },
  'best-11-plus-practice-routine': {
    title: 'A sensible 11+ practice routine for Year 4 and Year 5',
    desc: 'Consistency beats cramming: a weekly plan that builds confidence.',
    content: `
The biggest mistake families make is leaving 11+ preparation too late — or starting too intense, burning out, and stopping. A steady, consistent routine is far more effective.

**Year 4 (12–18 months before the exam)**
This is foundation time. Focus on core Maths (times tables, fractions, basic algebra) and reading widely. 20–30 minutes per day is enough. There is no need for mock exams yet.

**Year 5 (6–12 months before the exam)**
Introduce subject-specific practice. Aim for 3–4 sessions per week, each 30–40 minutes. Cover one subject per session: Maths, English, Verbal Reasoning, Non-Verbal Reasoning in rotation.

**Year 5 (3–6 months before the exam)**
Increase to 5 sessions per week. Introduce timed practice under exam conditions once per week. Start sitting full mock exams once a month.

**Year 5 (final 8 weeks)**
Maintain the routine — don't ramp it up drastically. Focus on known weak areas. Practise under timed conditions regularly. Keep weekends relatively free to avoid burnout.

**Rest days matter**
At least one full rest day per week is important. Children who rest regularly perform better than those who grind through every day.
    `,
  },
  'maths-topics-to-master': {
    title: '11+ Maths topics to master before timed mocks',
    desc: 'A checklist of common areas to cover and how to practise them.',
    content: `
11+ Maths covers a wide range of Year 5 and Year 6 topics. Here are the areas that come up most frequently in GL Assessment and CEM papers.

**Number and calculation**
- Mental arithmetic (rapid multiplication, division, addition of decimals)
- Fractions: equivalents, simplifying, adding/subtracting with different denominators
- Percentages and their relationship with fractions and decimals
- Negative numbers, factors and multiples, prime numbers

**Algebra**
- Simple equations (find the value of x)
- Number sequences and pattern recognition
- Word problems that require setting up an equation

**Shape, space and measure**
- Area and perimeter of rectangles, triangles, compound shapes
- Volume of cuboids
- Angle rules (on a straight line, in a triangle, vertically opposite)
- Properties of 2D and 3D shapes

**Data handling**
- Reading bar charts, line graphs, pie charts
- Mean, median, mode and range
- Probability (basic)

**Word problems**
Most 11+ papers include multi-step word problems. These are often where marks are lost. Practise reading the question twice, identifying what's being asked, and showing working.

**How to practise**
Use timed topic sets (10 questions, 10 minutes) before moving to full papers. This way you know exactly which topics need more work.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = POSTS[params.slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.desc,
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 font-semibold transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-indigo-100">
            <BookOpen size={12} /> Guide
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">{post.desc}</p>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5">
            {post.content.trim().split('\n\n').map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return <h2 key={i} className="text-xl font-black text-slate-900 mt-8 mb-2">{para.replace(/\*\*/g, '')}</h2>;
              }
              if (para.startsWith('- ')) {
                const items = para.split('\n').filter(l => l.startsWith('- '));
                return <ul key={i} className="list-disc list-inside space-y-1.5 text-slate-600">{items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}</ul>;
              }
              // Handle inline bold
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return <p key={i}>{parts.map((p, j) => p.startsWith('**') ? <strong key={j}>{p.replace(/\*\*/g, '')}</strong> : p)}</p>;
            })}
          </div>

          <div className="mt-16 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
            <p className="font-black text-slate-900 mb-2">Ready to practise?</p>
            <p className="text-sm text-slate-600 mb-4">Sit a free mock exam and see instant results with explanations.</p>
            <Link href="/mock-exams" className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-sm rounded-xl shadow hover:scale-[1.02] transition-all">
              Start a mock exam →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
