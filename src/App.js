import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryTree from "./components/CategoryTree";
import ProductList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div>
              <div className="left">
                  <CategoryTree />
              </div>
              <div className="right">
                  <ProductList />
                  <ProductDetails />
              </div>
          </div>
      </div>
    );
  }
}

export default App;
