import React from 'react'
import { useState } from 'react'
function LudoBoard() {
    let[moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})
  return (
    <div>
      <p>Game Begins!</p>
      <div>
        <p>Blue moves:{moves.blue}</p>
        <button>+1</button>
        <p>Yellow moves:{moves.yellow}</p>
        <button>+1</button>
        <p>Green moves:{moves.green}</p>
        <button>+1</button>
        <p>Red moves:{moves.red}</p>
        <button>+1</button>
      </div>
    </div>
  )
}

export default LudoBoard
