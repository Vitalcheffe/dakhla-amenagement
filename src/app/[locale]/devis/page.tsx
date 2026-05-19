'use client';

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Building2, Construction, Factory, Ruler,
  Package, Truck, Container, MapPin, Clock,
  User, Phone, Mail, Building, MessageCircle,
  Check, FileDown, ArrowRight, ArrowLeft,
  Minus, Plus, ChevronDown, ShieldCheck,
  CheckCircle2, Download, Send, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/shared/PageHero';

// ─── PRICING ENGINE ────────────────────────────────────────────

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
const CLIENT_TYPE_DISCOUNT: Record<string, number> = { particulier: 0, entreprise: 0.03, revendeur: 0.05 };

const DELIVERY_DAYS: Record<string, Record<string, number>> = {
  dakhlaVille: { normal: 2, urgent: 1 },
  dakhlaRegion: { normal: 3, urgent: 2 },
  sudMaroc: { normal: 5, urgent: 3 },
  mauritanie: { normal: 7, urgent: 5 },
};

// ─── TYPES ─────────────────────────────────────────────────────

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
  clientType: string;
}

interface CalcResult {
  basePrice: number;
  subtotal: number;
  volumeDiscountRate: number;
  volumeDiscount: number;
  packagingCost: number;
  transportCost: number;
  urgencyRate: number;
  urgencyFee: number;
  clientDiscountRate: number;
  clientDiscount: number;
  beforeTva: number;
  tva: number;
  totalTtc: number;
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
  clientType: 'particulier',
};

// ─── HELPERS ───────────────────────────────────────────────────

function generateQuoteNumber() {
  const year = new Date().getFullYear();
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `DAM-${year}-${rand}`;
}

function calculateQuote(data: QuoteData): CalcResult {
  const basePrice = BASE_PRICES[data.cementType] || 950;
  const subtotal = basePrice * data.quantity;

  let volumeDiscountRate = 0;
  for (const tier of VOLUME_DISCOUNTS) {
    if (data.quantity >= tier.min) {
      volumeDiscountRate = tier.discount;
      break;
    }
  }
  const volumeDiscount = subtotal * volumeDiscountRate;

  const packagingCost = (PACKAGING_SURCHARGE[data.packaging] || 0) * data.quantity;
  const transportCost = (TRANSPORT_COSTS[data.region] || 0) * data.quantity;

  const urgencyRate = URGENCY_MULTIPLIER[data.urgency] || 0;
  const afterVolume = subtotal - volumeDiscount + packagingCost + transportCost;
  const urgencyFee = afterVolume * urgencyRate;

  const clientDiscountRate = CLIENT_TYPE_DISCOUNT[data.clientType] || 0;
  const clientDiscount = (afterVolume + urgencyFee) * clientDiscountRate;

  const beforeTva = afterVolume + urgencyFee - clientDiscount;
  const tva = beforeTva * TVA_RATE;
  const totalTtc = beforeTva + tva;

  return {
    basePrice, subtotal, volumeDiscountRate, volumeDiscount,
    packagingCost, transportCost, urgencyRate, urgencyFee,
    clientDiscountRate, clientDiscount, beforeTva, tva, totalTtc,
  };
}

function formatPrice(val: number) {
  return val.toLocaleString('fr-MA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getNextTier(quantity: number) {
  for (let i = VOLUME_DISCOUNTS.length - 1; i >= 0; i--) {
    if (quantity < VOLUME_DISCOUNTS[i].min) {
      return VOLUME_DISCOUNTS[i];
    }
  }
  return null;
}

function getCurrentTier(quantity: number) {
  for (const tier of VOLUME_DISCOUNTS) {
    if (quantity >= tier.min) return tier;
  }
  return { min: 0, discount: 0 };
}

// ─── ANIMATION VARIANTS ────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const cardHover = {
  scale: 1.02,
  transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
};

const cardTap = {
  scale: 0.98,
};

// ─── CHECKMARK SVG ANIMATION ───────────────────────────────────

function AnimatedCheckmark() {
  return (
    <motion.div
      className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-emerald-500 flex items-center justify-center mx-auto"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
    >
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        />
      </motion.svg>
    </motion.div>
  );
}

// ─── PROGRESS BAR ──────────────────────────────────────────────

