import React from 'react';
import '../Styles/hero.css';
import logo from '../Assets/images/logo.webp';
import right from '../Assets/images/music.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left'>
        <h1>The Beginner's Joyful Universe</h1>
    <Link to={'/instrument'} className='ready' onMouseOver={(e) => e.target.innerText = "Let's Go!"} onMouseOut={(e) => e.target.innerText = "Ready to Learn?"}>
            Ready to Learn?
    </Link>
        </div>
        <div className='right'>

            <img src={right} alt='music' />

        </div>
    </div>
  );
};

export default Hero;
