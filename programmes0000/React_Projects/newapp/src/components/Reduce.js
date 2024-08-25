
import React, { useReducer, useState } from 'react'

const reducer=(todos,action)=>{
     switch (action.type) {
        case "einjbwcb":
            
            break;
     
        default:
            break;
     }
}
 const Reduce = () => {
    const [state,dispatch]=useReducer(reducer,[]);
    const [initialState,setInitialState]=useState('')

    const add=()=>{
      dispatch()
    }

    const data="<h1 style='color:green'>sdkcbsdjsjcvbdkjvdsjvbjlasbsw</h1>"
  return (
  // <div dangerouslySetInnerHTML={{__html:data}}/>
  <div dangerouslySetInnerHTML={{__html:data}}/>
  )
}
export default Reduce

