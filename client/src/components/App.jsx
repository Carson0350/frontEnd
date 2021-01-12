import React from 'react';

import LeagueScroll from '../components/LeagueScroll.jsx'
import CurrentLeaderLogo from '../components/CurrentLeaderLogo.jsx'
import StatSection from '../components/StatSection.jsx'

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
        <div>
          <h4>League Scroll Component</h4>
          <LeagueScroll />
        </div>

        <div>
          <h4>Current Leader Team Logo Component</h4>
          <CurrentLeaderLogo />
        </div>

        <div>
          <h4>Team Stat and Player Stat Component</h4>
          <StatSection />
        </div>
      </div>
    )
  }
}

export default App;
