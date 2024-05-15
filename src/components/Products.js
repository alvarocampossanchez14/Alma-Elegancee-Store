import React from "react";
import ProductCard from "./ProductCard";   // Import the ProductCard component

const Products = ({addToCart}) => {
    return (
        <section className="p-20">

            <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
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