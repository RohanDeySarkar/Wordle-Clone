import React, { useState } from 'react';
import './App.css';

import { useSelector } from 'react-redux';
import {
  selectIdx,
  selectSolved,
  selectWord
} from './features/wordsSlice';

import Column from "./components/Column";
import Footer from "./components/Footer";

function App() {
  const solved = useSelector(selectSolved);
  const idx = useSelector(selectIdx);
  const word = useSelector(selectWord);

  const rowNums = [0, 1, 2, 3, 4, 5];
  
  return (
    <div className="app">
      <div className='app__header'>
        <h2>🌈 wordle by wrohan 🦄</h2>
      </div>

      {solved && 
        <div className='solved'>
          <p>SOLVED {idx + 1}/6</p>
        </div>
      }

      {idx > 5 ? (
        <div className='solved'>
          <p>{word}</p>
        </div>
      ):(
        <></>
      )}

      <div className='app__body'>
        {rowNums.map((rowNum) => (
            <Column 
              rowNum={rowNum}
            />
          ))
        }
      </div>

      <div className='app__footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
