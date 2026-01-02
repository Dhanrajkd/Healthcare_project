import React, { useEffect, useState } from 'react'
import './Navlink.css'
import logo from '../images/Logo.png'
import {createContext} from 'react'
import {Link} from 'react-router-dom'
import Component from "../Components/Component"

export const CompContext=createContext()

const Navlink = ({children}) => {
    useEffect(()=>{
      setlinks("home")
    },[])
  
    const [links,setlinks]=useState("")
    const [menuopen,setmenuopen]=useState("false")

    const tablets=[
      {category:"Anti-Fungal",id:1},
      {category:"Anti-Epileptics",id:2},
      {category:"Anti-hypertensive",id:3},
      {category:"Anti-psycotics",id:4},
      {category:"Anti-throdisum",id:5},
    ]

    let contextvalue={Component}
  return (
    <CompContext.Provider value={contextvalue}>
    <div className='navlink'>
      <div className='logo-container'>
            <img src={logo} alt="" />
      </div>
      <div className='nav-links'>
            <div onClick={()=>setlinks("home")} >
                <Link to={"/"} className={links==="home"?"active-link":"linkstyle"}>Home</Link>
            </div>
            <div onClick={()=>setlinks("aboutus")}>
               <Link  to="/about"  className={links==="aboutus"?"active-link":"linkstyle"}>About us</Link> 
            </div>
            <div className='product-links'>
              <div className='product'>
                   <div>Products</div>
                  <i className='bi bi-chevron-right'></i>
              </div>
              <div className='product-list'>
                  <div className='list-links'>
                    <div className='list-main'>
                        <a href="info@roobaswastha.com">Productlist</a>
                        <i className='bi bi-chevron-right'></i>
                    </div>
                    <div className='side-view'>
                      {tablets.map((item,ind)=>(
                        <div className='product-name' key={ind}>
                            <Link to={`/product-detail/${encodeURIComponent(item.category)}`}>{item.category}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='list-links-image'>
                    <a href="info@roobaswastha.com"><Link to="/product_images">Productimage</Link></a>
                    <i className='bi bi-chevron-right'></i>
                  </div>
              </div>
            </div>
            <div onClick={()=>setlinks("blogs")} >
                <Link className={links==="blogs"?"active-link":"linkstyle"}>Blogs</Link>
            </div>
            <div onClick={()=>setlinks
              ("gallary")} >
                <Link className={links==="gallary"?"active-link":"linkstyle"}>Gallary</Link>
            </div>
            <div onClick={()=>setlinks("carrier")}>
                 <Link to="/carrier"  className={links==="carrier"?"active-link":"linkstyle"}>Carrier</Link>
            </div>
            <div className='manufacture' onClick={()=>setlinks("manufacture")}>
                 <Link className={links==="manufacture"?"active-link":"linkstyle"}>Manufacturing-detail</Link>
            </div>
            <div onClick={()=>setlinks("Contactus")}>
                 <Link to="/contactus"  className={links==="Contactus"?"active-link":"linkstyle"}>Contactus</Link>
            </div>
      </div>
      <div className='search-container'>
           {/*   <i className="bi bi-search"></i> */}
            <i className="bi bi-list" id='list' onClick={()=>setmenuopen("true")}></i>  
      </div>
      {menuopen==="true"?(
        <div className='menubar'>
          <div className='dullbackground'>
              <div className='sidemenu'>
                  <div className='side-logo'>
                      <img src={logo} alt="" />
                      <i className="bi bi-x-lg" onClick={()=>setmenuopen("false")}></i>
                  </div>
                  <ul className='sidemenu-links'>
                      <li><Link>Home</Link></li>
                      <li><Link to="/about">Aboutus</Link></li>
                      <li>
                        <Link to="/product_images">Product</Link>
                        </li>
                      <li><Link>Blogs</Link></li>
                      <li><Link>gallary</Link></li>
                      <li><Link>carrier</Link></li>
                      <li><Link>Contact us</Link></li>
                  </ul>
              </div>
            </div>
      </div>
      ):null}
      {children}
    </div>
    </CompContext.Provider>
  )
}

export default Navlink
