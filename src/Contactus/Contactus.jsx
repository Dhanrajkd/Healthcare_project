import React from 'react'
import { Link } from 'react-router-dom'
import '../Contactus/Contact.css'

const Contactus = () => {
  return (
    <div className='contact-us'>
      <div className='breadcrum-contactus'>
            <h1>Product List</h1>
            <div className='bread-crum'>
                <Link to='/'>Home</Link>
                <p>Contact us</p>
            </div>
      </div>
        <div className='info-container'>
            <div className='contact-us-info'>
                <div className='info-card'>
                    <div className='icon'><i className='bi bi-envelope-fill'></i></div>
                    <div className='address-bar'>
                        <h1>Contact Us:</h1>
                        <p>+91 755 932 6348</p>
                        <p>+91 755 932 7448</p>
                        <p>+91 755 932 5748</p>
                    </div>
                </div>
                <div className='info-card'>
                    <div className='icon'><i className='bi bi-telephone-fill'></i></div>
                    <div className='address-bar'>
                        <h1>Email:</h1>
                        <p>info@Roobaswastha.com</p>
                    </div>
                </div>
                <div className='info-card'>
                <div className='icon'><i className='bi bi-geo-alt-fill'></i></div>
                    <div className='address-bar'>
                        <h1>Address:</h1>
                        <p>Rooba swastha pharmaceutical Private limited D.90. 9-415/G,yerraballi,
                            rajampet,Annamayya Dt Andrapradesh-516 115.Contact:90003 31339
                        </p>
                    </div>
                </div>
            </div>
            <div className='contact-info-right'>
                <h1>Any question</h1>
                <div className='input1'>
                    <div><input type="text" placeholder='Name' /></div>
                    <div><input type="text" placeholder='Phone Number'/></div>
                </div>
                <div className='select'>
                    <select name="" id="" placeholder="Select state">
                        <option value="">Select State</option>
                    </select>
                </div>
                <div className='mail-input'>
                    <input type="text"  placeholder='Email' />
                </div>
                <textarea name="" id="" placeholder='Write message'>

                </textarea>
                <button>Sent Message</button>
            </div>
      </div>
    </div>
    
  )
}

export default Contactus
