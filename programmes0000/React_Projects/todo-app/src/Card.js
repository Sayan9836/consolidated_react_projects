import React from 'react'
const Card = ({ele,dispatch,text,setText,handleChange}) => {

  const HandleUpdate=(e)=>{
    const oldText=ele.text;
    setText(oldText);
    if (oldText!==ele.text) {
      dispatch({type:"update",payload:{text:text,id:ele.id}})
    }   
  }
  return (
    <div className="card" >
      <p>{ele.text}</p>
      <i onClick={HandleUpdate} class="fa-solid fa-pen-to-square"></i>
      <i onClick={()=>dispatch({type:"delete",payload:ele})} class="fa-solid fa-trash-can"></i>
    </div>
  )
}

export default Card
