import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import InstrumentSelection from './Components/Pages/InstrumentSelection';
import Mode from './Components/Pages/ModeSelect';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/instrument' element={<InstrumentSelection />} />
          <Route path='/mode' element={<Mode />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
