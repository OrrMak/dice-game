import React from 'react';
/* eslint-disable react/prop-types */

function RestartButton({goToHomePage}) {    

    return (
    <div>
        <button id="restartButton" onClick={goToHomePage}>New Game</button>
    </div>
  )
}

export default RestartButton