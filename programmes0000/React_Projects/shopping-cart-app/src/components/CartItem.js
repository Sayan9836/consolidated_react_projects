import React from 'react'
import { Button } from 'react-bootstrap';
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context'
const CartItem = ({prod}) => {
    const {dispatch}=CartState();
  return (
    <span className="cartitem" key={prod.id}  >
        <img className='cartItemImg' src={prod.image} alt={prod.name} />
        <div className="cartItemDetail">
            <span>{prod.name}</span>
            <span>$ {prod.price.split(".")[0]}</span>
        </div>
        <AiFillDelete
         fontSize='20px'
         style={{cursor:'pointer'}}
         onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:prod})}
        />
      <Link to='/Cart'>
        <Button style={{width:'95%',margin:'0 10px'}}>
          Go To Cart
        </Button>
      </Link>
    </span>
  )
}

export default CartItem
