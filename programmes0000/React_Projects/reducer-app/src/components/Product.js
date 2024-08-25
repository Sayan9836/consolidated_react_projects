import React, { useContext } from 'react'
import appContext from '../context'
const Product = () => {
    const {message,isAuth,setIsAuth}=useContext(appContext)
  return (
    <div>
        {
            isAuth?
            <h1 onClick={()=>setIsAuth(false)}>{message}</h1>:
            <h1 onClick={()=>setIsAuth(true)}>{message+1}</h1>
            
        }
        
      
    </div>
  )
}

export default Product
