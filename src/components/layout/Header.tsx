import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import NavLink from '@/components/NavLink';
import LangSwitcher from '@/components/LangSwitcher';
import MobileNavToggle from './MobileNavToggle';
import HeaderScrollEffect from './HeaderScrollEffect';

export default async function Header() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'nav' });

  return (
    <>
      <HeaderScrollEffect />
      <header className="header" id="header">
        <nav className="nav">
          <Link href="/" className="nav__logo">
            <Image
              src="/logo.png"
              alt="Nueva Frontera Colombia"
              width={150}
              height={150}
              priority
            />
            <span className="nav__logo-text">
              Nueva Frontera
              <span>Colombia</span>
            </span>
          </Link>
          <MobileNavToggle>
            <NavLink href="/colombia">
              <span>{t('colombia')}</span>
            </NavLink>
            <NavLink href="/viajes">
              <span>{t('viajes')}</span>
            </NavLink>
            <NavLink href="/mice">
              <span>{t('mice')}</span>
            </NavLink>
            <NavLink href="/luxury">
              <span>{t('luxury')}</span>
            </NavLink>
            <NavLink href="/hoteles">
              <span>{t('hoteles')}</span>
            </NavLink>
            <NavLink href="/nosotros">
              <span>{t('nosotros')}</span>
            </NavLink>
            <NavLink href="/contacto" className="nav__cta">
              <span>{t('contacto')}</span>
            </NavLink>
            <LangSwitcher />
          </MobileNavToggle>
        </nav>
      </header>
    </>
  );
}
