'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  key: string;
  label: string;
}

interface TabSystemProps {
  tabs: Tab[];
  children: React.ReactNode[];
}

export function TabSystem({ tabs, children }: TabSystemProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-white/10 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(i)}
            className={`relative px-6 py-3 text-sm font-medium tracking-wide transition-colors ${
              activeTab === i
                ? 'text-bleu-ocean'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {tab.label}
            {activeTab === i && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-bleu-ocean"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children[activeTab]}
      </motion.div>
    </div>
  );
}
