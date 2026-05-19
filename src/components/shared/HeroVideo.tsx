'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface HeroVideoProps {
  src: string;
  poster: string;
  overlay?: 'dark' | 'navy' | 'gradient-bottom' | 'gradient-left';
  children: React.ReactNode;
  className?: string;
  height?: string;
  parallax?: boolean;
}

export function HeroVideo({
  src,
  poster,
  overlay = 'dark',
  children,
  className = '',
  height = 'h-[100dvh]',
  parallax = true,
}: HeroVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
  }, []);

  const enableParallax = parallax && !isMobile;

  const overlayClasses = {
    dark: 'bg-black/50',
    navy: 'bg-[#0A0A0A]/60',
    'gradient-bottom': 'bg-gradient-to-t from-black/80 via-black/30 to-transparent',
    'gradient-left': 'bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent',
  };

  return (
    <motion.section
      ref={ref}
      style={enableParallax ? { opacity } : undefined}
      className={`relative ${height} overflow-hidden bg-[#0A0A0A] ${className}`}
    >
      <motion.div
        style={enableParallax ? { scale } : undefined}
        className="absolute inset-0"
      >
        {videoError ? (
          <div className="absolute inset-0">
            <Image
              src={poster}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={poster}
            onError={() => setVideoError(true)}
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.section>
  );
}
