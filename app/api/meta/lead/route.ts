import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID!;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN!;
const API_VERSION = process.env.FB_API_VERSION || 'v21.0';

function sha256TrimLower(value?: string) {
  const v = (value || '').trim().toLowerCase();
  if (!v) return undefined;
  return crypto.createHash('sha256').update(v, 'utf8').digest('hex');
}

export async function POST(req: NextRequest) {
  try {
    const { event_id, email, phone, fbp, fbc, url } = await req.json();

    // ✅ get user agent + ip
    const ua = req.headers.get('user-agent') || undefined;
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0]?.trim() : undefined;

    const payload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: url,
          action_source: 'website',
          event_id,
          user_data: {
            em: email ? [sha256TrimLower(email)] : undefined,
            ph: phone ? [sha256TrimLower(phone)] : undefined,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
            client_user_agent: ua,
            client_ip_address: ip,
          },
        },
      ],
    };

    const resp = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const json = await resp.json();
    if (!resp.ok) {
      console.error('Meta CAPI error', json);
      return NextResponse.json(json, { status: 500 });
    }

    return NextResponse.json({ ok: true, meta: json });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
