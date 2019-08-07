import React from 'react';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import './App.css';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './container/HomePage/HomePage';
import ShopPage from './container/ShopPage/ShopPage';
import PromotionPage from './container/PromotionPage/PromotionPage';
import BlogPage from './container/BlogPage/BlogPage';
import ContactPage from './container/ContactPage/ContactPage';
import ProductGetAPI from './container/ProductPage/ProductGetAPI/ProductGetAPI';
import CartPage from './container/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>

      <Header>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/promotion">Promotion</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </Header>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/shop/:productId" component={ProductGetAPI} />
        <Route path="/promotion" component={PromotionPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>

      <Footer />
    </BrowserRouter>
    // <Form />
  );
}

export default App;
