import React from 'react'
/* eslint-disable react/prop-types */


function Player({playerTitle,sumScore,currentScore}) {
  return (
    <>
        <section className='PlayerContainer'>
            <h3 id='playerTitle'>{playerTitle}</h3>
            <p id='sumScore'>{sumScore}</p>
            <p id='currentScore'>CURRENT{currentScore}</p>
            </section>
    </>
  )
}

export default Player