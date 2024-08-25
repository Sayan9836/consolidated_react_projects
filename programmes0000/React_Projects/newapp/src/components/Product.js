import React, { useContext } from 'react'
import { ProductImg } from '../data'
import Slider from './Slider'
import { newContext } from '../context'
import { Abc } from '../context'
const Product = ({ name, desc }) => {

  // const { a, state, setState } = useContext(newContext);
  return (
    <div>

      <h1>{name}</h1>
      <h1>{desc}</h1>
      <h1></h1>
      <Slider prop1={ProductImg} />
    </div>
  )
}

export default Product
