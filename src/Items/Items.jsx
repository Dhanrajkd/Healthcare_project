import React from 'react'
import '../Items/Items.css'
import { Link } from 'react-router-dom'
const Items = ({image,name,id,category}) => {
  return (
    <div className='items'>

      <div className='card'>
          <img src={image} alt="" />
          <p>{name}</p>
          <div className='butt-more'>
              <Link to={`/readmore/${id}/${category}`}><button>Readmore</button></Link>
          </div>
      </div>
    </div>
       
  )
}

export default Items
