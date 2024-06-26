import React from "react";
import { useCart } from "../hook/useCart"; 
import { BsCartFill, BsCartDashFill } from "react-icons/bs";
import {useTranslation} from "react-i18next";

const ProductCard = ({product}) => {  
    const {i18n} = useTranslation();

    const {addToCart, cart, removeFromCart} = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    const isProductInCart = checkProductInCart(product) 

    return (
        <div className="product-card bg-[#FAFAFA] border-l-black flex flex-col border-b-black border-2 xl:w-80 md:w-80 lg:w-80 p-5 rounded-md relative z-10">
            <div className="product-card__image flex justify-center">
                <img src={product.src} alt="Product" className="rounded-md" />
            </div>
            <div className="flex flex-row items-center gap-5 py-5">
                <div className="product-card__info-container ml-0" >
                    <div className="product-card__info flex flex-col ">
                        <span>{product.name[i18n.language]}</span>
                        {/* <p>{product.description[i18n.language]}</p> */}
                        <strong>{product.price}€</strong>
                    </div>
                </div>

                <button onClick={() =>
                     isProductInCart 
                        ? removeFromCart(product)
                        : addToCart(product, 1)} 
                        className={`w-10 h-10 border-2 border-black rounded-full flex flex-row items-center justify-center   hover:translate-y-[-5px] ${isProductInCart ? "bg-black" : "bg-white"}`}>
                        {
                            isProductInCart 
                            ? <BsCartDashFill className="text-white"/> 
                            : <BsCartFill/> 
                        }
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
