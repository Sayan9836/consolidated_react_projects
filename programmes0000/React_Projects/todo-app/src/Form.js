import React, { useReducer, useState } from 'react'
import Card from './Card';
import uuid from 'react-uuid'
import { reduce } from './Reduce'; 
const Form = () => {
    const[text,setText]=useState("");
    const[list,dispatch]=useReducer(reduce,[]);

    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch({type:"add",payload:{text,id:uuid()}})
      setText('');
    }

   const handleChange=(e)=>{
    setText(e.target.value)
   }
                     
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={text} type="text" placeholder='Enter a Todo ...' required/>
        <button type='submit'>Add item</button>
      </form>
       {
        list?.map((ele)=>{
         return <Card dispatch={dispatch} handleChange={handleChange} text={text} setText={setText} ele={ele}/>
        })
       }
    </div>
  )
}

export default Form
