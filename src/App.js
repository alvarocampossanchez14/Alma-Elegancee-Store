import React, {lazy, Suspense, Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

const Enlace = lazy(() => import('./pages/Enlace'));
const Home = lazy(() => import('./pages/Home'));
const Proximamente = lazy(() => import('./pages/Proximamente'));

class App extends Component {

  

  render() {
    return (
        <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Suspense fallback={<div>Loading..</div>}><Proximamente /></Suspense>} />
            <Route path="/home" element={<Suspense fallback={<div>Loading..</div>}><Home /></Suspense>} />
            <Route path="/colecciones" element={<Suspense fallback={<div>Loading..</div>}><Enlace /></Suspense>} />
            <Route path="/nosotros" element={<Suspense fallback={<div>Loading..</div>}><Enlace /></Suspense>} />
          </Routes>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;