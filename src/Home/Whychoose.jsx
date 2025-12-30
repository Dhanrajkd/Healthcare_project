import React, { useState } from 'react'
import '../Css/Whychoose.css'
import who_icon from '../images/ic_who_white.webp'
import iso_icon from '../images/ic_certified_white.webp'
import package_icon from '../images/ic_packaging_white.webp'

const Whychoose = () => {

    /* let choosecontent=[
      {image:who_icon,head:"Excellence:",para:`Our journey to excellence never ends. Clients can be assured that when they choose Vridam Healthcare, they’re choosing a pharmaceutical company who will work enthusiastic to achieve excellence in quality, safety and efficiency, for the better health 
      of our clients as well as the entire health care industry`},
      {image:iso_icon,head:"Quality:",para:`We make extra effort in ensuring that our products manufactured as per the WHO-GMP, C-GMP and GLP practices. Vridam Healthcare Pvt Ltd Quality Policy is working through a comprehensive Quality Management System. Our performance is monitored and regularly reviewed to ensure our standards of conduct meet our high expectations of quality for our patients, customers, and stakeholders. We also ensure that our warehouse is a secure, temperature-controlled facility that provides 
      the margin of safety needed by a leading pharmaceutical company.`},
      {image:package_icon,head:"integrity",para:`Vridam Healthcare Pvt Ltd employees make decisions, both big and small, with a focus on what is ethically right. Above all, we are committed to the greater good- for our company, our clients as well as the health care indust.`}
    ] */
    const [expand,setexpand]=useState("")

   /*  function changeexpand(index){
      let newexpand=[...expand]
      newexpand[index]=!newexpand[index]
      setexpand(newexpand)
      console.log(newexpand);
    } */
  return (
    <div className='whychoose-container'>
        <div className='whychoose-content'>
          <div className='why-head'>
              <h1 className=''>Why Choose Rooba Swastha Pharmaceutical</h1>
              <p>At Rooba swastha Healthcare Pvt Ltd, we focus on business-to-business trade of pharmaceuticals products. We are committed to achieve long term business 
              relationships based on our high standards of Products, service and competitive terms.
              </p>
          </div>
          <div className='card-container'>
              <div className={expand!=="excellence"?"choose-card": "excellence"}>
                  <img src={who_icon} alt="" />
                  <h1>Excellence</h1>
                  <p>
                    Our journey to excellence never ends. Clients can be assured that when they choose Vridam Healthcare, they’re choosing a pharmaceutical company who will work enthusiastic to achieve excellence in quality, safety and efficiency, for the better health 
                    of our clients as well as the entire health care industry
                  </p>
                  <button onClick={()=>setexpand("excellence")}>{expand==="excellence"?"Readless":"Readmore"}</button>
              </div>
               <div className={expand!=="quality" ?"choose-card":"quality"}>
                  <img src={iso_icon} alt="" />
                  <h1>Quality</h1>
                  <p>
                    We make extra effort in ensuring that our products manufactured as per the WHO-GMP, C-GMP and GLP practices. Vridam Healthcare Pvt Ltd Quality Policy is working through a comprehensive Quality Management System. Our performance is monitored and regularly reviewed to ensure our standards of conduct meet our high expectations of quality for our patients, customers, and stakeholders. We also ensure that our warehouse is a secure, temperature-controlled facility that provides 
                    the margin of safety needed by a leading pharmaceutical company.
                  </p>
                  <button onClick={()=>setexpand("quality")}>{expand==="quality"?"Readless":"Readmore"}</button>
              </div>
               <div className={expand!=="integrity" ?"choose-card" : "integrity"}>
                  <img src={package_icon} alt="" />
                  <h1>Integrity</h1>
                  <p>
                    Vridam Healthcare Pvt Ltd employees make decisions, both big and small, with a focus on what is ethically right. Above all, we are committed to the greater good- for our company, 
                    our clients as well as the health care indust.
                  </p>
                  <button onClick={()=>setexpand("integrity")}>{expand==="integrity"?"Readless":"Readmore"}</button>
              </div>
          </div>
        </div>
        <div className='moving-content'> 
          <div className='text-move'>
            <p className='marquee-text text'>Number of Clients : 1000+ ★</p>
            <p className='marque-text text'>Number of Products: 500+ ★ </p>
            <p className='marque-text text'>Presence in Cities: 800+, ★ </p>
            <p className='marquee-text text'>Number of Clients : 1000+ ★</p>
            <p className='marquee-text text'>Number of Clients : 1000+ ★</p>
            <p className='marque-text text'>Number of Products: 500+ ★ </p>
            <p className='marque-text text'>Presence in Cities: 800+, ★ </p>
            <p className='marquee-text text'>Number of Clients : 1000+ ★</p>
          </div>
          
        </div>
    </div>
  )
}

export default Whychoose
