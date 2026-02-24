import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Terms of Use | 11 Plus Exam Papers',
  description: 'Terms of use for 11 Plus Exam Papers.',
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Terms of Use</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>
          <p>By using 11 Plus Exam Papers, you agree to these terms.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Use of content</h2>
          <p>All content on this site — including practice questions, explanations and guides — is for personal, non-commercial educational use only. Reproduction or redistribution without written permission is prohibited.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Accuracy</h2>
          <p>We aim to provide accurate 11+ preparation content. However, exam formats and school requirements change. Always verify details with your target school&apos;s official admissions page.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">No liability</h2>
          <p>We are not responsible for exam outcomes. Results depend on many factors beyond practice materials.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Changes</h2>
          <p>We may update these terms at any time. Continued use of the site constitutes acceptance.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Contact</h2>
          <p>Questions: <a href="mailto:hello@11plusexampapers.com" className="text-indigo-600 hover:underline">hello@11plusexampapers.com</a></p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
