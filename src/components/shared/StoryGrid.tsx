'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface StoryItem {
  title: string;
  desc: string;
  image: string;
  href: string;
}

interface StoryGridProps {
  stories: StoryItem[];
}

export function StoryGrid({ stories }: StoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {stories.map((story, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={story.href} className="group block relative aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite/90 via-anthracite/40 to-anthracite/20 group-hover:from-anthracite/95 group-hover:via-anthracite/50 group-hover:to-anthracite/30 transition-all duration-300" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-bleu-ocean/60 rounded-xl transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-xl font-bold text-white group-hover:text-bleu-ocean transition-colors">
                {story.title}
              </h3>
              <p className="mt-1 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                {story.desc}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
