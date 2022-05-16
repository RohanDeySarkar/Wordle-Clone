import React, { useState } from 'react'
import './Column.css';

import { useSelector } from 'react-redux';
import {
    selectColValues,
    selectGuesses,
} from '../features/wordsSlice';

function Column({rowNum}) {
    const colValues = useSelector(selectColValues);
    const guesses = useSelector(selectGuesses);
    

    const currCol = colValues[rowNum]
    const guess = guesses[rowNum]

    // console.log(currCol);
    // console.log(guess)
    
    return (
        <div className='column'>
            {currCol.map((col, index) => {
                return <p
                    style={{backgroundColor: guess[index]}}
                >
                    {col}
                </p>
            }
            )}
        </div>
    )
}

export default Column