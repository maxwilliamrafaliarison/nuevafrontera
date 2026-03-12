'use client';

import { useEffect } from 'react';

export default function HeaderScrollEffect() {
  useEffect(() => {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 80) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
