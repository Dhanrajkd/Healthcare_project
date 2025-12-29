import React from 'react'
import logo from '../images/Logo.png'
import './Footer.css'
import {Link} from 'react-router-dom'
import map from '../images/map.jpg'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='info'>
        <img src={logo} alt="" />
        <p>
            Rooba Swastha Private Limited a Registered Indian Pharma Company 
            engaged in the manufacture and marketing of pharmaceutical formulations.
        </p>
        <div className='social-links'>
              <i className='bi bi-whatsapp'></i>
              <i className='bi bi-instagram'></i>
              <i className='bi bi-linkedin'></i>
              <i className='bi bi-twitter'></i>
        </div>
      </div>
      <div className='quick-links'>
            <h1>Quick links</h1>
            <ul className='menu-links'>
                <li><Link to="">About Us</Link></li>
                <li><Link to="">Products</Link></li>
                <li><Link to="">Blogs</Link></li>
                <li><Link to="">Career</Link></li>
                <li><Link to="">Contact Us</Link></li>
            </ul>
      </div>
      <div className='map-link'>
          <a href="window.open('https://www.google.com/maps?q=Coimbatore+India', '_blank')"><img src={map} alt="" /></a>
      </div>
      <div className='contact-info'>
          <h1>Contact info</h1>
          <div className='contact-content'>
              <i className='bi bi-telephone'></i>
              <p>+91 7559325548</p>
          </div>
           <div className='contact-content'>
              <i class="bi bi-envelope-fill"></i>
              <p>info@Roobaswastha.com</p>
          </div>
           <div className='contact-content'>
            <i class="bi bi-geo-alt-fill"></i>
            <p>Rooba swastha pharmaceutical
              Private limited D.90. 9-415/G,yerraballi,
              rajampet,Annamayya Dt
              Andrapradesh-516 115.Contact:90003 31339
            </p>
          </div>
      </div>
    </div>
  )
}

export default Footer
