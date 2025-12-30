import React, { useEffect, useState } from 'react'
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Navbar = () => {
  const [loading,setloading]=useState(true)

  useEffect(()=>{
      setTimeout(() => {
          setloading(false)
      },3000);
  },[])
  return (
    <div classname="navbar">
       <div className='top-head-1'>
            <div className='contact-details'>
                <a href="+91 7559325548">
                    <i className='bi bi-telephone-fill'></i> +91 7559325548
                </a>
                <a href="info@roobaswastha.com">
                    <i className='bi bi-envelope'></i>
                    info@roobaswastha.com
                </a>
            </div>
            <div className='media-link'>
                <a href=""><i className='bi bi-linkedin'></i></a>
                <a href=""><i className='bi bi-whatsapp'></i></a>
                <a href=""><i className='bi bi-instagram'></i></a>
                <a href=""><i className='bi bi-facebook'></i></a>
            </div>
       </div>
      {loading ?(
         <div className='loading'>
          <div className='rotate-circle'>

          </div>
       </div>
     ):null}
    </div>
     
      
  )
}

export default Navbar
