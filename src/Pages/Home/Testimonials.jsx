import React from 'react'

function Testimonials() {
  return (
    <div className='section-container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='md:w-1/2'>
                <img src="/about-illus.jpg" alt="" />
            </div>
            <div className='md:w-1/2 '>
               <h2 className='title'>We are Providing the best services in Delhi NCR .</h2>
               <p><div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div></p>
            </div> 
        </div>
    </div>
  )
}

export default Testimonials