import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='flex flex-wrap gap-3 justify-center' >
        <Link to="/">home</Link>
        <Link to="/About">about</Link>
        <Link to="/Blog">blog</Link>
      </nav>
    </div>
  )
}

export default Navbar
