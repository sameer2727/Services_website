import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { FaFilter } from 'react-icons/fa';
function Menu() {
    const [menu,setmenu]=useState([]);
    const [Filtereditems,setFilterditems]=useState([]);
    const [selectedCategory,setselectedCategory]=useState('all');
      const [sortOption,setSortOption]=useState('default');
    //   loading data 
    useEffect(()=>{
   // fetch data from backend 
   const fetchData =async()=>{
    try{
        const response=await fetch('/menu.json');
        const data=await response.json();
        // console.log(data);
        setmenu(data);
        setFilterditems(data)
    }catch(error){
          console.log("error fetching data ",error);
    }
   }
   fetchData();
    },[]);
                  // Filtering the data based on category 
        const filterItems=(category)=>{
          const filtered = category==='all'
          ? menu :
           menu.filter((item)=>item.category===category)
           setFilterditems(filtered);
           setselectedCategory(category);
        }
        // show all data 
        const showall=()=>{
          setFilterditems(menu);
          setselectedCategory('all')

        }
//             sorting based on A-Z Z-A AND LOW-HIGH 
              const handleSorting=(option)=>{
                    setSortOption(option);
                    let sortedItems=[...Filtereditems];
                    // Logic 

                    switch (option) {
                      case "A-Z":
                        sortedItems.sort((a,b)=>a.name.localeCompare(b.name));
                        break;
                      case "Z-A":
                          sortedItems.sort((a,b)=>b.name.localeCompare(a.name));
                        break;
                      case "low-to-high":
                        sortedItems.sort((a,b)=>a.price-b.price);
                           break;
                           case "high-to-low":
                        sortedItems.sort((a,b)=>b.price-a.price);
                      default:
                        break;
                    }
                    setFilterditems(sortedItems);
              }
  return (
    <div>
         <div className='section-container bg-gradient-to-r from-[#FAFAFA] to=[#FCFCFC] to-100% '>
        <div className='py-48 flex flex-col  justify-center items-center gap-10'>
           
               {/* text_banner */}
            <div className=' px-4 text-center' >
                <h2 className='md:text-5xl text-4xl font-bold md:leading-snug'>Doorstep Ease Services <span className='text-green'>Within 30 min.</span></h2>
               <p className='text-xl py-9 text-[#4A4A4A]'>
                Try our website for Best-Quality Services and  much <br /> more Intresting for you.
                </p>
                <button className='bg-green font-semibold text-white px-5 py-3 rounded-full '>Explore Now</button>
                 </div> 
           
            

        </div>
        </div>
     
     {/* services section -all */}
          
           <div className='section-conatiner'>
          {/* filtering items and data  */}
          <div>
            {/* all category  btns */}
            <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
               <button onClick={showall}
               className={selectedCategory ==='all'?"active" :""}>All</button>
               <button onClick={()=> filterItems("Carpentry")}
                              className={selectedCategory ==='Carpentry'?"active" :""}>Carpentry</button>
               <button  onClick={()=> filterItems('Plumber')}
                              className={selectedCategory ==='Plumber'?"active" :""}>plumbing</button>
               <button onClick={()=> filterItems('Roof Repaires')}
                              className={selectedCategory ==='Roof Repaires'?"active" :""}>Roofiing</button>
               <button onClick={()=> filterItems('Water Purification')}
                              className={selectedCategory ==='Water Purification'?"active" :""}>Water Purification</button>
               <button onClick={()=> filterItems('Electrician')}
                              className={selectedCategory ==='Electrician'?"active" :""}>Electrician</button>
            </div>
            {/* sorting base filtering */}
            <div>
              <div className='bg-black p-2'>
                 <FaFilter className='h-4 w-4 text-white' />
              </div>
              {/* sorting options  */}
              <select name="sort" id="sort" onChange={(e)=>handleSorting(e.target.value)} value={sortOption} className='bg-black text-white px-2 py-1  rounded-sm'>
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
              </select>
            </div>
          </div>
              {/* services cards  */}
              <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                 Filtereditems.map((item)=>(
                    <Cards key={item._id} item={item} />
                  ))
                }
              </div>
           </div>
    
    </div>
  )
}

export default Menu