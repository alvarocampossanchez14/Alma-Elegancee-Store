import React from "react";

import ProductCart from "./ProductCart";

import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useCart } from "../hook/useCart"; 

function CartItem ({src, name, price, title, quantity}) {
    // <button> + </button> 
    const {addToCart} = useCart()   
    return (
        <li className="flex flex-col gap-2 border-b-[1.5px] border-black p-3">
        <img 
            src={src} 
            alt={title}
            className="w-36 h-36"
        />
        <div className="flex flex-row gap-3">
            <strong>{name}</strong>
            <span>-</span>
            <span>{price}€</span>
        </div>
        <footer className="flex flex-row gap-5 items-center justify-center">
            <small>
                Qty: {quantity}
            </small>
            <button className="h-5 w-5 bg-black text-white justify-center items-center flex flex-row rounded-full">+</button>
        </footer>
    </li>
    )
}



const Cart = ({toggleCart}) => { 

    const {cart, clearCart} = useCart()    
    return (
        <aside className="cart bg-white border-2  fixed right-0 top-0 w-96 h-full p-0 py-10 ">
            <div className="cart-content flex flex-col items-center justify-center">
                <button className="fixed top-4 right-5" onClick={toggleCart}>
                    <IoIosCloseCircleOutline className="size-7"/>
                </button>

                <ul className="flex flex-col items-center gap-5">
                    {cart.map(product => (
                        <CartItem 
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <button className="h-12 w-16 my-3 bg-black rounded-md flex flex-row items-center justify-center" onClick={clearCart}>
                        <MdOutlineRemoveShoppingCart size="20" className="text-white"/>
                    </button>
            </div>
        </aside>
    );
}

export default Cart;