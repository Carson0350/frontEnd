import React from 'react';

// import sampleGameData from '../../dummyData.jsx';
import GameInfo from './GameInfo.jsx';


const GameSection = () => {
  return (
    <div className='game-section-wrapper'>
    <div className='main-nav'>
      <div className='buttons'>
        <GameInfo />
      </div>
    </div>
  </div>
  )
};

export default GameSection;
