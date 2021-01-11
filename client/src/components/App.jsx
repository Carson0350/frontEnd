import React from 'react';

import gameData from '../../dummyData'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }




  render () {
    return (
      <div>
        <ul>
          <li>Rocket League</li>
          <li>Overwatch</li>
        </ul>
      </div>
    )
  }
}

export default App;

