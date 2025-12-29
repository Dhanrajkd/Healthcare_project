import React, { createContext, useEffect, useState } from 'react'
/* import Components from '../Components/Component' */

export let Listcomponents=createContext()
const Parentcontext = ({children}) => {
    const [products,setproduct]=useState([])
    const Contextvalue={products}
    useEffect(()=>{
      let fetchdata=async()=>{
        try{
          let responce=await fetch("http://localhost:4000/getproducts")
          let data=await responce.json()
          console.log(data);
          setproduct(data.data)
        }
        catch(err){
          console.log(err);
        }
      }
      fetchdata()
    },[])
  return (
    <Listcomponents.Provider value={Contextvalue}>
         <div className='parent-context'>
            {children}
        </div>
    </Listcomponents.Provider>
   
  )
}

export default Parentcontext
