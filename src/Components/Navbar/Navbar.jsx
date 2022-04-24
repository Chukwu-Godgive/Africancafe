import React from 'react'
import {Nav, NavLink, Bars, NavMenu, } from './NavbarElement';

function navbar () {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
           </NavLink>
           <Bars />
           <NavMenu>
             <NavLink to="/" activeStyle>Home</NavLink>
             <NavLink to="/about" activeStyle>About</NavLink>
             <NavLink to="/product" activeStyle>Product</NavLink>
             <NavLink to="/contacts" activeStyle>Contacts</NavLink>
           </NavMenu>
      </Nav>
    </>
  )
}

export default navbar