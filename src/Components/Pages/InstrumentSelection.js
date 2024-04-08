// import React from 'react';
// import '../../Styles/instrumentSelection.css';
// import { useState } from 'react';
// import girl1 from '../../Assets/images/girl-1-2.png';
// import { Link } from 'react-router-dom';


    // function InstrumentSelection() {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const [selectedInstrument, setSelectedInstrument] = useState('');

    //     const toggleDropdown = () => {
    //         setIsOpen(!isOpen);
    //     };

    //     const selectInstrument = (instrument) => {
    //         setSelectedInstrument(instrument);
    //         setIsOpen(false);
    //     };

    //     return (
    //         <div className='instrument-selection'>
    //         <Link className='back' to={'/   '}><p className='arrow'>&#8592;</p></Link>

    //             <h1>Select Your Instrument</h1>
    //             <button onClick={toggleDropdown}>
    //                 <span className='arrow'>&#8595;</span>
    //                 {selectedInstrument && <span>{selectedInstrument}</span>}
    //             </button>
    //             {isOpen && (
    //                 <div className='dropdown'>
    //                     <p onClick={() => selectInstrument('Flute')}>Flute</p>
    //                     <p onClick={() => selectInstrument('Oboe')}>Oboe</p>
    //                     <p onClick={() => selectInstrument('Clarinet')}>Clarinet</p>
    //                     <p onClick={() => selectInstrument('Alto Sax')}>Alto Sax</p>
    //                     <p onClick={() => selectInstrument('Tenor Sax')}>Tenor Sax</p>
    //                 </div>
    //             )}

    //             <div className='girl'>
    //                 <img src={girl1} alt='girl1' />
    //             </div>

    //     {selectedInstrument && (
    //             <Link to={'/mode'}  className='continue-button'>Continue</Link>
    //         )}
                
    //         </div>
    //     );
    // }

// export default InstrumentSelection;


import React, { useEffect, useState, useContext } from 'react';
import '../../Styles/instrumentSelection.css';
import girl1 from '../../Assets/images/girl-1-2.png';
import { Link } from 'react-router-dom';
import GameContext from '../GameContext';
    function InstrumentSelection() {
        const { setInstrument } = useContext(GameContext);
        const [isOpen, setIsOpen] = useState(false);
        const [selectedInstrument, setSelectedInstrument] = useState('');
        const [instruments, setInstruments] = useState([]);
      
        useEffect(() => {
          fetch('http://localhost:3306/api/instruments')
            .then(response => response.json())
            .then(data => setInstruments(data))
            .catch(error => console.error('Error:', error));
        }, []);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
      
        const selectInstrument = (instrument) => {
          setSelectedInstrument(instrument);
          setInstrument(instrument);
          setIsOpen(false);
        };
      
  
    return (
        <div className='instrument-selection'>
            <Link className='back' to={'/'}><p className='arrow'>&#8592;</p></Link>

            <h1>Select Your Instrument</h1>
            <button onClick={toggleDropdown}>
                <span className='arrow'>&#8595;</span>
                {selectedInstrument && <span>{selectedInstrument}</span>}
            </button>
            {isOpen && (
                <div className='dropdown'>
                    {instruments.map(instrument => (
                        <p key={instrument.id} onClick={() => selectInstrument(instrument.name)}>
                            {instrument.name}
                        </p>
                    ))}
                </div>
            )}

<div className='girl'>
        <img src={girl1} alt='girl' />
      </div>
   
    {selectedInstrument && (
        <Link to="/mode" className='continue-button'>Continue</Link>
    )}
    </div>
    );
}

export default InstrumentSelection;



