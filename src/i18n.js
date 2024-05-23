import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next
.use(Backend)
.use(initReactI18next)
.init({
    supportedLngs: ['es', 'ca'],
        fallbackLng: 'es',
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

export default i18next;