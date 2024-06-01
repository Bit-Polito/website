import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useBodyClassChangeEffect } from '../hooks/useBodyClassChangeEffect';
import { getImagePathBasedOnTheme } from '../utils/utils';

export const CTAs = {
  linkedIn: '',
  instagram: '',
  youtube: '',
  spotify: '',
  github: '',
  email: '',
};

export const CTAsMobile = {
  linkedInMobile: '',
  instagramMobile: '',
  youtubeMobile: '',
  spotifyMobile: '',
  githubMobile: '',
  emailMobile: '',
};

export default function LinksBar() {
  const [ctasPaths, setCtasPaths] = useState(CTAs);
  const [mobileCtasPaths, setMobileCtasPaths] = useState(CTAsMobile);
  const [isFetching, setIsFetching] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setCtasPaths((prev) => {
      for (let cta in CTAs) {
        prev[cta] = getImagePathBasedOnTheme(
          cta,
          document.body.classList.contains('dark-theme')
        );
      }
      return prev;
    });
    setMobileCtasPaths((prev) => {
      for (let cta in CTAsMobile) {
        prev[cta] = getImagePathBasedOnTheme(
          cta,
          document.body.classList.contains('dark-theme')
        );
      }
      return prev;
    });
    setIsFetching(false);
  }, []);

  useBodyClassChangeEffect(() => {
    setCtasPaths((prev) => {
      for (let cta in CTAs) {
        prev[cta] = getImagePathBasedOnTheme(
          cta,
          document.body.classList.contains('dark-theme')
        );
      }
      return prev;
    });
    setMobileCtasPaths((prev) => {
      for (let cta in CTAsMobile) {
        prev[cta] = getImagePathBasedOnTheme(
          cta,
          document.body.classList.contains('dark-theme')
        );
      }
      return prev;
    });
    setKey((prev) => prev + 1);
  });

  return (
    <div>
      {!isFetching && (
        <div
          key={key}
          className='mx-3 mt-10 flex flex-row items-center justify-center gap-4 md:mt-14'
        >
          <Link
            href='https://www.linkedin.com/company/bitpolito/?originalSubdomain=it'
            target='_blank'
          >
            <Image
              src={ctasPaths.linkedIn}
              width={150}
              height={150}
              alt='linkedin'
              className='hidden hover:scale-105 md:block'
            />
            <Image
              src={mobileCtasPaths.linkedInMobile}
              width={50}
              height={50}
              alt='linkedin'
              className='block hover:scale-105 md:hidden'
            />
          </Link>
          <Link href='https://www.instagram.com/bitpolito/' target='_blank'>
            <Image
              src={ctasPaths.instagram}
              width={150}
              height={150}
              alt='instagram'
              className='hidden hover:scale-105 md:block'
            />
            <Image
              src={mobileCtasPaths.instagramMobile}
              width={50}
              height={50}
              alt='instagram'
              className='block hover:scale-105 md:hidden'
            />
          </Link>
          <Link href='https://www.youtube.com/@BitPolito' target='_blank'>
            <Image
              src={ctasPaths.youtube}
              width={150}
              height={150}
              alt='youtube'
              className='hidden hover:scale-105 md:block'
            />
            <Image
              src={mobileCtasPaths.youtubeMobile}
              width={50}
              height={50}
              alt='youtube'
              className='block hover:scale-105 md:hidden'
            />
          </Link>
          <Link
            href='https://open.spotify.com/show/3xXqSrkyLloGhTozWMnuhH'
            target='_blank'
          >
            <Image
              src={ctasPaths.spotify}
              width={150}
              height={150}
              alt='spotify'
              className='hidden hover:scale-105 md:block'
            />
            <Image
              src={mobileCtasPaths.spotifyMobile}
              width={50}
              height={50}
              alt='spotify'
              className='block hover:scale-105 md:hidden'
            />
          </Link>
          <Link href='https://github.com/BitPolito' target='_blank'>
            <Image
              src={ctasPaths.github}
              width={150}
              height={150}
              alt='github'
              className='hidden hover:scale-105 md:block'
            />
            <Image
              src={mobileCtasPaths.githubMobile}
              width={50}
              height={50}
              alt='github'
              className='block hover:scale-105 md:hidden'
            />
          </Link>
          <Link href='mailto: info@bitpolito.it' target='_blank'>
            <Image
              src={ctasPaths.email}
              width={150}
              height={150}
              alt='email'
              className='hidden hover:scale-105 md:block'
            />
            <Image
              src={mobileCtasPaths.emailMobile}
              width={50}
              height={50}
              alt='email'
              className='block hover:scale-105 md:hidden'
            />
          </Link>
        </div>
      )}
    </div>
  );
}
