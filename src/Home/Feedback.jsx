import React, { useState } from 'react'
import profile from '../images/profile.png'
import '../Css/Feedback.css'

const Feedback = () => {
    const [number,setnumber]=useState(0)


    const feedback=[
        {image:profile,name:"Jaya sharma",title:"happycustomer",
            review:`I have been using Rooba Swastha’s respiratory medicine for the past six months, and the results are excellent. My breathing has improved, and I haven’t faced any side effects.
             Truly high-quality and affordable products!`
        },
        {image:profile,name:"Dr. Meena Subramaniam",title:"happycustomer",
            review:`I regularly prescribe Rooba Swastha medicines to my patients. Their consistency in quality and WHO GMP-certified manufacturing standards 
            make them a reliable brand in my clinic.`
        },
        {image:profile,name:"Karthika S",title:"happycustomer",
            review:`Rooba Swastha’s diabetic care tablets have really helped me maintain stable sugar levels. I appreciate that they’re affordable and available at local 
            pharmacies without compromising on quality.`
        },
        {image:profile,name:"Arun Prakash",title:"happycustomer",
            review:`Their skincare creams and soaps are gentle and effective. My skin feels much better after switching to Rooba Swastha products. 
            I’ve already recommended them to my friends and family`
        }
    ]
  return (
    <div className='review-container'>
        <div className='review'>
            <div className='profile'>
                <img src={feedback[number].image} alt="" />
                <div className='customer-details'>
                    <p className='p1'>{feedback[number].name}</p>
                    <p className='p2'>{feedback[number].title}</p>
                </div>
            </div>
            <div className='comment'>
                <p>{feedback[number].review}</p>
            </div>
        </div>
        <div className='dots'>
            <i className='bi bi-record-circle' style={{color:number===0?"black":"blue"}}  onClick={()=>setnumber(0)}></i>
            <i className='bi bi-record-circle' style={{color:number===1?"black":"blue"}} onClick={()=>setnumber(1)}></i>
            <i className='bi bi-record-circle' style={{color:number===2?"black":"blue"}} onClick={()=>setnumber(2)}></i>
            <i className='bi bi-record-circle'  style={{color:number===3?"black":"blue"}} onClick={()=>setnumber(3)}></i>
        </div>
    </div>
  )
}

export default Feedback
