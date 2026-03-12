'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n/config';

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="lang-switcher" aria-label="Cambiar idioma">
      {locales.map((l, i) => (
        <span key={l}>
          {i > 0 && <span>|</span>}
          <a
            href="#"
            className={l === locale ? 'active' : ''}
            aria-current={l === locale ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              switchLocale(l);
            }}
          >
            {l.toUpperCase()}
          </a>
        </span>
      ))}
    </div>
  );
}
