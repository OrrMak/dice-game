import React, { useState } from 'react';
import RestartButton from './RestartButton.jsx';
import TheDice from './TheDice.jsx' 
import Player from './Player.jsx';
/* eslint-disable react/prop-types */


function GamePage({ winningScore }) {
  const [diceRes1,setDiceRes1]=useState(1);
  const [diceRes2,setDiceRes2]=useState(1);
  const [sum,setSum]=useState(0);

    //check
    console.log("GamePage rendered");

    //roll function - makes the rolling doce magic.
    function roll(){
        const newDiceRes1= (Math.random()*6)+1;
        const newDiceRes2= (Math.random()*6)+1;

        setDiceRes1(newDiceRes1);
        setDiceRes2(newDiceRes2);

        const addToSum=setSum(newDiceRes1+newDiceRes2);

    //check
        console.log( `this is setDiceRes1: ${newDiceRes1}`);
        console.log( `this is setDiceRes2: ${newDiceRes1}`);
    }

    return (
      <div>
        <RestartButton/>
        <TheDice diceRes1={diceRes1} diceRes2={diceRes2}/>
        <button id='RollTheDiceButton' onClick={roll}>ROLL DICE</button>
        <Player playerTitle="PLAYER 1" sumScore={sum} />
        <Player Player={diceRes1} diceRes2={diceRes2}/>
      </div>
    );
  }

export default GamePage;
