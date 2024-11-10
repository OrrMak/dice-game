import React, { useState } from 'react';
import RestartButton from './RestartButton.jsx';
import TheDice from './TheDice.jsx' 
import Player from './Player.jsx';
/* eslint-disable react/prop-types */


function GamePage({ winningScore }) {
  const [diceRes1,setDiceRes1]=useState(1);
  const [diceRes2,setDiceRes2]=useState(1);
  const [roundScore,setRoundScore]=useState(0); //round score 
  const [totScore,setTotScore]=useState[0,0]; // cumulative game score 
  const [currentPlayer, setCurrentPlayer]=useState(0); // curretn palyer = 0 or 1


    //check
    console.log("check: GamePage rendered");

    //roll function
    function roll(){
        const newDiceRes1= (Math.random()*6)+1;
        const newDiceRes2= (Math.random()*6)+1;
        setDiceRes1(newDiceRes1);
        setDiceRes2(newDiceRes2);

        //case double auto playerSwitch, else the roundScore is updated.
        if(newDiceRes1===newDiceRes2){
          setRoundScore(0);
          setCurrentPlayer(prevPlayer=>1-prevPlayer);
        }
        else {
          setRoundScore(roundScore+(newDiceRes1+newDiceRes2));
        }
        //check
        console.log(`current player is:${currentPlayer}`);
        console.log(`roundScore is:${roundScore}`);
    //check
        console.log( `this is setDiceRes1: ${newDiceRes1}`);
        console.log( `this is setDiceRes2: ${newDiceRes1}`);
    }    
        function hold(){
          const newTotScore=[...totScore] // copy of totScore
          newTotScore[currentPlayer] +=roundScore; //updates currentPlayer totScore at the playerIndex 
          setTotScore(newTotScore); // updates the array after changing the value in the currentPlayer index

          setCurrentPlayer(prevPlayer=>1-prevPlayer);// switchPlayer
        }


    return (
      <div>
        <RestartButton/>
        <TheDice diceRes1={diceRes1} diceRes2={diceRes2}/>
        <button id='RollTheDiceButton' onClick={roll}>ROLL DICE</button>
        {/* <Player playerTitle="PLAYER 1"/> */}
        <button id='holdButton' onClick={hold}>HOLD</button>
      </div>
    );
  }

export default GamePage;
