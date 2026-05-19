'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Factory, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [activeTab, setActiveTab] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => setQuoteSubmitted(false), 3000);
  };

  const tabLabels = [t('tabGeneral'), t('tabQuote')];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} sectionCounter="/5.0" />

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <span className="section-counter">/5.1</span>
                <h3 className="mt-4 font-bold text-xl text-[#0A0A0A]">{t('address.title')}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <MapPin className="w-5 h-5 text-black/30 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-black/50">{t('address.line1')}</p>
                    <p className="text-black/50">{t('address.line2')}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h3 className="font-bold text-xl text-[#0A0A0A]">{t('site.title')}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <Factory className="w-5 h-5 text-black/30 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-black/50">{t('site.line1')}</p>
                    <p className="text-black/50">{t('site.line2')}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-black/30 shrink-0" />
                    <p className="text-black/50">{t('phoneValue')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-black/30 shrink-0" />
                    <p className="text-black/50">contact@dakhla-amenagement.ma</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map placeholder */}
              <ScrollReveal delay={0.3}>
                <div className="bg-[#F5F5F5] rounded-2xl h-48 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-black/10" />
                </div>
              </ScrollReveal>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                <div className="bg-[#0A0A0A] rounded-2xl p-6 lg:p-10 text-white">
                  {/* Pill tabs */}
                  <div className="flex gap-3 mb-10">
                    {tabLabels.map((label, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                          activeTab === i ? 'bg-white text-[#0A0A0A]' : 'bg-white/5 text-white/50 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  {activeTab === 0 ? (
                    submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle2 className="w-16 h-16 text-[#2ECC71] mx-auto mb-4" />
                        <p className="text-xl font-semibold text-white">{t('form.success')}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('form.name')}</label>
                            <Input required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('form.name')} />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('form.email')}</label>
                            <Input type="email" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('form.email')} />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('form.subject')}</label>
                          <select className="w-full h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-white/30 focus:outline-none">
                            <option value="commercial">{t('form.subjects.commercial')}</option>
                            <option value="technical">{t('form.subjects.technical')}</option>
                            <option value="careers">{t('form.subjects.careers')}</option>
                            <option value="other">{t('form.subjects.other')}</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('form.message')}</label>
                          <textarea required rows={5} className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/30 focus:outline-none resize-none placeholder:text-white/20" placeholder={t('form.message')} />
                        </div>
                        <Button type="submit" size="lg" className="bg-white text-[#0A0A0A] hover:bg-white/90 font-semibold px-8 rounded-full">
                          {t('form.send')}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )
                  ) : (
                    quoteSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle2 className="w-16 h-16 text-[#2ECC71] mx-auto mb-4" />
                        <p className="text-xl font-semibold text-white">{t('quote.success')}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleQuoteSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.company')}</label>
                            <Input required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('quote.company')} />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.contact')}</label>
                            <Input required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('quote.contact')} />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.email')}</label>
                            <Input type="email" required className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('quote.email')} />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.phone')}</label>
                            <Input type="tel" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('quote.phone')} />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.product')}</label>
                            <select className="w-full h-10 rounded-md border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-white/30 focus:outline-none">
                              {['cpj35', 'cpj45', 'cpa42_5', 'cpj55', 'ecoShield'].map((p) => (
                                <option key={p} value={p}>{t(`quote.products.${p}`)}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.quantity')}</label>
                            <Input type="number" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('quote.quantity')} />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.location')}</label>
                          <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-white/30" placeholder={t('quote.location')} />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-white/50 mb-1.5 block">{t('quote.message')}</label>
                          <textarea rows={4} className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-white/30 focus:outline-none resize-none placeholder:text-white/20" placeholder={t('quote.message')} />
                        </div>
                        <Button type="submit" size="lg" className="bg-white text-[#0A0A0A] hover:bg-white/90 font-semibold px-8 rounded-full">
                          {t('quote.send')}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
