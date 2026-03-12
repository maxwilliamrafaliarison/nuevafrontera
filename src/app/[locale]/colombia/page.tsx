import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'colombia' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/colombia`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/colombia`])
      ),
    },
  };
}

export default async function ColombiaPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'colombia' });
  const tUi = await getTranslations({ locale, namespace: 'ui' });

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/hero-colombia.jpg')" }}
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
          <h2>{t('intro.title')}</h2>
          <div className="divider"></div>
          <p>{t('intro.body')}</p>
        </div>
      </section>

      {/* REGIONS */}
      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Regiones</h2>
          <div className="divider"></div>
          <div className="grid grid--3" style={{ marginTop: '2rem' }}>
            <div className="service-card">
              <h4>Caribe</h4>
              <p>Cartagena, Santa Marta, Tayrona, La Guajira, San Andrés</p>
            </div>
            <div className="service-card">
              <h4>Andes</h4>
              <p>Bogotá, Villa de Leyva, Barichara, Eje Cafetero</p>
            </div>
            <div className="service-card">
              <h4>Pacífico</h4>
              <p>Nuquí, Bahía Solano, Isla Gorgona, avistamiento de ballenas</p>
            </div>
            <div className="service-card">
              <h4>Amazonas</h4>
              <p>Leticia, Reserva Tanimboca, comunidades indígenas</p>
            </div>
            <div className="service-card">
              <h4>Orinoquía</h4>
              <p>Llanos orientales, safaris llaneros, fauna silvestre</p>
            </div>
            <div className="service-card">
              <h4>Sur</h4>
              <p>San Agustín, Tatacoa, Popayán, Tierradentro</p>
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
          <a href="/contacto" className="btn btn--primary" style={{ marginTop: '1rem' }}>
            {t('cta.btn')}
          </a>
        </div>
      </section>
    </>
  );
}
