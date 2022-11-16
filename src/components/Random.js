import React from 'react';

function Random( { min, max } ) {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * max + min )
    
    return (
        <div className='Random'>Random value between {min} and {max} =`{">"}` {randomNumber}</div>
    )
};

export default Random;