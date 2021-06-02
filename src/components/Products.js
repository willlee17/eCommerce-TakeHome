import React, { useState, useEffect } from "react";
import '../App.css';

import Card from "./Card";


const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    setProducts(props.products);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
    setSortBy("featured")
  }, [search, products]);


  useEffect(() => {
    let filteredProductsCopy = filteredProducts.slice();

    if (sortBy == "featured") {
      setFilteredProducts(
        products.filter((product) => {
          return product.title.toLowerCase().includes(search.toLowerCase());
        })
      );
    } else if (sortBy == "lowToHigh") {
      setFilteredProducts(
        filteredProductsCopy.sort((a,b) => a.price - b.price)
      );
    } else if (sortBy == "highToLow") {
      setFilteredProducts(
        filteredProductsCopy.sort((a,b) => b.price - a.price)
      );
    } else if (sortBy == "<25") {
      setFilteredProducts(
        filteredProductsCopy.filter(product => product.price < 25)
      );
    } else if (sortBy == "25-50") {
      setFilteredProducts(
        filteredProductsCopy.filter(product => product.price >= 25 && product.price <= 50)
      ) 
    } else if (sortBy == "50-100") {
      setFilteredProducts(
        filteredProductsCopy.filter(product => product.price >= 50 && product.price <= 100)
      );
    } else if (sortBy == "100-500") {
      setFilteredProducts(
        filteredProductsCopy.filter(product => product.price >= 100 && product.price <= 500)
      );
    } else if (sortBy == ">500") {
      setFilteredProducts(
        filteredProductsCopy.filter(product => product.price >= 500 )
      );
    }
  
  }, [sortBy]);


  return (
    <div>
      <div className="products__filter">
        <h3>{props.title}</h3>

        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="product__search"
          />

          <label for="cars" className="product__dropdownLabel">Sort by:</label>
          <select name="cars" id="cars" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="product__dropdown" >
            <option value="featured">Featured</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="<25">&lt;$25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-500">$100 - $500</option>
            <option value=">500">&gt;$500</option>
          </select>
        </div>
        
      </div>
      

      <div className="products__container">
        {filteredProducts.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
