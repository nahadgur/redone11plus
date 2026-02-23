import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { ArrowLeft, BookOpen, Clock, Calendar, ArrowRight, Lightbulb, AlertTriangle, Info } from 'lucide-react';
import { BLOG_POSTS, getPostBySlug, getAllSlugs, type BlockType } from '@/lib/blogPosts';

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.desc,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.desc,
      images: [{ url: post.imageUrl, alt: post.imageAlt }],
      type: 'article',
    },
  };
}

// ─── Inline text renderer (handles **bold** and [link](url)) ─────────────────

function InlineText({ text }: { text: string }) {
  // Split on **bold** and [text](url) patterns
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <a
              key={i}
              href={linkMatch[2]}
              className="text-indigo-600 font-semibold underline underline-offset-2 decoration-indigo-300 hover:text-indigo-800 hover:decoration-indigo-600 transition-colors"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// ─── Block renderer ───────────────────────────────────────────────────────────

function Block({ block }: { block: BlockType }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-12 mb-4 leading-tight tracking-tight">
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3 className="text-lg font-black text-slate-800 mt-7 mb-3 leading-snug">
          {block.text}
        </h3>
      );

    case 'p':
      return (
        <p className="text-slate-700 leading-relaxed text-[17px]">
          <InlineText text={block.text} />
        </p>
      );

    case 'ul':
      return (
        <ul className="space-y-2.5 my-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="space-y-3 my-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700 text-[16px] leading-relaxed">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <InlineText text={item} />
            </li>
          ))}
        </ol>
      );

    case 'table':
      return (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 my-1">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-black text-xs uppercase tracking-wide first:rounded-tl-2xl last:rounded-tr-2xl">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-slate-700 border-t border-slate-100 font-medium">
                      <InlineText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'callout': {
      const variants = {
        tip: {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          icon: Lightbulb,
          iconColor: 'text-emerald-600',
          label: 'Tip',
          labelColor: 'text-emerald-700',
        },
        warning: {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          icon: AlertTriangle,
          iconColor: 'text-amber-600',
          label: 'Watch out',
          labelColor: 'text-amber-700',
        },
        info: {
          bg: 'bg-indigo-50',
          border: 'border-indigo-200',
          icon: Info,
          iconColor: 'text-indigo-600',
          label: 'Note',
          labelColor: 'text-indigo-700',
        },
      };
      const v = variants[block.variant];
      const Icon = v.icon;
      return (
        <div className={`${v.bg} ${v.border} border rounded-2xl p-5 flex gap-4 my-1`}>
          <Icon size={18} className={`${v.iconColor} shrink-0 mt-0.5`} />
          <div>
            <span className={`text-xs font-black uppercase tracking-widest ${v.labelColor} block mb-1`}>
              {v.label}
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              <InlineText text={block.text} />
            </p>
          </div>
        </div>
      );
    }

    case 'divider':
      return <hr className="border-slate-200 my-2" />;

    default:
      return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-white">

        {/* ── Featured image ── */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-slate-100">
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-black uppercase tracking-wide border border-white/30">
                {post.category}
              </span>
              <span className="text-white/80 text-xs font-medium flex items-center gap-1">
                <Clock size={11} /> {post.readTime}
              </span>
              <span className="text-white/80 text-xs font-medium flex items-center gap-1">
                <Calendar size={11} /> {post.date}
              </span>
            </div>
          </div>
        </div>

        {/* ── Article body ── */}
        <div className="max-w-3xl mx-auto px-4 py-10">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 font-semibold transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Title */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-5 border border-indigo-100">
            <BookOpen size={11} /> {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed border-b border-slate-100 pb-10">
            {post.desc}
          </p>

          {/* Content blocks */}
          <div className="space-y-5">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="mt-16 p-7 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl text-white">
            <p className="font-black text-xl mb-2">Ready to practise?</p>
            <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
              Sit a free school-themed mock exam and get instant results with explanations for every question.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/mock-exams"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-black text-sm rounded-xl hover:scale-[1.02] transition-all shadow-lg"
              >
                Sit a mock exam <ArrowRight size={15} />
              </Link>
              <Link
                href="/papers"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 border border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/25 transition-colors"
              >
                School papers <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* ── Related articles ── */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lg font-black text-slate-900 mb-5">More guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex gap-4 p-4 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                  >
                    <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0">
                      <img
                        src={p.imageUrl}
                        alt={p.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-black text-indigo-600 uppercase tracking-wide mb-1">{p.category}</div>
                      <div className="text-sm font-black text-slate-800 group-hover:text-indigo-700 transition-colors leading-snug line-clamp-2">
                        {p.title}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
