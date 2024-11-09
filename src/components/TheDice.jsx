import React from 'react';
/* eslint-disable react/prop-types */

function TheDice( {diceRes1,diceRes2}) {
  return (
    <div>
        <img src={`../assets/images/dice-${diceRes1}.png`} alt={`dice-${diceRes}`}/>
        <img src={`../assets/images/dice-${diceRes2}.png`} alt={`dice-${diceRes}`}/>
    </div>
  )
}

export default TheDice


