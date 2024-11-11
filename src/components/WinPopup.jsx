import React from 'react';
/* eslint-disable react/prop-types */

function WinPopup({currentPlayer, totScore,goToHomePage,closePopup}) {

    return (
        <section id='winPopup'>
            <p id='popupText'>{currentPlayer} won, with a scroe of {totScore}</p>
            <button id='popupButton' 
                onClick={()=>{goToHomePage(); closePopup();}}>
                    RETURN TO HOMEPAGE
            </button>
        </section>
    )
}

export default WinPopup