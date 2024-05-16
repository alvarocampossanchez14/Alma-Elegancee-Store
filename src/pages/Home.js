import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';  

import Header from '../components/Header';
import Footer  from '../components/Footer';

import Products from '../components/Products';
import Card from '../components/Cart';

const Home = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);


    useEffect(() => {
        if(showCart){
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showCart])

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    const addToCart = (product) => {
        setCartCount(cartCount + 1);
        const uniqueId = uuidv4();
        setCartItems([...cartItems, {...product, id: uniqueId}]);
    }

    const removeFromCart = (productId) => {
        setCartCount(cartCount - 1);
        setCartItems(cartItems.filter(product => product.id !== productId))
    }

    return (
       <div>
        <Header cartCount={cartCount} toggleCart={toggleCart}/>
        {showCart && <Card cartCount={cartCount}  cartItems={cartItems} removeFromCart={removeFromCart} toggleCart={toggleCart}/>}
        <Products addToCart={addToCart}/>
        <Footer />
       </div>
    )
}

export default Home;