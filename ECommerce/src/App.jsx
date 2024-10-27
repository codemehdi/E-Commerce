import React,{ useEffect, useState } from 'react'
import './App.css'
import Header from './Header/Header.jsx'
import HomePage from './HomePage/HomePage.jsx'
import Cards from './Cards/Cards.jsx'
import LineTitle from './LineTitle/LineTitle.jsx'
import Categories from './Categories/Categories.jsx'

function App() {
  

  return (
    <>
      <div>
          <Header />
          <HomePage />
          <Categories />
          <Cards />
      </div>
    </>
  )
}

export default App
