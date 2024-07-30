import React from 'react'
import Products from './../../components/products/Products';
import Header from './../../components/header/Header';
import ProductList from './../../components/products/ProductList';
import Cart from './../../components/cart/Cart';
import Cats from './../../components/Cats';

export default function Home() {
  return (
    <div>
      <Header/>
        {/* <Products/> */}
        {/* <ProductList/> */}
        {/* <Cart/> */}
        <Cats/>
    </div>
  )
}
