import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Phase 1: mock waitlist endpoint.
 * Wire to Resend / Loops / Notion / Airtable / Supabase by reading
 * WAITLIST_API_URL + WAITLIST_API_KEY from env.
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data?.email || typeof data.email !== 'string') {
      return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 400 });
    }

    // eslint-disable-next-line no-console
    console.log('[waitlist]', { ...data, ts: Date.now() });

    const endpoint = process.env.WAITLIST_API_URL;
    const key = process.env.WAITLIST_API_KEY;
    if (endpoint && key) {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
        body: JSON.stringify(data),
      }).catch(() => null);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
