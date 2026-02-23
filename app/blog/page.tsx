import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blogPosts';

export const metadata: Metadata = {
  title: '11 Plus Guides and Articles | 11 Plus Exam Papers',
  description:
    'Practical 11+ guides: how to plan revision, use mock exams effectively, and master Maths topics. Built for grammar and independent school preparation.',
  alternates: { canonical: '/blog' },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-white">
      <SiteNav />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-14">

        {/* ── Header ── */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 font-bold text-sm mb-5 border border-indigo-100">
            <BookOpen size={15} /> Blog & Guides
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            11+ guides and articles
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Practical, detailed writing for families preparing for grammar and independent school entrance exams.
          </p>
        </div>

        {/* ── Featured post ── */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-3xl overflow-hidden border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 md:h-auto min-h-[220px] overflow-hidden">
              <img
                src={featured.imageUrl}
                alt={featured.imageAlt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="p-7 sm:p-10 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-black uppercase tracking-wide">
                  {featured.category}
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Clock size={11} /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors mb-3 leading-tight">
                {featured.title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5 text-sm">{featured.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-sm font-black text-indigo-600">
                Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* ── Rest of posts ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-[11px] font-black uppercase tracking-wide border border-indigo-100">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Clock size={10} /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-black text-slate-900 group-hover:text-indigo-700 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-black text-indigo-600">
                  Read article <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 p-8 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <div className="font-black text-slate-900 text-lg mb-1">Ready to practise?</div>
            <div className="text-sm text-slate-600">Sit a free mock exam and get instant results with explanations.</div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/mock-exams"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-lg shadow-indigo-200 transition-colors"
            >
              Mock exams <ArrowRight size={16} />
            </Link>
            <Link
              href="/papers"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 text-slate-900 font-black text-sm transition-colors"
            >
              School papers <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
