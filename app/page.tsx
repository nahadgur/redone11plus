'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LandingPage } from '../components/LandingPage';

/**
 * Homepage — shows the LandingPage.
 *
 * Deep links (e.g. /?start=mock&schoolId=habs-boys&autostart=1) are
 * forwarded to /quiz with the same params so the URL-based routing still works.
 */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const start = params.get('start');

    if (start === 'mock' || start === 'onboarding') {
      // Forward deep links to the proper /quiz route
      const forward = new URLSearchParams();
      ['schoolId', 'schoolType', 'subject', 'count', 'duration', 'mode', 'quizType', 'topic', 'difficulty'].forEach((k) => {
        const v = params.get(k);
        if (v) forward.set(k, v);
      });
      const qs = forward.toString();
      router.replace(`/quiz${qs ? `?${qs}` : ''}`);
    }
  }, [router]);

  return <LandingPage />;
}
