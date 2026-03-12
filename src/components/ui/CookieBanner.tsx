'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('nf_cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem('nf_cookies_accepted', 'true');
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem('nf_cookies_accepted', 'true');
    setVisible(false);
  }

  return (
    <div className={`cookie-banner${visible ? ' visible' : ''}`} id="cookieBanner">
      <p>
        <span>{t('text')}</span>{' '}
        <a href="/legal" style={{ color: 'var(--color-accent)' }}>
          {t('policy')}
        </a>
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
