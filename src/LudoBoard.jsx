import React from 'react'
import { useState } from 'react'
function LudoBoard() {
    let[moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})
    let updateBlue=()=>{
        setMoves((pre)=>{
            return {...pre,blue:pre.blue+1}
        })
    }
    let updateYellow=()=>{
        setMoves((pre)=>{
            return {...pre,yellow:pre.yellow+1}
        })
    }
    let updateGreen=()=>{
        setMoves((pre)=>{
            return {...pre,green:pre.green+1}
        })
    }
    let updateRed=()=>{
        setMoves((pre)=>{
            return {...pre,red:pre.red+1}
        })
    }
  return (
    <div>
      <p>Game Begins!</p>
      <div>
        <p>Blue moves:{moves.blue}</p>
        <button onClick={updateBlue} style={{backgroundColor:"blue",color:"white" }}>+1</button>
        <p>Yellow moves:{moves.yellow}</p>
        <button onClick={updateYellow} style={{backgroundColor:"yellow", color:"black"}}>+1</button>
        <p>Green moves:{moves.green}</p>
        <button onClick={updateGreen} style={{backgroundColor:"green",color:"white"}}>+1</button>
        <p>Red moves:{moves.red}</p>
        <button onClick={updateRed} style={{backgroundColor:"red",color:"white"}}>+1</button>
      </div>
    </div>
  )
}

export default LudoBoard
