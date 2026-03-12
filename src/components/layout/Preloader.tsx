'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 600);

    const onLoad = () => setTimeout(() => setHidden(true), 600);
    window.addEventListener('load', onLoad);

    // Fallback
    const fallback = setTimeout(() => setHidden(true), 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <div className={`preloader${hidden ? ' hidden' : ''}`} id="preloader">
      <div className="preloader__text">Nueva Frontera</div>
    </div>
  );
}
