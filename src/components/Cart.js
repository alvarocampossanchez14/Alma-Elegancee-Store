import React from "react";

import ProductCart from "./ProductCart";

import { FaCartShopping } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";


const Cart = ({cartItems, removeFromCart, cartCount, toggleCart}) => { 

    return (
        <div className="cart bg-white border-2  fixed right-0 top-0 w-96 h-full p-4 py-10">
            <div className="cart-content flex flex-col items-center">
                <button className="fixed top-4 right-5" onClick={toggleCart}>
                    <IoIosCloseCircleOutline className="size-7"/>
                </button>
                <h2 className="cart-title text-xl">Carrito</h2>
                <FaCartShopping className="product-card-icon size-10"/>
                <p className="product-cart-price"></p>
                {cartCount === 0 ? (
                    <p className="product-cart-cart">La cesta está vacia</p>
                ) : (
                    <div className="my-5">
                        {cartItems.map((product) => (
                            <ProductCart key={product.id} product={product} removeFromCart={removeFromCart}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;