import React from 'react';

import sampleGameData from '../../dummyData.jsx';
import GameInfo from './GameInfo.jsx';



// const GameSection = (props) => {
//   console.log('props from game section', props)
//   return (
//     <div className='game-section-wrapper'>
//     <div className='main-nav'>
//       <div className='buttons'>
//         <GameInfo />
//       </div>
//     </div>
//   </div>
//   )
// };

function GameSection(props) {
  return (
    <div>
      {props.game.map((game) => {
        return <sampleGameData key={game.id} gameName={game.game} gameLogo={game.logo}/>
      }
    )}
    </div>
  )
}


export default GameSection;
