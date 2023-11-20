import React, { useState } from 'react';
import '../styles/header.css'; 
import LogoImage from '../Image/National_Gallery_logo-removebg-preview.png';

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <header className="header">
        <div className="logo">
        <img
           src={LogoImage}
          alt="Museum Logo"
          className="logo-image"
        />
      </div>
      <div className={`search-bar ${isSearchVisible ? 'active' : ''}`}>
        {isSearchVisible && (
          <input type="text" placeholder="Search..." className="search-input" />  
        )}
        <button className="search-button" onClick={toggleSearch}>
          {isSearchVisible ? 'Close' : 'Search'}
        </button>
      </div>
    </header>
  );
};

export default Header;
