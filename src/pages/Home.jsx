import React from 'react'
import Navbar from '../components/Navbar'
import HomeImage from '../components/HomeImage'
import About from '../components/About'
import Footer from '../components/Footer'
import Destination from '../components/Destination'
import TourDestination from '../components/TourDestination'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HomeImage />
        <About />
        <Destination />
        <TourDestination />
        <Footer />
    </div>
  )
}

export default Home