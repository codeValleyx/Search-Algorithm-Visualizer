import React from 'react'
import WALL from "../images/wall.png"
import WEIGHT from "../images/weight.png"
import START from "../images/start.png"
import END from "../images/end.png"

import { useDispatch } from 'react-redux'
import { toggleWall, toggleEnd, toggleStart, toggleWeight } from '../utilities/nodeSlice'

const Sidebar = () => {

  const dispatch = useDispatch();


  const handleWall = (e)=>{
    dispatch(toggleWall());
  }
  const handleWeight = (e)=>{
    dispatch(toggleWeight());
  }
  const handleStart = (e)=>{
    dispatch(toggleStart());
  }
  const handleEnd = (e)=>{
    dispatch(toggleEnd());
  }
  return (
    <div className='sidebar'>
        <button type='button' onClick={handleWall}>
         <img alt="wall" src={WALL} />
        </button>
        <button type='button' onClick={handleWeight}>
         <img alt="weight" src={WEIGHT} />
        </button>
        <button type='button' onClick={handleStart}>
         <img alt="start" src={START} />
        </button>
        <button type='button' onClick={handleEnd}>
         <img alt="end" src={END} />
        </button>
        
    </div>
  )
}

export default Sidebar