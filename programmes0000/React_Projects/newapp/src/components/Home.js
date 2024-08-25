
import React from 'react'
import { useState } from 'react'
import Slider from './Slider'
import { HomeImg } from '../data'
import Clock from './Clock'
import Reduce from './Reduce'
const Home = () => {
  // const [count, setCount] = useState(0);
  const [state, setState] = useState({ count: 4, theme: 'blue' })
  const count = state.count;
  const theme = state.theme;
  
  const handleIncreaseClick = () => {
    setState(prev => {
      return { ...prev, count: prev.count + 1 }
    });
  }

  const handleDecreaseClick = () => {
    setState(prev=>{
      return {...prev,count:prev.count-1}
    });
  }

  const data = `
      dkubahcbavccvjcvsJcb
      fsfvsfv;kddnvkdfvnjlvbd
     pnlncsjcnsljcslj slj cj 
    `;                        

  return (
    <>
      <nav>
        <container >
          <ul style={{ display: 'flex' }}>
            <li style={{ padding: '10px' }}>product</li>
            <li style={{ padding: '10px' }}>product</li>
            <li style={{ padding: '10px' }}>product</li>
            <li style={{ padding: '10px' }}>product</li>
            <li style={{ padding: '10px' }}>product</li>
          </ul>
        </container>
      </nav>
      <h1>{count}{theme}</h1>

      {/* <Slider prop1={HomeImg} /> */}
      <div
        dangerouslySetInnerHTML={{ __html: data }}
      >
 
      </div>

      <button style={{ cursor: 'pointer' }} onClick={handleIncreaseClick}>Increse</button>
      <button style={{ marginLeft: "10px", cursor: 'pointer' }} onClick={handleDecreaseClick}>Decrese</button>
         
      <Clock />
      <Reduce/>
    </>
  )

}

export default Home
