import React from 'react'
import '../Css/about.css'
import about from '../images/about.png'

const Aboutus = () => {
  return (
    <div className='about-us'>
      <div className='about-image'>
        <img src={about} alt="" />
      </div>
      <div className='about-company'>
          <h1>Welcome to Rooba Swastha Pharmaceuticals</h1>
          <p>
            Rooba Swastha Pharmaceuticals is a growing company dedicated to providing affordable, 
            high-quality generic medicines. We partner with reliable, WHO-GMP & ISO-certified 
            manufacturers to ensure every product meets global quality and safety standards. This strong 
            commitment allows us to deliver medicines that are not only effective but also trusted by 
            healthcare professionals and patients. Our motto, "Affordable Healthcare for All," drives 
            us to bridge the gap between quality and accessibility, making us a dependable partner in 
            healthcare.
          </p>
      </div>
    </div>
  )
}

export default Aboutus
