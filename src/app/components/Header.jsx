'use client';

import React, { useEffect, useRef, useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguagesList from './LanguagesList';
import { useTranslations } from 'next-intl';
import '../styles/index.css';

export default function Header() {
  const t = useTranslations('Header');
  let [theme, setTheme] = useState('');
  let [languagesListOpen, setLanguagesListOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        console.log('click outside');
        // Click occurred outside of the menu, so close the menu
        setLanguagesListOpen(false);
      }
    }

    // Attach event listener when the menu is open
    if (languagesListOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    // Remove event listener when the menu is closed
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [languagesListOpen]);

  const changeTheme = () => {
    setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    localStorage.setItem(
      'theme',
      theme === 'dark-theme' ? 'light-theme' : 'dark-theme'
    );
  };

  useEffect(() => {
    const local_theme = localStorage.getItem('theme');
    console.log(local_theme);
    if (local_theme) {
      setTheme(local_theme);
      if (local_theme === 'dark-theme') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
      }
      document.body.classList.add('dark-theme');
    } else {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
      }
      document.body.classList.add('light-theme');
    }
  }, [theme]);

  return (
    <div className='mt-8 flex flex-row justify-center'>
      <div className='flex w-1/2 justify-end'>
        <DarkModeToggle
          changeTheme={changeTheme}
          isChecked={theme == 'dark-theme' ? true : false}
        />
      </div>
      <div
        className='ml-3 flex w-1/2 justify-start'
        style={{ borderRadius: '20px' }}
        ref={menuRef}
      >
        <button
          className='h-8 w-14 cursor-pointer rounded-full bg-primary-color px-2 py-1 text-sm font-bold text-bkg'
          onClick={setLanguagesListOpen}
        >
          {t('language').toLocaleUpperCase()}
        </button>
      </div>
      {languagesListOpen && <LanguagesList />}
    </div>
  );
}
