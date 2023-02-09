import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Category from '../components/Category/Category'
import Product from './Products/Products'
import Filter from '../components/Filter/Filter'
import NavbarLogin from '../components/NavbarLogin/NavbarLogin'


const Home = () => {
  const isLogin = localStorage.getItem('token');

  if (!isLogin) {
    return (
      <>
        <Navbar/>
        <Carousel/>
        <Category/>
        <Product titleInformasi="New" subInformasi="You've never seen it before" />
        <Filter/>
      </>
    );
  } else {
    return (
      <>
        <body>
          <NavbarLogin/>
          <Carousel/>
          <Category/>
          <Product titleInformasi="New" subInformasi="You've never seen it before" />
          <Filter/>
        </body>
      </>
    );
  }
}

export default Home