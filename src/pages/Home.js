import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';  

import Header from '../components/Header';
import Footer  from '../components/Footer';

import Products from '../components/Products';
import Cart from '../components/Cart';
import { Filters } from "../components/Filters";

import {products as initialProducts} from "../mocks/ProductList"; // Import the products data
import { CartProvider } from "../context/cart";

const Home = () => {



    const [products] = useState(initialProducts);
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
    });

    const filterProducts = (products) => {
        return products.filter(products => {
            return products.price >= filters.minPrice &&
            (filters.category === "all" || products.category === filters.category);
        })
    }

    const filteredProducts = filterProducts(products);  


    const [cartOpen, setCartOpen] = useState(false);   
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    }

    useEffect(() => {
        if(cartOpen){
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    })

    return (
      <CartProvider>
            <Header toggleCart={toggleCart}/>
        {cartOpen && <Cart  toggleCart={toggleCart}/>}
        <Filters setFilters={setFilters}/>
        <Products  products={filteredProducts} />
        <Footer />
      </CartProvider>
    )
}

export default Home;