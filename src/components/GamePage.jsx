import React, { useState } from 'react';
import RestartButton from './RestartButton.jsx';
import TheDice from './TheDice.jsx' 
import WinPopup from './WinPopup.jsx';
import Player from './Player.jsx';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
/* eslint-disable react/prop-types */

function GamePage({ winningScore }) {
  const [diceRes1,setDiceRes1]=useState(1);
  const [diceRes2,setDiceRes2]=useState(1);
  const [roundScore,setRoundScore]=useState(0); //round score 
  const [totScore,setTotScore]=useState([0,0]); // cumulative game score 
  const [currentPlayer, setCurrentPlayer]=useState(0); // curretn palyer = 0 or 1
  const [showWinPopup,setShowWinPopup]=useState(false)// first popup is hidden;
  
  console.log("check: GamePage rendered");
  
  const navigate=useNavigate();
  
  const goToHomePage= () => {
    navigate ('/');
  };
  
  function closePopup(){
    setShowWinPopup(false);
  }

  function switchPlayer(){
      setCurrentPlayer(prevPlayer=>1-prevPlayer);
    }
  function sumTot(){
    const newTotScore=[...totScore] // copy of totScore
    newTotScore[currentPlayer] +=roundScore; //updates currentPlayer totScore at the playerIndex 
    setTotScore(newTotScore); // updates the array after changing the value in the currentPlayer index
  }

  function roll(){
        const newDiceRes1= (Math.floor(Math.random()*6))+1;
        const newDiceRes2= (Math.floor(Math.random()*6))+1;
        setDiceRes1(newDiceRes1);
        setDiceRes2(newDiceRes2);

        //case double auto playerSwitch, else the roundScore is updated.
        if(newDiceRes1===newDiceRes2){
          sumTot();
          setRoundScore(0);
          switchPlayer();
        }
        else {
          setRoundScore(roundScore+(newDiceRes1+newDiceRes2));
        }
        
        console.log(`current player is:${currentPlayer}`);
        console.log(`roundScore is:${roundScore}`);
        console.log(`this is setDiceRes1: ${newDiceRes1}`);
        console.log(`this is setDiceRes2: ${newDiceRes1}`);
    }  

    function hold(){
      sumTot();
      //winning scenario
      if(totScore[currentPlayer]>=winningScore){
            setShowWinPopup(true);
          }
      else{
            switchPlayer();
          }
    }

    return (
      <div>
        <RestartButton goToHomePage={goToHomePage}/>
        <TheDice diceRes1={diceRes1} diceRes2={diceRes2}/>
        <button id='RollTheDiceButton' onClick={roll}>ROLL DICE</button>
        <button id='holdButton' onClick={hold}>HOLD</button>
        <Player 
          playerTitle="Player 1"
          totScore={totScore[0]}
          roundScore={currentPlayer===0? roundScore : 0 } 
        />
        <Player 
          playerTitle="Player 2"
          totScore={totScore[1]}
          roundScore={currentPlayer===1? roundScore : 0 }
        />
           {/* Conditionally render the WinPopup */}
        
        {showWinPopup &&(
          <WinPopup
            currentPlayer={`Player ${currentPlayer+1}`}
            totScore={totScore[currentPlayer]}
            goToHomePage={goToHomePage}
            closePopup={closePopup}
          />
          )}
      </div>
    );
  }

export default GamePage;
