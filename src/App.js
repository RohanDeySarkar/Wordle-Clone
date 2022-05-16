import React, { useState } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import Column from "./components/Column";
import Footer from "./components/Footer";

function App() {
  const rowNums = [0, 1, 2, 3, 4, 5];

  return (
    <div className="app">
      <div className='app__header'>
        <h2>🌈 wordle by wrohan 🦄</h2>
      </div>

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
