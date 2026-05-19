'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, Building2, Construction, Factory, Ruler,
  Package, Truck, Container, MapPin, Clock,
  User, Phone, Mail, Building, MessageCircle,
  Check, FileDown, ArrowRight, ArrowLeft,
  Minus, Plus, ChevronDown, ShieldCheck,
  CheckCircle2, Download, Send, Sparkles,
  Zap, Award, Star, Shield, CreditCard,
  Calendar, FileText, Stamp, QrCode, TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/components/shared/PageHero';
import Image from 'next/image';
import jsPDF from 'jspdf';

// ─── PRICING ENGINE ────────────────────────────────────────────

const BASE_PRICES: Record<string, number> = { cpj45: 1500, cpj55: 1600 };
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
  cementType: 'cpj45',
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

// ─── ANIMATED NUMBER ───────────────────────────────────────────

function AnimatedNumber({ value, decimals = 2 }: { value: number; decimals?: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const start = display;
    const diff = value - start;
    const duration = 600;
    const startTime = performance.now();
    let raf: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + diff * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return <>{display.toLocaleString('fr-MA', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</>;
}

// ─── ANIMATION VARIANTS ────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.98,
  }),
};

const cardHover = {
  y: -4,
  boxShadow: '0 12px 40px rgba(27,58,92,0.15)',
  transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
};

const cardTap = {
  scale: 0.97,
};

// ─── CONFETTI (CSS-only) ───────────────────────────────────────

// Pre-computed confetti data to avoid Math.random() in render
const CONFETTI_DATA = Array.from({ length: 40 }, (_, i) => {
  const seed = (i * 2654435761) % 4294967296;
  const rand1 = ((seed >>> 0) % 10000) / 10000;
  const rand2 = (((seed * 3) >>> 0) % 10000) / 10000;
  const rand3 = (((seed * 7) >>> 0) % 10000) / 10000;
  const rand4 = (((seed * 13) >>> 0) % 10000) / 10000;
  const rand5 = (((seed * 17) >>> 0) % 10000) / 10000;
  const rand6 = (((seed * 23) >>> 0) % 10000) / 10000;
  return {
    left: rand1 * 100,
    delay: rand2 * 2,
    duration: 2 + rand3 * 2,
    size: 6 + rand4 * 6,
    rotation: rand5 * 360,
    xDrift: (rand6 - 0.5) * 200,
  };
});

function Confetti() {
  const colors = ['#E8B84B', '#1B3A5C', '#C1272D', '#22c55e', '#f59e0b', '#8b5cf6'];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {CONFETTI_DATA.map((piece, i) => {
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
            animate={{
              y: ['0%', '120vh'],
              x: [0, piece.xDrift],
              opacity: [1, 1, 0],
              rotate: [0, piece.rotation + 720],
            }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              left: `${piece.left}%`,
              top: 0,
              width: piece.size,
              height: piece.size,
              backgroundColor: color,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0',
            }}
          />
        );
      })}
    </div>
  );
}

// ─── ANIMATED CHECKMARK ────────────────────────────────────────

function AnimatedCheckmark() {
  return (
    <motion.div
      className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-emerald-500 flex items-center justify-center mx-auto shadow-[0_0_60px_rgba(34,197,94,0.3)]"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.3 }}
    >
      <motion.svg
        width="80"
        height="80"
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
          transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
        />
      </motion.svg>
    </motion.div>
  );
}

// ─── PREMIUM STEP TIMELINE ─────────────────────────────────────

const stepIcons = [Home, Package, Truck, User, FileText];

