import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import InstrumentSelection from './Components/Pages/InstrumentSelection';
import Mode from './Components/Pages/ModeSelect';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import InstrumentContext from './Components/InstrumentContext';
// import ModeSelect from './ModeSelect';


function App() {
  const [instrument, setInstrument] = useState(null);

  return (
    <div className="App">
          <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/instrument' element={<InstrumentSelection />} />
          <Route path='/mode' element={<Mode />} />
        </Routes>
      </Router>
      <Footer />
    </InstrumentContext.Provider>
    </div>
  );
}

export default App;
