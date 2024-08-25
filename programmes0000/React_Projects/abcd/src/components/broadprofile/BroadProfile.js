import React, { useState } from 'react'
import './BroadProfile.css'
const BroadProfile = ({setBigProfile,getWord}) => {
  const [text,setText]=useState('');

  const handleChange=(e)=>{
    setText(e.target.value)
    getWord(text)
    console.log(text);
 }
  

  return (
    <div className="big-profile">
        <div className="text-area">
            <textarea cols="40" rows="10" value={text}  onChange={handleChange}></textarea>
        </div>
        <span>S</span>
        <button onClick={()=>setBigProfile(false)}>Go Back</button>
    </div>
  )
}

export default BroadProfile
