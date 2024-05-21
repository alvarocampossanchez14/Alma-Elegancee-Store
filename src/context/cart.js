import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {

        setCart(prevCart => {
            const productInCartIndex = prevCart.findIndex(item => item.id === product.id)

            if(productInCartIndex >= 0) {
                const newCart = [...prevCart]
                newCart[productInCartIndex].quantity += 1
                return newCart 
            } else {
                return [
                    ...prevCart,
                    {
                        ...product,
                        quantity: 1
                    }
                ]
            }
        })

        // const productInCartIndex = cart.findIndex(item => item.id === product.id);

        // if (productInCartIndex >= 0) {
        //     const newCart = structuredClone(cart);
        //     newCart[productInCartIndex].quantity += quantity;
        //     return setCart(newCart);
        // }

        // setCart(prevState => ([
        //     ...prevState,
        //     {
        //         ...product,
        //         quantity: quantity
        //     }
        // ]));
    }

    useEffect(()=> {
        console.log(cart)
    })

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
        console.log("Remove from cart:", cart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}   

