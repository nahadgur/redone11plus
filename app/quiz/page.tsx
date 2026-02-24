'use client';

/**
 * /quiz — Branded quiz wrapper page
 *
 * Replaces the redirect to /?start=mock&autostart=1 (which dumped users into
 * the plain app/page.tsx shell with no SiteNav/SiteFooter).
 *
 * Usage: /quiz?subject=maths&count=25&duration=45&schoolType=grammar&quizType=multiple-choice
 */

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { QuizArea } from '@/components/QuizArea';
import { ResultsScreen } from '@/components/ResultsScreen';
import { ReviewScreen } from '@/components/ReviewScreen';
import { Subject, QuizMode, QuizType, QuizResult, SchoolType } from '@/types';

type Screen = 'quiz' | 'results' | 'review';

function mapSubject(s: string | null): Subject {
  if (!s) return Subject.Maths;
  const lower = s.toLowerCase().replace(/_/g, '-');
  if (lower === 'english') return Subject.English;
  // Accept both short form ('verbal') and long URL slug ('verbal-reasoning')
  if (lower === 'verbal' || lower === 'verbal-reasoning') return Subject.VerbalReasoning;
  // Accept both short form ('nonverbal') and long URL slug ('non-verbal-reasoning')
  if (lower === 'nonverbal' || lower === 'non-verbal' || lower === 'non-verbal-reasoning') return Subject.NonVerbalReasoning;
  return Subject.Maths;
}

function mapSchoolType(s: string | null): SchoolType | null {
  if (!s) return null;
  if (s === 'grammar')     return SchoolType.Grammar;
  if (s === 'independent') return SchoolType.Private;
  if (s === 'state')       return SchoolType.State;
  return null;
}

function QuizPageInner() {
  const router     = useRouter();
  const params     = useSearchParams();
  const [screen, setScreen]       = useState<Screen>('quiz');
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);
  const [retryKey, setRetryKey]   = useState(0);

  // Parse query params
  const subject      = mapSubject(params.get('subject'));
  const schoolType   = mapSchoolType(params.get('schoolType'));
  const mode         = (params.get('mode') === 'practice' ? 'practice' : 'exam') as QuizMode;
  const quizType     = (params.get('quizType') || 'multiple-choice') as QuizType;
  const questionCount = Math.max(10, Math.min(30, parseInt(params.get('count') || '25', 10)));
  const examDurationMins = Math.max(15, Math.min(120, parseInt(params.get('duration') || '45', 10)));
  const schoolId     = params.get('schoolId') || undefined;
  const topic        = params.get('topic')    || undefined;
  const difficulty   = (params.get('difficulty') || 'standard') as 'standard' | 'challenging' | 'exam-ready';

  const handleComplete = (result: QuizResult) => {
    setLastResult(result);
    setScreen('results');
  };

  const handleRetry = () => {
    setRetryKey((k) => k + 1);
    setLastResult(null);
    setScreen('quiz');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Branded nav — consistent with rest of site */}
      <SiteNav ctaLabel="Find a tutor" ctaHref="/tutors" />

      {/* Breadcrumb / back link */}
      <div className="max-w-5xl mx-auto w-full px-4 pt-4 pb-0">
        <Link
          href="/mock-exams"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-indigo-600 font-semibold transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Mock Exams
        </Link>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {screen === 'quiz' && (
          <QuizArea
            key={retryKey}
            subject={subject}
            schoolType={schoolType}
            mode={mode}
            quizType={quizType}
            topic={topic}
            questionCount={questionCount}
            examDurationMins={examDurationMins}
            schoolId={schoolId}
            difficulty={difficulty}
            onComplete={handleComplete}
            onBackToDashboard={() => router.push('/mock-exams')}
          />
        )}

        {screen === 'results' && lastResult && (
          <ResultsScreen
            result={lastResult}
            newBadges={[]}
            onHome={() => router.push('/mock-exams')}
            onRetry={handleRetry}
            onReview={() => setScreen('review')}
          />
        )}

        {screen === 'review' && lastResult && (
          <ReviewScreen
            result={lastResult}
            onBack={() => setScreen('results')}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-indigo-500" />
      </div>
    }>
      <QuizPageInner />
    </Suspense>
  );
}
