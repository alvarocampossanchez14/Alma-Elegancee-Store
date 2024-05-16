import React from "react";
import productImage from "../assets/product_1.webp";

import { FaTrash } from "react-icons/fa";

const ProductCart = ({product, removeFromCart}) => {
    return (
        <div className="product-cart flex flex-col p-3 items-start border-b-2 w-full">
            <div className="flex flex-row gap-4 items-center">
                <div className="product-cart-img">
                    <img src={productImage} alt="Product" className="size-44" />
                </div>
                <div className="product-cart-info">
                    <p className="product-cart-title">Product Name</p>
                    <p className="product-cart-price">Price</p>
                    <p className="product-cart-quantity">Quantity</p>
                </div>

            </div>
            <div className="product-cart-delete my-4 ">
                  <button className="flex flex-row items-center" onClick={() => removeFromCart(product.id)}>
                    <FaTrash className="size-5 text-black"/>
                    <h4 className="text-xs font-bold">Eliminar</h4>
                  </button>
                </div>            
        </div>
        
    );
}

export default ProductCart;