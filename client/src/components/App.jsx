import React from 'react';

import gameInfo from './gameNav.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      gameData: {},
    };
  }

  componentDidMount () {
    console.log('mounted')
  };

  render () {
    return (
      <div>
        <div>hello from app.jsx</div>
        <gameInfo />
      </div>
    )
  };
}

export default App;
