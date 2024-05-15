import React, {useState} from "react";

import Header from '../components/Header';
import Footer  from '../components/Footer';

import Products from '../components/Products';

const Home = () => {

    const [cartCount, setCartCount] = useState(0);

    const addToCart = () => {
        setCartCount(cartCount + 1);
    }

    return (
       <div>
        <Header cartCount={cartCount}/>
        <Products addToCart={addToCart}/>
        <Footer />
       </div>
    )
}

export default Home;