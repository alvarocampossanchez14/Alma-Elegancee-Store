import React, { useState } from 'react';
import logo from '../assets/Logo_Letras.png';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from "react-icons/fi";
import catIcon from '../assets/bandera_cat.png';
import { FaRegUser } from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import UserDropdown from './UserDropdown';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    const toggleLanguage = () => {
      if (i18n.language === 'es') {
        changeLanguage('ca');
      } else if (i18n.language === 'ca') {
        changeLanguage('es');
      }
    };

  
    return (
      <div className='flex flex-row gap-1 ml-5'>
        <button onClick={() => toggleLanguage()}>
          {i18n.language === 'es' ? <img src={catIcon} alt="Catalan Flag" /> : '🇪🇸'}
        </button>
      </div>
    );
  };

const Header = ({ cartCount, toggleCart }) => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer)
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
        setShowDropdown(false)
    }, 300)
  };

  return (
    <header>
     <div className='w-100 font-semibold flex flex-col justify-center items-center pr-20 pl-20'>
  <img src={logo} alt="Logo" className='size-30' />
  <div className='flex flex-row justify-center items-center gap-3'>
    <nav className='flex flex-row gap-3'>
      <ul className='flex flex-row'>
        <li className='mx-2'><Link to="/">{t('header.title')}</Link></li>
        <li className='mx-2'><Link to="/nosotros">{t('header.about')}</Link></li>
        <li className='mx-2'><Link to="/contacto">{t('header.contact')}</Link></li>
      </ul>

        <div className='relative'>
          <button onClick={toggleCart}>
            <FiShoppingCart className='size-5' />
          </button>
        {/* <span className='font-light'>0</span> */}
      </div>

      <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <FaRegUser className='size-5' />
        {showDropdown && <UserDropdown isVisible={showDropdown} /> }
      </div>
    </nav>

   

    <div>
      <LanguageSelector />
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
