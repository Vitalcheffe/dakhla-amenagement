'use client';

import { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { ArrowRight, ArrowLeft, FileDown, MessageCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/Animations';
import { PageHero } from '@/components/shared/PageHero';

// Pricing constants
const BASE_PRICES: Record<string, number> = { cpj42: 950, cpj32: 850 };
const VOLUME_DISCOUNTS = [
  { min: 500, discount: 0.15 },
  { min: 100, discount: 0.12 },
  { min: 50, discount: 0.08 },
  { min: 25, discount: 0.05 },
  { min: 10, discount: 0.02 },
];
const PACKAGING_SURCHARGE: Record<string, number> = { vrac: 0, sacs50: 30, bigBag: 80 };
const TRANSPORT_COSTS: Record<string, number> = { dakhlaVille: 0, dakhlaRegion: 50, sudMaroc: 150, mauritanie: 250 };
const URGENCY_MULTIPLIER: Record<string, number> = { normal: 0, urgent: 0.10 };
const TVA_RATE = 0.20;

function generateQuoteNumber() {
  const year = new Date().getFullYear();
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `DAM-${year}-${rand}`;
}

function calculateQuote(data: QuoteData) {
  const basePrice = BASE_PRICES[data.cementType] || 950;
  const subtotal = basePrice * data.quantity;

  // Volume discount
  let volumeDiscountRate = 0;
  for (const tier of VOLUME_DISCOUNTS) {
    if (data.quantity >= tier.min) {
      volumeDiscountRate = tier.discount;
      break;
    }
  }
  const volumeDiscount = subtotal * volumeDiscountRate;

  // Packaging surcharge
  const packagingCost = (PACKAGING_SURCHARGE[data.packaging] || 0) * data.quantity;

  // Transport
  const transportCost = (TRANSPORT_COSTS[data.region] || 0) * data.quantity;

  // Urgency
  const urgencyRate = URGENCY_MULTIPLIER[data.urgency] || 0;
  const afterDiscount = subtotal - volumeDiscount + packagingCost + transportCost;
  const urgencyFee = afterDiscount * urgencyRate;

  const beforeTva = afterDiscount + urgencyFee;
  const tva = beforeTva * TVA_RATE;
  const totalTtc = beforeTva + tva;

  return {
    basePrice,
    subtotal,
    volumeDiscountRate,
    volumeDiscount,
    packagingCost,
    transportCost,
    urgencyFee,
    urgencyRate,
    beforeTva,
    tva,
    totalTtc,
  };
}

interface QuoteData {
  projectType: string;
  cementType: string;
  quantity: number;
  packaging: string;
  region: string;
  address: string;
  urgency: string;
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  company: string;
}

const initialQuote: QuoteData = {
  projectType: '',
  cementType: 'cpj42',
  quantity: 25,
  packaging: 'vrac',
  region: 'dakhlaVille',
  address: '',
  urgency: 'normal',
  name: '',
  phone: '',
  whatsapp: '',
  email: '',
  company: '',
};

export default function DevisPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';
  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [submitted, setSubmitted] = useState(false);
  const quoteNumber = generateQuoteNumber();

  const updateQuote = useCallback((field: string, value: string | number) => {
    setQuote(prev => ({ ...prev, [field]: value }));
  }, []);

  const calc = calculateQuote(quote);

  const formatPrice = (val: number) => val.toLocaleString('fr-MA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const generatePdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();

    // Header
    doc.setFillColor(27, 58, 92);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Dakhla Aménagement S.A.', 20, 20);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Ciment de Qualité au Maroc', 20, 28);

    // Quote number
    doc.setFontSize(12);
    doc.text(`${t('quote.step5.quoteNumber')}${quoteNumber}`, 140, 20);

    // Client info
    doc.setTextColor(27, 58, 92);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`${t('quote.step4.name')}: `, 20, 55);
    doc.setFont('helvetica', 'normal');
    doc.text(quote.name, 70, 55);
    doc.setFont('helvetica', 'bold');
    doc.text(`${t('quote.step4.email')}: `, 20, 63);
    doc.setFont('helvetica', 'normal');
    doc.text(quote.email, 70, 63);
    if (quote.company) {
      doc.setFont('helvetica', 'bold');
      doc.text(`${t('quote.step4.company')}: `, 20, 71);
      doc.setFont('helvetica', 'normal');
      doc.text(quote.company, 70, 71);
    }

    // Table header
    doc.setFillColor(247, 248, 250);
    doc.rect(20, 90, 170, 10, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(t('quote.step5.product'), 25, 97);
    doc.text(t('quote.step5.quantity'), 90, 97);
    doc.text(t('quote.step5.unitPrice'), 120, 97);
    doc.text(t('quote.step5.subtotal'), 155, 97);

    // Table row
    doc.setFont('helvetica', 'normal');
    const productName = quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5';
    doc.text(productName, 25, 110);
    doc.text(`${quote.quantity} T`, 90, 110);
    doc.text(`${formatPrice(calc.basePrice)} ${t('quote.step5.mad')}`, 120, 110);
    doc.text(`${formatPrice(calc.subtotal)} ${t('quote.step5.mad')}`, 155, 110);

    // Summary
    let y = 130;
    const summaryLines = [
      { label: t('quote.step5.subtotal'), value: `${formatPrice(calc.subtotal)} ${t('quote.step5.mad')}` },
      { label: `${t('quote.step5.volumeDiscount')} (-${(calc.volumeDiscountRate * 100).toFixed(0)}%)`, value: `-${formatPrice(calc.volumeDiscount)} ${t('quote.step5.mad')}` },
      { label: t('quote.step5.packagingSurcharge'), value: `${formatPrice(calc.packagingCost)} ${t('quote.step5.mad')}` },
      { label: t('quote.step5.transport'), value: `${formatPrice(calc.transportCost)} ${t('quote.step5.mad')}` },
    ];

    if (calc.urgencyFee > 0) {
      summaryLines.push({ label: `${t('quote.step5.urgencyFee')} (+${(calc.urgencyRate * 100).toFixed(0)}%)`, value: `${formatPrice(calc.urgencyFee)} ${t('quote.step5.mad')}` });
    }

    summaryLines.push({ label: t('quote.step5.tva'), value: `${formatPrice(calc.tva)} ${t('quote.step5.mad')}` });

    for (const line of summaryLines) {
      doc.setFont('helvetica', 'normal');
      doc.text(line.label, 25, y);
      doc.text(line.value, 145, y);
      y += 8;
    }

    // Total
    doc.setFillColor(27, 58, 92);
    doc.rect(20, y, 170, 12, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(t('quote.step5.totalTtc'), 25, y + 8);
    doc.text(`${formatPrice(calc.totalTtc)} ${t('quote.step5.mad')}`, 120, y + 8);

    // Legal mentions
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text(t('quote.step5.validity'), 20, y + 25);

    doc.save(`${quoteNumber}.pdf`);
  };

  const sendWhatsApp = () => {
    const productName = quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5';
    const msg = `${t('quote.step5.quoteNumber')}${quoteNumber}\n\n` +
      `${t('quote.step5.product')}: ${productName}\n` +
      `${t('quote.step5.quantity')}: ${quote.quantity} T\n` +
      `${t('quote.step5.totalTtc')}: ${formatPrice(calc.totalTtc)} ${t('quote.step5.mad')}\n\n` +
      `${t('quote.step4.name')}: ${quote.name}\n` +
      `${t('quote.step4.phone')}: ${quote.phone}`;
    window.open(`https://wa.me/212XXXXXXXX?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return quote.projectType !== '';
      case 2: return quote.quantity > 0;
      case 3: return quote.region !== '';
      case 4: return quote.name !== '' && quote.phone !== '' && quote.email !== '';
      case 5: return true;
      default: return false;
    }
  };

  const stepLabels = [
    t('quote.step1.title'),
    t('quote.step2.title'),
    t('quote.step3.title'),
    t('quote.step4.title'),
    t('quote.step5.title'),
  ];

  if (submitted) {
    return (
      <>
        <PageHero title={t('quote.title')} subtitle={t('quote.subtitle')} sectionCounter="/04" />
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-lg mx-auto px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-[#1B3A5C] flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1B3A5C] mb-4">{t('quote.success')}</h2>
            <p className="text-[#6B7280]">{t('quote.step5.quoteNumber')}{quoteNumber}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={generatePdf} className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 rounded-full px-6">
                <FileDown className="w-4 h-4 mr-2" /> {t('quote.step5.downloadPdf')}
              </Button>
              <Button onClick={sendWhatsApp} variant="outline" className="border-[#1B3A5C] text-[#1B3A5C] rounded-full px-6">
                <MessageCircle className="w-4 h-4 mr-2" /> {t('quote.step5.sendWhatsApp')}
              </Button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title={t('quote.title')} subtitle={t('quote.subtitle')} sectionCounter="/04" />

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-12">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i + 1 <= step ? 'bg-[#1B3A5C] text-white' : 'bg-[#E5E7EB] text-[#6B7280]'
                }`}>
                  {i + 1}
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`w-8 md:w-16 h-[2px] mx-1 ${i + 1 < step ? 'bg-[#1B3A5C]' : 'bg-[#E5E7EB]'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="mb-4 text-center">
            <span className="text-xs font-bold text-[#E8B84B] tracking-wider">ÉTAPE {step}/5</span>
            <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C] mt-1">{stepLabels[step - 1]}</h2>
          </div>

          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {['residential', 'commercial', 'infrastructure', 'industrial', 'other'].map(type => (
                <button
                  key={type}
                  onClick={() => updateQuote('projectType', type)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    quote.projectType === type
                      ? 'border-[#1B3A5C] bg-[#1B3A5C]/5'
                      : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                  }`}
                >
                  <span className="text-sm font-semibold text-[#1B3A5C]">{t(`quote.step1.${type}`)}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Product Details */}
          {step === 2 && (
            <div className="space-y-6 mt-8">
              <div>
                <label className="block text-sm font-medium text-[#1B3A5C] mb-2">{t('quote.step2.cementType')}</label>
                <div className="grid grid-cols-2 gap-4">
                  {['cpj42', 'cpj32'].map(type => (
                    <button
                      key={type}
                      onClick={() => updateQuote('cementType', type)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        quote.cementType === type
                          ? 'border-[#1B3A5C] bg-[#1B3A5C]/5'
                          : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t(`quote.step2.${type}`)}</span>
                      <p className="text-xs text-[#6B7280] mt-1">{formatPrice(BASE_PRICES[type])} {t('quote.step5.mad')}{t('quote.step5.perTonne')}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1B3A5C] mb-2">{t('quote.step2.quantity')}</label>
                <input
                  type="number"
                  min={1}
                  value={quote.quantity}
                  onChange={e => updateQuote('quantity', parseInt(e.target.value) || 0)}
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none"
                />
                <p className="text-xs text-[#6B7280] mt-1">
                  {quote.quantity >= 500 ? '-15%' : quote.quantity >= 100 ? '-12%' : quote.quantity >= 50 ? '-8%' : quote.quantity >= 25 ? '-5%' : quote.quantity >= 10 ? '-2%' : ''} {locale === 'fr' ? 'remise volume' : 'volume discount'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1B3A5C] mb-2">{t('quote.step2.packaging')}</label>
                <div className="grid grid-cols-3 gap-4">
                  {['vrac', 'sacs50', 'bigBag'].map(pkg => (
                    <button
                      key={pkg}
                      onClick={() => updateQuote('packaging', pkg)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        quote.packaging === pkg
                          ? 'border-[#1B3A5C] bg-[#1B3A5C]/5'
                          : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                      }`}
                    >
                      <span className="text-xs font-semibold text-[#1B3A5C]">{t(`quote.step2.${pkg}`)}</span>
                      {PACKAGING_SURCHARGE[pkg] > 0 && (
                        <p className="text-[10px] text-[#6B7280] mt-0.5">+{PACKAGING_SURCHARGE[pkg]} {t('quote.step5.mad')}/T</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Delivery */}
          {step === 3 && (
            <div className="space-y-6 mt-8">
              <div>
                <label className="block text-sm font-medium text-[#1B3A5C] mb-2">{t('quote.step3.region')}</label>
                <div className="grid grid-cols-2 gap-4">
                  {['dakhlaVille', 'dakhlaRegion', 'sudMaroc', 'mauritanie'].map(r => (
                    <button
                      key={r}
                      onClick={() => updateQuote('region', r)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        quote.region === r
                          ? 'border-[#1B3A5C] bg-[#1B3A5C]/5'
                          : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t(`quote.step3.${r}`)}</span>
                      {TRANSPORT_COSTS[r] > 0 && (
                        <p className="text-xs text-[#6B7280] mt-1">+{TRANSPORT_COSTS[r]} {t('quote.step5.mad')}/T</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1B3A5C] mb-2">{t('quote.step3.address')}</label>
                <input
                  type="text"
                  value={quote.address}
                  onChange={e => updateQuote('address', e.target.value)}
                  className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1B3A5C] mb-2">{t('quote.step3.urgency')}</label>
                <div className="grid grid-cols-2 gap-4">
                  {['normal', 'urgent'].map(u => (
                    <button
                      key={u}
                      onClick={() => updateQuote('urgency', u)}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        quote.urgency === u
                          ? 'border-[#1B3A5C] bg-[#1B3A5C]/5'
                          : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                      }`}
                    >
                      <span className="text-sm font-semibold text-[#1B3A5C]">{t(`quote.step3.${u}`)}</span>
                      {URGENCY_MULTIPLIER[u] > 0 && (
                        <p className="text-xs text-[#C1272D] mt-1">+{(URGENCY_MULTIPLIER[u] * 100).toFixed(0)}%</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Client Info */}
          {step === 4 && (
            <div className="space-y-4 mt-8">
              {[
                { key: 'name', type: 'text', required: true },
                { key: 'phone', type: 'tel', required: true },
                { key: 'whatsapp', type: 'tel', required: false },
                { key: 'email', type: 'email', required: true },
                { key: 'company', type: 'text', required: false },
              ].map(field => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-[#1B3A5C] mb-1">
                    {t(`quote.step4.${field.key}`)}
                    {field.required && <span className="text-[#C1272D] ml-1">*</span>}
                  </label>
                  <input
                    type={field.type}
                    value={quote[field.key as keyof QuoteData] as string}
                    onChange={e => updateQuote(field.key, e.target.value)}
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#1A1A2E] focus:border-[#1B3A5C] focus:ring-1 focus:ring-[#1B3A5C] outline-none"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 5: Summary */}
          {step === 5 && (
            <div className="mt-8">
              <div className="bg-[#F7F8FA] rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#1B3A5C]">{t('quote.step5.quoteNumber')}{quoteNumber}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.product')}</span><span className="font-semibold text-[#1B3A5C]">{quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5'}</span></div>
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.quantity')}</span><span className="font-semibold text-[#1B3A5C]">{quote.quantity} T</span></div>
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.packaging')}</span><span className="font-semibold text-[#1B3A5C]">{t(`quote.step2.${quote.packaging}`)}</span></div>
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.delivery')}</span><span className="font-semibold text-[#1B3A5C]">{t(`quote.step3.${quote.region}`)}</span></div>
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.urgency')}</span><span className="font-semibold text-[#1B3A5C]">{t(`quote.step3.${quote.urgency}`)}</span></div>
                </div>

                <div className="border-t border-[#E5E7EB] my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.subtotal')}</span><span>{formatPrice(calc.subtotal)} {t('quote.step5.mad')}</span></div>
                  {calc.volumeDiscount > 0 && <div className="flex justify-between text-[#1B3A5C]"><span>{t('quote.step5.volumeDiscount')} (-{(calc.volumeDiscountRate * 100).toFixed(0)}%)</span><span>-{formatPrice(calc.volumeDiscount)} {t('quote.step5.mad')}</span></div>}
                  {calc.packagingCost > 0 && <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.packagingSurcharge')}</span><span>{formatPrice(calc.packagingCost)} {t('quote.step5.mad')}</span></div>}
                  {calc.transportCost > 0 && <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.transport')}</span><span>{formatPrice(calc.transportCost)} {t('quote.step5.mad')}</span></div>}
                  {calc.urgencyFee > 0 && <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.urgencyFee')} (+{(calc.urgencyRate * 100).toFixed(0)}%)</span><span>{formatPrice(calc.urgencyFee)} {t('quote.step5.mad')}</span></div>}
                  <div className="flex justify-between"><span className="text-[#6B7280]">{t('quote.step5.tva')}</span><span>{formatPrice(calc.tva)} {t('quote.step5.mad')}</span></div>
                </div>

                <div className="border-t border-[#E5E7EB] my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#1B3A5C]">{t('quote.step5.totalTtc')}</span>
                  <span className="text-2xl font-bold text-[#1B3A5C]">{formatPrice(calc.totalTtc)} {t('quote.step5.mad')}</span>
                </div>

                <p className="text-xs text-[#6B7280] mt-4 italic">{t('quote.step5.validity')}</p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button onClick={generatePdf} variant="outline" className="flex-1 border-[#1B3A5C] text-[#1B3A5C] rounded-xl">
                  <FileDown className="w-4 h-4 mr-2" /> {t('quote.step5.downloadPdf')}
                </Button>
                <Button onClick={sendWhatsApp} variant="outline" className="flex-1 border-[#1B3A5C] text-[#1B3A5C] rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" /> {t('quote.step5.sendWhatsApp')}
                </Button>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="mt-10 flex items-center justify-between">
            {step > 1 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)} className="text-[#6B7280]">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t('quote.prev')}
              </Button>
            ) : <div />}

            {step < 5 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 rounded-full px-6"
              >
                {t('quote.next')} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 rounded-full px-8"
              >
                {t('quote.step5.submit')} <Check className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
