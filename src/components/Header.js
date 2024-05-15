import React from 'react';
import logo from '../assets/Logo_Letras.png';

const Header = () => {
    return (
        <header>
            <div className='w-100 font-semibold flex flex-col justify-center items-center pr-20 pl-20'>
                <img src={logo} alt="Logo" className='size-30'/>
                    <nav>
                        <ul className='flex flex-row'>
                            <li className='mx-2'><a href="https://reactjs.org">Inici</a></li>
                            <li className='mx-2'><a href="https://reactjs.org">Coleccions</a></li>
                            <li className='mx-2'><a href="https://reactjs.org">Sobre Nosotros</a></li>
                        </ul>
                    </nav>
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