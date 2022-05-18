import { createSlice } from '@reduxjs/toolkit';

const wordsList = [
  "actor",
  "alert",
  "alter",
  "cover",
  "group",
  "sloth",
  "space",
  "worse",
  "wrong",
  "yield",
  "youth",
  "quiet",
  "range",
  "raise",
  "ratio",
  "panel",
  "metal",
  "hotel",
  "weary",
  "vague",
  "swing",
  "being",
  "binge",
  "brown",
  "crown",
  "drown",
  "heist"
]

function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];
}

const initialState = {
    word: random_item(wordsList),
    // word: "rohan",
    colValues: [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""]
    ],
    idx: 0,
    guesses: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {}
    },
    solved: false,
};

export const wordSlice = createSlice({
  name: 'words',

  initialState,
 
  reducers: {
    addColValue: (state, action) => {
      let len = action.payload.length
      let currIdx = 0

      while (currIdx < len) {
        state.colValues[state.idx][currIdx] = action.payload[currIdx]
        currIdx += 1
      }
    },

    enterVal: (state, action) => {
      let currIdx = 0
      let correctWord = state.word

      let countGreen = 0

      while (currIdx < 5){
        if (correctWord.includes(state.colValues[state.idx][currIdx]) == true) {
          // Yellow
          state.guesses[state.idx][currIdx] = "#FEFF51"
          if (state.colValues[state.idx][currIdx] == correctWord[currIdx]) {
            // Green
            state.guesses[state.idx][currIdx] = "#95FF51"
            countGreen += 1 
          }
        } else {
          // Gray
          state.guesses[state.idx][currIdx] = "#D5D5D5" 
        }
        currIdx += 1
      }
      
      if (countGreen == 5) {
        state.solved = true
      } else {
        state.idx = state.idx + 1
      }
    },
    
    deleteVal: (state, action) => {
      let currWord = state.colValues[state.idx]
      let lastIdx = currWord.length - 1

      if (currWord[lastIdx] != "") {
        state.colValues[state.idx][lastIdx] = ""
      } else if (currWord[lastIdx - 1] != "") {
        state.colValues[state.idx][lastIdx - 1] = ""
      } else if (currWord[lastIdx - 2] != "") {
        state.colValues[state.idx][lastIdx - 2] = ""
      } else if (currWord[lastIdx - 3] != "") {
        state.colValues[state.idx][lastIdx - 3] = ""
      } else if (currWord[lastIdx - 4] != "") {
        state.colValues[state.idx][lastIdx - 4] = ""
      } else if (currWord[lastIdx - 5] != "") {
        state.colValues[state.idx][lastIdx - 5] = ""
      }
    },

  }
});

export const { enterVal, addColValue, deleteVal } = wordSlice.actions;

export const selectGuesses = (state) => state.words.guesses;
export const selectColValues = (state) => state.words.colValues;
export const selectSolved = (state) => state.words.solved;
export const selectIdx = (state) => state.words.idx;
export const selectWord= (state) => state.words.word;

export default wordSlice.reducer;