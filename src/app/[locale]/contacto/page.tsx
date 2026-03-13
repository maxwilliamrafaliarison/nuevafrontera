import { getTranslations, getLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { Link } from '@/i18n/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContactForm from './ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: t('meta.title'),
    description: t('hero.desc'),
    alternates: {
      canonical: `https://www.nueva-frontera.com/${locale}/contacto`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `https://www.nueva-frontera.com/${l}/contacto`])
      ),
    },
  };
}

export default async function ContactoPage() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      {/* PAGE HERO (shorter) */}
      <section className="page-hero" style={{ height: '45vh', minHeight: '350px' }}>
        <div
          className="page-hero__bg"
          style={{ backgroundImage: "url('/img/viaje-ciudades-hero.jpg')" }}
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

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {/* LEFT: Info */}
            <div>
              <h2>{t('form.title')}</h2>
              <div className="divider divider--left"></div>
              <p>{t('form.help')}</p>

              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>📍</span>
                  <div>
                    <strong>Dirección</strong>
                    <p>Villa Laura, Calle 54<br />Santa Marta, Colombia</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:booking@nueva-frontera.com">booking@nueva-frontera.com</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>📱</span>
                  <div>
                    <strong>{t('wa.title')}</strong>
                    <p>{t('wa.desc')}</p>
                    <a
                      href="https://wa.me/573125606586"
                      className="btn btn--primary"
                      style={{ marginTop: '0.5rem', display: 'inline-block' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('wa.btn')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
