import React, { useEffect, useState } from 'react';
import './Footer.css';

import { useDispatch, useSelector } from 'react-redux';

import {
   addColValue,
   deleteVal,
   enterVal,
   selectSolved,
} from '../features/wordsSlice';

import checkWord from "check-if-word";

const words = checkWord('en');

function Footer() {
    const r1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const r2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const r3 = ["z", "x", "c", "v", "b", "n", "m"];

    const [state, setState] = useState([]);
    const [counter, setCounter] = useState(0);

    const solved = useSelector(selectSolved);

    const dispatch = useDispatch();

    // console.log(state);
    // console.log(counter);

    return (
        <div className='footer'>
            <div className='footer__row'>
                {r1.map((letter) => 
                    <p
                        onClick={() => {
                            if (counter < 5 && solved == false) {
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
                        onClick={() => {
                            if (counter < 5 && solved == false) {
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
                        if (counter == 5 && solved == false && isWord == true) {
                            setState([])
                            setCounter(0)
                            dispatch(enterVal())
                        } else {
                            if (solved == false) {
                                alert("Not a Word !!")
                            } else {
                                alert("Already Solved :)")
                            }
                            
                        }
                    }}
                >
                    ENTER
                </h2>

                {r3.map((letter) => 
                    <p
                        onClick={() => {
                            if (counter < 5 && solved == false) {
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
                        if (counter != 0 && solved == false) {
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