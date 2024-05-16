import React from "react";
import Productimg from "../assets/product_1.webp";
import { IoBagSharp } from "react-icons/io5";





const ProductCard = ({addToCart}) => {  

    return (
        <div className="product-card bg-[#FAFAFA] border-l-black flex flex-col border-b-black border-2 p-5 m-auto w-80 rounded-md">
            <div className="product-card__image flex justify-center">
                <img src={Productimg} alt="Product" className="rounded-md my-3" />
            </div>
            <div className="flex flex-row items-center gap-9">
                <div className="product-card__info flex flex-col ">
                    <h2>(Product Name)</h2>
                    <p>(Product Description)</p>
                    <p>($ 0.00)</p>
                </div>
                <button onClick={addToCart} className="w-10 h-10 border-2 border-black rounded-full flex flex-row items-center justify-center  hover:translate-y-[-5px]">
                        <IoBagSharp className="size-5"/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
