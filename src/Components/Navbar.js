import React from 'react';
import '../Styles/navbar.css'
import logo from '../Assets/images/logo.webp';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <button className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    <div className={`links ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Resources</a></li>
          <li><a href="/instrument">Learn</a></li>
        </ul>
      </div>
      <div className='account'></div>
    </nav>
  );
}

export default Navbar;