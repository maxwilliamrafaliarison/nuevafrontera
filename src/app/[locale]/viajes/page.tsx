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
  const t = await getTranslations({ locale, namespace: 'viajes' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/viajes`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/viajes`])
      ),
    },
  };
}

const trips = [
  { slug: 'colombia-inedita', name: 'Colombia Inédita', img: '/img/viaje-bogota-cartagena-hero.jpg', tag: 'Grupo · Vuelo incluido', duration: '19 días', type: 'Cultural · Aventura', excerpt: 'Bogotá, Eje Cafetero, Sierra Nevada, Tayrona y Cartagena' },
  { slug: 'de-la-selva-al-desierto', name: 'De la Selva al Desierto', img: '/img/viaje-selva-desierto-hero.jpg', tag: 'Aventura', duration: '15 días', type: 'Aventura confort', excerpt: 'Amazonas, Tayrona, La Guajira y Cartagena' },
  { slug: 'secretos-del-sur', name: 'Secretos del Sur', img: '/img/viaje-sur-caribe-hero.jpg', tag: 'Cultural', duration: '11 días', type: 'FIT · Cultural', excerpt: 'Tatacoa, San Agustín, Popayán y Hacienda Cafetera' },
  { slug: 'aventura-en-el-norte', name: 'Colombia al Norte', img: '/img/viaje-norte-hero.jpg', tag: 'Aventura', duration: '14 días', type: 'FIT · Aventura', excerpt: 'Sierra Nevada, Ciudad Perdida, Tayrona, La Guajira' },
  { slug: 'safari-en-los-llanos', name: 'Llanos Orientales', img: '/img/viaje-llanos-hero.jpg', tag: 'Naturaleza', duration: '7 días', type: 'FIT · Naturaleza', excerpt: 'Safari llanero, fauna silvestre y cultura vaquera' },
  { slug: 'extension-a-las-islas', name: 'Islas del Caribe', img: '/img/viaje-islas-hero.jpg', tag: 'Playa', duration: '10 días', type: 'FIT · Relax', excerpt: 'San Andrés, Providencia y cayos del Caribe' },
  { slug: 'extension-al-amazonas', name: 'Amazonas', img: '/img/viaje-amazonas-hero.jpg', tag: 'Naturaleza', duration: '5 días', type: 'FIT · Naturaleza', excerpt: 'Leticia, comunidades indígenas, selva amazónica' },
  { slug: 'el-nido-del-condor', name: 'Nido del Cóndor', img: '/img/viaje-nido-condor-hero.jpg', tag: 'Luxury', duration: '12 días', type: 'Luxury · FIT', excerpt: 'El viaje de lujo por Colombia' },
  { slug: 'avistamiento-de-ballenas', name: 'Ballenas del Pacífico', img: '/img/viaje-ballenas-hero.jpg', tag: 'Naturaleza', duration: '8 días', type: 'FIT · Naturaleza', excerpt: 'Avistamiento de ballenas jorobadas en Nuquí' },
  { slug: 'cano-cristales', name: 'Caño Cristales', img: '/img/viaje-cano-cristales-hero.jpg', tag: 'Naturaleza', duration: '4 días', type: 'FIT · Naturaleza', excerpt: 'El río de los cinco colores' },
  { slug: 'ciudades-miticas', name: 'Ciudades Coloniales', img: '/img/viaje-ciudades-hero.jpg', tag: 'Cultural', duration: '10 días', type: 'FIT · Cultural', excerpt: 'Bogotá, Villa de Leyva, Barichara y Cartagena' },
  { slug: 'de-bogota-a-cartagena', name: 'Bogotá y Alrededores', img: '/img/viaje-bogota-cartagena-hero.jpg', tag: 'Cultural', duration: '5 días', type: 'FIT · Cultural', excerpt: 'La capital y sus joyas escondidas' },
  { slug: 'de-los-andes-al-caribe', name: 'De los Andes al Caribe', img: '/img/viaje-andes-caribe-hero.jpg', tag: 'Completo', duration: '16 días', type: 'FIT · Completo', excerpt: 'De Bogotá a Cartagena, pasando por el Eje Cafetero' },
  { slug: 'la-guajira', name: 'La Guajira', img: '/img/viaje-guajira-hero.jpg', tag: 'Aventura', duration: '5 días', type: 'FIT · Aventura', excerpt: 'El desierto más septentrional de Sudamérica' },
];

export default async function ViajesPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'viajes' });
  const tTrip = await getTranslations({ locale, namespace: 'trip' });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/hero-home.jpg')" }}
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

      {/* TRIPS GRID */}
      <section className="section section--alt">
        <div className="container">
          <div className="grid grid--3">
            {trips.map((trip) => (
              <Link key={trip.slug} href={`/viajes/${trip.slug}`} className="trip-card">
                <div className="trip-card__image">
                  <img src={trip.img} alt={trip.name} loading="lazy" />
                  <span className="trip-card__tag">{trip.tag}</span>
                </div>
                <div className="trip-card__body">
                  <h3 className="trip-card__title">{trip.name}</h3>
                  <p className="trip-card__excerpt">{trip.excerpt}</p>
                  <div className="trip-card__meta">
                    <div className="trip-card__meta-item">
                      <span>{tTrip('label.duration')}</span>
                      <strong>{trip.duration}</strong>
                    </div>
                    <div className="trip-card__meta-item">
                      <span>{tTrip('label.type')}</span>
                      <strong>{trip.type}</strong>
                    </div>
                  </div>
                </div>
              </Link>
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
          <h2 style={{ color: 'white' }}>Su viaje a medida</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto' }}>
            No encuentra su viaje ideal? Diseñamos cualquier itinerario a medida por Colombia.
          </p>
          <Link href="/contacto" className="btn btn--primary" style={{ marginTop: '1rem' }}>
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}
