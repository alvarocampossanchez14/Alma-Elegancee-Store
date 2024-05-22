import React, {lazy, Suspense, Component, useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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

// const Home = () => {

//   const [products] = useState(initialProducts);
//   const [filters, setFilters] = useState({
//       category: "all",
//       minPrice: 0,
//   });

//   const filterProducts = (products) => {
//       return products.filter(products => {
//           return products.price >= filters.minPrice &&
//           (filters.category === "all" || products.category === filters.category);
//       })
//   }

//   const filteredProducts = filterProducts(products);  


//   const [cartOpen, setCartOpen] = useState(false);   
//   const toggleCart = () => {
//       setCartOpen(!cartOpen);
//   }

//   useEffect(()=> {
//       const handleESC = (event) => {
//           if (event.keyCode === 27 && cartOpen === true) {
//               toggleCart()
//               console.log("cart open")
//           } else {
//               console.log("cart close")
//           }
//       }
//       window.addEventListener('keydown', handleESC);

//       return () => {
//           window.removeEventListener('keydown', handleESC);
//       }
//   })

//   useEffect(() => {
//       if(cartOpen){
//           document.body.classList.add('no-scroll');
//       } else {
//           document.body.classList.remove('no-scroll');
//       }
//   })

//   return (
//       <div>
//           {cartOpen && <Cart  toggleCart={toggleCart}/>}
//           <Filters setFilters={setFilters}/>
//           <Products  products={filteredProducts} />
//           <Footer />
//       </div>
//   )
// }


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
      products: initialProducts,
      filters: {
        category: "all",
        minPrice: 0,
      } 
    };
  }

  


  


  
  toggleCart = () => {
    this.setState({cartOpen: !this.state.cartOpen})
  }

  filterProducts = (products) => {  
    return products.filter(products => {
      return products.price >= this.state.filters.minPrice && 
      (this.state.filters.category === "all" || this.state.filters.category)
    })
  }

  componentDidMount() {
    this.handleESC = (e) => {
      if(e.keyCode === 27 && this.state.cartOpen === true) {
        this.toggleCart()
      } else {
        console.log("cart close")
      }
    }
    window.addEventListener('keydown', this.handleESC);

    if(this.state.cartOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.cartOpen !== this.state.cartOpen) {
      if(this.state.cartOpen) {
        document.body.classList.add('no-scroll')  
      } else {
        document.body.classList.remove('no-scroll')
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleESC)
  }

  render() {
    const filteredProducts = this.filterProducts(this.state.products);

  
    return (
        <div className="App">
          <CartProvider>
            <BrowserRouter>
               <Header toggleCart={this.toggleCart}/>
               <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                  <Route path="/" element={<Products products={filteredProducts} />} />
                  {/* <Route path="/home" element={<Suspense fallback={<div>Loading..</div>}><Home /></Suspense>} /> */}
                  <Route path="/colecciones" element={<Enlace />}  />
                  <Route path="/nosotros" element={<About />}  />
                  </Routes>
                </Suspense>
                {this.state.cartOpen && <Cart toggleCart={this.toggleCart}/>}
                <Footer />
             <PageTitleUpdater />
            </BrowserRouter>
          </CartProvider>
        </div>
    );
  }
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