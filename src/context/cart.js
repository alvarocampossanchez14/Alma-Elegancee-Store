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

    useEffect(()=> {
        console.log(cart)
    })

    const removeFromCart = product => {
        setCart(prevState => {
            const productInCartIndex = prevState.findIndex(item => item.id === product.id)

            if(productInCartIndex > 0) {
                const newCart = [...prevState]
                newCart[productInCartIndex].quantity -= 1
                return newCart
            } else {
                prevState.filter(item => item.id !== product.id)
            }

        } 
        )
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

