import React from 'react';
import logo from '../assets/Logo_Letras.png';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from "react-icons/fi";

import { useTranslation} from 'react-i18next'

import catIcon from '../assets/bandera_cat.png'

const LanguageSelector = () => {
    const {i18n} = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

    const toggleLanguage = () => {
        if(i18n.language === 'es') {
            changeLanguage('ca')
        } else if(i18n.language === 'ca') {
            changeLanguage('es')
        }
    }

    

    return (
        <div className='flex flex-row gap-1 ml-5'>
            <button onClick={() => toggleLanguage()}>
                {i18n.language === 'es' ? <img src={catIcon}/> : '🇪🇸' }
            </button>
        </div>
    )
}

const Header = ({cartCount, toggleCart}) => {

const {t} = useTranslation()
    
    return (
        <header>
            <div className='w-100 font-semibold flex flex-col justify-center items-center pr-20 pl-20'>
                <img src={logo} alt="Logo" className='size-30'/>
                <div className='flex flex-row justify-center items-center'>
                    <nav>
                        <ul className='flex flex-row'>
                            <li className='mx-2'><Link to="/">{t('header.title')}</Link></li>
                            <li className='mx-2'><Link to="/nosotros">{t('header.about')}</Link></li>
                            <li className='mx-2'><Link to="/contacto">{t('header.contact')}</Link></li>
                        </ul>
                    </nav>
                    <div className='relative'>
                      <button onClick={toggleCart}>
                        {/* <span className='z-[-1] rounded-full bg-red-500 w-4 h-4 flex items-center justify-center absolute top-[-15px] left-3 text-white text-xs'>0</span> */}
                        <FiShoppingCart className='size-5'/>
                      </button>
                    </div>
                    <div>
                        <LanguageSelector/>
                    </div>
                </div>
            </div>

            <div className='w-100 bg-black mt-3'>
                <div className='flex flex-row justify-center text-white'>
                    <h5 className='italic font-light p-3'>"{t('header.motto')}"</h5>
                </div>
            </div>
        </header>
    );
};

export default Header;