import React from 'react';

// import sampleGameData from '../../dummyData.jsx';
import GameInfo from './GameInfo.jsx';
// console.log(sampleGameData)

const GameSection = () => {
  <div className='game-section-wrapper'>
    <div className='main-nav'>
      <div className='buttons'>
        <div>Rocket League</div>
        <div>OverWatch</div>
        <div>League of Legands</div>
        <div>Counter Strike Global Defense </div>
        <div><GameInfo /></div>
      </div>
    </div>
  </div>
};

export default GameSection;
