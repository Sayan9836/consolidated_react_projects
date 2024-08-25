
import React, { useReducer, useState } from 'react'

const reducer=(state,action)=>{
    
    switch (action.type) {
        case 'Increment':
          return {
            ...state,
            count:state.count+1,
          }
        case 'decrement':
            return {
                ...state,
                count:state.count-1,
              }
         case 'initcount':
            return{
                ...state,
                count:action.payload,
            }
           default:
            return state     
    }
}

const initialState={
     count:0
}

const Home = () => {
    const [input,setInput]=useState(0);
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>
            <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} />
            <div>
                <button onClick={()=>dispatch({type:'initcount',payload:input})}>Initialise State</button>
            </div>
        </div>
         <p>{state.count}</p>
        <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default Home
