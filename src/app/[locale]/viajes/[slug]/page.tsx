import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { trips, getTripBySlug, getAllTripSlugs } from '@/data/trips';
import { getTouristTripJsonLd } from '@/lib/structured-data';
import ItineraryAccordion from './ItineraryAccordion';

export function generateStaticParams() {
  return getAllTripSlugs().flatMap((slug) =>
    locales.map((locale) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return {};
  const t = await getTranslations({ locale, namespace: 'trip' });
  const name = trip.i18nKey;

  let title = trip.slug.replace(/-/g, ' ');
  let description = '';
  try {
    title = t(`${name}.hero.title`);
    description = t(`${name}.hero.desc`);
  } catch {
    // Fallback to slug-based title
  }

  return {
    title: `${title} | Nueva Frontera Colombia`,
    description,
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/viajes/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/viajes/${slug}`])
      ),
    },
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  const t = await getTranslations({ locale, namespace: 'trip' });
  const key = trip.i18nKey;

  // Helper to safely get optional translation keys
  const tSafe = (k: string) => t.has(k) ? t(k) : '';

  const heroSub = tSafe(`${key}.hero.sub`);
  const heroTitle = tSafe(`${key}.hero.title`) || slug.replace(/-/g, ' ');
  const heroDesc = tSafe(`${key}.hero.desc`);
  const overviewTitle = tSafe(`${key}.overview.title`);
  const overviewP1 = tSafe(`${key}.overview.p1`);
  const overviewP2 = tSafe(`${key}.overview.p2`);
  const ctaTitle = tSafe(`${key}.cta.title`);
  const ctaBody = tSafe(`${key}.cta.body`);

  const tripJsonLd = getTouristTripJsonLd({
    name: heroTitle,
    description: heroDesc,
    url: `https://www.nueva-frontera.com/${locale}/viajes/${slug}`,
    image: `https://www.nueva-frontera.com${trip.heroImg}`,
    duration: trip.facts.duration,
    price: trip.price.amount,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }}
      />
      {/* HERO */}
      <section className="page-hero" style={{ height: '70vh' }}>
        <div
          className="page-hero__bg"
          style={{ backgroundImage: `url('${trip.heroImg}')` }}
        />
        <div className="page-hero__content">
          {heroSub && (
            <p className="subtitle" style={{ color: 'var(--color-accent)' }}>
              {heroSub}
            </p>
          )}
          <h1>{heroTitle}</h1>
          {heroDesc && (
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>{heroDesc}</p>
          )}
        </div>
      </section>

      {/* FACTS BAR */}
      <section className="section">
        <div className="container">
          <div className="trip-detail__facts">
            <div className="trip-detail__fact">
              <span className="trip-detail__fact-label">{t('label.duration')}</span>
              <span className="trip-detail__fact-value">{trip.facts.duration}</span>
            </div>
            <div className="trip-detail__fact">
              <span className="trip-detail__fact-label">{t('label.type')}</span>
              <span className="trip-detail__fact-value">{trip.facts.type}</span>
            </div>
            <div className="trip-detail__fact">
              <span className="trip-detail__fact-label">{t('label.difficulty')}</span>
              <span className="trip-detail__fact-value">{trip.facts.difficulty}</span>
            </div>
            <div className="trip-detail__fact">
              <span className="trip-detail__fact-label">{t('label.group')}</span>
              <span className="trip-detail__fact-value">{trip.facts.group}</span>
            </div>
            <div className="trip-detail__fact">
              <span className="trip-detail__fact-label">Temática</span>
              <span className="trip-detail__fact-value">{trip.facts.theme}</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTION + PRICE */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Overview + Highlights */}
          <div>
            {overviewTitle && (
              <>
                <h2>{overviewTitle}</h2>
                <div className="divider divider--left"></div>
              </>
            )}
            {overviewP1 && <p>{overviewP1}</p>}
            {overviewP2 && <p style={{ marginTop: '1rem' }}>{overviewP2}</p>}

            {trip.highlights.length > 0 && (
              <div style={{ marginTop: '2rem' }}>
                <h3>{t('highlights.title')}</h3>
                <div className="highlights" style={{ marginTop: '1rem' }}>
                  {trip.highlights.map((h, i) => (
                    <div key={i} className="highlight-item" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.5rem 0' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Price Box */}
          <div className="price-box" style={{ background: 'var(--color-bg-alt, #f8f5f0)', padding: '2rem', borderRadius: '8px', position: 'sticky', top: '120px' }}>
            <p className="price-box__label" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Precio desde</p>
            <p className="price-box__value" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', fontWeight: 600 }}>{trip.price.amount}</p>
            <p className="price-box__per" style={{ fontSize: '0.85rem', color: 'var(--color-text-light, #777)', marginBottom: '0.5rem' }}>{trip.price.per}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light, #999)' }}>{trip.price.notes}</p>
            <a
              href="https://wa.me/573125606586"
              className="btn btn--primary"
              style={{ width: '100%', marginTop: '1.5rem', textAlign: 'center' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
            <a href="/contacto" className="btn btn--outline" style={{ width: '100%', marginTop: '0.75rem', textAlign: 'center' }}>
              Solicitar presupuesto
            </a>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      {trip.itinerary.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>{t('itinerary.title')}</h2>
            <div className="divider" style={{ margin: '0 auto 2rem' }}></div>
            <ItineraryAccordion days={trip.itinerary} dayLabel={t('label.day')} />
          </div>
        </section>
      )}

      {/* HOTELS */}
      {trip.hotels.length > 0 && (
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>{t('hotels.title')}</h2>
            <div className="divider"></div>
            <div className="grid grid--4" style={{ marginTop: '2rem' }}>
              {trip.hotels.map((hotel) => (
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
      )}

      {/* INCLUDES / EXCLUDES */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h3>{t('includes.title')}</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                {trip.includes.map((item, i) => (
                  <li key={i} style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--color-accent)' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>No incluye</h3>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                {trip.excludes.map((item, i) => (
                  <li key={i} style={{ padding: '0.5rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#c44' }}>✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-section"
        style={{ backgroundImage: "url('/img/cta-bg.jpg')" }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>{ctaTitle || '¿Le interesa este viaje?'}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '1rem auto' }}>
            {ctaBody || 'Contacte con nosotros y le prepararemos un presupuesto personalizado.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/573125606586" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="/viajes" className="btn btn--outline-white">
              Ver Otros Viajes
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
