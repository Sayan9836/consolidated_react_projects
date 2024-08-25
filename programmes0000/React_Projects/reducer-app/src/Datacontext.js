import appContext from "./context";

import React, { useState } from 'react'

const Datacontext = ({children}) => {
    const [isAuth,setIsAuth]=useState(false);
  return (
   <appContext.Provider value={{message:'this data is from context', isAuth,setIsAuth}}>
       {children}
   </appContext.Provider>
  )
}

export default Datacontext
