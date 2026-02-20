import type { Metadata } from 'next';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Privacy Policy | 11 Plus Exam Papers',
  description: 'Privacy policy for 11 Plus Exam Papers.',
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="max-w-3xl mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
          <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>
          <p>11 Plus Exam Papers (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains how we collect and use your data.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">What we collect</h2>
          <p>When you submit an enquiry form, we collect your email address, child&apos;s name, and target school. This information is used solely to respond to your enquiry and send relevant 11+ preparation resources.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">How we store it</h2>
          <p>Form submissions are stored in a secure Google Sheets document accessible only to the site owner. We do not sell or share your data with third parties.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Your rights</h2>
          <p>You can request deletion of your data at any time by emailing <a href="mailto:hello@11plusexampapers.co.uk" className="text-indigo-600 hover:underline">hello@11plusexampapers.co.uk</a>.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Cookies</h2>
          <p>We use localStorage to save your quiz progress locally in your browser. No third-party tracking cookies are used.</p>
          <h2 className="text-xl font-black text-slate-800 mt-8">Contact</h2>
          <p>For any privacy questions: <a href="mailto:hello@11plusexampapers.co.uk" className="text-indigo-600 hover:underline">hello@11plusexampapers.co.uk</a></p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