function ProgressBar({ step, stepLabels, t }: { step: number; stepLabels: string[]; t: (key: string) => string }) {
  return (
    <div className="mb-8">
      {/* Step label */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-[#E8B84B] tracking-widest uppercase">
          {t('quote.progress')} {step} {t('quote.of')} 5
        </span>
        <span className="text-xs text-[#6B7280] font-medium">
          {stepLabels[step - 1]}
        </span>
      </div>

      {/* Progress track */}
      <div className="relative h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1B3A5C] to-[#2D5F8A] rounded-full"
          initial={false}
          animate={{ width: `${(step / 5) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Step dots */}
      <div className="flex items-center justify-between mt-2">
        {stepLabels.map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                i + 1 <= step
                  ? 'bg-[#1B3A5C] text-white shadow-md'
                  : 'bg-[#E5E7EB] text-[#6B7280]'
              }`}
            >
              {i + 1 < step ? (
                <Check className="w-3 h-3" />
              ) : (
                i + 1
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── LIVE PRICE SIDEBAR ────────────────────────────────────────

function PriceSidebar({ quote, calc, t }: { quote: QuoteData; calc: CalcResult; t: (key: string) => string }) {
  const productName = quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5';
  const packLabel = t(`quote.step2.${quote.packaging}`);
  const regionLabel = t(`quote.step3.${quote.region}`);

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-lg overflow-hidden">
      <div className="bg-[#1B3A5C] px-5 py-4">
        <h3 className="text-white font-bold text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E8B84B]" />
          {t('quote.sidebar.title')}
        </h3>
      </div>

      <div className="p-5 space-y-3">
        {/* Product line */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B7280]">{t('quote.sidebar.product')}</span>
          <span className="font-semibold text-[#1B3A5C]">{productName}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B7280]">{t('quote.sidebar.quantity')}</span>
          <span className="font-semibold text-[#1B3A5C]">{quote.quantity} T</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B7280]">{t('quote.sidebar.packaging')}</span>
          <span className="font-semibold text-[#1B3A5C]">{packLabel}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B7280]">{t('quote.sidebar.transport')}</span>
          <span className="font-semibold text-[#1B3A5C]">{regionLabel}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] my-2" />

        {/* Price calculation */}
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-[#6B7280]">{quote.quantity}T × {formatPrice(calc.basePrice)}</span>
            <span className="text-[#1B3A5C]">{formatPrice(calc.subtotal)}</span>
          </div>

          {calc.volumeDiscount > 0 && (
            <div className="flex justify-between text-emerald-600">
              <span>{t('quote.sidebar.discount')} -{(calc.volumeDiscountRate * 100).toFixed(0)}%</span>
              <span>-{formatPrice(calc.volumeDiscount)}</span>
            </div>
          )}

          {calc.packagingCost > 0 && (
            <div className="flex justify-between">
              <span className="text-[#6B7280]">{t('quote.step5.packagingSurcharge')}</span>
              <span>+{formatPrice(calc.packagingCost)}</span>
            </div>
          )}

          {calc.transportCost > 0 && (
            <div className="flex justify-between">
              <span className="text-[#6B7280]">{t('quote.sidebar.transport')}</span>
              <span>+{formatPrice(calc.transportCost)}</span>
            </div>
          )}

          {calc.urgencyFee > 0 && (
            <div className="flex justify-between text-[#C1272D]">
              <span>+{(calc.urgencyRate * 100).toFixed(0)}%</span>
              <span>+{formatPrice(calc.urgencyFee)}</span>
            </div>
          )}

          {calc.clientDiscount > 0 && (
            <div className="flex justify-between text-emerald-600">
              <span>{t('quote.step5.clientDiscount')} -{(calc.clientDiscountRate * 100).toFixed(0)}%</span>
              <span>-{formatPrice(calc.clientDiscount)}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-[#E5E7EB] my-2" />

        {/* Totals */}
        <div className="space-y-1 text-sm">
          <div className="flex justify-between font-medium">
            <span className="text-[#6B7280]">{t('quote.sidebar.ht')}</span>
            <span className="text-[#1B3A5C]">{formatPrice(calc.beforeTva)} MAD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">{t('quote.sidebar.tva')}</span>
            <span className="text-[#1B3A5C]">{formatPrice(calc.tva)} MAD</span>
          </div>
        </div>

        {/* Total TTC */}
        <div className="bg-[#1B3A5C] rounded-xl px-4 py-3 mt-2">
          <div className="flex justify-between items-center">
            <span className="text-white font-bold text-sm">{t('quote.sidebar.ttc')}</span>
            <motion.span
              key={calc.totalTtc}
              initial={{ scale: 1.1, color: '#E8B84B' }}
              animate={{ scale: 1, color: '#FFFFFF' }}
              transition={{ duration: 0.3 }}
              className="text-white font-bold text-lg"
            >
              {formatPrice(calc.totalTtc)} MAD
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE STICKY PRICE BAR ───────────────────────────────────

function MobilePriceBar({ calc, t, isOpen, onToggle }: { calc: CalcResult; t: (key: string) => string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E5E7EB] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#1B3A5C]">{t('quote.sidebar.ttc')}</span>
          <motion.span
            key={calc.totalTtc}
            initial={{ scale: 1.1, color: '#C1272D' }}
            animate={{ scale: 1, color: '#1B3A5C' }}
            className="text-lg font-bold text-[#1B3A5C]"
          >
            {formatPrice(calc.totalTtc)} MAD
          </motion.span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-[#6B7280]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#E5E7EB]"
          >
            <div className="p-4 space-y-1.5 text-sm max-h-60 overflow-y-auto">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">Sous-total</span>
                <span>{formatPrice(calc.subtotal)} MAD</span>
              </div>
              {calc.volumeDiscount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Remise -{(calc.volumeDiscountRate * 100).toFixed(0)}%</span>
                  <span>-{formatPrice(calc.volumeDiscount)}</span>
                </div>
              )}
              {calc.packagingCost > 0 && (
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Conditionnement</span>
                  <span>+{formatPrice(calc.packagingCost)}</span>
                </div>
              )}
              {calc.transportCost > 0 && (
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">Transport</span>
                  <span>+{formatPrice(calc.transportCost)}</span>
                </div>
              )}
              {calc.urgencyFee > 0 && (
                <div className="flex justify-between text-[#C1272D]">
                  <span>Urgence +{(calc.urgencyRate * 100).toFixed(0)}%</span>
                  <span>+{formatPrice(calc.urgencyFee)}</span>
                </div>
              )}
              {calc.clientDiscount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Remise client -{(calc.clientDiscountRate * 100).toFixed(0)}%</span>
                  <span>-{formatPrice(calc.clientDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between font-medium">
                <span className="text-[#6B7280]">HT</span>
                <span>{formatPrice(calc.beforeTva)} MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">TVA 20%</span>
                <span>{formatPrice(calc.tva)} MAD</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── STEP 1: PROJECT TYPE ─────────────────────────────────────

function StepProjectType({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const projectTypes = [
    { key: 'residential', icon: Home, color: '#2563EB' },
    { key: 'commercial', icon: Building2, color: '#7C3AED' },
    { key: 'infrastructure', icon: Construction, color: '#DC2626' },
    { key: 'industrial', icon: Factory, color: '#D97706' },
    { key: 'other', icon: Ruler, color: '#059669' },
  ];

  return (
    <div>
      <p className="text-[#6B7280] mb-6">{t('quote.step1.desc')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectTypes.map(({ key, icon: Icon, color }) => {
          const isSelected = quote.projectType === key;
          return (
            <motion.button
              key={key}
              onClick={() => updateQuote('projectType', key)}
              whileHover={cardHover}
              whileTap={cardTap}
              className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-200 group ${
                isSelected
                  ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                  : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30 hover:shadow-sm'
              }`}
            >
              {/* Checkmark overlay */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-6 h-6 bg-[#1B3A5C] rounded-full flex items-center justify-center"
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </motion.div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected ? 'bg-[#1B3A5C]' : 'bg-[#F7F8FA] group-hover:bg-[#1B3A5C]/10'
                }`}
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${isSelected ? 'text-white' : 'text-[#6B7280]'}`}
                  style={!isSelected ? { color } : undefined}
                />
              </div>

              <h3 className={`font-bold text-base mb-1 ${isSelected ? 'text-[#1B3A5C]' : 'text-[#1B3A5C]/80'}`}>
                {t(`quote.step1.${key}`)}
              </h3>
              <p className="text-sm text-[#6B7280]">
                {t(`quote.step1.${key}Sub`)}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// ─── STEP 2: PRODUCT & QUANTITY ────────────────────────────────

function StepProductQuantity({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const currentTier = getCurrentTier(quote.quantity);
  const nextTier = getNextTier(quote.quantity);
  const maxTier = VOLUME_DISCOUNTS[0].min;

  const products = [
    { key: 'cpj42', badge: t('quote.step2.cpj42Badge'), desc: t('quote.step2.cpj42Desc'), label: t('quote.step2.bestSeller'), price: BASE_PRICES.cpj42 },
    { key: 'cpj32', badge: t('quote.step2.cpj32Badge'), desc: t('quote.step2.cpj32Desc'), label: t('quote.step2.economical'), price: BASE_PRICES.cpj32 },
  ];

  const packagingOptions = [
    { key: 'vrac', icon: Truck },
    { key: 'sacs50', icon: Package },
    { key: 'bigBag', icon: Container },
  ];

  return (
    <div className="space-y-8">
      <p className="text-[#6B7280]">{t('quote.step2.desc')}</p>

      {/* Cement type cards */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step2.cementType')}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map(({ key, badge, desc, label, price }) => {
            const isSelected = quote.cementType === key;
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('cementType', key)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-6 h-6 bg-[#1B3A5C] rounded-full flex items-center justify-center"
                  >
                    <Check className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                )}

                {/* Badge */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block px-2.5 py-0.5 bg-[#1B3A5C] text-white text-[10px] font-bold rounded-full tracking-wide">
                    {badge}
                  </span>
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full ${
                    key === 'cpj42' ? 'bg-[#E8B84B]/20 text-[#D4A030]' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {label}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-[#1B3A5C] mb-1">{t(`quote.step2.${key}`)}</h3>
                <p className="text-xs text-[#6B7280] mb-3">{desc}</p>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#1B3A5C]">{formatPrice(price)}</span>
                  <span className="text-xs text-[#6B7280]">MAD{t('quote.step5.perTonne')}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step2.quantity')}</label>

        {/* Quantity controls */}
        <div className="flex items-center gap-4 mb-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => updateQuote('quantity', Math.max(1, quote.quantity - 5))}
            className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center hover:bg-[#1B3A5C]/10 transition-colors"
          >
            <Minus className="w-5 h-5 text-[#1B3A5C]" />
          </motion.button>

          <div className="flex-1 relative">
            <input
              type="number"
              min={1}
              value={quote.quantity}
              onChange={e => updateQuote('quantity', Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-center text-2xl font-bold text-[#1B3A5C] border-2 border-[#E5E7EB] rounded-xl px-4 py-3 focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/20 outline-none transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#6B7280] font-medium">T</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => updateQuote('quantity', quote.quantity + 5)}
            className="w-12 h-12 rounded-xl bg-[#1B3A5C] text-white flex items-center justify-center hover:bg-[#1B3A5C]/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Slider */}
        <input
          type="range"
          min={1}
          max={600}
          value={quote.quantity}
          onChange={e => updateQuote('quantity', parseInt(e.target.value))}
          className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#1B3A5C]"
        />

        {/* Volume discount tier visual */}
        <div className="mt-4 bg-[#F7F8FA] rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-[#1B3A5C]">{t('quote.step2.volumeDiscount')}</span>
            {currentTier.discount > 0 ? (
              <span className="text-xs font-bold text-emerald-600">-{(currentTier.discount * 100).toFixed(0)}%</span>
            ) : (
              <span className="text-xs text-[#6B7280]">0%</span>
            )}
          </div>

          {/* Tier progress bar */}
          <div className="h-2.5 bg-[#E5E7EB] rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#1B3A5C] to-emerald-500"
              initial={false}
              animate={{ width: `${Math.min((quote.quantity / maxTier) * 100, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Tier markers */}
          <div className="flex justify-between text-[10px] text-[#6B7280]">
            {VOLUME_DISCOUNTS.slice().reverse().map((tier) => (
              <span key={tier.min} className={`font-medium ${quote.quantity >= tier.min ? 'text-emerald-600' : ''}`}>
                {tier.min}T (-{(tier.discount * 100).toFixed(0)}%)
              </span>
            ))}
          </div>

          {/* Next tier hint */}
          {nextTier && (
            <p className="text-xs text-[#6B7280] mt-2">
              💡 {nextTier.min - quote.quantity} {t('quote.step2.tonsUntil')} {t('quote.step2.nextTier')} (-{(nextTier.discount * 100).toFixed(0)}%)
            </p>
          )}
        </div>
      </div>

      {/* Packaging */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step2.packaging')}</label>
        <div className="grid grid-cols-3 gap-3">
          {packagingOptions.map(({ key, icon: Icon }) => {
            const isSelected = quote.packaging === key;
            const surcharge = PACKAGING_SURCHARGE[key];
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('packaging', key)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`p-4 rounded-2xl border-2 text-center transition-all duration-200 ${
                  isSelected
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                  isSelected ? 'bg-[#1B3A5C]' : 'bg-[#F7F8FA]'
                }`}>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#6B7280]'}`} />
                </div>
                <span className="text-sm font-semibold text-[#1B3A5C] block">{t(`quote.step2.${key}`)}</span>
                <span className="text-[10px] text-[#6B7280] block mt-0.5">{t(`quote.step2.${key}Desc`)}</span>
                {surcharge > 0 && (
                  <span className="text-[10px] font-semibold text-[#C1272D] block mt-1">+{surcharge} MAD/T</span>
                )}
                {surcharge === 0 && (
                  <span className="text-[10px] font-semibold text-emerald-600 block mt-1">{t('quote.step3.free')}</span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── STEP 3: DELIVERY ──────────────────────────────────────────

function StepDelivery({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const zones = [
    { key: 'dakhlaVille', icon: '📍', distance: '0 km' },
    { key: 'dakhlaRegion', icon: '🔄', distance: '< 100 km' },
    { key: 'sudMaroc', icon: '🇲🇦', distance: '< 500 km' },
    { key: 'mauritanie', icon: '🇲🇷', distance: '< 800 km' },
  ];

  const deliveryDays = DELIVERY_DAYS[quote.region]?.[quote.urgency] || 3;
  const locale = typeof window !== 'undefined' ? document.documentElement.lang : 'fr';

  return (
    <div className="space-y-8">
      <p className="text-[#6B7280]">{t('quote.step3.desc')}</p>

      {/* Zone selector */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step3.region')}</label>
        <div className="grid grid-cols-2 gap-3">
          {zones.map(({ key, icon, distance }) => {
            const isSelected = quote.region === key;
            const cost = TRANSPORT_COSTS[key];
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('region', key)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`relative p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-5 h-5 bg-[#1B3A5C] rounded-full flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
                <span className="text-xl mb-1 block">{icon}</span>
                <span className="text-sm font-semibold text-[#1B3A5C] block">{t(`quote.step3.${key}`)}</span>
                <span className="text-[10px] text-[#6B7280] block">{distance}</span>
                <span className={`text-xs font-bold mt-1 block ${cost === 0 ? 'text-emerald-600' : 'text-[#6B7280]'}`}>
                  {t(`quote.step3.${key}Desc`)}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">{t('quote.step3.address')}</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
          <input
            type="text"
            value={quote.address}
            onChange={e => updateQuote('address', e.target.value)}
            placeholder={t('quote.step3.addressPlaceholder')}
            className="w-full border-2 border-[#E5E7EB] rounded-xl pl-10 pr-4 py-3 text-[#1B3A5C] focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/20 outline-none transition-all placeholder:text-[#6B7280]/50"
          />
        </div>
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step3.urgency')}</label>
        <div className="grid grid-cols-2 gap-4">
          {['normal', 'urgent'].map(u => {
            const isSelected = quote.urgency === u;
            const isUrgent = u === 'urgent';
            return (
              <motion.button
                key={u}
                onClick={() => updateQuote('urgency', u)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`relative p-5 rounded-2xl border-2 text-center transition-all duration-200 ${
                  isSelected
                    ? isUrgent
                      ? 'border-[#C1272D] bg-[#C1272D]/5 shadow-md'
                      : 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                  isSelected
                    ? isUrgent ? 'bg-[#C1272D]' : 'bg-[#1B3A5C]'
                    : 'bg-[#F7F8FA]'
                }`}>
                  <Clock className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#6B7280]'}`} />
                </div>
                <span className={`text-sm font-bold block ${isSelected ? (isUrgent ? 'text-[#C1272D]' : 'text-[#1B3A5C]') : 'text-[#1B3A5C]/80'}`}>
                  {t(`quote.step3.${u}`)}
                </span>
                <span className="text-xs text-[#6B7280] block mt-1">{t(`quote.step3.${u}Desc`)}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Estimated delivery */}
        <div className="mt-4 bg-[#F7F8FA] rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1B3A5C] flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-xs text-[#6B7280] block">{t('quote.step3.estimatedDelivery')}</span>
            <span className="text-sm font-bold text-[#1B3A5C]">
              {deliveryDays} {deliveryDays > 1 ? t('quote.step3.days') : t('quote.step3.day')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── STEP 4: CLIENT INFO ───────────────────────────────────────

function StepClientInfo({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const fields = [
    { key: 'name', icon: User, type: 'text', required: true, placeholderKey: 'namePlaceholder' },
    { key: 'phone', icon: Phone, type: 'tel', required: true, placeholderKey: 'phonePlaceholder' },
    { key: 'whatsapp', icon: MessageCircle, type: 'tel', required: false, placeholderKey: 'whatsappPlaceholder' },
    { key: 'email', icon: Mail, type: 'email', required: true, placeholderKey: 'emailPlaceholder' },
    { key: 'company', icon: Building, type: 'text', required: false, placeholderKey: 'companyPlaceholder' },
  ] as const;

  const clientTypes = [
    { key: 'particulier', icon: User },
    { key: 'entreprise', icon: Building2 },
    { key: 'revendeur', icon: ShieldCheck },
  ];

  return (
    <div className="space-y-6">
      <p className="text-[#6B7280]">{t('quote.step4.desc')}</p>

      {/* Client type */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step4.clientType')}</label>
        <div className="grid grid-cols-3 gap-3">
          {clientTypes.map(({ key, icon: Icon }) => {
            const isSelected = quote.clientType === key;
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('clientType', key)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`p-3 rounded-2xl border-2 text-center transition-all duration-200 ${
                  isSelected
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                <Icon className={`w-5 h-5 mx-auto mb-1 ${isSelected ? 'text-[#1B3A5C]' : 'text-[#6B7280]'}`} />
                <span className="text-xs font-semibold text-[#1B3A5C] block">{t(`quote.step4.${key}`)}</span>
                <span className="text-[10px] text-[#6B7280] block mt-0.5">{t(`quote.step4.${key}Desc`)}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Form fields */}
      <div className="space-y-4">
        {fields.map(({ key, icon: Icon, type, required, placeholderKey }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-[#1B3A5C] mb-1.5">
              {t(`quote.step4.${key}`)}
              {required && <span className="text-[#C1272D] ml-1">*</span>}
            </label>
            <div className="relative">
              <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
              <input
                type={type}
                value={quote[key as keyof QuoteData] as string}
                onChange={e => updateQuote(key, e.target.value)}
                placeholder={t(`quote.step4.${placeholderKey}`)}
                className="w-full border-2 border-[#E5E7EB] rounded-xl pl-10 pr-4 py-3 text-[#1B3A5C] focus:border-[#1B3A5C] focus:ring-2 focus:ring-[#1B3A5C]/20 outline-none transition-all placeholder:text-[#6B7280]/50"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── STEP 5: SUMMARY ──────────────────────────────────────────

function StepSummary({ quote, calc, quoteNumber, t }: { quote: QuoteData; calc: CalcResult; quoteNumber: string; t: (key: string) => string }) {
  const productName = quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5';
  const productBadge = quote.cementType === 'cpj42' ? t('quote.step2.cpj42Badge') : t('quote.step2.cpj32Badge');
  const locale = typeof window !== 'undefined' ? document.documentElement.lang : 'fr';

  const today = new Date();
  const validUntil = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === 'en' ? 'en-US' : 'fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <p className="text-[#6B7280]">{t('quote.step5.desc')}</p>

      {/* Invoice-style card */}
      <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-[#1B3A5C] px-6 py-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white font-bold text-lg">Dakhla Aménagement S.A.</h3>
              <p className="text-white/60 text-xs mt-1">Ciment de Qualité au Maroc</p>
            </div>
            <div className="text-right">
              <p className="text-[#E8B84B] font-bold text-sm">{t('quote.step5.quoteNumber')}{quoteNumber}</p>
              <p className="text-white/60 text-xs mt-1">{t('quote.step5.date')}: {formatDate(today)}</p>
              <p className="text-white/60 text-xs">{t('quote.step5.validUntil')}: {formatDate(validUntil)}</p>
            </div>
          </div>
        </div>

        {/* Client info */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] bg-[#F7F8FA]">
          <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mb-2">{t('quote.step5.client')}</p>
          <div className="space-y-0.5">
            <p className="text-sm font-bold text-[#1B3A5C]">{quote.name}</p>
            {quote.company && <p className="text-xs text-[#6B7280]">{quote.company}</p>}
            <div className="flex items-center gap-4 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" /> {quote.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" /> {quote.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mb-3">{t('quote.step5.detail')}</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">{t('quote.step5.projectType')}</span>
              <span className="font-medium text-[#1B3A5C]">{t(`quote.step1.${quote.projectType}`)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">{t('quote.step5.product')}</span>
              <span className="font-medium text-[#1B3A5C]">{productName} ({productBadge})</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">{t('quote.step5.quantity')}</span>
              <span className="font-medium text-[#1B3A5C]">{quote.quantity} Tonnes</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">{t('quote.step5.packaging')}</span>
              <span className="font-medium text-[#1B3A5C]">{t(`quote.step2.${quote.packaging}`)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">{t('quote.step5.delivery')}</span>
              <span className="font-medium text-[#1B3A5C]">{t(`quote.step3.${quote.region}`)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#6B7280]">{t('quote.step5.urgency')}</span>
              <span className="font-medium text-[#1B3A5C]">{t(`quote.step3.${quote.urgency}`)}</span>
            </div>
          </div>
        </div>

        {/* Price breakdown */}
        <div className="px-6 py-4">
          <p className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold mb-3">{t('quote.step5.priceDetail')}</p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]">
              <span className="text-[#1B3A5C]">{t('quote.step5.basePrice')}</span>
              <span className="text-[#6B7280]">{quote.quantity}T × {formatPrice(calc.basePrice)}</span>
              <span className="font-medium text-[#1B3A5C] w-28 text-right">{formatPrice(calc.subtotal)}</span>
            </div>

            {calc.volumeDiscount > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]">
                <span className="text-emerald-600">{t('quote.step5.volumeDiscount')}</span>
                <span className="text-emerald-600">-{(calc.volumeDiscountRate * 100).toFixed(0)}%</span>
                <span className="font-medium text-emerald-600 w-28 text-right">-{formatPrice(calc.volumeDiscount)}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]">
              <span className="text-[#6B7280]">{t('quote.step5.packagingSurcharge')}</span>
              <span className="text-[#6B7280]">{t(`quote.step2.${quote.packaging}`)}</span>
              <span className="font-medium text-[#1B3A5C] w-28 text-right">{formatPrice(calc.packagingCost)}</span>
            </div>

            <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]">
              <span className="text-[#6B7280]">{t('quote.step5.transport')}</span>
              <span className="text-[#6B7280]">{t(`quote.step3.${quote.region}`)}</span>
              <span className="font-medium text-[#1B3A5C] w-28 text-right">{formatPrice(calc.transportCost)}</span>
            </div>

            {calc.urgencyFee > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]">
                <span className="text-[#C1272D]">{t('quote.step5.urgencyFee')}</span>
                <span className="text-[#C1272D]">+{(calc.urgencyRate * 100).toFixed(0)}%</span>
                <span className="font-medium text-[#C1272D] w-28 text-right">{formatPrice(calc.urgencyFee)}</span>
              </div>
            )}

            {calc.clientDiscount > 0 && (
              <div className="flex justify-between items-center py-1.5 border-b border-[#E5E7EB]">
                <span className="text-emerald-600">{t('quote.step5.clientDiscount')}</span>
                <span className="text-emerald-600">-{(calc.clientDiscountRate * 100).toFixed(0)}%</span>
                <span className="font-medium text-emerald-600 w-28 text-right">-{formatPrice(calc.clientDiscount)}</span>
              </div>
            )}
          </div>

          {/* Subtotals */}
          <div className="mt-3 space-y-1.5 text-sm">
            <div className="flex justify-between py-1 border-b-2 border-[#1B3A5C]/20">
              <span className="font-bold text-[#1B3A5C]">{t('quote.step5.ht')}</span>
              <span className="font-bold text-[#1B3A5C] w-28 text-right">{formatPrice(calc.beforeTva)} MAD</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#E5E7EB]">
              <span className="text-[#6B7280]">{t('quote.step5.tva')}</span>
              <span className="text-[#1B3A5C] w-28 text-right">{formatPrice(calc.tva)} MAD</span>
            </div>
          </div>

          {/* Total TTC */}
          <div className="mt-4 bg-[#1B3A5C] rounded-xl px-5 py-4 flex justify-between items-center">
            <span className="text-white font-bold text-base">{t('quote.step5.totalTtc')}</span>
            <span className="text-white font-bold text-xl">{formatPrice(calc.totalTtc)} MAD</span>
          </div>
        </div>

        {/* Conditions */}
        <div className="px-6 py-4 bg-[#F7F8FA] border-t border-[#E5E7EB]">
          <div className="space-y-1 text-xs text-[#6B7280]">
            <p><span className="font-semibold text-[#1B3A5C]">{t('quote.step5.conditions')}:</span> {t('quote.step5.validityPeriod')}</p>
            <p><span className="font-semibold text-[#1B3A5C]">{t('quote.step5.payment')}:</span> {t('quote.step5.paymentTerms')}</p>
            <p><span className="font-semibold text-[#1B3A5C]">RIB:</span> {t('quote.step5.bankInfo')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SUCCESS PAGE ──────────────────────────────────────────────

function SuccessPage({ quoteNumber, calc, quote, generatePdf, sendWhatsApp, t }: {
  quoteNumber: string;
  calc: CalcResult;
  quote: QuoteData;
  generatePdf: () => void;
  sendWhatsApp: () => void;
  t: (key: string) => string;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg mx-auto"
      >
        <AnimatedCheckmark />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1B3A5C] mt-8 mb-2">
            {t('quote.success')}
          </h2>
          <p className="text-[#6B7280] mb-6">{t('quote.successSubtitle')}</p>

          {/* Quote number card */}
          <div className="bg-[#F7F8FA] rounded-2xl p-6 mb-8 inline-block">
            <p className="text-xs uppercase tracking-widest text-[#6B7280] font-bold mb-1">
              {t('quote.successQuote')}
            </p>
            <p className="text-2xl font-bold text-[#1B3A5C]">{quoteNumber}</p>
            <p className="text-lg font-bold text-[#E8B84B] mt-1">{formatPrice(calc.totalTtc)} MAD</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={generatePdf}
              className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 rounded-xl px-6 h-12 text-sm font-semibold"
            >
              <Download className="w-4 h-4 mr-2" /> {t('quote.downloadPdf')}
            </Button>
            <Button
              onClick={sendWhatsApp}
              variant="outline"
              className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 rounded-xl px-6 h-12 text-sm font-semibold"
            >
              <Send className="w-4 h-4 mr-2" /> {t('quote.sendWhatsApp')}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────

export default function DevisPage() {
  const t = useTranslations();
  const params = useParams();
  const locale = (params?.locale as string) || 'fr';

  const [step, setStep] = useState(1);
  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [mobilePriceOpen, setMobilePriceOpen] = useState(false);
  const [quoteNumber] = useState(generateQuoteNumber);

  const mainRef = useRef<HTMLDivElement>(null);

  const updateQuote = useCallback((field: string, value: string | number) => {
    setQuote(prev => ({ ...prev, [field]: value }));
  }, []);

  const calc = useMemo(() => calculateQuote(quote), [quote]);

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

  const goNext = () => {
    if (step < 5 && canProceed()) {
      setDirection(1);
      setStep(step + 1);
      mainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goPrev = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
      mainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ─── PDF Generation ──────────────────────────────────────────

  const generatePdf = async () => {
    const { default: jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const productName = quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5';
    const productBadge = quote.cementType === 'cpj42' ? t('quote.step2.cpj42Badge') : t('quote.step2.cpj32Badge');
    const pageWidth = 210;
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;

    // ── HEADER ──
    doc.setFillColor(27, 58, 92);
    doc.rect(0, 0, pageWidth, 48, 'F');

    // Gold accent line
    doc.setFillColor(232, 184, 75);
    doc.rect(0, 48, pageWidth, 3, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Dakhla Aménagement S.A.', margin, 22);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(200, 210, 220);
    doc.text('Centre de broyage de clinker — Ciment de Qualité au Maroc', margin, 30);

    // Quote number on right
    doc.setTextColor(232, 184, 75);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(t('quote.step5.quoteNumber'), pageWidth - margin, 18, { align: 'right' });
    doc.setFontSize(11);
    doc.text(quoteNumber, pageWidth - margin, 26, { align: 'right' });

    // Date
    doc.setTextColor(180, 190, 200);
    doc.setFontSize(8);
    const today = new Date();
    const validUntil = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    doc.text(`${t('quote.step5.date')}: ${today.toLocaleDateString('fr-FR')}`, pageWidth - margin, 34, { align: 'right' });
    doc.text(`${t('quote.step5.validUntil')}: ${validUntil.toLocaleDateString('fr-FR')}`, pageWidth - margin, 39, { align: 'right' });

    // ── CLIENT INFO ──
    let y = 60;
    doc.setTextColor(27, 58, 92);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(t('quote.step5.client').toUpperCase(), margin, y);
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.text(quote.name, margin, y); y += 5;
    if (quote.company) { doc.text(quote.company, margin, y); y += 5; }
    doc.text(quote.email, margin, y); y += 5;
    doc.text(quote.phone, margin, y); y += 5;
    if (quote.whatsapp) { doc.text(`WhatsApp: ${quote.whatsapp}`, margin, y); y += 5; }

    // ── DETAIL SECTION ──
    y += 5;
    doc.setFillColor(247, 248, 250);
    doc.roundedRect(margin, y - 4, contentWidth, 8, 1, 1, 'F');
    doc.setTextColor(27, 58, 92);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(t('quote.step5.detail').toUpperCase(), margin + 3, y + 1);
    y += 10;

    // Detail rows
    const detailRows = [
      [t('quote.step5.projectType'), t(`quote.step1.${quote.projectType}`)],
      [t('quote.step5.product'), `${productName} (${productBadge})`],
      [t('quote.step5.quantity'), `${quote.quantity} Tonnes`],
      [t('quote.step5.packaging'), t(`quote.step2.${quote.packaging}`)],
      [t('quote.step5.delivery'), t(`quote.step3.${quote.region}`)],
      [t('quote.step5.urgency'), t(`quote.step3.${quote.urgency}`)],
    ];

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    for (const [label, value] of detailRows) {
      doc.setTextColor(107, 114, 128);
      doc.text(label, margin + 3, y);
      doc.setTextColor(27, 58, 92);
      doc.setFont('helvetica', 'bold');
      doc.text(value, margin + 60, y);
      doc.setFont('helvetica', 'normal');
      y += 6;
    }

    // ── PRICE TABLE ──
    y += 5;
    doc.setFillColor(27, 58, 92);
    doc.roundedRect(margin, y - 4, contentWidth, 8, 1, 1, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.text(t('quote.step5.priceDetail').toUpperCase(), margin + 3, y + 1);
    doc.text(t('quote.step5.mad'), pageWidth - margin - 3, y + 1, { align: 'right' });
    y += 10;

    // Table header
    doc.setFillColor(247, 248, 250);
    doc.rect(margin, y - 4, contentWidth, 7, 'F');
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(7);
    doc.text(t('quote.step5.basePrice'), margin + 3, y);
    doc.text(t('quote.step5.quantity'), margin + 65, y);
    doc.text(t('quote.step5.unitPrice'), margin + 105, y);
    doc.text(t('quote.step5.subtotal'), pageWidth - margin - 3, y, { align: 'right' });
    y += 8;

    // Main row
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(productName, margin + 3, y);
    doc.text(`${quote.quantity} T`, margin + 65, y);
    doc.text(`${formatPrice(calc.basePrice)} ${t('quote.step5.mad')}`, margin + 105, y);
    doc.setFont('helvetica', 'bold');
    doc.text(`${formatPrice(calc.subtotal)} ${t('quote.step5.mad')}`, pageWidth - margin - 3, y, { align: 'right' });
    y += 8;

    // Separator line
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.3);
    doc.line(margin, y - 2, pageWidth - margin, y - 2);

    // Price adjustment rows
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);

    const priceLines: [string, string, string, boolean][] = [
      [t('quote.step5.volumeDiscount'), `- ${(calc.volumeDiscountRate * 100).toFixed(0)}%`, `-${formatPrice(calc.volumeDiscount)}`, true],
    ];

    if (calc.packagingCost > 0) {
      priceLines.push([t('quote.step5.packagingSurcharge'), t(`quote.step2.${quote.packaging}`), formatPrice(calc.packagingCost), false]);
    }

    if (calc.transportCost > 0) {
      priceLines.push([t('quote.step5.transport'), t(`quote.step3.${quote.region}`), formatPrice(calc.transportCost), false]);
    }

    if (calc.urgencyFee > 0) {
      priceLines.push([t('quote.step5.urgencyFee'), `+ ${(calc.urgencyRate * 100).toFixed(0)}%`, formatPrice(calc.urgencyFee), false]);
    }

    if (calc.clientDiscount > 0) {
      priceLines.push([t('quote.step5.clientDiscount'), `- ${(calc.clientDiscountRate * 100).toFixed(0)}%`, `-${formatPrice(calc.clientDiscount)}`, true]);
    }

    for (const [label, detail, amount, isDiscount] of priceLines) {
      if (isDiscount) {
        doc.setTextColor(22, 163, 74); // green for discounts
      } else {
        doc.setTextColor(107, 114, 128);
      }
      doc.text(label, margin + 3, y);
      doc.text(detail, margin + 65, y);
      if (isDiscount) {
        doc.setTextColor(22, 163, 74);
      } else {
        doc.setTextColor(50, 50, 50);
      }
      doc.setFont('helvetica', 'bold');
      doc.text(`${isDiscount ? '' : ''}${amount} ${t('quote.step5.mad')}`, pageWidth - margin - 3, y, { align: 'right' });
      doc.setFont('helvetica', 'normal');
      y += 6;
    }

    // Total HT
    y += 2;
    doc.setDrawColor(27, 58, 92);
    doc.setLineWidth(0.5);
    doc.line(margin, y - 2, pageWidth - margin, y - 2);
    y += 2;

    doc.setTextColor(27, 58, 92);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(t('quote.step5.ht'), margin + 3, y);
    doc.text(`${formatPrice(calc.beforeTva)} ${t('quote.step5.mad')}`, pageWidth - margin - 3, y, { align: 'right' });
    y += 6;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(8);
    doc.text(t('quote.step5.tva'), margin + 3, y);
    doc.text(`${formatPrice(calc.tva)} ${t('quote.step5.mad')}`, pageWidth - margin - 3, y, { align: 'right' });
    y += 4;

    // Total TTC bar
    y += 2;
    doc.setFillColor(27, 58, 92);
    doc.roundedRect(margin, y - 4, contentWidth, 12, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(t('quote.step5.totalTtc'), margin + 5, y + 3);
    doc.text(`${formatPrice(calc.totalTtc)} ${t('quote.step5.mad')}`, pageWidth - margin - 5, y + 3, { align: 'right' });
    y += 16;

    // ── CONDITIONS ──
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'italic');
    doc.text(`${t('quote.step5.conditions')}: ${t('quote.step5.validityPeriod')}`, margin, y);
    y += 4;
    doc.text(`${t('quote.step5.payment')}: ${t('quote.step5.paymentTerms')}`, margin, y);
    y += 4;
    doc.text(`${t('quote.step5.bankInfo')}`, margin, y);

    // ── FOOTER ──
    doc.setFillColor(247, 248, 250);
    doc.rect(0, 277, pageWidth, 20, 'F');
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.3);
    doc.line(0, 277, pageWidth, 277);

    doc.setTextColor(107, 114, 128);
    doc.setFontSize(6);
    doc.setFont('helvetica', 'normal');
    doc.text('Dakhla Aménagement S.A. — Quartier Lassargua, Dakhla, Maroc — RC: 7207 — ICE: 001726721000031', margin, 283);
    doc.text(`Page 1/1`, pageWidth - margin, 283, { align: 'right' });

    doc.save(`${quoteNumber}.pdf`);
  };

  // ─── WhatsApp ────────────────────────────────────────────────

  const sendWhatsApp = () => {
    const productName = quote.cementType === 'cpj42' ? 'CPJ 42.5' : 'CPJ 32.5';
    const msg = `🏗️ ${t('quote.step5.quoteNumber')}${quoteNumber}\n\n` +
      `📦 ${t('quote.step5.product')}: ${productName}\n` +
      `⚖️ ${t('quote.step5.quantity')}: ${quote.quantity} T\n` +
      `💰 ${t('quote.step5.totalTtc')}: ${formatPrice(calc.totalTtc)} ${t('quote.step5.mad')}\n\n` +
      `👤 ${quote.name}\n` +
      `📧 ${quote.email}\n` +
      `📱 ${quote.phone}` +
      (quote.company ? `\n🏢 ${quote.company}` : '');
    window.open(`https://wa.me/212XXXXXXXX?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ─── SUBMITTED VIEW ──────────────────────────────────────────

  if (submitted) {
    return (
      <>
        <PageHero title={t('quote.title')} subtitle={t('quote.subtitle')} sectionCounter="/04" />
        <section className="py-12 md:py-20 bg-white">
          <SuccessPage
            quoteNumber={quoteNumber}
            calc={calc}
            quote={quote}
            generatePdf={generatePdf}
            sendWhatsApp={sendWhatsApp}
            t={t}
          />
        </section>
      </>
    );
  }

  // ─── MAIN WIZARD VIEW ────────────────────────────────────────

  return (
    <>
      <PageHero title={t('quote.title')} subtitle={t('quote.subtitle')} sectionCounter="/04" />

      <section className="py-8 md:py-12 bg-[#F7F8FA] min-h-screen" ref={mainRef}>
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Progress Bar */}
          <ProgressBar step={step} stepLabels={stepLabels} t={t} />

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left: Form area */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 md:p-8 overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {step === 1 && <StepProjectType quote={quote} updateQuote={updateQuote} t={t} />}
                    {step === 2 && <StepProductQuantity quote={quote} updateQuote={updateQuote} t={t} />}
                    {step === 3 && <StepDelivery quote={quote} updateQuote={updateQuote} t={t} />}
                    {step === 4 && <StepClientInfo quote={quote} updateQuote={updateQuote} t={t} />}
                    {step === 5 && (
                      <StepSummary
                        quote={quote}
                        calc={calc}
                        quoteNumber={quoteNumber}
                        t={t}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                  {step > 1 ? (
                    <Button
                      onClick={goPrev}
                      variant="ghost"
                      className="text-[#6B7280] hover:text-[#1B3A5C] h-11 px-4 rounded-xl"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> {t('quote.prev')}
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <Button
                      onClick={goNext}
                      disabled={!canProceed()}
                      className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 rounded-xl px-6 h-11 font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {t('quote.next')} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setSubmitted(true)}
                      className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 rounded-xl px-8 h-11 font-semibold"
                    >
                      {t('quote.step5.submit')} <CheckCircle2 className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Sticky sidebar (desktop) */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-8">
                <PriceSidebar quote={quote} calc={calc} t={t} />

                {/* Trust badges */}
                <div className="mt-4 bg-white rounded-2xl border border-[#E5E7EB] p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Devis sécurisé et confidentiel</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <Clock className="w-4 h-4 text-[#E8B84B]" />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <CheckCircle2 className="w-4 h-4 text-[#1B3A5C]" />
                    <span>Conforme NM 10.1.004 / EN 197-1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky price bar */}
      <MobilePriceBar calc={calc} t={t} isOpen={mobilePriceOpen} onToggle={() => setMobilePriceOpen(!mobilePriceOpen)} />

      {/* Bottom padding for mobile price bar */}
      <div className="h-16 md:hidden" />
    </>
  );
}
