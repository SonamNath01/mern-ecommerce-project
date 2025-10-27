import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Card from './pages/Card'
import Collection from './pages/Collection'
import Products from './pages/Products'   
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Hero from './components/Hero'
import LatestCollection from './components/LatestCollection'
import Footer from './components/Footer'
import SeachBar from './components/SeachBar'


import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] lg:px-[9vw]'>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <Navbar />
      <SeachBar/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/card' element={<Card />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/product/:productId' element={<Products />} />
        <Route path='/cart' element={<Card />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Orders />} />
        
  



      </Routes>
      <Footer/>
    </div>
  )
}

export default App
