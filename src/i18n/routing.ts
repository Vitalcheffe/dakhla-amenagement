import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  /** Use permanent (301) redirects for locale routing — critical for SEO */
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
