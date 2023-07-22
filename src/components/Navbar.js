import React from 'react'
import VAIcon from './VAIcon';

  const Navbar = ({ handleCategoryChange }) => {
    const handleClick = (category) => {
      handleCategoryChange(category);
    };

    return (
      <nav>
        <div aria-label="Navigation Bar" className="navbar">
          <div aria-label="Left Side of Navbar" className="nav-left">
            {/* <img aria-label="V and A Logo" className='va-nav-logo' src="va-logo-crop-white.png" alt="V&A logo" /> */}
            <VAIcon />
            <h1  aria-label="Lucky Dip Page Title">Lucky Dip</h1>
          </div>
          <div aria-label="Right Side of Navbar" className="nav-right">
            <div aria-label="Select Random Category" className="categories" onClick={() => handleClick('random')}>
              <span className='category'>Get Lucky</span>
            </div>
            <div aria-label="Select Paintings Category" className="categories" onClick={() => handleClick('paintings')}>
              <span className='category'>Paintings</span>
            </div>
            <div aria-label="Select Sculpture Category" className="categories" onClick={() => handleClick('sculpture')}>
              <span className='category'>Sculpture</span>
            </div>
            <div aria-label="Select Metalwork Category" className="categories" onClick={() => handleClick('metalwork')}>
              <span className='category'>Metalwork</span>
            </div>
            <div aria-label="Select Furniture Category" className="categories" onClick={() => handleClick('furniture')}>
              <span className='category'>Furniture</span>
            </div>
            <div aria-label="Select Glass Category" className="categories" onClick={() => handleClick('glass')}>
              <span className='category'>Glass</span>
            </div>
            <div aria-label="Select Gareth Neal Category" className="categories " onClick={() => handleClick('neal,gareth')}>
              <span className='category'>Neal</span>
            </div>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar
