import React from 'react';
import { useTranslations } from 'next-intl';

export default function CTA({ type, icon, className, onClick, text }) {
  const t = useTranslations('CTA');

  const handleClick = () => {
    if (type === 'donate' || type === 'donate_small') {
    } else if (type === 'telegram' || type === 'telegram_small') {
      window.open('https://t.me/BitPolitoForum', '_blank');
    } else if (type === 'join-us') {
      window.open('https://forms.gle/P9mzEhqh8DdrkyQ96', '_blank');
    } else if (type === 'backToTop') {
      onClick();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  };
  return (
    <>
      {type === 'donate' && (
        <div className='inline-block w-full'>
          <button
            className={`text-md flex h-10 w-full cursor-pointer flex-row items-center justify-center rounded-primary bg-primary-color px-2 py-1 align-middle font-medium text-bkg hover:scale-105 ${className}`}
            onClick={handleClick}
          >
            <img src={icon} className='ml-2 mr-2 h-auto w-5' />
            <span className='ml-2 mr-2'>{t('donate')}</span>
          </button>
        </div>
      )}
      {type === 'donate_small' && (
        <div className='inline-block w-full'>
          <button
            className={`flex h-10 w-full cursor-pointer flex-row items-center justify-center rounded-primary bg-primary-color px-2 py-1 align-middle text-bkg hover:scale-105 ${className}`}
            onClick={handleClick}
          >
            <img src={icon} className='ml-2 mr-2 h-auto w-5' />
            <span className='ml-2 mr-2'>{t('donate')}</span>
          </button>
        </div>
      )}
      {type === 'telegram' && (
        <div className='inline-block max-md:w-full'>
          <button
            className={`flex h-28 cursor-pointer flex-row items-center justify-center rounded-primary border-[1.5px] border-solid border-primary-color bg-bkg px-2 py-1 align-middle font-medium text-primary-color hover:scale-105 max-md:w-full ${className}`}
            onClick={handleClick}
          >
            <img src={icon} className='ml-10 mr-2 h-auto w-6' />
            <span className='ml-2 mr-10 text-lg font-semibold'>
              {t('telegram')}
            </span>
          </button>
        </div>
      )}
      {type === 'telegram_small' && (
        <div className='inline-block max-md:w-full'>
          <button
            className={`flex h-10 cursor-pointer flex-row items-center justify-center rounded-primary border-[1.5px] border-solid border-primary-color bg-bkg px-2 py-1 align-middle text-primary-color hover:scale-105 max-md:w-full ${className}`}
            onClick={handleClick}
          >
            <img src={icon} className='ml-4 mr-2 h-auto w-6' />
            <span className='ml-2 mr-4 text-lg font-normal'>
              {text}
            </span>
          </button>
        </div>
      )}
      {type === 'join-us' && (
        <div className='inline-block max-md:w-full'>
          <button
            className={`flex h-28 cursor-pointer flex-row items-center justify-center rounded-primary border-[1.5px] border-solid border-primary-color bg-bkg px-2 py-1 align-middle font-medium text-primary-color hover:scale-105 max-md:w-full ${className}`}
            onClick={handleClick}
          >
            <img src={icon} className='ml-10 mr-2 h-auto w-6' />
            <span className='ml-2 mr-10 text-lg font-semibold'>
              {t('apply')}
            </span>
          </button>
        </div>
      )}
      {type === 'backToTop' && (
        <div className='inline-block max-md:w-full'>
          <button
            className={`flex h-10 cursor-pointer flex-row items-center justify-center rounded-primary border-[1.5px] border-solid border-primary-color bg-bkg px-2 py-1 align-middle font-medium text-primary-color hover:scale-105 max-md:w-full ${className}`}
            onClick={handleClick}
          >
            <img src={icon} className='ml-2 mr-2 h-auto w-6' />
            <span className='ml-2 mr-2 text-lg font-normal'>
              {text}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
