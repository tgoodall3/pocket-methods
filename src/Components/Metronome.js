import React, { useState, useRef } from 'react';
import '../Styles/metronome.css';

function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(60);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const intervalRef = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();


  const startMetronome = () => {
    setIsPlaying(true);

    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    intervalRef.current = setInterval(() => {
      oscillatorRef.current = audioContextRef.current.createOscillator();
      oscillatorRef.current.connect(audioContextRef.current.destination);
      oscillatorRef.current.start();
      oscillatorRef.current.stop(audioContextRef.current.currentTime + 0.1); 
    }, 60000 / tempo); 
  };

  const stopMetronome = () => {
    setIsPlaying(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleTempoChange = (event) => {
    setTempo(event.target.value);
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
<div className="metronome-container">
      <select value={tempo} onChange={handleTempoChange}>
        <option value={40}>40 BPM</option>
        <option value={60}>60 BPM</option>
        <option value={80}>80 BPM</option>
      </select>
      {isPlaying ? (
        <button onClick={stopMetronome}>Stop Metronome</button>
      ) : (
        <button onClick={startMetronome}>Start Metronome</button>
      )}
      <button className="start" onClick={startAudio}>Start Audio</button>
    </div>
  );
}

export default Metronome;