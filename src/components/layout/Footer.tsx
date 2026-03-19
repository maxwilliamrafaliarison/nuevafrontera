import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h4>Nueva Frontera</h4>
            <p className="footer__text">{t('footer.desc')}</p>
          </div>
          <div>
            <h5 className="footer__heading">{t('footer.col.explorar')}</h5>
            <ul className="footer__links">
              <li><Link href="/colombia"><span>{t('nav.colombia')}</span></Link></li>
              <li><Link href="/viajes"><span>{t('nav.viajes')}</span></Link></li>
              <li><Link href="/mice"><span>{t('nav.mice')}</span></Link></li>
              <li><Link href="/luxury"><span>{t('home.svc.luxury.label')}</span></Link></li>
              <li><Link href="/hoteles"><span>{t('nav.hoteles')}</span></Link></li>
            </ul>
          </div>
          <div>
            <h5 className="footer__heading">{t('footer.col.empresa')}</h5>
            <ul className="footer__links">
              <li><Link href="/nosotros"><span>{t('nav.nosotros')}</span></Link></li>
              <li><Link href="/contacto"><span>{t('nav.contacto')}</span></Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="footer__heading">{t('footer.col.contacto')}</h5>
            <div className="footer__contact-item">
              <span>📍</span>
              <span>CL 127 N° 60, Torre 3, Apt. 504<br />Bogotá 11-001, Colombia</span>
            </div>
            <div className="footer__contact-item">
              <span>✉️</span>
              <a href="mailto:booking@nueva-frontera.com">booking@nueva-frontera.com</a>
            </div>
            <div className="footer__contact-item">
              <span>🌐</span>
              <a href="https://www.nueva-frontera.com">www.nueva-frontera.com</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p><span>{t('footer.rights')}</span></p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/legal">{t('footer.legal')}</Link>
            <Link href="/legal">{t('footer.privacy.label')}</Link>
            <Link href="/legal">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
