import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import InstrumentSelection from './Components/Pages/InstrumentSelection';
import Mode from './Components/Pages/ModeSelect';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import GameContext from './Components/GameContext';
import Level from './Components/Pages/Level';


function App() {
  const [instrument, setInstrument] = useState(null);
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);


  return (
    <div className="App">
         <GameContext.Provider value={{ instrument, setInstrument, mode, setMode, difficulty, setDifficulty }}>
            <Navbar />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/instrument' element={<InstrumentSelection />} />
                <Route path='/mode' element={<Mode />} />
                <Route path='/level' element={<Level />} />
              </Routes>
            </Router>
            <Footer />
            </GameContext.Provider>
    </div>
  );
}

export default App;