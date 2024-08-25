import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context'
const Filters = () => {
    const [rate,useRate]=useState(0);
    const {productState,productDispatch}=CartState();
    
    return (
        <div className='filters'>
            <span className='title'>Filtered products</span>
            <span>
                <Form.Check
                    inline
                    label='Ascending'
                    name='group1'
                    type='radio'
                    id={`inline-1`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Descending'
                    name='group1'
                    type='radio'
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Include Out of Stock'
                    name='group1'
                    type='checkbox'
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label='Fast Delivery'
                    name='group1'
                    type='checkbovery Only'
                    id={`inline-2`}
                />
            </span>
            <span>
                <label style={{paddingRight:10}}>Rating: </label>
                <Rating
                rating={rate}
                style={{cursor:'pointer'}}
                  />
            </span>
             <Button 
              variant='light'
             >
                Clear Filters
             </Button>
        </div>
    )
}

export default Filters
