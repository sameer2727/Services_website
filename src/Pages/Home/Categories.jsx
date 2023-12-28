import React from 'react'


const categoryItems=[
    {id:1,title:"Main Dish",image:'./banner1.jpg'},
    {id:2,title:"Breakfast",image:'./banner1.jpg'},
    {id:3,title:"Lunch",image:'./banner1.jpg'},
    {id:4,title:" Dinner",image:'./banner1.jpg'},
    {id:4,title:" keds",image:'./banner1.jpg'}
]



function Categories() {

  return (
    <div className='section-container py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customers Favourite</p>
            <h2 className='title'>Popular Categories</h2>

        </div>
        <div className='flex flex-col sm:flex-row flex-wrap gap-6 justify-around items-center'>
            {/* Categories */}
            {
                categoryItems.map((item,i)=>(
              <div key={i}>
                       <div>
                        <img src={item.image} alt=""  className='p-5 rounded-full w-40 h-40 '/>
                       </div>
                       <div className='mt-5 text-center'>
                        {item.title}
                       </div>
              </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories