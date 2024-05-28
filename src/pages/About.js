import React from "react";
import BannerIMG from "../assets/image-banner.webp";

import { useTranslation } from "react-i18next";

const About =  () => {

    const {t} = useTranslation();

    return (
        <div>
            <section className="container mx-auto px-4 mt-20">
                <h1 className="text-4xl font-bold uppercase text-center mb-10">{t('about.title')}</h1>
                   <div className="flex flex-col justify-center items-center">
                        <img src={BannerIMG} alt="Banner IMG" className="w-4/6 h-100 rounded-md saturate-0 z-[-2]" />

                        <div className="text_about my-10 mx-10 xl:mx-60">
                            <div className="flex flex-col gap-7 my-7 font-light text-center">
                                <p className="">{t('about.firstParagraph')}</p>
                                <p>{t('about.secondParagraph')}</p>
                                <p>{t('about.thirstParagraph')}</p>
                            </div>
                        </div>

                   </div>
            </section>
        </div>
    )
}


export default About;