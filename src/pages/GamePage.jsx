import React from 'react';
import './GamePage.css';
/* eslint-disable react/prop-types */


function GamePage({ winningScore }) {
    console.log("GamePage rendered");
    return (
      <div>
        <h1>Game Page</h1>
        <p>Winning Score: {winningScore}</p>
      </div>
    );
  }

export default GamePage;
