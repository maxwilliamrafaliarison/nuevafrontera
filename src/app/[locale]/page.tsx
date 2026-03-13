import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { Link } from '@/i18n/navigation';
import { getTravelAgencyJsonLd } from '@/lib/structured-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  const localeMap: Record<string, string> = {
    es: 'es_ES',
    en: 'en_US',
    fr: 'fr_FR',
  };

  return {
    title: t('meta.title'),
    description: t('hero.subtitle'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}`])
      ),
    },
    openGraph: {
      title: t('meta.title'),
      description: t('hero.subtitle'),
      url: `https://www.nueva-frontera.com/${locale}`,
      siteName: 'Nueva Frontera Colombia',
      locale: localeMap[locale],
      type: 'website',
      images: [{ url: 'https://www.nueva-frontera.com/img/hero-home.jpg' }],
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const tTrip = await getTranslations({ locale, namespace: 'trip' });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getTravelAgencyJsonLd()) }}
      />
      {/* HERO */}
      <section className="hero">
        <div
          className="hero__bg"
          style={{ backgroundImage: "url('/img/hero-home.jpg')" }}
        />
        <div className="hero__content">
          <p className="hero__tagline">{t('hero.tagline')}</p>
          <h1
            className="hero__title"
            dangerouslySetInnerHTML={{ __html: t.raw('hero.titleHtml') as string }}
          />
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <a href="#intro" className="btn btn--primary">
            {t('hero.btn')}
          </a>
        </div>
        <div className="hero__scroll">
          <span>{t('hero.scroll')}</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section" id="intro">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p className="subtitle">{t('intro.sub')}</p>
          <h2>{t('intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('intro.p1')}</p>
          <p style={{ marginTop: '1rem' }}>{t('intro.p2')}</p>
        </div>
      </section>

      {/* FEATURED TRIPS */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="subtitle">{t('trips.sub')}</p>
          <h2>{t('trips.title')}</h2>
          <div className="divider"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>{t('trips.intro')}</p>
          <div className="grid grid--3" style={{ marginTop: 'var(--space-lg)' }}>
            {/* Trip Card 1 */}
            <Link href="/viajes/colombia-inedita" className="trip-card">
              <div className="trip-card__image">
                <img src="/img/viaje-bogota-cartagena-hero.jpg" alt={tTrip('inedita.hero.title')} loading="lazy" />
                <span className="trip-card__tag">{t('trip1.tag')}</span>
              </div>
              <div className="trip-card__body">
                <h3 className="trip-card__title">{tTrip('inedita.hero.title')}</h3>
                <p className="trip-card__excerpt">{t('trip1.excerpt')}</p>
                <div className="trip-card__meta">
                  <div className="trip-card__meta-item">
                    <span>{tTrip('label.duration')}</span>
                    <strong>{t('trip1.dur')}</strong>
                  </div>
                  <div className="trip-card__meta-item">
                    <span>{tTrip('label.type')}</span>
                    <strong>{t('trip1.type')}</strong>
                  </div>
                </div>
              </div>
            </Link>

            {/* Trip Card 2 */}
            <Link href="/viajes/de-la-selva-al-desierto" className="trip-card">
              <div className="trip-card__image">
                <img src="/img/viaje-selva-desierto-hero.jpg" alt={tTrip('selva.hero.title')} loading="lazy" />
                <span className="trip-card__tag">{t('trip2.tag')}</span>
              </div>
              <div className="trip-card__body">
                <h3 className="trip-card__title">{tTrip('selva.hero.title')}</h3>
                <p className="trip-card__excerpt">{tTrip('selva.hero.desc')}</p>
                <div className="trip-card__meta">
                  <div className="trip-card__meta-item">
                    <span>{tTrip('label.duration')}</span>
                    <strong>{t('trip2.dur')}</strong>
                  </div>
                  <div className="trip-card__meta-item">
                    <span>{tTrip('label.type')}</span>
                    <strong>{t('trip2.type')}</strong>
                  </div>
                </div>
              </div>
            </Link>

            {/* Trip Card 3 */}
            <Link href="/viajes/secretos-del-sur" className="trip-card">
              <div className="trip-card__image">
                <img src="/img/viaje-sur-caribe-hero.jpg" alt={tTrip('sur.hero.title')} loading="lazy" />
                <span className="trip-card__tag">{t('trip3.tag')}</span>
              </div>
              <div className="trip-card__body">
                <h3 className="trip-card__title">{tTrip('sur.hero.title')}</h3>
                <p className="trip-card__excerpt">{tTrip('sur.hero.desc')}</p>
                <div className="trip-card__meta">
                  <div className="trip-card__meta-item">
                    <span>{tTrip('label.duration')}</span>
                    <strong>{t('trip3.dur')}</strong>
                  </div>
                  <div className="trip-card__meta-item">
                    <span>{tTrip('label.type')}</span>
                    <strong>{t('trip3.type')}</strong>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-lg)' }}>
            <Link href="/viajes" className="btn btn--primary">{t('trips.cta')}</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="subtitle">{t('services.subtitle')}</p>
          <h2>{t('services.title')}</h2>
          <div className="divider"></div>
          <div className="grid grid--3" style={{ marginTop: '2rem' }}>
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2z" />
              </svg>
              <h4>{t('svc.viajes.label')}</h4>
              <p>{t('svc.viajes.desc')}</p>
            </div>
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="18" rx="2" />
                <path d="M8 7h8M8 11h8M8 15h4" />
              </svg>
              <h4>{t('svc.mice.label')}</h4>
              <p>{t('svc.mice.desc')}</p>
            </div>
            <div className="service-card">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l2.09 6.26L20 9.27l-4.91 3.82L16.18 20 12 16.77 7.82 20l1.09-6.91L4 9.27l5.91-1.01z" />
              </svg>
              <h4>{t('svc.luxury.label')}</h4>
              <p>{t('svc.luxury.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section section--alt">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="quote-block">
            <p className="quote-block__text">{t.raw('quote') as string}</p>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="split">
        <div
          className="split__image"
          style={{ backgroundImage: "url('/img/hero-colombia.jpg')" }}
        />
        <div className="split__content">
          <p className="subtitle">{t('split.sub')}</p>
          <h2>{t('split.title')}</h2>
          <div className="divider divider--left"></div>
          <p>{t('split.p1')}</p>
          <p style={{ marginTop: '1rem' }}>{t('split.p2')}</p>
          <Link href="/colombia" className="btn btn--outline" style={{ marginTop: '1.5rem' }}>
            {t('split.cta')}
          </Link>
        </div>
      </section>

      {/* HOTELS TEASER */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="subtitle">{t('hotels.sub')}</p>
          <h2>{t('hotels.title')}</h2>
          <div className="divider"></div>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>{t('hotels.intro')}</p>
          <div className="grid grid--3">
            <div className="hotel-card">
              <div className="hotel-card__image">
                <img src="/img/hotel-cartagena.jpg" alt="" loading="lazy" />
              </div>
              <div className="hotel-card__body">
                <h4>{t('hotel1.name')}</h4>
                <p>{t('hotel1.loc')}</p>
              </div>
            </div>
            <div className="hotel-card">
              <div className="hotel-card__image">
                <img src="/img/nido-del-condor.jpg" alt="" loading="lazy" />
              </div>
              <div className="hotel-card__body">
                <h4>{t('hotel2.name')}</h4>
                <p>{t('hotel2.loc')}</p>
              </div>
            </div>
            <div className="hotel-card">
              <div className="hotel-card__image">
                <img src="/img/hotel-las-islas.jpg" alt="" loading="lazy" />
              </div>
              <div className="hotel-card__body">
                <h4>{t('hotel3.name')}</h4>
                <p>{t('hotel3.loc')}</p>
              </div>
            </div>
          </div>
          <Link href="/hoteles" className="btn btn--outline" style={{ marginTop: '2rem' }}>
            {t('hotels.cta')}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-section"
        style={{ backgroundImage: "url('/img/cta-bg.jpg')" }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="subtitle" style={{ color: 'var(--color-accent)' }}>
            {t('cta.sub')}
          </p>
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
