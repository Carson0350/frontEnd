import React from 'react';

import gameData from '../../dummyData'

console.log(gameData)


class App extends React.Component {
  constructor(props) {
    super(props)


    this.state = {
      games: []
    }
  }
  render () {
    return (
      <div className='main-nav'>
        helloo
      </div>
    )
  }
}



export default App;

