import React from "react";
import ProductCard from "./ProductCard";   // Import the ProductCard component

const Products = ({addToCart, products}) => {

    return (
        <section className="p-0 md:p-0 xl:p-20 my-10 flex flex-col justify-center items-center w-full">
            <ul className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-[6rem]">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                ))}
            </ul>
        </section>
    );
};

export default Products;