import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { orgSchema, websiteSchema } from '@/lib/schemas'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.11plusexampapers.com'),
  title: {
    default: '11 Plus Exam Papers',
    template: '%s | 11 Plus Exam Papers',
  },
  description: 'Free 11+ mock exams, practice questions and resources for grammar and independent school entrance. Covers Maths, English, Verbal and Non-Verbal Reasoning.',
  openGraph: {
    siteName: '11 Plus Exam Papers',
    locale: 'en_GB',
    type: 'website',
  },
}

// Sitewide JSON-LD: Organization + WebSite — injected into raw HTML on every page
const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [orgSchema, websiteSchema],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-828TTSWVN8" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-828TTSWVN8');`,
          }}
        />
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
