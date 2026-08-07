'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

/**
 * Clé de consentement. Stocke explicitement 'granted' ou 'denied' :
 * l'ancienne clé écrivait 'true' dans les deux cas, ce qui enregistrait
 * un refus comme un consentement.
 */
const CONSENT_KEY = 'nf_cookies_consent';

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(CONSENT_KEY);
    if (!choice) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function setConsent(value: 'granted' | 'denied') {
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  function handleAccept() {
    setConsent('granted');
  }

  function handleReject() {
    setConsent('denied');
  }

  return (
    <div className={`cookie-banner${visible ? ' visible' : ''}`} id="cookieBanner">
      <p>
        <span>{t('text')}</span>{' '}
        <Link href="/legal#cookies" style={{ color: 'var(--color-accent)' }}>
          {t('policy')}
        </Link>
        .
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          className="btn btn--outline-white"
          onClick={handleReject}
          style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
        >
          {t('reject')}
        </button>
        <button
          className="btn btn--primary"
          onClick={handleAccept}
          style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
        >
          {t('accept')}
        </button>
      </div>
    </div>
  );
}
