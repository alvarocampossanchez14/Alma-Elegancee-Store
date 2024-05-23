import React from "react";

import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className="bg-black text-white text-center p-3 w-full relative bottom-0 left-0 ">
            <div className="flex flex-row justify-center items-center gap-[20vh]">

                <div>
                    <p className="text-white">{t('footer.title')}</p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-500">Powered by Álvaro Campos</p>  
                    <p className="text-gray-500">© 2024 {t('footer.copyright')}</p>   
                </div>
            </div>
        </footer>
    );
};

export default Footer;