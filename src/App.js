import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CategoryTree from "./components/CategoryTree";
import ProductList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <div>
                        <div className="left">
                            <CategoryTree/>
                        </div>
                        <div className="right">
                            <Route path="/category/:categoryId" component={ProductList}/>
                            <Route path="/product/:productCode" component={ProductDetails} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
