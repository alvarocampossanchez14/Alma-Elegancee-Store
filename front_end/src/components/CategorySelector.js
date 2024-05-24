import React from 'react'
import { Link } from 'react-router-dom';

import ModeloHombre from '../assets/modelo_hombre.jpg'
import ModeloMujer from '../assets/modelo_mujer.jpg'

import {useTranslation} from 'react-i18next'

const CategorySelector = ({}) => {

    const {t} = useTranslation()

    return (
        <div className='w-full h-full bg-black text-white flex flex-row m-0 p-0'>

            <div className='w-1/2 overflow-hidden relative'>
                <Link to="/coleccion/hombre" className="block w-full h-full hover:scale-[1.1] transition-transform duration-500">
                    <img src={ModeloHombre} className='h-full w-full object-cover opacity-50'/>
                    <div className="absolute flex justify-center items-center inset-0">
                        <button className='bg-transparent py-2 px-4 rounded opacity-75'>
                            <span className='capitalize text-4xl font-bold'>{t('catSelector.man')}</span>
                        </button>
                    </div>
                </Link>
            </div>

            <div className='w-1/2 overflow-hidden relative'>
                <Link to="/coleccion/mujer" className="block w-full h-full hover:scale-[1.1] transition-transform duration-500">
                        <img src={ModeloMujer} className='h-full w-full object-cover opacity-50'/>
                        <div className="absolute flex justify-center items-center inset-0">
                            <button className='bg-transparent py-2 px-4 rounded opacity-75'>
                                <span className='capitalize text-4xl font-bold'>{t('catSelector.women')}</span>
                            </button>
                        </div>
                </Link>
            </div>
        </div>
    )
}

export default CategorySelector;