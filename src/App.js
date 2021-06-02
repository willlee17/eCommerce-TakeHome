import './App.css';
import React, { useState, useEffect} from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Products from './components/Products';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);

  useEffect(() => {
    setMensClothing(
      allProducts.filter((product) => product.category == "men's clothing")
    );
    setWomensClothing(
      allProducts.filter((product) => product.category == "women's clothing")
    );
    setJewelery(
      allProducts.filter((product) => product.category == "jewelery")
    );
    setElectronics(
      allProducts.filter((product) => product.category == "electronics")
    );
  }, [allProducts]);


  return (
    <div className="App">
      <div className="header"> 
      <Link className="header__logo--Link" to="/">
        <div className="header__logo">
          <h1>Fake Store</h1>
        </div>
      </Link>
        <div className="header__tags">
          <Link to="/">
            <button className="header__button">Home</button>
          </Link>
          <Link to="/mens">
            <button className="header__button">Mens</button>
          </Link>
          <Link to="/womens">
            <button className="header__button">Womens</button>
          </Link>
          <Link to="/jewelery">
            <button className="header__button">Jewelery</button>
          </Link>
          <Link to="/electronics">
            <button className="header__button">Electronics</button>
          </Link>
        </div>
      </div>
     
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <Products
                {...props}
                products={allProducts}
                title={"All Products"}
              />
            )}
          />
          <Route
            path="/mens"
            component={(props) => (
              <Products
                {...props}
                products={mensClothing}
                title={"Men's Clothing"}
              />
            )}
          />
          <Route
            path="/womens"
            component={(props) => (
              <Products
                {...props}
                products={womensClothing}
                title={"Women's Clothing"}
              />
            )}
          />
          <Route
            path="/jewelery"
            component={(props) => (
              <Products {...props} products={jewelery} title={"Jewelery"} />
            )}
          />
          <Route
            path="/electronics"
            component={(props) => (
              <Products
                {...props}
                products={electronics}
                title={"Electronics"}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
