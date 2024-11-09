import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

function RestartButton() {
    const navigate=useNavigate(); // Initialize the navigate function
    
    const restart= ()=>{
        navigate('/');
    };

    return (
    <div>
        <button id="restartButton" onClick={restart}>New Game</button>
    </div>
  )
}

export default RestartButton