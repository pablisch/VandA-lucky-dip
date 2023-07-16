import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <img className='va-nav-logo' src="va-logo-crop-white.png" alt="V&A logo" />
          <h1>Lucky Dip</h1>
        </div>
        <div className="nav-right">
          <div className="categories"><span className='category'>Paintings</span></div>
          <div className="categories"><span className='category'>Sculpture</span></div>
          <div className="categories"><span className='category'>Metalwork</span></div>
          <div className="categories"><span className='category'>Furniture</span></div>
          <div className="categories"><span className='category'>Glass</span></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
