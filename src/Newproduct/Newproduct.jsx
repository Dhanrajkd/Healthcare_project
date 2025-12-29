import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Css/newproduct.css'
/* import Components from "../Components/Component" */
import { Listcomponents } from '../Parentcomponent/Parentcontext'

const Newproduct = () => {
    let {products}=useContext(Listcomponents)
    const {category}=useParams()
    useEffect(()=>{
        console.log(category)
    },[category])
  return (
    <div className='detail-products'>
        <div className='breadcrum-head'>
            <h1>Product List</h1>
            <div className='bread-crum'>
                <Link to='/'>Home</Link>
                <p>Product list</p>
            </div>
        </div>
        <div className='products'>
            <div className='headings'>
                <div>Product</div>
                <div>Composition</div>
                <div>Details</div>
            </div>
            <div className='show-product'>
                {products.map((item,ind)=>{
                    if(item.category===category){
                    return(
                        <div className='list-product' key={ind}>
                            <div>{item.name}</div>
                            <div>{item.composition}</div>
                            <div className='readmore'>
                            <Link to={`/readmore/${item._id}/${item.category}`}><button>Read more</button></Link> 
                            </div>
                        </div>
                    )
                    }
                    else{
                        return null
                    }
               })}
            </div>
        </div> 
    </div>
  )
}

export default Newproduct
