'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

export default function ContactPage() {
  const t = useTranslations();
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        setError(data.error || t('common.error'));
      }
    } catch {
      setError(t('common.error'));
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')} sectionCounter="/07" />

      {/* Hero image bar */}
      <section className="relative h-48 md:h-64 -mt-4">
        <Image
          src="/images/factory/factory-exterior.jpg"
          alt="Usine Dakhla Aménagement — Cimenterie de Dakhla"
          fill
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              {sent ? (
                <div className="bg-[#F7F8FA] rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1B3A5C] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1B3A5C] mb-2">{t('contact.form.success')}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1B3A5C] mb-1">{t('contact.form.name')} *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1B3A5C] mb-1">{t('contact.form.email')} *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3A5C] mb-1">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1B3A5C] mb-1">{t('contact.form.subject')}</label>
                    <select
                      value={formState.subject}
                      onChange={e => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none bg-white"
                    >
                      <option value="">---</option>
                      <option value="commercial">{t('contact.form.subjects.commercial')}</option>
                      <option value="technical">{t('contact.form.subjects.technical')}</option>
                      <option value="quote">{t('contact.form.subjects.quote')}</option>
                      <option value="other">{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1B3A5C] mb-1">{t('contact.form.message')} *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none resize-none"
                    />
                  </div>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                      {error}
                    </div>
                  )}
                  <Button type="submit" disabled={sending} className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 font-semibold rounded-full px-8 disabled:opacity-60">
                    {sending ? '...' : t('contact.form.send')} <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div className="bg-[#F7F8FA] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1B3A5C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B3A5C]">{t('contact.info.address')}</h4>
                      <p className="text-sm text-[#6B7280] mt-1">{t('contact.info.addressValue')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F8FA] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#1B3A5C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B3A5C]">{t('contact.info.phone')}</h4>
                      <p className="text-sm text-[#6B7280] mt-1">{t('contact.info.phoneValue')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F8FA] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-[#1B3A5C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B3A5C]">WhatsApp</h4>
                      <p className="text-sm text-[#6B7280] mt-1">{t('contact.info.whatsappValue')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F8FA] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#1B3A5C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B3A5C]">{t('contact.info.email')}</h4>
                      <p className="text-sm text-[#6B7280] mt-1">{t('contact.info.emailValue')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F7F8FA] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#1B3A5C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B3A5C]">{t('contact.info.hours')}</h4>
                      <p className="text-sm text-[#6B7280] mt-1">{t('contact.info.hoursValue')}</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps embed */}
                <div className="bg-[#F7F8FA] rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5!2d-15.96!3d23.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQwJzUzLjAiTiAxNcKwNTcnMzYuMCJX!5e0!3m2!1sfr!2sma!4v1"
                    width="100%"
                    height="288"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dakhla Aménagement — Dakhla, Morocco"
                    className="w-full h-72 rounded-2xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
