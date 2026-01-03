import React, { useContext } from 'react'
import { Listcomponents } from './Parentcomponent/Parentcontext'
import "../src/Css/productimages.css"
import Items from './Items/Items'

const Productimages = () => {
  const {products}=useContext(Listcomponents)
  return (
    <div className='product-images'>
        <div className='images-breadcrum'>
            <h1>Product images</h1>
            <div className='breadcrun-title'>
                <p>Home</p>
                <div></div>
                <p>product image</p>
            </div>
        </div>
        <div className='img-container'>
              {products.map((item,ind)=>{
                const imageurl=item.image.replace(
                  "http://localhost:4000",
                  "https://healthcare-project-backend-t5mf.onrender.com"
                )
                return(
                  <Items image={imageurl} name={item.name} id={item._id} category={item.category} key={ind} />
              )})}
        </div>
    </div>
  )
}

export default Productimages
