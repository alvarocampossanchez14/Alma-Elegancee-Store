import React from "react";
import Productimg from "../assets/product_1.webp";

const ProductCard = () => {  
    return (
        <div className="product-card bg-white border-l-black flex flex-col border-b-black border-2 p-5 m-auto w-80 rounded-md">
            <div className="product-card__image flex justify-center">
                <img src={Productimg} alt="Product" className="rounded-md my-3" />
            </div>
            <div className="product-card__info flex flex-col ">
                <h2>(Product Name)</h2>
                <p>(Product Description)</p>
                <p>($ 0.00)</p>
            </div>
        </div>
    );
};

export default ProductCard;
