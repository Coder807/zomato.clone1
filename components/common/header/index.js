import React from 'react'
import "./header.css";
const Header = () => {
  return (
    <div className='max-width header'>
      <img src='https://asset.brandfetch.io/idEql8nEWn/idNVDZqdhh.svg'
      alt='Zomato-logo'
      className='header-logo'></img>
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
            <i className="fi fi-rr-marker absolute-center location-icon"></i>
            <div>Bangalore</div>
            </div>
            <i className="fi fi-sr-caret-down absolute-center"></i>
          </div>
          <div className='location-search-seperator'></div>
          <div className='header-searchBar'>
          <i className="fi fi-rr-search absolute-center search-icon"></i>
          <input 
          placeholder='Search for restaurant,cuisine or a dish' 
          className='search-input'/>
        </div>
      </div>
      <div className='profile-wrapper'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY4YBoAPyVGlpoA_J0Vx2UP8RGNzW0xspDg&usqp=CAU' alt='profile' 
        className='header-profile-image'/>
        <span className='header-username'>Roli</span>
        <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
      </div>
    </div>
    </div>
  )
}

export default Header;
