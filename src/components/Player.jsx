import React from 'react'
/* eslint-disable react/prop-types */


function Player({playerTitle,totScore,roundScore}) {
  return (
    <>
        <section className='PlayersContainer'>
            <h3 id='playerTitle'>{playerTitle}</h3>
            <p id='totScore'>{totScore}</p>
            <p id='roundScore'>CURRENT{roundScore}</p>
            </section>
    </>
  )
}

export default Player