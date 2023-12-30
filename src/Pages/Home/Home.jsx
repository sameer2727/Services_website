import React from 'react'
import Banner from '../../components/Banner'
import Catagories from './Categories'
import SpecialDishes from './Special'
// import Testimonials from './Testimonials'

// import Catagories from './Categories'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Catagories />
       <SpecialDishes/>
       {/* <Testimonials/> */}
       
    </div>
  )
}

export default Home