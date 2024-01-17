import React from 'react'
import axios from 'axios'
import Cards1 from '../../components/Cards1'


function Offers() {
  const checkoutHandler=async(amount)=>{

    const {data:{key}} =await axios.get("http://localhost:4000/api/getkey");

      const {data:{order}} =await axios.post("http://localhost:4000/api/checkout",{
        amount
      }) 
      // console.log(data);



      var options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Sameer Enterprises",
        description: "Dummy Payment method",
        image:"event.jpeg",
        order_id: order.id ,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Sameer rout",
            email: "sameer.rout@gmail.com",
            contact: "9650189128"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#3399cc"
        }
    };
    const  razor = new window.Razorpay(options);
    
        razor.open();
        
    



  }
  return (
    <div>
        <Cards1 amount={1000} checkoutHandler={checkoutHandler} />
    </div>
  )
}

export default Offers