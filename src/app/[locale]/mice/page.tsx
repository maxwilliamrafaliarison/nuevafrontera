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
  const t = await getTranslations({ locale, namespace: 'mice' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/mice`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/mice`])
      ),
    },
  };
}

export default async function MicePage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'mice' });

  const advantages = Array.from({ length: 14 }, (_, i) => t(`adv.${i + 1}`));

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/mice-hero.jpg')", backgroundPosition: 'center top' }}
        />
        <div className="page-hero__content">
          <div className="container">
            <Breadcrumbs current="MICE" />
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
          <h2>{t('intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('intro.body')}</p>
        </div>
      </section>

      {/* NATURE SPLIT */}
      <section className="split">
        <div
          className="split__image"
          style={{ backgroundImage: "url('/img/viaje-llanos-hero.jpg')" }}
        />
        <div className="split__content">
          <h2>{t('nature.title')}</h2>
          <div className="divider divider--left"></div>
          <p>{t('nature.body')}</p>
          <p style={{ marginTop: '1rem' }}>{t('cities.body')}</p>
        </div>
      </section>

      {/* BEACHES SPLIT */}
      <section className="split">
        <div className="split__content">
          <h2>{t('beaches.title')}</h2>
          <div className="divider divider--left"></div>
          <p>{t('beaches.body')}</p>
          <p style={{ marginTop: '1rem' }}>{t('beaches.body2')}</p>
        </div>
        <div
          className="split__image"
          style={{ backgroundImage: "url('/img/viaje-islas-hero.jpg')" }}
        />
      </section>

      {/* HOTELS SPLIT */}
      <section className="split">
        <div
          className="split__image"
          style={{ backgroundImage: "url('/img/hotel-las-islas.jpg')" }}
        />
        <div className="split__content">
          <h2>{t('hotels.title')}</h2>
          <div className="divider divider--left"></div>
          <p>{t('hotels.body')}</p>
          <Link href="/hoteles" className="btn btn--outline" style={{ marginTop: '1.5rem' }}>
            {t('hotels.btn')}
          </Link>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>{t('advantages.title')}</h2>
          <div className="divider"></div>
          <div className="advantages-list">
            {advantages.map((adv, i) => (
              <div key={i} className="advantage-item">
                <p>{adv}</p>
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
