'use client';

import { useState, useEffect } from 'react';

/**
 * Reading Progress Bar — sticky top progress indicator.
 * Shows how far the user has scrolled through the article.
 * Improves UX and engagement on long-form content.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setProgress(Math.min(100, Math.max(0, scrolled)));
  };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-[#1B3A5C] via-[#E8B84B] to-[#C1272D] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
