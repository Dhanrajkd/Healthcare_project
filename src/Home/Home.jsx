import React from 'react'
import './Home.css'
import logo from '../images/Logo.png'
import mission from '../images/mission-1.png'
import vision from '../images/vision.png'
import quality from '../images/quality.png'
import value from '../images/value.png'
import Whychoose from './Whychoose'
import Ourproduct from './Ourproduct'
import Feedback from './Feedback'

const Home = () => {

  const ourmission=[
    {image:mission,title:`We are committed to enriching lives by making affordable, 
      high-quality generic medicinesaccessible to everyone.By partnering with others, we ensure that cost is never a barrier to
      healthcare and that our products contribute to the well-being of patients around the world.`,
      head:"Mission"
    },
    {image:vision,title:`Our vision is to lead the future of generic medicines by setting new standards for
    affordability, quality, and accessibility. We envision a world where everyone has access to
    safe and effective medications, empowering healthier communities and a brighter tomorrow.`,
    head:"vision"
  },
    {image:quality,title:`We’re applying passion and commitment to improve health. Our culture is about not only what we do, but how we do it Our values express what we believe in, they represent the best in us, and they guide us in all we do. 
    Our mission and values were uncovered by our people. 
    and they represent those qualities that make us unique.`,
    head:"Quality"
  },
    {image:value,title:`Vridam Healthcare Pvt Ltd Quality Policy is working through a comprehensive Quality Management System. Our performance is monitored and regularly reviewed to ensure our standards of conduct meet our high expectations of quality for our patients, 
    customers, and stakeholders.`,
    head:"value"
  }
  ]

  return (
    <div className='home'>
      <div className='about'>
        <div className='left'>
          <img src={logo} alt="" />
        </div>
        <div className='right'>
          <h1>Welcome To Vridam Healthcare</h1>
          <div className='right-content'>
              <p>
                Vridam Healthcare Private Limited a Registered Indian Pharma Company 
                engaged in the manufacture and marketing of pharmaceutical formulations. 
                We have our own manufacturing unit with sections like 
                Tablets, Capsules, Soft Gelatin Capsules, Oral Liquid (Syrup & Suspension),
                Oral Dry Syrup, Injectable, External Liquids, Ointments, Creams, Betalactum 
                Products, General Products , Nutraceuticals, Soaps, Shampoo, Eye Drops, 
                Oral Sachets & Powders,External Powder & Cosmetics.
              </p>
              <p>At Vridam Healthcare, we are committed to delivering superior healthcare solutions to improve the well-being of individuals worldwide.
                With our state-of-the-art manufacturing unit equipped with cutting-edge technology 
                and adhering to stringent quality standards, we ensure the production of pharmaceutical formulations of the highest caliber.
              </p>
              <p>Our comprehensive range of products encompasses various sections such as tablets, capsules, soft gelatin capsules, 
                oral liquids, injectables, ointments, creams, and much more.</p>
                <button>Discover More</button>
          </div>
        </div>
      </div>
        <div className='our-missin-container'>
            <h1>Our Mission, Vision & Values</h1>
            <h3>Expanding The PCD Pharma Franchise Business in India</h3>
            <div className='mission-content'>
                {ourmission.map((item,ind)=>(
                  <div className='mission-card' key={ind}>
                      <h1>{item.head}</h1>
                      <img src={item.image} alt="" />
                      <p>{item.title}</p>
                  </div>
                ))}
            </div>
        </div>
        <Whychoose/>
        <Ourproduct/>
        <Feedback/>
    </div>
  )
}

export default Home
