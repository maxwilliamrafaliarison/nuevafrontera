import { Link } from '@/i18n/navigation';
import { getTranslations, getLocale } from 'next-intl/server';

interface BreadcrumbsProps {
  current: string;
}

export default async function Breadcrumbs({ current }: BreadcrumbsProps) {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: 'ui' });

  return (
    <nav className="breadcrumbs">
      <Link href="/">{t('breadcrumb.home')}</Link>
      <span>/</span>
      {current}
    </nav>
  );
}
