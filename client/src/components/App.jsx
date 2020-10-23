import React from 'react';
import axios from 'axios';

// import sampleGameData from '../../dummyData.jsx';
import gameInfo from './gameInfo.jsx';
// console.log(sampleGameData)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: {},
    };
  }

  componentDidMount() {
    console.log('App componented mounted')
  };


  render () {
    return (
      <div>
        <div className='main-nav'>
          <div className='buttons'>
            <div>Rocket League</div>
            <div>OverWatch</div>
            <div>League of Legands</div>
            <div>Counter Strike Global Defense </div>
          </div>
      </div>
    </div>
    )
  };
}

export default App;
