import React, { useState, useRef } from 'react';
import '../Styles/metronome.css';
import { useContext } from 'react';
import GameContext from './GameContext';

function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [metronomeEnabled, setMetronomeEnabled] = useState(false);
  const [tempo, setTempo] = useState(60);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const intervalRef = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioSourceRef = useRef(null); 
   const { currentBeat, setCurrentBeat } = useContext(GameContext);

   const beatsPerLine = 16;

  const startMetronome = () => {
    setIsPlaying(true);

    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

    // Play a high-pitched beep before starting the metronome
    const beep = audioContextRef.current.createOscillator();
    beep.frequency.value = 1000; // Set this to the frequency you want for the beep
    beep.connect(audioContextRef.current.destination);
    beep.start();
    beep.stop(audioContextRef.current.currentTime + 0.1);

    intervalRef.current = setInterval(() => {
      oscillatorRef.current = audioContextRef.current.createOscillator();
      oscillatorRef.current.connect(audioContextRef.current.destination);
      oscillatorRef.current.start();
      oscillatorRef.current.stop(audioContextRef.current.currentTime + 0.1); 
      setCurrentBeat((prevBeat) => prevBeat < beatsPerLine * 2 ? prevBeat + 1 : prevBeat); 
    }, 60000 / tempo); 
  };

  const stopMetronome = () => {
    setIsPlaying(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setCurrentBeat(0); 
  };

  const handleTempoChange = (event) => {
    setTempo(event.target.value);
  };

  const handleMetronomeEnabledChange = (event) => {
    setMetronomeEnabled(event.target.checked);
    if (!event.target.checked) {
      stopMetronome();
    }
  };

  const startAudio = () => {
    if (audioBuffer) {
      audioSourceRef.current = audioContext.createBufferSource();
      audioSourceRef.current.buffer = audioBuffer;
      audioSourceRef.current.connect(audioContext.destination);
      audioSourceRef.current.start();
    }

    // Start the metronome when the audio starts and the metronome is enabled
    if (metronomeEnabled) {
      startMetronome();
    }
  };

  const stopAudio = () => {
    if (audioSourceRef.current) {
      audioSourceRef.current.stop();
    }

    stopMetronome();
  };

const toggleAudio = () => {
  if (isPlaying) {
    stopAudio(); // stopAudio already calls stopMetronome
  } else if (metronomeEnabled) {
    startAudio();
  }
  setIsPlaying(!isPlaying);
};

  return (
    <div className="metronome-container">
    <div className="tempo-slider">
  <input
    type="range"
    min="40"
    max="240"
    value={tempo}
    onChange={handleTempoChange}
  />
  <label>{tempo} BPM</label>
</div>
<div className="ticker" style={{ left: `${currentBeat * 10}px` }} /> {/* Modify this line */}

      <button className="start" onClick={toggleAudio}>{isPlaying ? 'Stop Audio' : 'Start Audio'}</button>
      <label className="switch">
        <input
          type="checkbox"
          checked={metronomeEnabled}
          onChange={handleMetronomeEnabledChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Metronome;

