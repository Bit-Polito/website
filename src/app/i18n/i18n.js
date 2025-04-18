import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationDE from './locales/de/de.json';
import translationEN from './locales/en/en.json';
import translationES from './locales/es/es.json';
import translationFR from './locales/fr/fr.json';
import translationIT from './locales/it/it.json';
import translationNL from './locales/nl/nl.json';
import translationPT from './locales/pt/pt.json';
import translationRU from './locales/ru/ru.json';
import translationZH from './locales/zh/zh.json';

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        it: { translation: translationIT },
        de: { translation: translationDE },
        es: { translation: translationES },
        fr: { translation: translationFR },
        nl: { translation: translationNL },
        pt: { translation: translationPT },
        ru: { translation: translationRU },
        zh: { translation: translationZH }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
