'use client';

import React from 'react';
import Link from 'next/link';

export default function LanguagesList() {
  const languages = [
    {
      name: 'Italiano',
      locale: 'it',
    },
    {
      name: 'English',
      locale: 'en',
    },
    {
      name: 'Français',
      locale: 'fr',
    },
    {
      name: 'Deutsch',
      locale: 'de',
    },
    {
      name: 'Español',
      locale: 'es',
    },
    {
      name: 'Nederlands',
      locale: 'nl',
    },
    {
      name: 'Português',
      locale: 'pt',
    },
    {
      name: '中文',
      locale: 'zh',
    },
    {
      name: 'Русский',
      locale: 'ru',
    },
  ];

  return (
    <div className='absolute flex w-fit flex-col rounded-lg border-2 border-primary-color bg-bkg p-4 text-center z-10'>
      {languages.map((language, key) => (
        <Link
          key={key}
          href={language.locale}
          locale={language.locale}
          className='m-auto block w-fit text-primary-color hover:scale-105 hover:cursor-pointer'
          style={{ fontSize: '20px' }}
        >
          {language.name}
        </Link>
      ))}
    </div>
  );
}
