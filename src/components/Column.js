import React, { useEffect, useState } from 'react'
import './Column.css';

import { useDispatch, useSelector } from 'react-redux';
import {
    selectColValues,
    selectGuesses
} from '../features/wordsSlice';

function Column({rowNum}) {
    const [c, setC] = useState(0);

    const colValues = useSelector(selectColValues);
    const guesses = useSelector(selectGuesses);

    const currCol = colValues[rowNum]
    const guess = guesses[rowNum]

    // console.log(currCol);
    // console.log(guess)

    // const getAnswer = () => {
    //     if (guess.length != 0 && c < 5) {
    //         let idx = 0

    //         while (idx < 5){
    //             if(String(guess[idx]) == "#95FF51") {
    //                 setC(c + 1)
    //             }
    //             idx += 1 
    //         }
    //     }

    //     console.log(c)

    //     if (c == 5) {
    //         return <p
    //             style={{
    //                 textAlign: "center",
    //                 letterSpacing: "5px",
    //                 fontWeight: 700,
    //                 color: "#17B2FF"
    //             }}
    //         >
    //             SOLVED
    //         </p>
    //     }

    //     return <></>
    // }
    

    return (
        <>
            {/* {getAnswer()} */}
        
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
        </>
    )
}

export default Column