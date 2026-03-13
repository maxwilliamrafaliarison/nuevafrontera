import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { Link } from '@/i18n/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { trips } from '@/data/trips';

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

/* Slugs shown on the listing page (14 trips) */
const LISTING_SLUGS = [
  'colombia-inedita',
  'de-la-selva-al-desierto',
  'secretos-del-sur',
  'aventura-en-el-norte',
  'safari-en-los-llanos',
  'extension-a-las-islas',
  'extension-al-amazonas',
  'el-nido-del-condor',
  'avistamiento-de-ballenas',
  'cano-cristales',
  'ciudades-miticas',
  'de-bogota-a-cartagena',
  'de-los-andes-al-caribe',
  'la-guajira',
];

export default async function ViajesPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'viajes' });
  const tTrip = await getTranslations({ locale, namespace: 'trip' });

  const listingTrips = LISTING_SLUGS
    .map((slug) => trips.find((tr) => tr.slug === slug)!)
    .filter(Boolean);

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
            {listingTrips.map((trip) => {
              const key = trip.i18nKey;
              const heroTitle = tTrip.has(`${key}.hero.title`)
                ? tTrip(`${key}.hero.title`)
                : trip.slug.replace(/-/g, ' ');
              const heroDesc = tTrip.has(`${key}.hero.desc`)
                ? tTrip(`${key}.hero.desc`)
                : '';
              const cardTag = tTrip.has(`${key}.card.tag`)
                ? tTrip(`${key}.card.tag`)
                : '';
              const cardType = tTrip.has(`${key}.card.type`)
                ? tTrip(`${key}.card.type`)
                : '';
              const cardDuration = tTrip.has(`${key}.card.duration`)
                ? tTrip(`${key}.card.duration`)
                : trip.facts.duration;

              return (
                <Link key={trip.slug} href={`/viajes/${trip.slug}`} className="trip-card">
                  <div className="trip-card__image">
                    <img src={trip.heroImg} alt={heroTitle} loading="lazy" />
                    {cardTag && <span className="trip-card__tag">{cardTag}</span>}
                  </div>
                  <div className="trip-card__body">
                    <h3 className="trip-card__title">{heroTitle}</h3>
                    <p className="trip-card__excerpt">{heroDesc}</p>
                    <div className="trip-card__meta">
                      <div className="trip-card__meta-item">
                        <span>{tTrip('label.duration')}</span>
                        <strong>{cardDuration}</strong>
                      </div>
                      <div className="trip-card__meta-item">
                        <span>{tTrip('label.type')}</span>
                        <strong>{cardType}</strong>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
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
            {t('cta.btn')}
          </Link>
        </div>
      </section>
    </>
  );
}
