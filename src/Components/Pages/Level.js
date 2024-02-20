import React, { useEffect, useState, useContext } from 'react';
import GameContext from '../GameContext';
import Metronome from '../Metronome';
import '../../Styles/level.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Level() {
  const { instrument, mode, difficulty, skillMode, setInstrument, setMode, setDifficulty, setSkillMode } = useContext(GameContext);
  const [levelData, setLevelData] = useState(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const navigate = useNavigate();
  const location = useLocation();

  const resetParameters = () => {
    setInstrument(null);
    setMode(null);
    setDifficulty(null);
    setSkillMode(null);
    console.log('resetting parameters');
  };

  useEffect(() => {
    if (location.pathname === '/instrument') {
      resetParameters();
    }
  }, [location]);


  useEffect(() => {
    console.log('skillMode in useEffect:', skillMode);
    let url = `http://localhost:5000/api/levels?instrument=${instrument}&mode=${mode}&difficulty=${difficulty}`;
    if (skillMode) {
      url += `&skillMode=${encodeURIComponent(skillMode)}`; 
    }
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        if (data) {
          setLevelData(JSON.parse(data));
          console.log(data);
        } else {
          console.log('No data received');
        }
      })
      .catch(error => console.error('Error:', error));
  }, [instrument, mode, difficulty, skillMode]);

  console.log(instrument, mode, difficulty, skillMode);
  // console.log(levelData);  

  const fetchAudio = async (url) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    setAudioBuffer(audioBuffer);
  };

  const startAudio = () => {
    if (audioBuffer) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    }
  };

  return (
    <div className='levels'>
    <Link className='back' to={'/instrument'}><p onClick={resetParameters} className='arrow'>&#8592;</p></Link>

      <Metronome />
      <button onClick={startAudio}>Start Audio</button>
      <p>{instrument} {mode} {difficulty} {skillMode}</p>
      <div id="sheet-music-container">
      {levelData && levelData.length > 0 ? levelData[0].SheetMusic : 'Loading...'}
      </div>
    </div>
  );
}

export default Level;