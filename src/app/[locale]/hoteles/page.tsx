import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';

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
  { name: 'Quadrifolio', location: 'Cartagena de Indias', img: '/img/hotel-sofitel-cartagena.jpg' },
  { name: 'Hacienda Combia', location: 'Eje Cafetero', img: '/img/hacienda-combia.jpg' },
  { name: 'Canaloa Ecoluxury Lodge', location: 'Amazonas', img: '/img/hotel-canaloa.jpg' },
  { name: 'Tayrona Tented Camp', location: 'Tayrona', img: '/img/hotel-tayrona.jpg' },
  { name: 'Hotel La Opera', location: 'Bogotá', img: '/img/hotel-opera.jpg' },
  { name: 'Hotel Sazagua', location: 'Eje Cafetero', img: '/img/nido-del-condor.jpg' },
  { name: 'Dann Monasterio', location: 'Popayán', img: '/img/hotel-dann-monasterio.jpg' },
  { name: 'Savanna Orinoquia', location: 'Llanos Orientales', img: '/img/hotel-savanna-orinoquia.jpg' },
];

export default async function HotelesPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'hoteles' });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/hero-hoteles.jpg')" }}
        />
        <div className="page-hero__content">
          <p className="subtitle" style={{ color: 'var(--color-accent)' }}>
            {t('hero.sub')}
          </p>
          <h1>{t('hero.title')}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>{t('hero.desc')}</p>
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
            <div className="service-card">
              <h4>Hoteles Boutique</h4>
              <p>Pequeños hoteles con encanto, decoración cuidada y atención personalizada.</p>
            </div>
            <div className="service-card">
              <h4>Lodges & Eco-lodges</h4>
              <p>Alojamientos integrados en la naturaleza, perfectos para los amantes del ecoturismo.</p>
            </div>
            <div className="service-card">
              <h4>Haciendas Cafeteras</h4>
              <p>Antiguas fincas cafeteras reconvertidas en alojamientos de lujo.</p>
            </div>
            <div className="service-card">
              <h4>Hoteles Coloniales</h4>
              <p>Casonas y monasterios históricos restaurados con todos los servicios modernos.</p>
            </div>
            <div className="service-card">
              <h4>Resorts de Playa</h4>
              <p>Los mejores resorts del Caribe colombiano, con playas privadas y spa.</p>
            </div>
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
              <div key={hotel.name} className="hotel-card">
                <div className="hotel-card__image">
                  <img src={hotel.img} alt={hotel.name} loading="lazy" />
                </div>
                <div className="hotel-card__body">
                  <h4>{hotel.name}</h4>
                  <p>{hotel.location}</p>
                </div>
              </div>
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
          <h2 style={{ color: 'white' }}>Hoteles a medida</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto' }}>
            Le ayudamos a elegir el alojamiento perfecto para cada etapa de su viaje.
          </p>
          <a href="/contacto" className="btn btn--primary" style={{ marginTop: '1rem' }}>
            Contactar
          </a>
        </div>
      </section>
    </>
  );
}
