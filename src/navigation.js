import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = [
  'en',
  'it',
  'fr',
  'de',
  'es',
  'ru',
  'zh',
  'pt',
  'nl',
  'ir',
];
export const localePrefix = 'always'; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
