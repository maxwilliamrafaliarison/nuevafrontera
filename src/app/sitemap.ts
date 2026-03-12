import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { getAllTripSlugs } from '@/data/trips';

const BASE_URL = 'https://www.nueva-frontera.com';

const staticPages = [
  '',
  '/colombia',
  '/viajes',
  '/mice',
  '/luxury',
  '/hoteles',
  '/nosotros',
  '/contacto',
  '/blog',
  '/legal',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}/es${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
        ),
      },
    });
  }

  // Trip detail pages
  for (const slug of getAllTripSlugs()) {
    entries.push({
      url: `${BASE_URL}/es/viajes/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${BASE_URL}/${l}/viajes/${slug}`])
        ),
      },
    });
  }

  return entries;
}
