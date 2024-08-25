import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({click,setClick}) => {
  return (
    <div className="navbar">
      <nav>
        <div>NEWS-APP</div>
        <ul className={click?'navbar-items active':'navbar-items'}>
          <Link to='/Home/News/general'><li>general</li></Link>
          <Link to='/Home/News/sports'><li>sports</li></Link>
          <Link to='/Home/News/business'><li>business</li></Link>
          <Link to='/Home/News/health'><li>health</li></Link>
          <Link to='/Home/News/technology'><li>technology</li></Link>
          <Link to='/Home/News/science'><li>science</li></Link>
          <Link to='/Home/News/entertainment'><li>entertainment</li></Link>
        </ul>
        
          <div style={{ position: 'absolute', right: '2rem' }}>
          <Link to='/' style={{textDecoration:'none'}}><Button size='large' variant='outlined'>Go Back</Button></Link>
          </div>
          <div className="menuList" onClick={()=>setClick(!click)}>
            <MenuIcon/>
          </div>
        
      </nav>
    </div>
  )
}

export default Navbar
