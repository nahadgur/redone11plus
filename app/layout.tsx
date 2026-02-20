import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://11plusexampapers.co.uk'),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
