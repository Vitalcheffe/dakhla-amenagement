'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { ScrollReveal } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TabSystem } from '@/components/shared/TabSystem';
import { MapPin, Phone, Mail, Factory, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
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

  const tabs = [
    { key: 'general', label: t('tabGeneral') },
    { key: 'quote', label: t('tabQuote') },
  ];

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-gris-clair py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal>
                <h3 className="font-heading text-xl font-bold text-anthracite">{t('address.title')}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <MapPin className="w-5 h-5 text-bleu-ocean shrink-0 mt-0.5" />
                  <div>
                    <p className="text-acier">{t('address.line1')}</p>
                    <p className="text-acier">{t('address.line2')}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h3 className="font-heading text-xl font-bold text-anthracite">{t('site.title')}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <Factory className="w-5 h-5 text-bleu-ocean shrink-0 mt-0.5" />
                  <div>
                    <p className="text-acier">{t('site.line1')}</p>
                    <p className="text-acier">{t('site.line2')}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-bleu-ocean shrink-0" />
                    <p className="text-acier">{t('phoneValue')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-bleu-ocean shrink-0" />
                    <p className="text-acier">contact@ciment-dam.com</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map placeholder */}
              <ScrollReveal delay={0.3}>
                <div className="bg-anthracite/5 rounded-2xl h-48 flex items-center justify-center mt-4">
                  <MapPin className="w-10 h-10 text-anthracite/20" />
                </div>
              </ScrollReveal>
            </div>

            {/* Forms with Tabs */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <Card className="border-anthracite/5 shadow-sm">
                  <CardContent className="p-6 lg:p-8">
                    <TabSystem tabs={tabs}>
                      {/* General Contact Form */}
                      <div>
                        {submitted ? (
                          <div className="text-center py-12">
                            <CheckCircle2 className="w-16 h-16 text-vert-energie mx-auto mb-4" />
                            <p className="text-xl font-semibold text-anthracite">{t('form.success')}</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('form.name')}
                                </label>
                                <Input
                                  required
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('form.name')}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('form.email')}
                                </label>
                                <Input
                                  type="email"
                                  required
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('form.email')}
                                />
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                {t('form.subject')}
                              </label>
                              <select className="w-full h-10 rounded-md border border-anthracite/10 bg-white px-3 text-sm text-anthracite focus:border-bleu-ocean focus:outline-none">
                                <option value="commercial">{t('form.subjects.commercial')}</option>
                                <option value="technical">{t('form.subjects.technical')}</option>
                                <option value="careers">{t('form.subjects.careers')}</option>
                                <option value="other">{t('form.subjects.other')}</option>
                              </select>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                {t('form.message')}
                              </label>
                              <textarea
                                required
                                rows={5}
                                className="w-full rounded-md border border-anthracite/10 bg-white px-3 py-2 text-sm text-anthracite focus:border-bleu-ocean focus:outline-none resize-none"
                                placeholder={t('form.message')}
                              />
                            </div>
                            <Button
                              type="submit"
                              size="lg"
                              className="bg-bleu-ocean hover:bg-bleu-ocean/90 text-white font-medium w-full sm:w-auto"
                            >
                              {t('form.send')}
                              <Send className="ml-2 h-4 w-4" />
                            </Button>
                          </form>
                        )}
                      </div>

                      {/* Quote Request Form */}
                      <div>
                        {quoteSubmitted ? (
                          <div className="text-center py-12">
                            <CheckCircle2 className="w-16 h-16 text-vert-energie mx-auto mb-4" />
                            <p className="text-xl font-semibold text-anthracite">{t('quote.success')}</p>
                          </div>
                        ) : (
                          <form onSubmit={handleQuoteSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('quote.company')}
                                </label>
                                <Input
                                  required
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('quote.company')}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('quote.contact')}
                                </label>
                                <Input
                                  required
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('quote.contact')}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('quote.email')}
                                </label>
                                <Input
                                  type="email"
                                  required
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('quote.email')}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('quote.phone')}
                                </label>
                                <Input
                                  type="tel"
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('quote.phone')}
                                />
                              </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('quote.product')}
                                </label>
                                <select className="w-full h-10 rounded-md border border-anthracite/10 bg-white px-3 text-sm text-anthracite focus:border-bleu-ocean focus:outline-none">
                                  {['cpj35', 'cpj45', 'cpa42_5', 'cpj55', 'ecoShield'].map((p) => (
                                    <option key={p} value={p}>{t(`quote.products.${p}`)}</option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                  {t('quote.quantity')}
                                </label>
                                <Input
                                  type="number"
                                  className="border-anthracite/10 focus:border-bleu-ocean"
                                  placeholder={t('quote.quantity')}
                                />
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                {t('quote.location')}
                              </label>
                              <Input
                                className="border-anthracite/10 focus:border-bleu-ocean"
                                placeholder={t('quote.location')}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-anthracite mb-1.5 block">
                                {t('quote.message')}
                              </label>
                              <textarea
                                rows={4}
                                className="w-full rounded-md border border-anthracite/10 bg-white px-3 py-2 text-sm text-anthracite focus:border-bleu-ocean focus:outline-none resize-none"
                                placeholder={t('quote.message')}
                              />
                            </div>
                            <Button
                              type="submit"
                              size="lg"
                              className="bg-bleu-ocean hover:bg-bleu-ocean/90 text-white font-medium w-full sm:w-auto"
                            >
                              {t('quote.send')}
                              <Send className="ml-2 h-4 w-4" />
                            </Button>
                          </form>
                        )}
                      </div>
                    </TabSystem>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
