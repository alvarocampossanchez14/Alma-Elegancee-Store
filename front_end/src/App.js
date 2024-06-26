import React, {lazy, Suspense, Component, useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import './App.css';

import {products as initialProducts, products} from "./mocks/ManProductList"; // Import the products data

// Pages
const Enlace = lazy(() => import('./pages/Enlace'));
const Proximamente = lazy(() => import('./pages/Proximamente'));
const About = lazy(() => import('./pages/About'));
import { CartProvider } from "./context/cart";
const Login = lazy(() => import('./pages/Login'));  

// Componentes
import Header from './components/Header';
import Footer  from './components/Footer';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import { Filters } from "./components/Filters";
import CategorySelector from './components/CategorySelector';
import ProductsMan from './pages/ProductsMan';
import ProductsWoman from './pages/ProductsWoman';
import { AuthProvider } from './context/authProvider';
import SignUp from './pages/SignUp';

import { useAuth } from "./hook/useAuth"
import LoginRedirect from './pages/LoginRedirect';

const App = () => {

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
     // <Products products={filteredProducts} 
     // <FilterManager setFilters={setFilters} />
        <div className="App">
          <CartProvider>
            <AuthProvider>
              <BrowserRouter>
                <HeaderManager toggleCart={toggleCart} />   
                <Suspense fallback={<div>Loading..</div>}>
                  <Routes>
                    <Route path="/" element={<CategorySelector />}/>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/isLogin" element={<LoginRedirect />} />
                    <Route path="/coleccion/hombre" element={<ProductsMan />}/>
                    <Route path="/coleccion/mujer" element={<ProductsWoman />}/>
                    <Route path="/nosotros" element={<About />}  />
                    <Route path="/contacto" element={<Contact />} />  
                  </Routes>
                  </Suspense>
                  {cartOpen && <Cart toggleCart={toggleCart}/>}
                  <Footer />
              <PageTitleUpdater />
              </BrowserRouter>
            </AuthProvider>
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
    if(location.pathname === "/test") {
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