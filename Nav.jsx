import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='text-2xl flex gap-15 p-5 justify-center'>

        <NavLink className={(e)=> e.isActive ? "text-pink-400" : ""} to='/' >Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-pink-400" : ""} to='/products'>Products</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-pink-400" : ""} to='/service'>Service</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-pink-400" : ""}to='/about'>About</NavLink>

    </div>
  )
}

export default Nav