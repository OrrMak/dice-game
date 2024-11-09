import React from 'react'


function HomePage() {
  return (
    <>
        <h4>Roll The Dice</h4>
        <p>INSTRUCTIONS AS FOLLOW</p>
        <section id='scoreTargetButton'>
            <h2>Please Enter A Target Score</h2>
            <label htmlFor="numberInput"></label>
            <input type="number" id="numberInput" name="numberInput" min="0" max="100" step="1" value="0"/>
        </section>       
    </>
  )
}

export default HomePage