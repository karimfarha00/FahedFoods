'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split('/')[1]; // "en" or "ar"
  const newLocale = currentLocale === 'en' ? 'ar' : 'en';

  const switchLocale = () => {
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <button
      onClick={switchLocale}
      className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition"
    >
      {currentLocale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
