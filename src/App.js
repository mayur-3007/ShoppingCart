import React, { useState, useEffect } from 'react';
import { Products, Navbar, Cart } from './component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Pagination from 'react-js-pagination';
import Axios from 'axios';
import './App.css';

const App = () => {
  const url = `https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`;

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchItems = async () => {
    const response = await Axios.get(url);
    let count = 0;
    response.data.map((res) => {
      res['quantity'] = 1;
      count += 1;
      res['img'] = `https://picsum.photos/200/300?random=${count}`;
      // console.log(res);
    });
    setProducts(response.data);
  };

  const handleAddToCart = (event) => {
    console.log('.........EVENT');
    let notMatched = true;
    if (cart.length > 0) {
      for (let i in cart) {
        if (cart[i]['id'] == event) {
          notMatched = false;
          cart[i]['quantity'] = cart[i]['quantity'] + 1;
          break;
        }
      }
    }
    if (notMatched) {
      cart.push(products[event - 1]);
    }
    console.log(cart, '--------');
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // console.log(products);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path='/cart'>
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
