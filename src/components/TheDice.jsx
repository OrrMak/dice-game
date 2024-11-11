import React from 'react';
/* eslint-disable react/prop-types */

//the public directory serves as the default root directory for static assets
function TheDice( {diceRes1,diceRes2}) {
  return (
    <div>
        <img src={`/images/dice-${diceRes1}.png`} alt={`dice-${diceRes1}`}/>
        <img src={`/images/dice-${diceRes2}.png`} alt={`dice-${diceRes2}`}/>
    </div>
  )
}

export default TheDice


