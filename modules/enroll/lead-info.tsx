'use client';

import { useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

function uuidv4() {
  // simple uuid for event_id (fine for dedup)
  return crypto.randomUUID();
}

function getCookie(name: string) {
  // read fbp/fbc for better matching
  const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return m ? m.pop() : '';
}

export default function LeadForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const eventId = uuidv4();

    // 1) Browser event: Lead (with eventID as 4th arg options)
    window.fbq?.(
      'track',
      'Lead',
      { value: 0, currency: 'INR' },
      { eventID: eventId }
    );
    // ^ eventID in this options position is Meta’s recommended dedup key. :contentReference[oaicite:2]{index=2}

    // 2) Server event: mirror to CAPI with same event_id
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');
    const res = await fetch('/api/meta/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_id: eventId,
        email,
        phone,
        fbp,
        fbc,
        url: location.href,
      }),
    });

    if (!res.ok) {
      console.error('CAPI lead failed', await res.text());
      alert('Something went wrong. Please try again.');
      return;
    }

    alert('Thanks! We got your details.');
  }

  return (
    <main className='max-w-md mx-auto p-6'>
      <h1 className='text-2xl font-semibold mb-2'>Get a Quote</h1>
      <p className='text-sm text-gray-600 mb-6'>We’ll contact you shortly.</p>

      <form onSubmit={onSubmit} className='space-y-3'>
        <input
          type='email'
          required
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full border rounded p-2'
        />
        <input
          type='tel'
          required
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className='w-full border rounded p-2'
        />
        <button
          type='submit'
          className='w-full rounded bg-black text-white p-2'
        >
          Submit
        </button>
      </form>
    </main>
  );
}
