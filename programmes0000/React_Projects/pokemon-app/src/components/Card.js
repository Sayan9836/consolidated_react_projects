import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Card = ({name,url}) => {
    const [details,setDetails]=useState("")
    useEffect(()=>{
        const fetchData=()=>{
            axios.get(url)
            .then((res)=>setDetails(res))
            .catch((err)=> console.log(err))
            console.log(details);
        }
        fetchData();
    })
  return (
    <div style={{width:"345px",height:"345px",flexDirection:"row",border:"2px solid red",margin:"2rem 3.5rem"}}>
      <p>{name}</p>
    </div>
  )
}

export default Card
