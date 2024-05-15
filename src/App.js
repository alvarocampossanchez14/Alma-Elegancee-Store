import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer  from './components/Footer';

import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
