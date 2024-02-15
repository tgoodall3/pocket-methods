import React, { useEffect, useState, useContext } from 'react';
import GameContext from '../GameContext';

function Level() {
const { instrument, mode, difficulty } = useContext(GameContext);
  const [levelData, setLevelData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/levels?instrument=${instrument}&mode=${mode}&difficulty=${difficulty}`)
      .then(response => response.json())
      .then(data => setLevelData(data))
      .catch(error => console.error('Error:', error));
  }, [instrument, mode, difficulty]);

  console.log(instrument, mode, difficulty);
  console.log(levelData);  

  
  return <p>{instrument}{mode}{difficulty}</p>;
}
export default Level;