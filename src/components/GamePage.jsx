import React from 'react';
import RestartButton from './RestartButton.jsx';
/* eslint-disable react/prop-types */


function GamePage({ winningScore }) {
    console.log("GamePage rendered");
    return (
      <div>
        <RestartButton/>
        <p>Winning Score: {winningScore}</p>
      </div>
    );
  }

export default GamePage;
