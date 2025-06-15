import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header>
        <nav>
      <h2 className='nav-logo'>grocery store</h2> 
       
        {/* search bar */}
        <div className="search-bar"> 
          <input type="text" placeholder="Search for products..." />
          <button type="submit">Search</button>
        </div>
        <div className='nav-links'>
       <Link className='link'  to="/create-page">Create Product</Link>
       <Link className='link' to="/">Home</Link>
        </div>

        {/* cart icon */}
        
         </nav>         
    </header>
  )
}

export default Nav