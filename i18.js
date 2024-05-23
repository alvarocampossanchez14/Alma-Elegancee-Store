import i18n from 'i18next'
import {initReactI18next} from 'react-i18next';
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['es', 'cat'],
        fallbackLng: 'cat',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie']
        },
        react: {
            useSuspense: false,
        },
    })

export default i18n