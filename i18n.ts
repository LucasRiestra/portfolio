import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languajes/en.json';
import es from './languajes/es.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;