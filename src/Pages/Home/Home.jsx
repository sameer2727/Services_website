import React from 'react'
import Banner from '../../components/Banner'
import Categories from './Categories'
import Special from './Special'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Special />
      <Testimonials />
    </div>
  )
}

export default Home