import React from 'react'
import Navbar from '../components/Navbar'
import HomeImage from '../components/HomeImage'
import About from '../components/About'
import Footer from '../components/Footer'
import Destination from '../components/Destination'
import TourDestination from '../components/TourDestination'
import Testomonial from '../components/Testomonial'

const Home = () => {
  return (
    <div>
        <HomeImage />
        <About />
        <Destination />
        <TourDestination />
        <Testomonial />
    </div>
  )
}

export default Home