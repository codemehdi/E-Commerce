import React,{ useEffect, useState } from 'react'
import './App.css'
import Header from './Header/Header.jsx'
import HomePage from './HomePage/HomePage.jsx'
import Categories from './Categories/Categories.jsx'
import Explore from './Explore/Explore.jsx'
import Seller from './Seller/Seller.jsx'
import About from './About/About.jsx'
import Footer from './footer/footer.jsx'

function App() {
  

  return (
    <>
      <div>
          <Header />
          <HomePage />
          <Categories />
          <Explore />
          <Seller />
          <About />
          <Footer />
      </div>
    </>
  )
}

export default App
