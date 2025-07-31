// app/[locale]/page.tsx

'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations(); // Now you can access translations

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{t('home.title')}</h1>
      <p className="mt-4 text-lg">{t('home.description')}</p>
    </div>
  );
}
