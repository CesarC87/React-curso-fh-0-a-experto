import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/todos">To-Do App</Link>      
        <NavLink 
            to="/"
            className={ (args) => { 
                console.log(args) 
                return 'active'}}
        >
            Home
        </NavLink>  
    </>
  )
}

export default NavBar

