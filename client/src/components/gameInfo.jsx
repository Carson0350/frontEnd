import React from  'react';
import axios from 'axios';

import { sampleGameData } from '../../dummyData'
console.log(sampleGameData)

class GameInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInfo: {},
      isLoaded: false,
      error: null,
    }
  };

  componentDidMount() {
    const gameId = sampleGameData;
    axios.get('/games', {
      params: {
        gameId,
      },
    })
    .then((response) => {
      this.setState({
        gameInfo: response.data.game,
        isLoaded: true,
      });
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error,
      });
    });
    console.log('gameInfo component mounted')
  }

  render () {
    return (
      <div>
        <div>Rocket League</div>
        <div>OverWatch</div>
        <div>League of Legands</div>
        <div>Counter Strike Global Defense </div>
      </div>
    );
  };
};

export default GameInfo