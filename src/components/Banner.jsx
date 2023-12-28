import React from 'react'
import '../App.css'
import banner1 from '../../public/banner1.jpg'
function Banner() {
  return (
    <div className='section-container bg-gradient-to-r from-[#FAFAFA] to=[#FCFCFC] to-100% '>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
            {/* images_banner */}

        <div className='md:w-1/2' > <img src={banner1} alt="" class="img1" /></div> 

               {/* text_banner */}
            <div className='md:w-1/2 px-4' >
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug'>Dive into Delights of Delectable <span className='text-green'>Food</span></h2>
               <p className='text-xl py-9 text-[#4A4A4A]'>
                Try our website for Best-Quality Foods and  much <br /> more Intresting for you.
                </p>
                <button className='bg-green font-semibold text-white px-5 py-3 rounded-full'>Order Now</button>
                 </div> 
           
            

        </div>
        </div>
  )
}

export default Banner