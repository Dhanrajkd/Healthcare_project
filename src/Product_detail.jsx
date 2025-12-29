import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Product_detail.css'

const Product_detail = () => {

    let productdetail=[
        {name:"VRIZINE 10 TABLET",id:1,composition:"Donepezil (5mg) + Memantine (5mg)",category:"Anti-Fungal"},
        {name:"Levetiracetam (500mg)",id:2,composition:"Levetiracetam (500mg)",category:"Anti-Epileptics"},
        {name:"Amlodipine 2.5mg Tablet",id:3,composition:"Amlodipine (5mg)",category:"Anti-hypertensive"},
        {name:"Amlodipine 2.5mg Tablet",id:4,composition:"Olmesartan Medoxomil (40mg)",category:"Anti-psycotics"},
        {name:"Thyroxine Sodium (25mcg)",id:5,composition:"Thyroxine Sodium (25mcg)",category:"Anti-throdisum"},
    ]
  return (
    <div className='detail-products' style={{backgroundColor:"black"}}>
        <div className='breadcrum-head'>
            <h1>Product List</h1>
            <div className='bread-crum'>
                <Link to={'/'}>Home</Link>
                <p>Product list</p>
            </div>
        </div>
        <div className='products'>
            <div className='headings'>

            </div>
            <div className=''>
                {productdetail.map((item,ind)=>{
                    <div>{item.name}</div>
                })}
            </div>
        </div> 
    </div>
  )
}

export default Product_detail
