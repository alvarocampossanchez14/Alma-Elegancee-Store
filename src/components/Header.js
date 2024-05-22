import React from 'react';
import logo from '../assets/Logo_Letras.png';
import { Link } from 'react-router-dom';

import { FiShoppingCart } from "react-icons/fi";

const Header = ({cartCount, toggleCart}) => {



    
    return (
        <header>
            <div className='w-100 font-semibold flex flex-col justify-center items-center pr-20 pl-20'>
                <img src={logo} alt="Logo" className='size-30'/>
                <div className='flex flex-row justify-center items-center'>
                    <nav>
                        <ul className='flex flex-row'>
                            <li className='mx-2'><Link to="/">Inicio</Link></li>
                            <li className='mx-2'><Link to="/colecciones">Colecciones</Link></li>
                            <li className='mx-2'><Link to="/nosotros">Nosotros</Link></li>
                        </ul>
                    </nav>
                    <div className='relative'>
                      <button onClick={toggleCart}>
                        {/* <span className='z-[-1] rounded-full bg-red-500 w-4 h-4 flex items-center justify-center absolute top-[-15px] left-3 text-white text-xs'>0</span> */}
                        <FiShoppingCart className='size-5'/>
                      </button>
                    </div>
                </div>
            </div>

            <div className='w-100 bg-black my-3'>
                <div className='flex flex-row justify-center text-white'>
                    <h5 className='italic font-light p-3'>"Siente la elegancia, vive el alma"</h5>
                </div>
            </div>
        </header>
    );
};

export default Header;