import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fi from './fi.json';
import en from './en.json';
import sv from './sv.json';

i18n.use(initReactI18next).init({
  lng: 'fi',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fi: {
      translation: fi,
    },
    en: {
      translation: en,
    },
    sv: {
      translation: sv,
    },
  },
});

export default i18n;
