import React from 'react'
import { Link } from 'react-router-dom'

function Cards({item}) {
  return (
    
    <div>
       
        <div className="card w-66 bg-base-100 shadow-xl mx-3 ">
            <Link to={`/service/${item._id}`} />
            
  <figure><img src={item.image} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.des}</p>
    <h5 >{item.price}</h5>
    <div className="card-actions justify-left">
       
      <button className="btn btn-primary   ">Add to CART </button>
    </div>
  </div>
</div>

    </div>
    
  )
}

export default Cards