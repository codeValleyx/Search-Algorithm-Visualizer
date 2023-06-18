import React from 'react'
import WALL from "../images/wall.png"
import WEIGHT from "../images/weight.png"
import START from "../images/start.png"
import END from "../images/end.png"

import { useDispatch } from 'react-redux'
import { toggleWall, toggleEnd, toggleStart, toggleWeight, reset} from '../utilities/nodeSlice'

const Sidebar = () => {

  const dispatch = useDispatch();

  const toggleShadow = (e)=>{
    const collection = document.getElementsByClassName("shadow");
    for(let i = 0; i<collection.length; ++i) if(e.target != collection[i]) collection[i].classList.remove("shadow")
    e.target.classList.toggle("shadow");
  }

  const handleWall = (e)=>{
    dispatch(toggleWall());

    toggleShadow(e)    
  }
  const handleWeight = (e)=>{
    dispatch(toggleWeight());
    
    toggleShadow(e)
  }
  const handleStart = (e)=>{
    dispatch(toggleStart());
    
    toggleShadow(e)
  }
  const handleEnd = (e)=>{
    dispatch(toggleEnd());
    
    toggleShadow(e)
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