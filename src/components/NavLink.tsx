'use client';

import { Link, usePathname } from '@/i18n/navigation';

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, className = 'nav__link', children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`${className}${isActive ? ' nav__link--active' : ''}`}
    >
      {children}
    </Link>
  );
}
