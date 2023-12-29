import React, { useEffect, useState } from 'react'

import { FaRegUser } from "react-icons/fa";
import Modal from './Modal';
export const Navbar = () => {
  const [issticky,setsticky]=useState(false);
  // handle scroll functions
  useEffect(()=>{
  const hanldescroll=()=>{
      const offset=window.scrollY;
      if(offset>0){
        setsticky(true)
      }else{
        setsticky(false)
      }
  }
  window.addEventListener('scroll',hanldescroll);

  return ()=>{
    window.addEventListener('scroll',hanldescroll);
  }
  },[])
  const navItems=<>
     <li><a href='/'>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2 text-left">
            <li><a href='/service'>All</a></li>
            <li><a>Carpentry Services</a></li>
            <li><a>Electrician Services</a></li>
            <li><a>Roofing Repairs</a></li>
            <li><a>Plumbing Services</a></li>
            <li><a> Water Purification</a></li>
          </ul>
        </details>
      </li>

      <li >
        
          <summary>Add Services</summary>
          
      </li>

      <li><a>Offers</a></li> 
  </>
  return (
    <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all-duration-300 ease-in-out'>
   <div className={`navbar xl:px-24 px-9 ${issticky ?"shadow-md bg-base-100 transition-all-duration-300 ease-in-out":""}`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Food App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div> 



  <div className="navbar-end">
{/* search icon */}

<button className="btn btn-ghost btn-circle hidden lg:flex">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    {/* Cart icon */}
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hidden lg:flex mr-2">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">100</span>
        </div>
      </div>
    <button onClick={()=>document.getElementById('my_modal_5').showModal()}
     className="btn bg-green rounded-full mr-2 "><FaRegUser />Login</button>
    <Modal />
  </div>
</div>
</header>  )
}
