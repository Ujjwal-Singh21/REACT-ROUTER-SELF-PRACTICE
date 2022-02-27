import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './AuthenticationRoutes/auth'

function NavBar () {

  const handleLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'none' : 'underlined',
      fontWeight: isActive ? 'bold' : 'normal',
      fontStyle: isActive ? 'italic' : 'normal'
    }
  }

  const auth = useAuth()
  
    return (
      <nav className='primary-nav'>
        <NavLink to='/' style={handleLinkStyle} > Home </NavLink>
        <NavLink to='/about' style={handleLinkStyle} > About </NavLink>
        <NavLink to='/products' style={handleLinkStyle} > Products </NavLink>
        <NavLink to='/users' style={handleLinkStyle} > Users </NavLink>
        <NavLink to='/profile' style={handleLinkStyle} > Profile </NavLink>
        {
          !auth.user && <NavLink to='logIn' style={handleLinkStyle}> Log-In </NavLink>
        }
      </nav>
    )
}

export default NavBar
