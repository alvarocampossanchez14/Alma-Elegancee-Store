import {useState, useId} from 'react'

import {useTranslation} from "react-i18next"

export function Filters({setFilters}) {

    const [minPrice, setMinPrice] = useState(0) 
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }   

    const {t} = useTranslation()

    return (
        <section className='flex flex-col xl:flex-row md:flex-row gap-5 items-center right-0 z-[-1] justify-center mt-4'>
            <div className='flex flex-row items-center gap-2'>
                <label htmlFor={minPriceFilterId}>{t('filters.price')}</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    defaultValue={minPrice}
                    min="0"
                    max="100"
                    onChange={handleChangeMinPrice}
                    className='appearance-none w-22 h-[2px] bg-black rounded-md shadow-inner'
                />
                <span>{minPrice} €</span>
            </div>

            <div className='flex flex-row gap-2 items-center'>
                <option value="all">{t('filters.filtersName.all')}</option>
                <select id={categoryFilterId} onChange={handleChangeCategory} className='bg-transparent border-2 border-black rounded-md p-1 m-0'>
                    <option value="all">{t('filters.filtersName.all')}</option>
                    <option value="camisetas">{t('filters.filtersName.camisetas')}</option>
                    <option value="camisas">{t('filters.filtersName.camisas')}</option>
                    <option value="pantalones">{t('filters.filtersName.pantalones')}</option>
                </select>
            </div>
        </section>
    )
}