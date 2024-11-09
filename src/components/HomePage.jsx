import React from 'react';
// import './HomePage.css';
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';


function HomePage({setWinningScore}) {
//this function updates the winning score in the parent component (App), according to the input value.
    const handleTheScoreChange= (ev)=>{
        setWinningScore(Number(ev.target.value));
        console.log(ev.target.value);;
    };

  return (
    <>
        <h1>Roll The Dice</h1>
        <p>INSTRUCTIONS AS FOLLOW</p>
        <section id='scoreTargetButton'>
            <h2>Please Enter A Target Score</h2>
            <label htmlFor="numberInput"></label>
            <input type="number" id="numberInput" 
            name="numberInput" min="1" max="500" 
            step="1" defaultValue="0" onChange={handleTheScoreChange} />
        </section>
        <Link to="./game">
            <button>START GAME</button>
        </Link>
    </>
  )
}

export default HomePage