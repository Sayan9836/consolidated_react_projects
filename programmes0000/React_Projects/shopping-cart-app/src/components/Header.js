import { Dropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import { Badge, Container, FormControl, Navbar, } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import CartItem from './CartItem'
const Header = ({click,setClick}) => {

   
    const {state:{Cart}}=CartState ();
    
    return (
        <Navbar bg="dark" variant='dark' style={{ height: 80 }} >
            <Container>
                <Navbar.Brand>
                    <Link  to='/' style={{textDecoration:'none'}}>Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='searchBar'>
                    <FormControl
                        style={{ width: '35vw',borderRadius:'24px' }}
                        placeholder='search a product'
                        className='m-auto'
                    />
                </Navbar.Text>
                {/* import Dropdown from 'react-bootstrap/Dropdown'; */}

                <Dropdown align='right'style={{gap:'200px'}} onClick={()=>setClick(!click)}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart color='white' />
                        <Badge>{Cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{background:'none'}}>
                        {
                            Cart.length>0?
                            (
                                Cart.map(prod=>(
                                   <CartItem prod={prod}/>                               
                                ))
                            ):
                            (<span style={{padding:10}}>Cart is Empty</span>)
                        }
                     
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>

    )
}

export default Header

// style={{minWidth:370}}