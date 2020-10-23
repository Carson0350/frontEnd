import React from  'react';
import axios from 'axios';

import { sampleGameData } from '../../dummyData'

class GameInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameInfo: {},
      isLoaded: false,
    }
  };

  componentDidMount() {
    // const gameId = sampleGameData;
    // axios.get('/games', {
    //   params: {
    //     gameId,
    //   },
    // })
    // .then((response) => {
    //   this.setState({
    //     gameInfo: response.data.game,
    //     isLoaded: true,
    //   });
    // })
    // .catch((error) => {
    //   this.setState({
    //     isLoaded: true,
    //     error,
    //   });
    // });
    console.log('gameInfo component mounted')
  }

  render () {
    return (
      <div>hello</div>
    )
  };
};

export default GameInfo