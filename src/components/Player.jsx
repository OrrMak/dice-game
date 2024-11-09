import React from 'react'
/* eslint-disable react/prop-types */


function Player({playerId,sumScore,currentScore}) {
  return (
    <>
        <section className='PlayerContainer'>
            <h3 id='playerId'>Player{playerId}</h3>
            <p id='sumScore'>{sumScore}</p>
            <p id='currentScore'>{currentScore}</p>
            </section>
    </>
  )
}

export default Player