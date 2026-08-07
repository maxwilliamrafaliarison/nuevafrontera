import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return {
    title: t('meta.title'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/legal`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/legal`])
      ),
    },
  };
}

export default async function LegalPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <>
      <section className="page-hero" style={{ height: '35vh', minHeight: '250px' }}>
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/cta-bg.jpg')" }}
        />
        <div className="page-hero__content">
          <div className="container">
            <Breadcrumbs current={t('breadcrumb')} />
            <h1>{t('hero.title')}</h1>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <h2 id="legal">{t('notice.title')}</h2>
          <div className="divider divider--left"></div>
          <p>{t('notice.body')}</p>

          <h3 id="privacy" style={{ marginTop: '2rem' }}>{t('privacy.title')}</h3>
          <p>{t('privacy.p1')}</p>
          <p style={{ marginTop: '1rem' }}>{t('privacy.p2')}</p>

          <h3 id="cookies" style={{ marginTop: '2rem' }}>{t('cookies.title')}</h3>
          <p>{t('cookies.body')}</p>

          <h3 style={{ marginTop: '2rem' }}>{t('contact.title')}</h3>
          <p>
            {t('contact.body')}{' '}
            <a href="mailto:booking@nueva-frontera.com">booking@nueva-frontera.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
