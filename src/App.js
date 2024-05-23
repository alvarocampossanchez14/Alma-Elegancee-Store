import React, {lazy, Suspense, Component, useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import './App.css';


import {products as initialProducts, products} from "./mocks/ProductList"; // Import the products data

// Pages
const Enlace = lazy(() => import('./pages/Enlace'));
const Proximamente = lazy(() => import('./pages/Proximamente'));
const About = lazy(() => import('./pages/About'));
import { CartProvider } from "./context/cart";

// Componentes
import Header from './components/Header';
import Footer  from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';
import { Filters } from "./components/Filters";

const App = () => {

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

  const [cartOpen, setCartOpen] = useState(false)

  const toggleCart = () =>  {
    setCartOpen(!cartOpen)
  }

  useEffect(()=> {
    const handleESC = (e) => {
      if(e.keyCode === 27 && cartOpen) {
        toggleCart()
      } else {
        console.log("Cart close")
      }
    }
    
    window.addEventListener('keydown', handleESC)
    return () => {
      window.removeEventListener('keydown', handleESC)
    }
  })

  useEffect(()=> {
    if(cartOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  })
    return (
        <div className="App">
          <CartProvider>
            <BrowserRouter>
               <HeaderManager toggleCart={toggleCart} />
                <FilterManager setFilters={setFilters} />
               <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                  <Route path="/" element={<Products products={filteredProducts} />} />
                  <Route path="/contacto" element={<Enlace />}  />
                  <Route path="/nosotros" element={<About />}  />
                </Routes>
                </Suspense>
                {cartOpen && <Cart toggleCart={toggleCart}/>}
                <Footer />
             <PageTitleUpdater />
            </BrowserRouter>
          </CartProvider>
        </div>
    );

}

const FilterManager = ({setFilters}) => {
  const [showFilters, setShowFilters] = useState(false)

  const location = useLocation()
  
  useEffect(()=> {
    if(location.pathname === "/") {
      setShowFilters(true)
    } else {
      setShowFilters(false)
    }
  }, [location])

  return showFilters ? <Filters setFilters={setFilters} /> : null;
}

const HeaderManager = ({toggleCart}) => {
  const location = useLocation()
  const [showHeader, setShowHeader] = useState(false)

  useEffect(()=> {
    if(location.pathname === "/contacto") {
      setShowHeader(false)
  } else {
    setShowHeader(true)
  }
  }, [location])

  return showHeader ? <Header toggleCart={toggleCart}/> : null;
}

function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace('/', ''); 
    // document.title = `Alma Elegancee - ${currentPath}`;

    if(location.pathname === '/') {
      document.title = `Alma Elegancee`;
    } else if (location.pathname === '/colecciones') {
      document.title = `Proximamente...`;
    } else if (location.pathname === '/nosotros') {
      document.title = `Alma Elegancee - Nosotros`
    }
  }, [location]);

  return null;
}

export default App;