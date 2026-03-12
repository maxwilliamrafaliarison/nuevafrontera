'use client';

import { useState, useCallback } from 'react';

export default function MobileNavToggle({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div
        className={`nav__menu${isOpen ? ' active' : ''}`}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.closest('a:not([href="#"])')) {
            close();
          }
        }}
      >
        {children}
      </div>
      <div
        className={`nav__toggle${isOpen ? ' active' : ''}`}
        onClick={toggle}
        role="button"
        aria-label="Toggle navigation"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
