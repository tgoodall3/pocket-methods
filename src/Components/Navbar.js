import React, {useState, useEffect} from 'react';
import '../Styles/navbar.css'
import logo from '../Assets/images/pocket-logo-two.png';
import logoWhite from '../Assets/images/pocket-logo-four.png';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { doSignOut } from '../firebase/auth';
import {useAuth} from '../contexts/authContext/index.jsx';
import UserEmail from '../Components/Pages/SignedIn.js';


function Navbar() {
  const { userLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { currentUser } = useAuth();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <a href="/" className='logo'>
      <div >
      <img 
      
      className='logo'
        data-aos='fade-in' 
        src={isHovered ? logo : logoWhite} 
        alt='logo' 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      /> 
      </div>
      <li className="userName"style={{listStyle:'none'}}>  <UserEmail /> </li>
      </a>
      
      <button className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    <div className={`links ${isOpen ? 'open' : 'closed'}`}>
      
          <ul>
          {/* <li>  <UserEmail /> </li> */}
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/resources">Resources</a></li>
            {currentUser ? (
  <li><a href='/' onClick={doSignOut}>Logout</a></li>
) : (
  <li className='login'><a href="/login">Login</a></li>
)}
          </ul>
      </div>
      {/* <div className='account'></div> */}
    </nav>
  );
}

export default Navbar;