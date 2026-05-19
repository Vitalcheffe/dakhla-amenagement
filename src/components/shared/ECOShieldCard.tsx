'use client';

import { motion } from 'framer-motion';
import { Leaf, Shield, TrendingDown, Waves } from 'lucide-react';

interface ECOShieldCardProps {
  title: string;
  value: string;
  desc: string;
  variant: 'carbon' | 'maritime';
}

export function ECOShieldCard({ title, value, desc, variant }: ECOShieldCardProps) {
  const isCarbon = variant === 'carbon';
  const Icon = isCarbon ? TrendingDown : Waves;
  const SecondaryIcon = isCarbon ? Leaf : Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl p-8 lg:p-10 border transition-all duration-300 ${
        isCarbon
          ? 'bg-gradient-to-br from-anthracite to-anthracite/80 border-vert-energie/20 hover:border-vert-energie/60 hover:shadow-[0_0_30px_rgba(46,204,113,0.15)]'
          : 'bg-gradient-to-br from-anthracite to-anthracite/80 border-bleu-ocean/20 hover:border-bleu-ocean/60 hover:shadow-[0_0_30px_rgba(15,76,117,0.15)]'
      }`}
    >
      {/* Background icon watermark */}
      <div className="absolute -right-6 -bottom-6 opacity-5">
        <SecondaryIcon className="w-40 h-40" />
      </div>

      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        isCarbon
          ? 'bg-vert-energie/10 border border-vert-energie/20'
          : 'bg-bleu-ocean/10 border border-bleu-ocean/20'
      }`}>
        <Icon className={`w-7 h-7 ${isCarbon ? 'text-vert-energie' : 'text-bleu-ocean'}`} />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-white mb-3">
        {title}
      </h3>

      {/* Value */}
      <div className={`font-heading text-4xl lg:text-5xl font-bold mb-4 ${
        isCarbon ? 'text-vert-energie' : 'text-bleu-ocean'
      }`}>
        {value}
      </div>

      {/* Description */}
      <p className="text-white/60 leading-relaxed text-sm">
        {desc}
      </p>

      {/* Green glow line at bottom */}
      {isCarbon && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-vert-energie to-transparent opacity-60" />
      )}
    </motion.div>
  );
}
