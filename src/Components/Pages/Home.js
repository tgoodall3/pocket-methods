import React from 'react';
import { useAuth } from '../../contexts/authContext';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Footer from '../Footer';


function Home() {
  return (
    <div>
    {/* <Navbar /> */}
    <Hero />
    {/* <Footer /> */}
    </div>
  );
}

export default Home;
