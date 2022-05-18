import React, { useEffect, useState } from 'react';
import './Footer.css';

import { useDispatch, useSelector } from 'react-redux';

import {
   addColValue,
   deleteVal,
   enterVal,
   selectSolved,
   selectGuesses,
   selectColValues,
   selectIdx
} from '../features/wordsSlice';

import checkWord from "check-if-word";

const words = checkWord('en');

function Footer() {
    const r1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const r2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const r3 = ["z", "x", "c", "v", "b", "n", "m"];

    const [state, setState] = useState([]);
    const [counter, setCounter] = useState(0);
    const  [letterColor, setLetterColor] = useState({
            a: "#E2E2E2",
            b: "#E2E2E2",
            c: "#E2E2E2",
            d: "#E2E2E2",
            e: "#E2E2E2",
            f: "#E2E2E2",
            g: "#E2E2E2",
            h: "#E2E2E2",
            i: "#E2E2E2",
            j: "#E2E2E2",
            k: "#E2E2E2",
            l: "#E2E2E2",
            m: "#E2E2E2",
            n: "#E2E2E2",
            o: "#E2E2E2",
            p: "#E2E2E2",
            q: "#E2E2E2",
            r: "#E2E2E2",
            s: "#E2E2E2",
            t: "#E2E2E2",
            u: "#E2E2E2",
            v: "#E2E2E2",
            w: "#E2E2E2",
            x: "#E2E2E2",
            y: "#E2E2E2",
            z: "#E2E2E2"
    })

    const solved = useSelector(selectSolved);
    const idx = useSelector(selectIdx);
    const colValues = useSelector(selectColValues);
    const guesses = useSelector(selectGuesses);

    const dispatch = useDispatch();

    // console.log(state);
    // console.log(counter);

    const updateLetterColor = () => {
        if (idx !== 0){
            let tempLetterColor = letterColor;
            let currWord = colValues[idx - 1]
            let tempIdx = 0
            let guess = guesses[idx - 1]

            while (tempIdx < 5){
                // console.log(guesses[idx - 1])
                let tempColor = guess[tempIdx]
                if (tempColor == "#D5D5D5"){
                    tempColor = "#A9A9A9"
                }
                if (tempLetterColor[currWord[tempIdx]] != "#95FF51"){
                    tempLetterColor[currWord[tempIdx]] = tempColor
                }
                tempIdx += 1
            }

            // console.log(tempLetterColor)

            setLetterColor(tempLetterColor)
        }
    }

    useEffect(() => {
        updateLetterColor()
    }, [guesses])


    return (
        <div className='footer'>
            <div className='footer__row'>
                {r1.map((letter) => 
                    <p
                        style={{backgroundColor: letterColor[letter]}}
                        onClick={() => {
                            if (counter < 5 && solved === false) {
                                setState([...state, letter])
                                dispatch(addColValue([...state, letter]))
                                setCounter(counter + 1)
                            }
                        }}
                    >
                        {letter}
                    </p>
                )}
            </div>

            <div className='footer__row'>
                {r2.map((letter) => 
                    <p
                        style={{backgroundColor: letterColor[letter]}}
                        onClick={() => {
                            if (counter < 5 && solved === false) {
                                setState([...state, letter])
                                dispatch(addColValue([...state, letter]))
                                setCounter(counter + 1)
                            }
                    }}
                >
                    {letter}
                </p>
                )}
            </div>

            <div className='footer__row'>
                <h2
                    onClick={() => {
                        let isWord = words.check(state.join(""));
                        // console.log(isWord)
                        if (counter === 5 && solved === false && isWord === true) {
                            setState([])
                            setCounter(0)
                            dispatch(enterVal())
                        } else {
                            if (solved === false) {
                                alert("Not a Word ❌")
                            } else {
                                alert("Already Solved 🎉")
                            }
                            
                        }
                    }}
                >
                    ENTER
                </h2>

                {r3.map((letter) => 
                    <p
                        style={{backgroundColor: letterColor[letter]}}
                        onClick={() => {
                            if (counter < 5 && solved === false) {
                                setState([...state, letter])
                                dispatch(addColValue([...state, letter]))
                                setCounter(counter + 1)
                            }
                        }}
                >
                    {letter}
                </p>
                )}

                <h2
                    onClick={() => {
                        if (counter !== 0 && solved === false) {
                            state.pop();
                            setCounter(state.length);
                            setState(state);
                            dispatch(deleteVal())
                        }
                    }}
                >
                    DELETE
                </h2>
            </div>
        </div>
    )
}

export default Footer