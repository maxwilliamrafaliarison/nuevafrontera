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
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/nosotros`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/nosotros`])
      ),
    },
  };
}

export default async function NosotrosPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/nosotros-hero.jpg')" }}
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

      {/* STORY */}
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p className="subtitle">{t('intro.sub')}</p>
          <h2>{t('intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('intro.p1')}</p>
          <p style={{ marginTop: '1rem' }}>{t('intro.p2')}</p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section section--alt">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <div className="quote-block">
            <p className="quote-block__text">{t('dmc.label')}</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container container--narrow" style={{ textAlign: 'center' }}>
          <p>{t('intro.p3')}</p>
          <p style={{ marginTop: '1rem' }}>{t('intro.p4')}</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>{t('team.title')}</h2>
          <div className="divider"></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div className="team-member" style={{ textAlign: 'center' }}>
              <div className="team-member__photo" style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem' }}>
                <img src="/img/team-sergi.jpg" alt="Sergi Formentin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Sergi Formentin</h3>
              <p style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{t('sergi.role')}</p>
              <p style={{ textAlign: 'left' }}>{t('sergi.bio')}</p>
            </div>
            <div className="team-member" style={{ textAlign: 'center' }}>
              <div className="team-member__photo" style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem' }}>
                <img src="/img/team-maggie.jpg" alt="Maggie Leong" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3>Maggie Leong</h3>
              <p style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>{t('maggie.role')}</p>
              <p style={{ textAlign: 'left' }}>{t('maggie.bio')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="subtitle" style={{ color: 'var(--color-accent)' }}>{t('exp.label')}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>+20</p>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>{t('stat1')}</p>
            </div>
            <div>
              <p style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>14</p>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>{t('stat2')}</p>
            </div>
            <div>
              <p style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>24/7</p>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>{t('stat3')}</p>
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
