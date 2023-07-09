import React from 'react'
import WALL from "../images/wall.png"
import WEIGHT from "../images/weight.png"
import START from "../images/start.png"
import END from "../images/end.svg"

import { useDispatch } from 'react-redux'
import { toggleWall, toggleEnd, toggleStart, toggleWeight} from '../utilities/nodeSlice'

const toggleShadow = (e)=>{
  const collection = document.getElementsByClassName("shadow");
  for(let i = 0; i<collection.length; ++i)
    if(e.target != collection[i])
      collection[i].classList.remove("shadow")

    e.target.classList.toggle("shadow");
}

const handleAnimation = e => {
  e.target.classList.remove("button-jittery");
}

const Sidebar = () => {

  const dispatch = useDispatch();
  

  const handleWall = (e)=>{
    handleAnimation(e);
    toggleShadow(e)

    
    dispatch(toggleWall())
  
  }
  const handleWeight = (e)=>{
    handleAnimation(e);
    toggleShadow(e)

    dispatch(toggleWeight())
    
  }
  const handleStart = (e)=>{
    handleAnimation(e);
    toggleShadow(e)

    
    dispatch(toggleStart())
      
  }
  const handleEnd = (e)=>{
    handleAnimation(e);
    toggleShadow(e)

    
    dispatch(toggleEnd())
      
  }
  return (
    <div className='sidebar'>
        <button type='button' id='start' onClick={handleStart}>
         <img alt="start" src={START} />
         <p>Start</p>
        </button>
        <button type='button' id='end' onClick={handleEnd}>
         <img alt="end" src={END} />
         <p>End</p>
        </button>
        <button type='button' id='wall' onClick={handleWall}>
         <img alt="wall" src={WALL} />
         <p>Wall</p>
        </button>
        <button type='button' id='weight' onClick={handleWeight}>
         <img alt="weight" src={WEIGHT} />
         <p>Weight</p>
        </button>
    </div>
  )
}

export default Sidebar