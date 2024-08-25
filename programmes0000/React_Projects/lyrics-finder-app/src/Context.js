import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios';
const cart=createContext();

const Context = ({children}) => {
  const [trackList,setTrackList]=useState([]);
  const[heading,setHeading]=useState('Top 10 Tracks')

  useEffect(()=>{
     axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
     .then(res=>setTrackList(res.data.message.body.track_list))
     .catch(err=>console.log(err))
  },[])
  
  return (
    <cart.Provider value={{trackList,heading}}>
     {children}
    </cart.Provider>
  )

}

export default Context


export const CartState=()=>{
  return useContext(cart);
}
