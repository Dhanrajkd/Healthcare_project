import React, { useContext,useState } from 'react'
import '../Css/Readmore.css'
import { Listcomponents } from '../Parentcomponent/Parentcontext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Readmore = () => {
  const navigate=useNavigate()
  const {products}=useContext(Listcomponents)
  const {id}=useParams()
  const {category}=useParams()
  const [newloading,setnewloading]=useState(true)

  function handleclick(id,category){
      setTimeout(() => {
        setnewloading(true)
      },3000);
      navigate(`/readmore/${id}/${category}`)
  }
  return (
    <div className='read-more'>

      {products.filter(item=>item._id===id).
      map((item,ind)=>(
        <div className='breadcrum'>
          <h1>{item.name}</h1>
          <div className='breadcrum-nav'>
            <p>Home</p>
            <div></div>
            <p>Product-details</p>
          </div>
        </div>
      ))
      }
       {products.filter(item=>item._id===id).
       map((item,ind)=>{
        return (
          <div className='product-enquiry' key={ind}>
              <div className='product-image'>
                  <img src={item.image} alt="" />
              </div>
              <div className='detail-product'>
                  <h1>{item.name}</h1>
                  <p><span>composition:</span>{item.composition}</p>
                  <p className='price'>{item.price}</p>
                  <button>Enquiry Now</button>
                  <div className="share">
                    <h1>Share:</h1>
                      <a href=""><i className='bi bi-linkedin'></i></a>
                      <a href=""><i className='bi bi-whatsapp'></i></a>
                      <a href=""><i className='bi bi-instagram'></i></a>
                      <a href=""><i className='bi bi-facebook'></i></a>
                  </div>
              </div>
          </div>
        )
       })
       }
        <h1 className='realated'>Realated products</h1>
       <div className='realated-products'>
          
          {products.filter(item=>item.category===category).
              map((item,ind)=>{
                if(item._id!==id){
                  return (
                    <div className='products-card' key={ind}>
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <div className='readmore-butt'>
                       <button onClick={()=>handleclick(item._id,item.category)}>Readmore</button>
                      </div>
                  </div>
                  )
                }
              })
            }
       </div>
       {newloading ? (
        <div className='newloading'>
            <div className='newcircle'>

            </div>
       </div>

       ):null} 
       
    </div>
  )
}

export default Readmore
