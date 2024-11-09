import React, { useState } from 'react';
import RestartButton from './RestartButton.jsx';
import TheDice from './TheDice.jsx'
/* eslint-disable react/prop-types */


function GamePage({ winningScore }) {
  const [diceRes1,setDiceRes1]=useState(1);
  const [diceRes2,setDiceRes2]=useState(1);

    //check
    console.log("GamePage rendered");

    //roll function
    function roll(){
        const newDiceRes1= (Math.random()*6)+1;
        const newDiceRes2= (Math.random()*6)+1;

        setDiceRes1(newDiceRes1);
        setDiceRes2(newDiceRes2);

        console.log( `this is setDiceRes1: ${newDiceRes1}`);
        console.log( `this is setDiceRes2: ${newDiceRes1}`);
    }

    return (
      <div>
        <RestartButton/>
        <TheDice/>
      </div>
    );
  }

export default GamePage;
