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

  componentDidMount() {
    fetch('http://localhost:3000/api/gameList')
    .then((response) => response.json())
    .then((data) => {
      console.log('dfkjsadk;lfj;lkdzjf;lksdjf', data)
      this.setState({
        games: data.game
      })
    })
    .catch((err) => {
      console.log(err)
    })
    this.setState ({
      games: gameData
    })
  }


  render () {
    return (
      <div className='main-nav'>
        helloo
        <gameData games={this.state.games} />
      </div>
    )
  }
}

export default App;


