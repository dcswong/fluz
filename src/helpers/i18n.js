import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

module.exports = i18n.use(XHR).init({
    fallbackLng: 'en_US',
    ns: ['common', 'frame', 'checkout', 'complete', 'product'],
    defaultNS: 'common',
    keySeparator: '.',
    interpolation: { escapeValue: false },
    backend: { loadPath: "/assets/locales/{{lng}}/{{ns}}.json" },
    react: {
        wait: true,
        withRef: true,
    }
});