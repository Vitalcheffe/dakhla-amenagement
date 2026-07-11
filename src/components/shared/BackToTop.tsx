'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Back to Top button — appears when user scrolls down.
 * Smoothly scrolls back to top when clicked.
 * Improves UX on long pages (blog articles, landing pages).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#1B3A5C] text-white shadow-lg hover:bg-[#1B3A5C]/90 hover:scale-110 flex items-center justify-center transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
