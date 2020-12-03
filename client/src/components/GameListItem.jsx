import React from 'react'

const GameListItem = (props) => {
  console.log('props from GameListItem', props)
  return (
    <li>
      <span>{props.game}</span>
      <span>{props.logo}</span>
    </li>
  )
}

export default GameListItem