'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n/config';

const FLAGS: Record<string, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
  fr: '🇫🇷',
};

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="lang-switcher" aria-label="Cambiar idioma">
      {locales.map((l) => (
        <a
          key={l}
          href="#"
          className={l === locale ? 'active' : ''}
          aria-current={l === locale ? 'page' : undefined}
          aria-label={l.toUpperCase()}
          onClick={(e) => {
            e.preventDefault();
            switchLocale(l);
          }}
        >
          <span className="lang-flag">{FLAGS[l]}</span>
        </a>
      ))}
    </div>
  );
}
