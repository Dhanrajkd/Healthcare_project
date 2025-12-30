import React, { useContext } from 'react'
import '../Css/Ourproduct.css'
import { Listcomponents } from '../Parentcomponent/Parentcontext'


const Ourproduct = () => {
  const{products}=useContext(Listcomponents)
  return (
    <div className='ourproduct-container'>
        <div className='our-product-info'>
            <h1>---Our products</h1>
            <p>
                We have a diverse portfolio of medicine consisting of Tablets, Capsules, Metered Dose Inhalers, Liquid, Creams, Soap, powders etc.…
                <br />
                All our products are manufactured in facilities with accreditation like US FDA, EU GMP, WHO GMP, CGMP, ISO 9000 Maintaining high standards of quality.<br/>
                Our Products are classified into different therapeutic categories like Respiratory Ailments, Anti-Infectives, Anti-Diabetic, CVS, Neuropsychiatric, Orthopedics, Nephrology and so on and has been categorized into prescription medicines.
            </p>
            <button>view all products</button>
        </div>
        <div className='move-products'>
          <div className='products-slider'>
            {products.map((item,ind)=>(
              <div className='products-card' key={ind}>
                <img src={item.image.startsWith("http://") ? item.image : item.image.replace("http:", "http://")} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
            {products.map((item,ind)=>(
              <div className='products-card' key={"dup"+ind}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Ourproduct
