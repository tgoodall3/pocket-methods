import React from 'react';
import '../Styles/navbar.css'
import logo from '../Assets/images/logo.webp';


function Navbar() {
  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt='logo' />
        </div>
      <div className='links'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Resources</a></li>
                    <li><a href="/instrument">Learn</a></li>
                    <div className='account'></div>

                </ul>

                
       </div>
            </nav>
        );
    }

export default Navbar;