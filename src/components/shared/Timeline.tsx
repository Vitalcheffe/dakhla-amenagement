'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  text: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bleu-ocean via-vert-energie to-bleu-ocean" />

      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 lg:gap-0 ${
              i % 2 === 0
                ? 'lg:flex-row'
                : 'lg:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-bleu-ocean border-2 border-anthracite z-10 mt-1.5" />

            {/* Content */}
            <div className={`ml-10 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
              <div className={`inline-block bg-anthracite/60 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 ${i % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                <span className="font-heading text-2xl font-bold text-bleu-ocean">{item.year}</span>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{item.text}</p>
              </div>
            </div>

            {/* Empty spacer for the other side */}
            <div className="hidden lg:block lg:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
