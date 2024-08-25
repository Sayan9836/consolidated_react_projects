import React from 'react'

import { CartState } from '../Context';
import Spinner from './Spinner';
const Tracks = () => {
  const {heading,trackList}=CartState();
  return (
    <div>
      {heading}

      {
        trackList.length===0?<Spinner/>:
        trackList.map((item)=>{
          return <p>{item.track}</p>
        })
      }

    </div>
  )
}

export default Tracks
