import { getImagePathBasedOnTheme } from '../utils/utils';
import { useEffect, useState } from 'react';
import { useBodyClassChangeEffect } from '../hooks/useBodyClassChangeEffect';
import { useTranslations } from 'next-intl';
import CTA from './CTA';

export default function CenterBar() {
  const t = useTranslations('CenterBar');
  let [mainImagePath, setMainImagePath] = useState('');
  let [cta1ImagePath, setCta1ImagePath] = useState('');
  let [cta2ImagePath, setCta2ImagePath] = useState('');
  let [donaOraImagePath, setDonaOraImagePath] = useState('');

  useBodyClassChangeEffect(() => {
    setMainImagePath(
      getImagePathBasedOnTheme(
        'bitpolito',
        document.body.classList.contains('dark-theme')
      )
    );
    setCta1ImagePath(
      getImagePathBasedOnTheme(
        'telegram-icon',
        document.body.classList.contains('dark-theme')
      )
    );
    setCta2ImagePath(
      getImagePathBasedOnTheme(
        'join-us',
        document.body.classList.contains('dark-theme')
      )
    );
    setDonaOraImagePath(
      getImagePathBasedOnTheme(
        'dona-ora',
        document.body.classList.contains('dark-theme')
      )
    );
  });

  return (
    <>
      <div className='ml-auto mr-auto mt-6 block w-fit max-w-[25rem] max-md:mt-0'>
        <img src={mainImagePath} className='h-auto w-400px' />
        <p
          className='ml-3 mt-5 font-medium tracking-wide text-primary-color'
          style={{ fontSize: '20px', lineHeight: '22px' }}
        >
          {t('presentation')}
        </p>
      </div>
      <div className='m-auto mt-8 block w-fit' style={{ height: '40px' }}>
        <CTA type='donate' icon={donaOraImagePath} fill={true} />
      </div>
      <div className='mt-16 flex h-28 flex-row justify-center gap-4 max-md:hidden'>
        <CTA type='telegram' icon={cta1ImagePath} />
        <CTA type='join-us' icon={cta2ImagePath} />
      </div>
      <div className='m-auto mx-7 mt-12 block w-auto items-center justify-center md:hidden'>
        <CTA type='telegram' icon={cta1ImagePath} className='mb-2' />
        <CTA type='join-us' icon={cta2ImagePath} className='mt-2' />
      </div>
    </>
  );
}
