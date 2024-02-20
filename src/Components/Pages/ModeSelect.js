import React, { useState, useEffect , useContext } from 'react';
import '../../Styles/modeSelect.css';
import '../../Styles/instrumentSelection.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import GameContext from '../GameContext';


function ModeSelect() {
    const { instrument, setMode, setDifficulty, setSkillMode } = useContext(GameContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [selectedMode, setSelectedMode] = useState(''); // Added selectedMode state
    const [difficulties, setDifficulties] = useState([]);
    const [modes, setModes] = useState([]);
    const [selectedSkillMode, setSelectedSkillMode] = useState('');
    const [skillModes, setSkillModes] = useState([]);
  
  
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectDifficulty = (difficulty) => {
        setSelectedDifficulty(difficulty);
        setDifficulty(difficulty); 
        setIsOpen(false);
      };

      const selectMode = (mode) => { 
        setSelectedMode(mode);
        setMode(mode.name); // Update the mode in the context
      };
      const selectSkillMode = (e) => {
        const selectedSkillModeName = e.target.value;
        const selectedSkillMode = skillModes.find(skillMode => skillMode.name === selectedSkillModeName);
        setSelectedSkillMode(selectedSkillMode);
        setSkillMode(selectedSkillModeName);
      };
      

    const handleStart = () => {
        const level = `/levels/${instrument}`;
        window.location.href = level;
      };
      useEffect(() => {
        fetch('http://localhost:5000/api/difficulties')
          .then(response => response.json())
          .then(data => setDifficulties(data))
          .catch(error => console.error('Error:', error));
      
        fetch('http://localhost:5000/api/mode')
          .then(response => response.json())
          .then(data => setModes(data))
          .catch(error => console.error('Error:', error));
      
        fetch('http://localhost:5000/api/skill_modes')
          .then(response => response.json())
          .then(data => setSkillModes(data)) // Corrected here
          .catch(error => console.error('Error:', error));
      }, []);

    console.log(instrument)
    console.log(selectedMode)

    return (
        <div className='modeSelect'>
            <Link className='back' to={'/instrument'}><p className='arrow'>&#8592;</p></Link>

            <div className='mode'>
  {modes.map(mode => (
    <div key={mode.id} className={`modes ${selectedMode.name === mode.name ? 'selected' : ''}`}>
      <img src={mode.image} alt={mode.name} onClick={() => selectMode(mode)} /> 
    </div>
  ))}
</div>

{selectedMode && selectedMode.id === 1 && (
  <select onChange={selectSkillMode} style={{ 
    width: '243px', 
    height: '40px', 
    borderRadius: '16px',
    fontSize: '16px',
    marginTop: '30px',  
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',

  }}>
    <option value="">Select a skill mode</option>
    {skillModes.map(skillMode => (
      <option key={skillMode.id} value={skillMode.name}>
        {skillMode.name}
      </option>
    ))}
  </select>
)}
            <button onClick={toggleDropdown}>
                <span className='arrow'>&#8595;</span>
                {selectedDifficulty && <span>{selectedDifficulty}</span>}
            </button>
            {isOpen && (
                <div className='dropdown'>
                    {difficulties.map(difficulty => (
                        <p key={difficulty.id} onClick={() => selectDifficulty(difficulty.name)}>{difficulty.name}</p>
                    ))}
                </div>
            )}

{selectedMode && selectedDifficulty && (
        <Link to={'/level'} className='continue-button'>Continue</Link>
)}
        </div>
    );
}

{/* <div className='mode'>
<div className={`quest ${selectedDifficulty === 'Quest' ? 'selected' : ''}`}>
  <img src={Quest} alt='Quest' />
</div>
<div className={`skill ${selectedDifficulty === 'Skill' ? 'selected' : ''}`}>
  <img src={Skill} alt='Skill' />
</div>
</div> */}

export default ModeSelect;


// import React from 'react';
// import '../../Styles/modeSelect.css';
// import '../../Styles/instrumentSelection.css';
// import Quest from '../../Assets/images/Quest.png';
// import Skill from '../../Assets/images/Skill.png';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function ModeSelect() {

//         const [isOpen, setIsOpen] = useState(false);
//         const [selectedMode, setSelectedMode] = useState('');

//         const toggleDropdown = () => {
//             setIsOpen(!isOpen);
//         };

//         const selectMode = (Mode) => {
//             setSelectedMode(Mode);
//             setIsOpen(false);
//         };


//   return (
//     <div className='modeSelect'>
//         <Link className='back' to={'/instrument'}><p className='arrow'>&#8592;</p></Link>
//         <div className='mode'>
//             <div className={`quest ${selectedMode === 'Quest' ? 'selected' : ''}`}>
//                 <img src={Quest} alt='Quest' />
//             </div>
//             <div className={`skill ${selectedMode === 'Skill' ? 'selected' : ''}`}>
//                 <img src={Skill} alt='Skill' />
//             </div>
//         </div>

//         <button onClick={toggleDropdown}>
//                     <span className='arrow'>&#8595;</span>
//                     {selectedMode && <span>{selectedMode}</span>}
//                 </button>
//                 {isOpen && (
//                     <div className='dropdown'>
//                         <p onClick={() => selectMode('Easy')}>Easy</p>
//                         <p onClick={() => selectMode('Medium')}>Medium</p>
//                         <p onClick={() => selectMode('Hard')}>Hard</p>
//                     </div>
//                 )}
//     </div>
//   );
// }

// export default ModeSelect;
