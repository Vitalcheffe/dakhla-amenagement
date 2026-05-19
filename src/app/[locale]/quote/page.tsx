'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PageHero } from '@/components/shared/PageHero';
import { FadeIn } from '@/components/shared/Animations';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Mail, Factory, Send, CheckCircle2 } from 'lucide-react';

export default function QuotePage() {
  const t = useTranslations('quote');
  const tContact = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const productOptions = ['cpj35', 'cpj45', 'cpa42_5', 'cpj55'] as const;

  return (
    <>
      <PageHero title={t('title')} subtitle={t('subtitle')} />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <FadeIn>
                <h3 className="text-xl font-bold text-navy">{tContact('address.title')}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <MapPin className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <div>
                    <p className="text-warm-gray">{tContact('address.line1')}</p>
                    <p className="text-warm-gray">{tContact('address.line2')}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h3 className="text-xl font-bold text-navy">{tContact('site.title')}</h3>
                <div className="flex items-start gap-3 mt-3">
                  <Factory className="w-5 h-5 text-steel shrink-0 mt-0.5" />
                  <div>
                    <p className="text-warm-gray">{tContact('site.line1')}</p>
                    <p className="text-warm-gray">{tContact('site.line2')}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-steel shrink-0" />
                    <p className="text-warm-gray">{tContact('phoneValue')}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-steel shrink-0" />
                    <p className="text-warm-gray">contact@dakhla-amenagement.ma</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <Card className="border-border">
                  <CardContent className="p-6 lg:p-8">
                    {submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle2 className="w-16 h-16 text-steel mx-auto mb-4" />
                        <p className="text-xl font-semibold text-navy">{t('form.success')}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-navy mb-1.5 block">
                              {t('form.company')}
                            </label>
                            <Input
                              required
                              className="border-border focus:border-steel"
                              placeholder={t('form.company')}
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-navy mb-1.5 block">
                              {t('form.contact')}
                            </label>
                            <Input
                              required
                              className="border-border focus:border-steel"
                              placeholder={t('form.contact')}
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-navy mb-1.5 block">
                              {t('form.email')}
                            </label>
                            <Input
                              type="email"
                              required
                              className="border-border focus:border-steel"
                              placeholder={t('form.email')}
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-navy mb-1.5 block">
                              {t('form.phone')}
                            </label>
                            <Input
                              type="tel"
                              className="border-border focus:border-steel"
                              placeholder={t('form.phone')}
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-navy mb-1.5 block">
                              {t('form.product')}
                            </label>
                            <select className="w-full h-10 rounded-md border border-border bg-white px-3 text-sm text-navy focus:border-steel focus:outline-none">
                              {productOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                  {t(`form.products.${opt}`)}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-navy mb-1.5 block">
                              {t('form.quantity')}
                            </label>
                            <Input
                              type="number"
                              required
                              className="border-border focus:border-steel"
                              placeholder={t('form.quantity')}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-navy mb-1.5 block">
                            {t('form.location')}
                          </label>
                          <Input
                            required
                            className="border-border focus:border-steel"
                            placeholder={t('form.location')}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-navy mb-1.5 block">
                            {t('form.message')}
                          </label>
                          <textarea
                            rows={4}
                            className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-navy focus:border-steel focus:outline-none resize-none"
                            placeholder={t('form.message')}
                          />
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-navy hover:bg-navy/90 text-white font-medium w-full sm:w-auto"
                        >
                          {t('form.send')}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
