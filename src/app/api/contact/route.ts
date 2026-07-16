import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Option 1: Send via webhook (Make/Zapier) — set WEBHOOK_URL env variable
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Non renseigné',
          subject: subject || 'General inquiry',
          message,
          source: 'ciment-dam.com',
          timestamp: new Date().toISOString(),
        }),
      });
    }

    // Option 2: Send email via Resend — set RESEND_API_KEY env variable
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Dakhla Aménagement <noreply@ciment-dam.com>',
          to: ['contact@ciment-dam.com'],
          subject: `[ciment-dam.com] ${subject || 'Nouveau message'} — ${name}`,
          html: `
            <h2>Nouveau message depuis ciment-dam.com</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
            <p><strong>Sujet:</strong> ${subject || 'Non spécifié'}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br />')}</p>
            <hr />
            <p style="color:#999;font-size:12px;">Envoyé le ${new Date().toLocaleString('fr-FR')}</p>
          `,
        }),
      });

      if (!resendResponse.ok) {
        console.error('Resend error:', await resendResponse.text());
      }
    }

    // If no webhook or email configured, log to console (dev mode)
    if (!process.env.WEBHOOK_URL && !process.env.RESEND_API_KEY) {
      console.log('📧 Contact form submission:', {
        name,
        email,
        phone: phone || 'N/A',
        subject: subject || 'N/A',
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
