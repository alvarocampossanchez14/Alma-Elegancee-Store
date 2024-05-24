import React, {useState} from 'react'

import Products from '../components/Products';
import  {Filters} from '../components/Filters';
import {products as initialProducts, products} from "../mocks/ManProductList"; // Import the products data

const ProductsMan = () => {

    const [products] = useState(initialProducts)
    const [filters, setFilters] = useState({
      category: "all",
      minPrice: 0
    })
  
    const filterProducts = (products) => {
      return products.filter(products => {
        return products.price >= filters.minPrice &&
        (filters.category === "all" || products.category === filters.category)
      })
    }
  
    const filteredProducts = filterProducts(products)

    return (
        <div>
            <Filters setFilters={setFilters}/>
            <Products products={filteredProducts}/>
        </div>
    )
}

export default ProductsMan;