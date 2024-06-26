import React, {lazy, Suspense} from "react";
import { Helmet } from "react-helmet";
import BannerIMG from '../assets/image-banner.webp'

import { useTranslation } from "react-i18next";

const About =  () => {

    const {t} = useTranslation();

    const schemaData = {
        '@context': "https://schema.org",
        '@type': "WebPage",
        '@name': t('about.title'),
        '@description': t('about-description'),
        'image': 'https://www.almaelegancee.es/static/media/image-banner.91cd2c855881533560f4.webp'
    }

    return (
        <div>
            <Helmet>
                <title>{t('about.title')}</title>
                <meta name="description" content={t('about.pageDescription')} />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <Suspense fallback={<div>Loading...</div>}>
                <section className="container mx-auto px-4 mt-20">
                    <h1 className="text-4xl font-bold uppercase text-center mb-10">{t('about.title')}</h1>
                    <div className="flex flex-col justify-center items-center">
                        <img src={BannerIMG} alt={t('about.bannerAltText')} loading="lazy" className="w-4/6 h-100 rounded-md saturate-0 z-[-2]" />
                        <div className="text_about my-10 mx-10 xl:mx-60">
                            <div className="flex flex-col gap-7 my-7 font-light text-center">
                                <p className="text-neutral-500">{t('about.firstParagraph')}</p>
                                <p className="text-neutral-500">{t('about.secondParagraph')}</p>
                                <p className="text-neutral-500">{t('about.thirstParagraph')}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Suspense>
        </div>
    )
}


export default About;