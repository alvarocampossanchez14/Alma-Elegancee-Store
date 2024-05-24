import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]")
export function CartProvider({children}) {

    const [cart, setCart] = useState(cartFromLocalStorage)

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

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
    }

       const removeFromCart = product => {
        setCart(prevCart => {
            const productInCartIndex = prevCart.findIndex(item => item.id === product.id);
            if (productInCartIndex >= 0) {
                const newCart = [...prevCart];
                const productInCart = newCart[productInCartIndex];
                if (productInCart.quantity > 1) {
                    productInCart.quantity -= 1;
                } else {
                    newCart.splice(productInCartIndex, 1);
                }
                return newCart;
            }
            return prevCart;
        });
        // console.log("Remove from cart", newCart)
    };

    const clearCart = () => {
        setCart([])
    }

    const calculateTotal = () => {
        return cart.reduce((total, product)=> 
            total += product.price * product.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, calculateTotal}}>
            {children}
        </CartContext.Provider>
    )
}   

