import localFont from 'next/font/local';
import React from 'react';
import '../globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const sfProDisplay = localFont({
  src: [
    {
      path: '../font/SFProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/SFProDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/SFProDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../font/SFProDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/SFProDisplay-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Bitpolito',
  description: 'bitpolito',
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={sfProDisplay.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
