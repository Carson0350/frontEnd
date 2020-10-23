import React from 'react';

import GameSection from './GameSection.jsx';


const App = () => (
  <div>
    <div className='main-nav'>
      <div className='buttons'>
        <GameSection />
        <div>Rocket League</div>
        <div>OverWatch</div>
        <div>League of Legands</div>
        <div>Counter Strike Global Defense </div>
      </div>
    </div>
  </div>
);

export default App;