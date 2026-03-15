import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { Link } from '@/i18n/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hoteles' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/hoteles`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/hoteles`])
      ),
    },
  };
}

const hotels = [
  { name: 'Quadrifolio', location: 'Cartagena de Indias', img: '/img/hotel-quadrifolio.jpg', url: 'https://hotelquadrifolio.com/en/galeria-quadrifolio/' },
  { name: 'Hacienda Combia', location: 'Eje Cafetero', img: '/img/hacienda-combia.jpg', url: 'https://www.combia.com.co/gallery.html' },
  { name: 'Calanoa Amazonas', location: 'Amazonas', img: '/img/hotel-canaloa.jpg', url: 'https://www.calanoaamazonas.com/en/jungle-lodge/' },
  { name: 'Tayrona Tented Lodge', location: 'Tayrona', img: '/img/hotel-tayrona.jpg', url: 'https://www.ecohoteles.co/' },
  { name: 'Hotel de la Opera', location: 'Bogotá', img: '/img/hotel-opera.jpg', url: 'https://www.hotelopera.com.co/en/photos/' },
  { name: 'Hotel Sazagua', location: 'Eje Cafetero', img: '/img/nido-del-condor.jpg', url: 'https://www.sazagua.com/en/' },
  { name: 'Dann Monasterio', location: 'Popayán', img: '/img/hotel-dann-monasterio.jpg', url: 'https://hotelesdann.com/dann-popayan/en/images/' },
  { name: 'Savanna Orinoquia Lodge', location: 'Llanos Orientales', img: '/img/hotel-savanna-orinoquia.jpg', url: 'https://savannaorinoquialodge.co/' },
];

const CATEGORY_KEYS = ['boutique', 'lodge', 'hacienda', 'colonial', 'beach'] as const;

export default async function HotelesPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'hoteles' });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/hotel-quadrifolio.jpg')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <Breadcrumbs current={t('hero.title')} />
            <p className="subtitle" style={{ color: 'var(--color-accent)' }}>
              {t('hero.sub')}
            </p>
            <h1>{t('hero.title')}</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>{t('hero.desc')}</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p className="subtitle">{t('intro.sub')}</p>
          <h2>{t('intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('intro.p1')}</p>
          <p style={{ marginTop: '1rem' }}>{t('intro.p2')}</p>
        </div>
      </section>

      {/* HOTEL CATEGORIES */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="grid grid--3" style={{ marginTop: '2rem' }}>
            {CATEGORY_KEYS.map((catKey) => (
              <div key={catKey} className="service-card">
                <h4>{t(`cat.${catKey}.title`)}</h4>
                <p>{t(`cat.${catKey}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED HOTELS */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{t('collection')}</h2>
          <div className="divider"></div>
          <div className="grid grid--4" style={{ marginTop: '2rem' }}>
            {hotels.map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hotel-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="hotel-card__image">
                  <img src={hotel.img} alt={hotel.name} loading="lazy" />
                </div>
                <div className="hotel-card__body">
                  <h4>{hotel.name}</h4>
                  <p>{hotel.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-section"
        style={{ backgroundImage: "url('/img/cta-bg.jpg')" }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>{t('cta.title')}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto' }}>
            {t('cta.body')}
          </p>
          <Link href="/contacto" className="btn btn--primary" style={{ marginTop: '1rem' }}>
            {t.has('cta.btn') ? t('cta.btn') : 'Contactar'}
          </Link>
        </div>
      </section>
    </>
  );
}
