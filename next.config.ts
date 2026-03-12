import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/es', permanent: true },
      { source: '/colombia.html', destination: '/es/colombia', permanent: true },
      { source: '/viajes.html', destination: '/es/viajes', permanent: true },
      { source: '/mice.html', destination: '/es/mice', permanent: true },
      { source: '/luxury.html', destination: '/es/luxury', permanent: true },
      { source: '/hoteles.html', destination: '/es/hoteles', permanent: true },
      { source: '/nueva-frontera.html', destination: '/es/nosotros', permanent: true },
      { source: '/contacto.html', destination: '/es/contacto', permanent: true },
      // Trip detail pages (.html → clean URL)
      { source: '/viajes/:slug.html', destination: '/es/viajes/:slug', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
