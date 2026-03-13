import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'luxury' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/luxury`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/luxury`])
      ),
    },
  };
}

export default async function LuxuryPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'luxury' });

  return (
    <>
      {/* FULL-SCREEN HERO (same as homepage) */}
      <section className="hero">
        <div
          className="hero__bg"
          style={{ backgroundImage: "url('/img/viaje-nido-condor-hero.jpg')" }}
        />
        {/* Stronger overlay for readability on busy image */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)',
        }} />
        <div className="hero__content" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
          <p className="hero__tagline">{t('hero.sub')}</p>
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.desc')}</p>
          <a href="#luxury-intro" className="btn btn--primary" aria-label={t('cta.btn')}>
            {t('cta.btn')}
          </a>
        </div>
        <div className="hero__scroll">
          <span></span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* OPENING QUOTE */}
      <section className="section section--alt" id="luxury-intro">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="quote-block">
            <p className="quote-block__text">{t('intro.p1')}</p>
          </div>
          <p style={{ marginTop: '2rem' }}>{t('intro.sub')}</p>
        </div>
      </section>

      {/* LUXURY DESCRIPTION */}
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <h2>{t('intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('intro.p2')}</p>
          <p style={{ marginTop: '1rem' }}>{t('intro.p3')}</p>
        </div>
      </section>

      {/* LUXURY FEATURES */}
      <section className="section section--alt">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>{t('services.title')}</h2>
          <div className="divider" style={{ margin: '0 auto 3rem' }}></div>

          <div className="luxury-feature" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'center' }}>
            <div className="luxury-feature__image" style={{ flex: 1 }}>
              <img src="/img/nido-del-condor.jpg" alt={t('svc.lodging')} loading="lazy" style={{ width: '100%' }} />
            </div>
            <div className="luxury-feature__content" style={{ flex: 1 }}>
              <h3>{t('svc.lodging')}</h3>
              <div className="divider divider--left"></div>
              <p>{t('svc.lodging_desc')}</p>
            </div>
          </div>

          <div className="luxury-feature" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div className="luxury-feature__image" style={{ flex: 1 }}>
              <img src="/img/viaje-ciudades-hero.jpg" alt={t('svc.transport')} loading="lazy" style={{ width: '100%' }} />
            </div>
            <div className="luxury-feature__content" style={{ flex: 1 }}>
              <h3>{t('svc.transport')}</h3>
              <div className="divider divider--left"></div>
              <p>{t('svc.transport_desc')}</p>
            </div>
          </div>

          <div className="luxury-feature" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'center' }}>
            <div className="luxury-feature__image" style={{ flex: 1 }}>
              <img src="/img/cta-bg.jpg" alt={t('svc.gastro')} loading="lazy" style={{ width: '100%' }} />
            </div>
            <div className="luxury-feature__content" style={{ flex: 1 }}>
              <h3>{t('svc.gastro')}</h3>
              <div className="divider divider--left"></div>
              <p>{t('svc.gastro_desc')}</p>
            </div>
          </div>

          <div className="luxury-feature" style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div className="luxury-feature__image" style={{ flex: 1 }}>
              <img src="/img/viaje-andes-caribe-hero.jpg" alt={t('svc.details')} loading="lazy" style={{ width: '100%' }} />
            </div>
            <div className="luxury-feature__content" style={{ flex: 1 }}>
              <h3>{t('svc.details')}</h3>
              <div className="divider divider--left"></div>
              <p>{t('svc.details_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="quote-block">
            <p className="quote-block__text">{t('intro.p4')}</p>
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
