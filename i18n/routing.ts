import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from '@/i18n/config';

export const routing = defineRouting({
  // All supported locales
  locales,

  // Default locale when no locale matches
  defaultLocale,

  // Don't use a prefix for the default locale (English)
  localePrefix: 'as-needed',

  // Suppress the NEXT_LOCALE Set-Cookie header so HTML responses stay
  // cacheable. Supported since next-intl v3.22.
  localeCookie: false,
});