function StepTimeline({ step, stepLabels, t, onStepClick, maxVisited }: {
  step: number;
  stepLabels: string[];
  t: (key: string) => string;
  onStepClick: (s: number) => void;
  maxVisited: number;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold text-[#E8B84B] tracking-[0.2em] uppercase">
          {t('quote.progress')} {step} {t('quote.of')} 5
        </span>
      </div>

      {/* Timeline */}
      <div className="relative flex items-start justify-between">
        {/* Connector line */}
        <div className="absolute top-5 left-0 right-0 h-[3px] bg-[#E5E7EB] rounded-full" />
        <motion.div
          className="absolute top-5 left-0 h-[3px] bg-gradient-to-r from-[#1B3A5C] via-[#2D5F8A] to-[#E8B84B] rounded-full"
          initial={false}
          animate={{ width: `${((step - 1) / 4) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {stepLabels.map((label, i) => {
          const s = i + 1;
          const isCompleted = s < step;
          const isCurrent = s === step;
          const isClickable = s <= maxVisited;
          const Icon = stepIcons[i];

          return (
            <button
              key={i}
              onClick={() => isClickable ? onStepClick(s) : undefined}
              disabled={!isClickable}
              className={`relative flex flex-col items-center z-10 group ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {/* Circle */}
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : isCurrent
                      ? 'bg-[#1B3A5C] text-white shadow-lg shadow-[#1B3A5C]/30'
                      : 'bg-white border-2 border-[#E5E7EB] text-[#6B7280]'
                }`}
                animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                transition={isCurrent ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : {}}
              >
                {isCompleted ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <Check className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <Icon className="w-4.5 h-4.5" />
                )}
              </motion.div>

              {/* Label */}
              <span className={`mt-2 text-[10px] sm:text-xs font-semibold text-center max-w-[70px] leading-tight transition-colors ${
                isCompleted ? 'text-emerald-600' : isCurrent ? 'text-[#1B3A5C]' : 'text-[#6B7280]'
              }`}>
                {label}
              </span>

              {/* Pulse ring for current */}
              {isCurrent && (
                <motion.div
                  className="absolute top-0 w-10 h-10 rounded-full border-2 border-[#1B3A5C]"
                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── LIVE PRICE SIDEBAR (Glass Morphism) ──────────────────────

function PriceSidebar({ quote, calc, t }: { quote: QuoteData; calc: CalcResult; t: (key: string) => string }) {
  const productName = quote.cementType === 'cpj45' ? 'CPJ 45' : 'CPJ 55';
  const packLabel = t(`quote.step2.${quote.packaging}`);
  const regionLabel = t(`quote.step3.${quote.region}`);
  const totalSavings = calc.volumeDiscount + calc.clientDiscount;

  // Price composition bar
  const baseWidth = Math.min((calc.subtotal / calc.totalTtc) * 100, 100);
  const extraWidth = Math.min(((calc.packagingCost + calc.transportCost + calc.urgencyFee) / calc.totalTtc) * 100, 100);
  const tvaWidth = Math.min((calc.tva / calc.totalTtc) * 100, 100);

  return (
    <div className="sticky top-24 rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl bg-white/80">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1B3A5C] to-[#2D5F8A] px-5 py-4">
        <h3 className="text-white font-bold text-sm flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#E8B84B]" />
          {t('quote.sidebar.title')}
        </h3>
      </div>

      <div className="p-5 space-y-3">
        {/* Selection summary */}
        <div className="space-y-2">
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
        </div>

        <div className="border-t border-[#E5E7EB]" />

        {/* Price lines */}
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="text-[#6B7280]">{quote.quantity}T × {formatPrice(calc.basePrice)}</span>
            <span className="text-[#1B3A5C]">{formatPrice(calc.subtotal)}</span>
          </div>

          {calc.volumeDiscount > 0 && (
            <div className="flex justify-between text-emerald-600">
              <span className="flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {t('quote.sidebar.discount')} -{(calc.volumeDiscountRate * 100).toFixed(0)}%
              </span>
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
              <span className="flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {t('quote.step5.clientDiscount')} -{(calc.clientDiscountRate * 100).toFixed(0)}%
              </span>
              <span>-{formatPrice(calc.clientDiscount)}</span>
            </div>
          )}
        </div>

        {/* Savings highlight */}
        {totalSavings > 0 && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5 flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <TrendingDown className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <span className="text-[10px] text-emerald-600 font-medium block">{t('quote.savings')}</span>
              <span className="text-sm font-bold text-emerald-700"><AnimatedNumber value={totalSavings} /> MAD</span>
            </div>
          </motion.div>
        )}

        <div className="border-t border-[#E5E7EB]" />

        {/* Price composition bar */}
        <div>
          <span className="text-[10px] text-[#6B7280] font-medium mb-1.5 block">{t('quote.step5.priceDetail')}</span>
          <div className="h-2.5 rounded-full overflow-hidden flex bg-[#E5E7EB]">
            <motion.div className="bg-[#1B3A5C] h-full" initial={false} animate={{ width: `${baseWidth}%` }} transition={{ duration: 0.5 }} />
            <motion.div className="bg-[#E8B84B] h-full" initial={false} animate={{ width: `${extraWidth}%` }} transition={{ duration: 0.5 }} />
            <motion.div className="bg-[#C1272D]/60 h-full" initial={false} animate={{ width: `${tvaWidth}%` }} transition={{ duration: 0.5 }} />
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-1 text-sm">
          <div className="flex justify-between font-medium">
            <span className="text-[#6B7280]">{t('quote.sidebar.ht')}</span>
            <span className="text-[#1B3A5C]"><AnimatedNumber value={calc.beforeTva} /> MAD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">{t('quote.sidebar.tva')}</span>
            <span className="text-[#1B3A5C]"><AnimatedNumber value={calc.tva} /> MAD</span>
          </div>
        </div>

        {/* Total TTC — Gold gradient banner */}
        <div className="bg-gradient-to-r from-[#1B3A5C] via-[#2D5F8A] to-[#1B3A5C] rounded-xl px-4 py-4 mt-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/0 via-[#E8B84B]/10 to-[#E8B84B]/0" />
          <div className="flex justify-between items-center relative">
            <span className="text-white font-bold text-sm">{t('quote.sidebar.ttc')}</span>
            <motion.span
              key={calc.totalTtc}
              initial={{ scale: 1.15, color: '#E8B84B' }}
              animate={{ scale: 1, color: '#FFFFFF' }}
              transition={{ duration: 0.4 }}
              className="text-white font-extrabold text-xl"
            >
              <AnimatedNumber value={calc.totalTtc} /> MAD
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE STICKY PRICE BAR ───────────────────────────────────

function MobilePriceBar({ calc, t, isOpen, onToggle }: { calc: CalcResult; t: (key: string) => string; isOpen: boolean; onToggle: () => void }) {
  const totalSavings = calc.volumeDiscount + calc.clientDiscount;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
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
          {totalSavings > 0 && (
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
              -{formatPrice(totalSavings)}
            </span>
          )}
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
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-[#E5E7EB]"
          >
            <div className="p-4 space-y-1.5 text-sm max-h-60 overflow-y-auto">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">{t('quote.step5.subtotal')}</span>
                <span>{formatPrice(calc.subtotal)} MAD</span>
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
              <div className="border-t border-[#E5E7EB] pt-1.5 mt-1.5">
                <div className="flex justify-between font-medium">
                  <span className="text-[#6B7280]">{t('quote.sidebar.ht')}</span>
                  <span>{formatPrice(calc.beforeTva)} MAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7280]">{t('quote.sidebar.tva')}</span>
                  <span>{formatPrice(calc.tva)} MAD</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── STEP 1: PROJECT TYPE (Premium Cards) ──────────────────────

function StepProjectType({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const projectTypes = [
    { key: 'residential', icon: Home, color: '#2563EB', gradient: 'from-blue-50 to-blue-100/50' },
    { key: 'commercial', icon: Building2, color: '#7C3AED', gradient: 'from-purple-50 to-purple-100/50' },
    { key: 'infrastructure', icon: Construction, color: '#C1272D', gradient: 'from-red-50 to-red-100/50', recommended: true },
    { key: 'industrial', icon: Factory, color: '#D97706', gradient: 'from-amber-50 to-amber-100/50' },
    { key: 'other', icon: Ruler, color: '#059669', gradient: 'from-emerald-50 to-emerald-100/50' },
  ];

  return (
    <div>
      <p className="text-[#6B7280] mb-6">{t('quote.step1.desc')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectTypes.map(({ key, icon: Icon, color, gradient, recommended }) => {
          const isSelected = quote.projectType === key;
          return (
            <motion.button
              key={key}
              onClick={() => updateQuote('projectType', key)}
              whileHover={cardHover}
              whileTap={cardTap}
              className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 group overflow-hidden ${
                isSelected
                  ? 'border-[#1B3A5C] bg-gradient-to-br ' + gradient + ' shadow-lg'
                  : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30 hover:shadow-md'
              }`}
            >
              {/* Recommended badge */}
              {recommended && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E8B84B] text-[#1A1A2E] text-[9px] font-bold rounded-full">
                    <Star className="w-2.5 h-2.5" /> Recommandé
                  </span>
                </div>
              )}

              {/* Selected checkmark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-7 h-7 bg-[#1B3A5C] rounded-full flex items-center justify-center shadow-md"
                >
                  <Check className="w-4 h-4 text-white" />
                </motion.div>
              )}

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isSelected ? 'bg-[#1B3A5C] shadow-lg' : 'bg-[#F7F8FA] group-hover:shadow-md'
                }`}
                style={!isSelected ? { background: `${color}10` } : undefined}
              >
                <Icon
                  className={`w-7 h-7 transition-colors ${isSelected ? 'text-white' : ''}`}
                  style={!isSelected ? { color } : undefined}
                />
              </div>

              <h3 className={`font-bold text-lg mb-1 ${isSelected ? 'text-[#1B3A5C]' : 'text-[#1B3A5C]/80'}`}>
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

// ─── STEP 2: PRODUCT & QUANTITY (MAJOR UPGRADE) ────────────────

function StepProductQuantity({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const currentTier = getCurrentTier(quote.quantity);
  const nextTier = getNextTier(quote.quantity);
  const maxTier = VOLUME_DISCOUNTS[0].min;

  const products = [
    {
      key: 'cpj45',
      badge: t('quote.step2.cpj45Badge'),
      desc: t('quote.step2.cpj45Desc'),
      label: t('quote.step2.popular'),
      strength: t('quote.step2.cpj45Strength'),
      use: t('quote.step2.cpj45Use'),
      price: BASE_PRICES.cpj45,
      gradient: 'from-[#1B3A5C] to-[#2D5F8A]',
      accentColor: '#E8B84B',
      image: '/images/products/cpj45-bags.jpg',
    },
    {
      key: 'cpj55',
      badge: t('quote.step2.cpj55Badge'),
      desc: t('quote.step2.cpj55Desc'),
      label: t('quote.step2.highPerformance'),
      strength: t('quote.step2.cpj55Strength'),
      use: t('quote.step2.cpj55Use'),
      price: BASE_PRICES.cpj55,
      gradient: 'from-[#0F2337] to-[#1B3A5C]',
      accentColor: '#C1272D',
      image: '/images/products/cpj55-bags.jpg',
    },
  ];

  const packagingOptions = [
    { key: 'vrac', icon: Truck },
    { key: 'sacs50', icon: Package },
    { key: 'bigBag', icon: Container },
  ];

  return (
    <div className="space-y-8">
      <p className="text-[#6B7280]">{t('quote.step2.desc')}</p>

      {/* Cement type — IMPRESSIVE cards */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-4">{t('quote.step2.cementType')}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products.map(({ key, badge, desc, label, strength, use, price, gradient, accentColor, image }) => {
            const isSelected = quote.cementType === key;
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('cementType', key)}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(27,58,92,0.25)' }}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-2xl text-left transition-all duration-300 overflow-hidden ${
                  isSelected
                    ? 'ring-2 ring-offset-2 shadow-2xl'
                    : 'shadow-lg hover:shadow-xl'
                }`}
                style={isSelected ? { borderColor: accentColor, boxShadow: `0 0 0 2px white, 0 0 0 4px ${accentColor}` } : undefined}
              >
                {/* Gradient background with product image */}
                <div className={`bg-gradient-to-br ${gradient} p-6 pb-4 relative`}>
                  {/* Background product image */}
                  <div className="absolute inset-0 opacity-20">
                    <Image
                      src={image}
                      alt={`${key} cement bags`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold rounded-full tracking-wide border border-white/20">
                      {badge}
                    </span>
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold rounded-full" style={{ backgroundColor: `${accentColor}30`, color: accentColor === '#E8B84B' ? '#1A1A2E' : '#fff' }}>
                      {label}
                    </span>
                  </div>

                  {/* Product name */}
                  <h3 className="text-3xl font-extrabold text-white mb-1">{t(`quote.step2.${key}`)}</h3>
                  <p className="text-white/70 text-xs mb-3">{desc}</p>

                  {/* Strength badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ backgroundColor: `${accentColor}25` }}>
                    <Zap className="w-3.5 h-3.5" style={{ color: accentColor }} />
                    <span className="text-sm font-bold" style={{ color: accentColor === '#E8B84B' ? '#1A1A2E' : '#fff' }}>{strength}</span>
                  </div>
                </div>

                {/* White info section */}
                <div className="bg-white p-5">
                  {/* Specs row */}
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-[#6B7280]">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{use}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#1B3A5C]">{formatPrice(price)}</span>
                    <span className="text-sm text-[#6B7280] font-medium">MAD{t('quote.step5.perTonne')}</span>
                  </div>
                </div>

                {/* Selected indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                )}

                {/* Gold glow border for selected */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `0 0 0 2px ${accentColor}, 0 0 20px ${accentColor}40` }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step2.quantity')}</label>
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

        <input
          type="range"
          min={1}
          max={600}
          value={quote.quantity}
          onChange={e => updateQuote('quantity', parseInt(e.target.value))}
          className="w-full h-2 bg-[#E5E7EB] rounded-lg appearance-none cursor-pointer accent-[#1B3A5C]"
        />

        {/* Volume discount tier visual */}
        <div className="mt-4 bg-gradient-to-br from-[#F7F8FA] to-white rounded-xl p-4 border border-[#E5E7EB]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-[#1B3A5C]">{t('quote.step2.volumeDiscount')}</span>
            {currentTier.discount > 0 ? (
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                -{(currentTier.discount * 100).toFixed(0)}%
              </span>
            ) : (
              <span className="text-xs text-[#6B7280]">0%</span>
            )}
          </div>

          <div className="h-2.5 bg-[#E5E7EB] rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#1B3A5C] to-emerald-500"
              initial={false}
              animate={{ width: `${Math.min((quote.quantity / maxTier) * 100, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex justify-between text-[10px] text-[#6B7280]">
            {VOLUME_DISCOUNTS.slice().reverse().map((tier) => (
              <span key={tier.min} className={`font-medium ${quote.quantity >= tier.min ? 'text-emerald-600' : ''}`}>
                {tier.min}T (-{(tier.discount * 100).toFixed(0)}%)
              </span>
            ))}
          </div>

          {nextTier && (
            <p className="text-xs text-[#6B7280] mt-2 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#E8B84B]" />
              {nextTier.min - quote.quantity} {t('quote.step2.tonsUntil')} {t('quote.step2.nextTier')} (-{(nextTier.discount * 100).toFixed(0)}%)
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
                {surcharge > 0 ? (
                  <span className="text-[10px] font-semibold text-[#C1272D] block mt-1">+{surcharge} MAD/T</span>
                ) : (
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

// ─── STEP 3: DELIVERY (Enhanced) ───────────────────────────────

function StepDelivery({ quote, updateQuote, t }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string }) {
  const zones = [
    { key: 'dakhlaVille', icon: MapPin, distance: '0 km', color: '#22c55e' },
    { key: 'dakhlaRegion', icon: MapPin, distance: '< 100 km', color: '#3b82f6' },
    { key: 'sudMaroc', icon: MapPin, distance: '< 500 km', color: '#f59e0b' },
    { key: 'mauritanie', icon: MapPin, distance: '< 800 km', color: '#ef4444' },
  ];

  const deliveryDays = DELIVERY_DAYS[quote.region]?.[quote.urgency] || 3;

  return (
    <div className="space-y-8">
      <p className="text-[#6B7280]">{t('quote.step3.desc')}</p>

      {/* Zone selector */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step3.region')}</label>
        <div className="grid grid-cols-2 gap-3">
          {zones.map(({ key, icon: Icon, distance, color }) => {
            const isSelected = quote.region === key;
            const cost = TRANSPORT_COSTS[key];
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('region', key)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`relative p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 right-2 w-6 h-6 bg-[#1B3A5C] rounded-full flex items-center justify-center"
                  >
                    <Check className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2" style={{ backgroundColor: `${color}15` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <span className="text-sm font-bold text-[#1B3A5C] block">{t(`quote.step3.${key}`)}</span>
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
        <div className="relative group">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#1B3A5C] transition-colors" />
          <input
            type="text"
            value={quote.address}
            onChange={e => updateQuote('address', e.target.value)}
            placeholder={t('quote.step3.addressPlaceholder')}
            className="w-full border-2 border-[#E5E7EB] rounded-xl pl-10 pr-4 py-3.5 text-[#1B3A5C] focus:border-[#1B3A5C] focus:ring-4 focus:ring-[#1B3A5C]/10 outline-none transition-all placeholder:text-[#6B7280]/50"
          />
        </div>
      </div>

      {/* Urgency — Pill style toggle */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step3.urgency')}</label>
        <div className="flex bg-[#F7F8FA] rounded-xl p-1 border border-[#E5E7EB]">
          {['normal', 'urgent'].map(u => {
            const isSelected = quote.urgency === u;
            const isUrgent = u === 'urgent';
            return (
              <motion.button
                key={u}
                onClick={() => updateQuote('urgency', u)}
                className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                  isSelected
                    ? isUrgent ? 'text-white' : 'text-white'
                    : 'text-[#6B7280] hover:text-[#1B3A5C]'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="urgency-pill"
                    className={`absolute inset-0 rounded-lg ${isUrgent ? 'bg-[#C1272D]' : 'bg-[#1B3A5C]'}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {t(`quote.step3.${u}`)}
                  {isUrgent && <span className="text-[10px] opacity-80">+10%</span>}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Estimated delivery */}
        <motion.div
          className="mt-4 bg-gradient-to-r from-[#1B3A5C]/5 to-transparent rounded-xl p-4 flex items-center gap-4 border border-[#1B3A5C]/10"
          initial={false}
          animate={{ scale: [1, 1.01, 1] }}
          transition={{ duration: 0.3 }}
          key={`${quote.region}-${quote.urgency}`}
        >
          <div className="w-12 h-12 rounded-xl bg-[#1B3A5C] flex items-center justify-center shrink-0">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Truck className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <div>
            <span className="text-xs text-[#6B7280] block">{t('quote.step3.estimatedDelivery')}</span>
            <span className="text-lg font-bold text-[#1B3A5C]">
              {deliveryDays} {deliveryDays > 1 ? t('quote.step3.days') : t('quote.step3.day')}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── STEP 4: CLIENT INFO (Better Form) ─────────────────────────

function StepClientInfo({ quote, updateQuote, t, calc }: { quote: QuoteData; updateQuote: (field: string, value: string | number) => void; t: (key: string) => string; calc: CalcResult }) {
  const fields = [
    { key: 'name', icon: User, type: 'text', required: true, placeholderKey: 'namePlaceholder' },
    { key: 'phone', icon: Phone, type: 'tel', required: true, placeholderKey: 'phonePlaceholder' },
    { key: 'whatsapp', icon: MessageCircle, type: 'tel', required: false, placeholderKey: 'whatsappPlaceholder' },
    { key: 'email', icon: Mail, type: 'email', required: true, placeholderKey: 'emailPlaceholder' },
    { key: 'company', icon: Building, type: 'text', required: false, placeholderKey: 'companyPlaceholder' },
  ] as const;

  const clientTypes = [
    { key: 'particulier', icon: User, discount: 0, color: '#6B7280' },
    { key: 'entreprise', icon: Building2, discount: 3, color: '#1B3A5C' },
    { key: 'revendeur', icon: ShieldCheck, discount: 5, color: '#E8B84B' },
  ];

  const clientDiscountAmount = calc.clientDiscount;

  return (
    <div className="space-y-6">
      <p className="text-[#6B7280]">{t('quote.step4.desc')}</p>

      {/* Client type — with savings badge */}
      <div>
        <label className="block text-sm font-semibold text-[#1B3A5C] mb-3">{t('quote.step4.clientType')}</label>
        <div className="grid grid-cols-3 gap-3">
          {clientTypes.map(({ key, icon: Icon, discount, color }) => {
            const isSelected = quote.clientType === key;
            return (
              <motion.button
                key={key}
                onClick={() => updateQuote('clientType', key)}
                whileHover={cardHover}
                whileTap={cardTap}
                className={`relative p-4 rounded-2xl border-2 text-center transition-all duration-200 ${
                  isSelected
                    ? 'border-[#1B3A5C] bg-[#1B3A5C]/5 shadow-md'
                    : 'border-[#E5E7EB] bg-white hover:border-[#1B3A5C]/30'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center ${isSelected ? 'bg-[#1B3A5C]' : ''}`} style={!isSelected ? { backgroundColor: `${color}15` } : undefined}>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : ''}`} style={!isSelected ? { color } : undefined} />
                </div>
                <span className="text-xs font-semibold text-[#1B3A5C] block">{t(`quote.step4.${key}`)}</span>
                <span className="text-[10px] text-[#6B7280] block mt-0.5">{t(`quote.step4.${key}Desc`)}</span>
                {discount > 0 && (
                  <span className="absolute -top-2 -right-2 text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: color }}>
                    -{discount}%
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Savings indicator */}
        {clientDiscountAmount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <TrendingDown className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xs text-emerald-600 font-medium block">{t('quote.savings')}</span>
              <span className="text-sm font-bold text-emerald-700">{formatPrice(clientDiscountAmount)} MAD</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Form fields — floating label style */}
      <div className="space-y-5">
        {fields.map(({ key, icon: Icon, type, required }) => {
          const val = quote[key as keyof QuoteData] as string;
          const hasValue = val.length > 0;
          return (
            <div key={key} className="relative group">
              <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] group-focus-within:text-[#1B3A5C] transition-colors z-10" />
              <div className="relative">
                <input
                  type={type}
                  value={val}
                  onChange={e => updateQuote(key, e.target.value)}
                  placeholder=" "
                  className="peer w-full border-2 border-[#E5E7EB] rounded-xl pl-11 pr-4 py-3.5 text-[#1B3A5C] focus:border-[#1B3A5C] focus:ring-4 focus:ring-[#1B3A5C]/10 outline-none transition-all placeholder:text-transparent"
                />
                <label className={`absolute left-11 transition-all duration-200 pointer-events-none ${
                  hasValue
                    ? '-top-2.5 text-[11px] bg-white px-1 text-[#1B3A5C] font-medium'
                    : 'top-3.5 text-sm text-[#6B7280]'
                } peer-focus:-top-2.5 peer-focus:text-[11px] peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#1B3A5C] peer-focus:font-medium`}>
                  {t(`quote.step4.${key}`)}
                  {required && <span className="text-[#C1272D] ml-0.5">*</span>}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── STEP 5: SUMMARY (Premium Invoice) ─────────────────────────

function StepSummary({ quote, calc, quoteNumber, t }: { quote: QuoteData; calc: CalcResult; quoteNumber: string; t: (key: string) => string }) {
  const productName = quote.cementType === 'cpj45' ? 'CPJ 45' : 'CPJ 55';
  const productBadge = quote.cementType === 'cpj45' ? t('quote.step2.cpj45Badge') : t('quote.step2.cpj55Badge');
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

  const totalSavings = calc.volumeDiscount + calc.clientDiscount;

  return (
    <div className="space-y-6">
      <p className="text-[#6B7280]">{t('quote.step5.desc')}</p>

      {/* Professional invoice card */}
      <div className="bg-white rounded-2xl border-2 border-[#E5E7EB] overflow-hidden shadow-xl relative">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
          <span className="text-[150px] font-black text-[#1B3A5C] -rotate-12 select-none">DEVIS</span>
        </div>

        {/* Header with gold accent line */}
        <div className="relative">
          <div className="h-1 bg-gradient-to-r from-[#1B3A5C] via-[#E8B84B] to-[#C1272D]" />
          <div className="bg-gradient-to-r from-[#1B3A5C] to-[#2D5F8A] px-6 py-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-white font-extrabold text-xl tracking-wide">Dakhla Aménagement S.A.</h3>
                <p className="text-white/50 text-xs mt-1">Ciment de Qualité au Maroc</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-1 text-[10px] text-white/40">
                    <Shield className="w-3 h-3" /> NM 10.1.004
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-white/40">
                    <Award className="w-3 h-3" /> EN 197-1
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-[#E8B84B]/20 border border-[#E8B84B]/30 rounded-lg px-3 py-1.5 mb-2">
                  <p className="text-[#E8B84B] font-bold text-sm">{t('quote.step5.quoteNumber')} {quoteNumber}</p>
                </div>
                <p className="text-white/50 text-xs">{t('quote.step5.date')}: {formatDate(today)}</p>
                <p className="text-white/50 text-xs">{t('quote.step5.validUntil')}: {formatDate(validUntil)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client info */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] bg-[#F7F8FA]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280] font-bold mb-2">{t('quote.step5.client')}</p>
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

        {/* Detail table with alternating rows */}
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280] font-bold mb-3">{t('quote.step5.detail')}</p>
          <div className="space-y-0">
            {[
              { label: t('quote.step5.projectType'), value: t(`quote.step1.${quote.projectType}`) },
              { label: t('quote.step5.product'), value: `${productName} (${productBadge})` },
              { label: t('quote.step5.quantity'), value: `${quote.quantity} T` },
              { label: t('quote.step5.packaging'), value: t(`quote.step2.${quote.packaging}`) },
              { label: t('quote.step5.delivery'), value: t(`quote.step3.${quote.region}`) },
              { label: t('quote.step5.urgency'), value: t(`quote.step3.${quote.urgency}`) },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between text-sm py-2.5 px-3 rounded ${i % 2 === 0 ? 'bg-[#F7F8FA]' : 'bg-white'}`}>
                <span className="text-[#6B7280]">{row.label}</span>
                <span className="font-medium text-[#1B3A5C]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price breakdown */}
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280] font-bold mb-3">{t('quote.step5.priceDetail')}</p>
          <div className="space-y-0">
            <div className="flex justify-between text-sm py-2.5 px-3 rounded bg-[#F7F8FA]">
              <span className="text-[#6B7280]">{t('quote.step5.basePrice')} ({quote.quantity}T × {formatPrice(calc.basePrice)} MAD)</span>
              <span className="font-medium text-[#1B3A5C]">{formatPrice(calc.subtotal)} MAD</span>
            </div>
            {calc.volumeDiscount > 0 && (
              <div className="flex justify-between text-sm py-2.5 px-3 rounded bg-emerald-50">
                <span className="text-emerald-600 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  {t('quote.step5.volumeDiscount')} (-{(calc.volumeDiscountRate * 100).toFixed(0)}%)
                </span>
                <span className="font-semibold text-emerald-600">-{formatPrice(calc.volumeDiscount)} MAD</span>
              </div>
            )}
            {calc.packagingCost > 0 && (
              <div className="flex justify-between text-sm py-2.5 px-3 rounded">
                <span className="text-[#6B7280]">{t('quote.step5.packagingSurcharge')}</span>
                <span>+{formatPrice(calc.packagingCost)} MAD</span>
              </div>
            )}
            {calc.transportCost > 0 && (
              <div className="flex justify-between text-sm py-2.5 px-3 rounded bg-[#F7F8FA]">
                <span className="text-[#6B7280]">{t('quote.step5.transport')}</span>
                <span>+{formatPrice(calc.transportCost)} MAD</span>
              </div>
            )}
            {calc.urgencyFee > 0 && (
              <div className="flex justify-between text-sm py-2.5 px-3 rounded">
                <span className="text-[#C1272D]">{t('quote.step5.urgencyFee')} (+{(calc.urgencyRate * 100).toFixed(0)}%)</span>
                <span className="font-semibold text-[#C1272D]">+{formatPrice(calc.urgencyFee)} MAD</span>
              </div>
            )}
            {calc.clientDiscount > 0 && (
              <div className="flex justify-between text-sm py-2.5 px-3 rounded bg-emerald-50">
                <span className="text-emerald-600 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  {t('quote.step5.clientDiscount')} (-{(calc.clientDiscountRate * 100).toFixed(0)}%)
                </span>
                <span className="font-semibold text-emerald-600">-{formatPrice(calc.clientDiscount)} MAD</span>
              </div>
            )}
          </div>
        </div>

        {/* Totals */}
        <div className="px-6 py-4">
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between font-medium">
              <span className="text-[#6B7280]">{t('quote.step5.ht')}</span>
              <span className="text-[#1B3A5C] text-lg font-bold">
                <AnimatedNumber value={calc.beforeTva} /> MAD
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6B7280]">{t('quote.step5.tva')}</span>
              <span className="text-[#1B3A5C]"><AnimatedNumber value={calc.tva} /> MAD</span>
            </div>
          </div>

          {/* Total TTC */}
          <div className="bg-gradient-to-r from-[#1B3A5C] via-[#2D5F8A] to-[#1B3A5C] rounded-xl px-6 py-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/0 via-[#E8B84B]/10 to-[#E8B84B]/0" />
            <div className="flex justify-between items-center relative">
              <span className="text-white font-bold text-lg">{t('quote.step5.totalTtc')}</span>
              <motion.span
                key={calc.totalTtc}
                initial={{ scale: 1.2, color: '#E8B84B' }}
                animate={{ scale: 1, color: '#FFFFFF' }}
                transition={{ duration: 0.5 }}
                className="text-white font-extrabold text-2xl"
              >
                <AnimatedNumber value={calc.totalTtc} /> MAD
              </motion.span>
            </div>
          </div>

          {/* Savings badge */}
          {totalSavings > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <TrendingDown className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-emerald-700">
                {t('quote.savings')} : {formatPrice(totalSavings)} MAD
              </span>
            </motion.div>
          )}
        </div>

        {/* Conditions & Payment */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] bg-[#F7F8FA]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] font-bold mb-2 flex items-center gap-1">
                <CreditCard className="w-3 h-3" /> {t('quote.step5.payment')}
              </p>
              <p className="text-xs text-[#1B3A5C]">{t('quote.step5.paymentTerms')}</p>
              <p className="text-xs text-[#6B7280] mt-1">{t('quote.step5.bankInfo')}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#6B7280] font-bold mb-2 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {t('quote.step5.validityPeriod')}
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-[#E8B84B]/10 text-[#E8B84B] px-3 py-1.5 rounded-lg text-sm font-bold">
                  30 {locale === 'en' ? 'days' : 'jours'}
                </div>
                <span className="text-xs text-[#6B7280]">{t('quote.step5.validUntil')} {formatDate(validUntil)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with stamp & QR placeholder */}
        <div className="px-6 py-3 border-t border-[#E5E7EB] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2 text-[10px] text-[#6B7280]">
            <Stamp className="w-3.5 h-3.5" />
            <span>RC: 7207 | ICE: 001726721000031</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-[#6B7280]">
            <QrCode className="w-3.5 h-3.5" />
            <span>{quoteNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PDF GENERATION ────────────────────────────────────────────

function generatePDF(quote: QuoteData, calc: CalcResult, quoteNumber: string, t: (key: string) => string) {
  const doc = new jsPDF();
  const productName = quote.cementType === 'cpj45' ? 'CPJ 45' : 'CPJ 55';
  const productBadge = quote.cementType === 'cpj45' ? t('quote.step2.cpj45Badge') : t('quote.step2.cpj55Badge');
  const locale = typeof window !== 'undefined' ? document.documentElement.lang : 'fr';

  const today = new Date();
  const validUntil = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const formatDate = (date: Date) => date.toLocaleDateString(locale === 'en' ? 'en-US' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  // Watermark
  doc.setFontSize(80);
  doc.setTextColor(200, 200, 200);
  doc.saveGraphicsState();
  doc.setGState(new (doc as unknown as { GState: new (a: unknown) => unknown }).GState({ opacity: 0.04 }));
  doc.text('DEVIS', 105, 150, { angle: 45, align: 'center' });
  doc.restoreGraphicsState();

  // Gold accent line
  doc.setFillColor(232, 184, 75);
  doc.rect(0, 0, 210, 3, 'F');

  // Header background
  doc.setFillColor(27, 58, 92);
  doc.rect(0, 3, 210, 38, 'F');

  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Dakhla Amenagement S.A.', 15, 18);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(255, 255, 255, 150);
  doc.text('Ciment de Qualite au Maroc | RC: 7207 | ICE: 001726721000031', 15, 26);

  // Quote number (right)
  doc.setTextColor(232, 184, 75);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(`${t('quote.step5.quoteNumber')} ${quoteNumber}`, 195, 16, { align: 'right' });
  doc.setTextColor(255, 255, 255, 150);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text(`${t('quote.step5.date')}: ${formatDate(today)}`, 195, 23, { align: 'right' });
  doc.text(`${t('quote.step5.validUntil')}: ${formatDate(validUntil)}`, 195, 29, { align: 'right' });

  let y = 50;

  // Client info
  doc.setTextColor(107, 114, 128);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(t('quote.step5.client').toUpperCase(), 15, y);
  y += 5;
  doc.setTextColor(27, 58, 92);
  doc.setFontSize(10);
  doc.text(quote.name, 15, y);
  y += 5;
  if (quote.company) {
    doc.setFontSize(8);
    doc.setTextColor(107, 114, 128);
    doc.text(quote.company, 15, y);
    y += 4;
  }
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text(`${quote.email} | ${quote.phone}`, 15, y);
  y += 10;

  // Separator
  doc.setDrawColor(232, 184, 75);
  doc.setLineWidth(0.5);
  doc.line(15, y, 195, y);
  y += 8;

  // Detail table header
  doc.setFillColor(247, 248, 250);
  doc.rect(15, y - 4, 180, 8, 'F');
  doc.setTextColor(107, 114, 128);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(t('quote.step5.detail').toUpperCase(), 15, y);
  y += 8;

  // Detail rows
  const detailRows = [
    { label: t('quote.step5.projectType'), value: t(`quote.step1.${quote.projectType}`) },
    { label: t('quote.step5.product'), value: `${productName} (${productBadge})` },
    { label: t('quote.step5.quantity'), value: `${quote.quantity} T` },
    { label: t('quote.step5.packaging'), value: t(`quote.step2.${quote.packaging}`) },
    { label: t('quote.step5.delivery'), value: t(`quote.step3.${quote.region}`) },
    { label: t('quote.step5.urgency'), value: t(`quote.step3.${quote.urgency}`) },
  ];

  detailRows.forEach((row, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(247, 248, 250);
      doc.rect(15, y - 4, 180, 7, 'F');
    }
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(row.label, 18, y);
    doc.setTextColor(27, 58, 92);
    doc.setFont('helvetica', 'bold');
    doc.text(row.value, 105, y);
    y += 7;
  });
  y += 5;

  // Separator
  doc.setDrawColor(232, 184, 75);
  doc.line(15, y, 195, y);
  y += 8;

  // Price detail header
  doc.setFillColor(247, 248, 250);
  doc.rect(15, y - 4, 180, 8, 'F');
  doc.setTextColor(107, 114, 128);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(t('quote.step5.priceDetail').toUpperCase(), 15, y);
  y += 8;

  // Price rows
  const priceRows = [
    { label: `${t('quote.step5.basePrice')} (${quote.quantity}T x ${formatPrice(calc.basePrice)})`, value: `${formatPrice(calc.subtotal)} MAD` },
  ];
  if (calc.volumeDiscount > 0) priceRows.push({ label: `${t('quote.step5.volumeDiscount')} (-${(calc.volumeDiscountRate * 100).toFixed(0)}%)`, value: `-${formatPrice(calc.volumeDiscount)} MAD` });
  if (calc.packagingCost > 0) priceRows.push({ label: t('quote.step5.packagingSurcharge'), value: `+${formatPrice(calc.packagingCost)} MAD` });
  if (calc.transportCost > 0) priceRows.push({ label: t('quote.step5.transport'), value: `+${formatPrice(calc.transportCost)} MAD` });
  if (calc.urgencyFee > 0) priceRows.push({ label: `${t('quote.step5.urgencyFee')} (+${(calc.urgencyRate * 100).toFixed(0)}%)`, value: `+${formatPrice(calc.urgencyFee)} MAD` });
  if (calc.clientDiscount > 0) priceRows.push({ label: `${t('quote.step5.clientDiscount')} (-${(calc.clientDiscountRate * 100).toFixed(0)}%)`, value: `-${formatPrice(calc.clientDiscount)} MAD` });

  priceRows.forEach((row, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(247, 248, 250);
      doc.rect(15, y - 4, 180, 7, 'F');
    }
    doc.setTextColor(107, 114, 128);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(row.label, 18, y);
    doc.setTextColor(27, 58, 92);
    doc.setFont('helvetica', 'bold');
    doc.text(row.value, 192, y, { align: 'right' });
    y += 7;
  });
  y += 5;

  // Separator
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(15, y, 195, y);
  y += 8;

  // HT & TVA
  doc.setTextColor(107, 114, 128);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(t('quote.step5.ht'), 18, y);
  doc.setTextColor(27, 58, 92);
  doc.setFont('helvetica', 'bold');
  doc.text(`${formatPrice(calc.beforeTva)} MAD`, 192, y, { align: 'right' });
  y += 7;
  doc.setTextColor(107, 114, 128);
  doc.setFont('helvetica', 'normal');
  doc.text(t('quote.step5.tva'), 18, y);
  doc.setTextColor(27, 58, 92);
  doc.text(`${formatPrice(calc.tva)} MAD`, 192, y, { align: 'right' });
  y += 10;

  // Total TTC box
  doc.setFillColor(27, 58, 92);
  doc.roundedRect(15, y - 5, 180, 14, 2, 2, 'F');
  doc.setTextColor(232, 184, 75);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(t('quote.step5.totalTtc'), 20, y + 3);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.text(`${formatPrice(calc.totalTtc)} MAD`, 192, y + 3, { align: 'right' });
  y += 18;

  // Conditions
  doc.setDrawColor(232, 184, 75);
  doc.setLineWidth(0.3);
  doc.line(15, y, 195, y);
  y += 6;

  doc.setTextColor(107, 114, 128);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.text(t('quote.step5.conditions').toUpperCase(), 15, y);
  y += 4;
  doc.setFont('helvetica', 'normal');
  doc.text(`${t('quote.step5.payment')}: ${t('quote.step5.paymentTerms')}`, 15, y);
  y += 4;
  doc.text(`${t('quote.step5.validityPeriod')} ${t('quote.step5.bankInfo')}`, 15, y);
  y += 10;

  // Footer
  doc.setDrawColor(232, 184, 75);
  doc.setLineWidth(0.5);
  doc.line(15, 275, 195, 275);
  doc.setTextColor(150, 150, 150);
  doc.setFontSize(7);
  doc.text('Dakhla Amenagement S.A. | Quartier Lassargua, Ave El Walae, Dakhla, Maroc', 105, 280, { align: 'center' });
  doc.text(`contact@ciment-dam.com | +212 658-265685 | Page 1/1`, 105, 284, { align: 'center' });

  // QR placeholder
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.roundedRect(170, y, 25, 25, 2, 2, 'S');
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(6);
  doc.text('QR', 182.5, y + 13, { align: 'center' });

  doc.save(`devis-${quoteNumber}.pdf`);
}

// ─── SUCCESS PAGE ──────────────────────────────────────────────

function SuccessPage({ quoteNumber, calc, t }: { quoteNumber: string; calc: CalcResult; t: (key: string) => string }) {
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMsg = encodeURIComponent(`Bonjour, je souhaite confirmer le devis ${quoteNumber}. Montant TTC: ${formatPrice(calc.totalTtc)} MAD`);
  const whatsappUrl = `https://wa.me/212658265685?text=${whatsappMsg}`;

  const nextSteps = [
    { icon: CheckCircle2, label: t('quote.successStep1'), delay: 1.2 },
    { icon: Mail, label: t('quote.successStep2'), delay: 1.6 },
    { icon: Truck, label: t('quote.successStep3'), delay: 2.0 },
  ];

  return (
    <div className="relative">
      {showConfetti && <Confetti />}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 py-8"
      >
        {/* Big animated checkmark */}
        <AnimatedCheckmark />

        {/* Success message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1B3A5C] mt-6">
            {t('quote.success')}
          </h2>
          <p className="text-[#6B7280] mt-2">{t('quote.successSubtitle')}</p>
        </motion.div>

        {/* Quote number card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, type: 'spring' }}
          className="max-w-xs mx-auto bg-gradient-to-r from-[#1B3A5C] to-[#2D5F8A] rounded-2xl px-6 py-5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8B84B]/0 via-[#E8B84B]/10 to-[#E8B84B]/0" />
          <div className="relative">
            <p className="text-white/60 text-xs font-medium mb-1">{t('quote.successQuote')}</p>
            <p className="text-[#E8B84B] font-extrabold text-2xl tracking-wider">{quoteNumber}</p>
            <p className="text-white font-bold text-lg mt-2"><AnimatedNumber value={calc.totalTtc} /> MAD TTC</p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Button
            onClick={() => generatePDF({} as QuoteData, calc, quoteNumber, t)}
            className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 font-semibold rounded-full px-8 h-12 text-[15px] shadow-lg shadow-[#1B3A5C]/20"
          >
            <Download className="mr-2 h-4 w-4" />
            {t('quote.downloadPdf')}
          </Button>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-[#22c55e] text-white hover:bg-[#22c55e]/90 font-semibold rounded-full px-8 h-12 text-[15px] shadow-lg shadow-[#22c55e]/20"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {t('quote.sendWhatsApp')}
            </Button>
          </a>
        </motion.div>

        {/* What's next timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="max-w-md mx-auto pt-8"
        >
          <h3 className="text-sm font-bold text-[#1B3A5C] mb-4">{t('quote.successWhatNext')}</h3>
          <div className="space-y-3">
            {nextSteps.map(({ icon: Icon, label, delay }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B3A5C]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#1B3A5C]" />
                </div>
                <span className="text-sm text-[#1B3A5C] font-medium">{label}</span>
                {i < nextSteps.length - 1 && (
                  <div className="w-px h-6 bg-[#E5E7EB] ml-4 absolute left-4 mt-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────

export default function DevisPage() {
  const t = useTranslations();

  const [quote, setQuote] = useState<QuoteData>(initialQuote);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState('');
  const [mobilePriceOpen, setMobilePriceOpen] = useState(false);
  const [maxVisited, setMaxVisited] = useState(1);
  const [pdfLoading, setPdfLoading] = useState(false);

  const calc = useMemo(() => calculateQuote(quote), [quote]);

  const updateQuote = useCallback((field: string, value: string | number) => {
    setQuote(prev => ({ ...prev, [field]: value }));
  }, []);

  const goToStep = useCallback((s: number) => {
    if (s <= maxVisited) {
      setDirection(s > step ? 1 : -1);
      setStep(s);
    }
  }, [step, maxVisited]);

  const nextStep = useCallback(() => {
    setDirection(1);
    setStep(prev => {
      const next = Math.min(prev + 1, 5);
      setMaxVisited(m => Math.max(m, next));
      return next;
    });
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setStep(prev => Math.max(prev - 1, 1));
  }, []);

  const canProceed = useMemo(() => {
    switch (step) {
      case 1: return quote.projectType !== '';
      case 2: return quote.cementType !== '' && quote.quantity > 0;
      case 3: return quote.region !== '';
      case 4: return quote.name.trim() !== '' && quote.phone.trim() !== '' && quote.email.trim() !== '';
      default: return true;
    }
  }, [step, quote]);

  const handleSubmit = useCallback(() => {
    const num = generateQuoteNumber();
    setQuoteNumber(num);
    setSubmitted(true);
  }, []);

  const handleDownloadPdf = useCallback(() => {
    setPdfLoading(true);
    setTimeout(() => {
      generatePDF(quote, calc, quoteNumber, t);
      setPdfLoading(false);
    }, 300);
  }, [quote, calc, quoteNumber, t]);

  const stepLabels = [
    t('quote.step1.title'),
    t('quote.step2.title'),
    t('quote.step3.title'),
    t('quote.step4.title'),
    t('quote.step5.title'),
  ];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !submitted && canProceed && step < 5) {
        nextStep();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [step, canProceed, submitted, nextStep]);

  if (submitted) {
    return (
      <>
        <PageHero title={t('quote.title')} subtitle={t('quote.subtitle')} sectionCounter="/05" />
        <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#F7F8FA]/30 to-white min-h-[60vh]">
          <div className="max-w-2xl mx-auto px-6 md:px-12">
            <SuccessPage quoteNumber={quoteNumber} calc={calc} t={t} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title={t('quote.title')} subtitle={t('quote.subtitle')} sectionCounter="/05" />

      {/* Subtle hero image bar */}
      <section className="relative h-36 md:h-48 -mt-4">
        <Image
          src="/images/factory/factory-aerial.jpg"
          alt="Usine Dakhla Aménagement — Vue aérienne"
          fill
          quality={80}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </section>

      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1B3A5C 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
          {/* Step Timeline */}
          <StepTimeline step={step} stepLabels={stepLabels} t={t} onStepClick={goToStep} maxVisited={maxVisited} />

          {/* Main layout */}
          <div className="flex gap-8">
            {/* Step content */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  {/* Step title */}
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-[#1B3A5C]">
                      {stepLabels[step - 1]}
                    </h2>
                  </div>

                  {step === 1 && <StepProjectType quote={quote} updateQuote={updateQuote} t={t} />}
                  {step === 2 && <StepProductQuantity quote={quote} updateQuote={updateQuote} t={t} />}
                  {step === 3 && <StepDelivery quote={quote} updateQuote={updateQuote} t={t} />}
                  {step === 4 && <StepClientInfo quote={quote} updateQuote={updateQuote} t={t} calc={calc} />}
                  {step === 5 && <StepSummary quote={quote} calc={calc} quoteNumber={quoteNumber || generateQuoteNumber()} t={t} />}
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E5E7EB]">
                {step > 1 ? (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="rounded-full px-6 border-[#E5E7EB] hover:border-[#1B3A5C] hover:text-[#1B3A5C]"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('quote.prev')}
                  </Button>
                ) : (
                  <div />
                )}

                {step < 5 ? (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed}
                    className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 rounded-full px-8 font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#1B3A5C]/20"
                  >
                    {t('quote.next')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={handleDownloadPdf}
                      disabled={pdfLoading}
                      className="bg-[#1B3A5C] text-white hover:bg-[#1B3A5C]/90 rounded-full px-6 font-semibold shadow-lg shadow-[#1B3A5C]/20"
                    >
                      {pdfLoading ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                          <FileDown className="mr-2 h-4 w-4" />
                        </motion.div>
                      ) : (
                        <Download className="mr-2 h-4 w-4" />
                      )}
                      {t('quote.step5.downloadPdf')}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="bg-[#C1272D] text-white hover:bg-[#C1272D]/90 rounded-full px-8 font-semibold shadow-lg shadow-[#C1272D]/20"
                    >
                      {t('quote.step5.submit')}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-[320px] shrink-0">
              <PriceSidebar quote={quote} calc={calc} t={t} />
            </div>
          </div>
        </div>

        {/* Mobile Price Bar */}
        <MobilePriceBar calc={calc} t={t} isOpen={mobilePriceOpen} onToggle={() => setMobilePriceOpen(!mobilePriceOpen)} />
        <div className="h-16 md:hidden" /> {/* Spacer for mobile bar */}
      </section>
    </>
  );
}
