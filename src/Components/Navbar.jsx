
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navContainer'>
            <NavLink className="navlinks" to="/">Login</NavLink>
            <NavLink className="navlinks" to="/tracksheet">Tracksheet</NavLink>
            <NavLink onClick={()=>{localStorage.clear()}} className="navlinks" to="/">LogOut</NavLink>
        </nav>
    </div>
  )
}

export default Navbar