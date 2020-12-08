
import React from 'react'
import GroceryListItem from './GroceryListItem.jsx'


const GameList = (props) => {
  console.log('props from GameList', props)
  return (
    <div>
      {props.game.map((game) => {
        return <GameListItem key={game.id} itemName={game.game} quantity={game.logo}/>
      }
    )}
    </div>
  )
}

export default GroceryList
