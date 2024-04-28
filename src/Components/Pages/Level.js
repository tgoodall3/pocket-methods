import React, { useEffect, useState, useContext } from 'react';
import GameContext from '../GameContext';
import Metronome from '../Metronome';
import '../../Styles/level.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MotivationBot from '../MotivationBot';

function Level() {
  const { instrument, mode, difficulty, skillMode, setInstrument, setMode, setDifficulty, setSkillMode, levelName, setLevelName} = useContext(GameContext);
  const [levelData, setLevelData] = useState(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const navigate = useNavigate();
  const location = useLocation();
  const [isBotVisible, setIsBotVisible] = useState(false);
  const { currentBeat } = useContext(GameContext);
  const noteWidth = 50;

  const beatsPerLine = 16;
  const lineHeight = 135; 

  const currentLine = Math.floor(currentBeat / beatsPerLine);
  const beatInLine = currentBeat % beatsPerLine;


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
  }, [instrument, mode, difficulty, skillMode, levelName]);

  console.log(instrument, mode, difficulty, skillMode, levelName);
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

  const showBot = () => {
  setIsBotVisible(true);
  setTimeout(() => setIsBotVisible(false), 5000); // Hide the bot after 5 seconds
};

useEffect(() => {
  const intervalId = setInterval(() => {
    setIsBotVisible(true);
    setTimeout(() => setIsBotVisible(false), 5000); // Hide the bot after 5 seconds
  }, 20000); // Show the bot every 2 minutes

  return () => clearInterval(intervalId);
}, []);

  // console.log(levelData[0].SheetMusic);

  return (
    <div className='levels'>
    {/* <h1 className='instrument'>{instrument}</h1> */}
    <div className='headLvl'>
    <h1 className='skillModeLvl'>{levelData && levelData.length > 0 ? levelData[0].LevelName : 'Loading...'}</h1>
      <button className='learnMore' onClick={() => navigate('/resources')}>Learn More</button>
    </div>
    <Link className='back' to={'/instrument'}><p onClick={resetParameters} className='arrow'>&#8592;</p></Link>
    {/* <p>{instrument} {mode} {difficulty} {skillMode}</p> */}
    <div id="sheet-music-container">
    {levelData && levelData.length > 0 ? (
      <>
        <img src={levelData[0].SheetMusic} alt="Sheet Music" />
        <div id="ticker" style={{ left: `${ 182 + beatInLine * noteWidth}px`, top: `${30 + currentLine * lineHeight}px` }} />
      </>
    ) : 'Loading...'}
  </div>
    <div className='buttons'>
      <Metronome />
    </div>

    {isBotVisible && <MotivationBot />}
    </div>
  );
}

export default Level;