import React from 'react'



  const Navbar = ({ handleCategoryChange }) => {
    const handleClick = (category) => {
      handleCategoryChange(category);
    };

    return (
      <nav>
        <div className="navbar">
          <div className="nav-left">
            <img className='va-nav-logo' src="va-logo-crop-white.png" alt="V&A logo" />
            <h1>Lucky Dip</h1>
          </div>
          <div className="nav-right">
            <div className="categories" onClick={() => handleClick('random')}>
              <span className='category'>Get Lucky</span>
            </div>
            <div className="categories" onClick={() => handleClick('paintings')}>
              <span className='category'>Paintings</span>
            </div>
            <div className="categories" onClick={() => handleClick('sculpture')}>
              <span className='category'>Sculpture</span>
            </div>
            <div className="categories" onClick={() => handleClick('metalwork')}>
              <span className='category'>Metalwork</span>
            </div>
            <div className="categories" onClick={() => handleClick('furniture')}>
              <span className='category'>Furniture</span>
            </div>
            <div className="categories" onClick={() => handleClick('glass')}>
              <span className='category'>Glass</span>
            </div>
          </div>
        </div>
      </nav>
    )
  }

export default Navbar
