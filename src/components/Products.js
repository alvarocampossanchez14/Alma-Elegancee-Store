import React from "react";
import ProductCard from "./ProductCard";   // Import the ProductCard component

const Products = ({addToCart}) => {
    return (
        <section className="p-0 md:p-0 xl:p-20">

            <div className="products grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
                <ProductCard addToCart={addToCart}/>
            </div>
        </section>
    );
};

export default Products;