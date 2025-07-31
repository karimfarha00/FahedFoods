// app/[locale]/layout.tsx

import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: 'en' | 'ar' };
}) {
  let messages;

  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  }catch (error) {
  console.error('Translation load error:', error);
  notFound(); // fallback if loading messages fails
}

  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
