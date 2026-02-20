import { NextResponse } from 'next/server';

// Google Apps Script Web App URL — set this in Vercel environment variables
// as APPS_SCRIPT_URL (server-side, no NEXT_PUBLIC_ needed here)
const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbwO8YZyJF4yngUnNT0ZZlnt2ZQdLevpQ4mTdgBvQPBjv4LXVHhpZjLkXGJaHo7_KzbN/exec';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payload = {
      email:        String(body?.email        || '').trim(),
      childName:    String(body?.childName    || body?.name || '').trim(),
      targetSchool: String(body?.targetSchool || body?.schoolId || '').trim(),
      phone:        String(body?.phone        || '').trim(),
      childYear:    String(body?.childYear    || '').trim(),
      source:       String(body?.source       || 'api-leads').trim(),
    };

    // Log server-side regardless
    console.log('[lead]', { ...payload, ts: new Date().toISOString() });

    // Forward to Google Apps Script
    if (APPS_SCRIPT_URL) {
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Don't fail the response if Sheets forwarding fails
        console.error('[lead] Google Sheets forward failed:', err);
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
}
