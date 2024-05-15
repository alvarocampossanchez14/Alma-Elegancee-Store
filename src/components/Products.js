import React from "react";
import ProductCard from "./ProductCard";   // Import the ProductCard component

const Products = () => {
    return (
        <section className="p-20">
            <div className="products grid grid-cols-5 gap-20">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default Products;