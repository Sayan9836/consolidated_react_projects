import React from 'react'
import { useState } from 'react';
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProd from './SingleProd';
import './style.css'
const Home = ({click}) => {

  const{state:{products}}=CartState();
  console.log(products);
  return (
    <div className='home'>
      <Filters/>
      <div className={click?'productContainer active':'productContainer'}>
    {
      
     products?.map((prod)=>(
      <SingleProd prod={prod} key={prod.id} />
     ))
    }
    </div>
  
    </div>
  )
}

export default Home
