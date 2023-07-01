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

  const par = e.target.parentNode;
  if(par.type==="button"){
    par.classList.toggle("shadow")
  }
  else{
    e.target.classList.toggle("shadow")
  }
}

const Sidebar = () => {

  const dispatch = useDispatch();
  

  const handleWall = (e)=>{
    toggleShadow(e)

    
    dispatch(toggleWall())
  
  }
  const handleWeight = (e)=>{
    toggleShadow(e)

    dispatch(toggleWeight())
    
  }
  const handleStart = (e)=>{
    toggleShadow(e)

    
    dispatch(toggleStart())
      
  }
  const handleEnd = (e)=>{
    toggleShadow(e)

    
    dispatch(toggleEnd())
      
  }
  return (
    <div className='sidebar'>
        <button type='button' onClick={handleStart}>
         <img alt="start" src={START} />
         <p>Start</p>
        </button>
        <button type='button' onClick={handleEnd}>
         <img alt="end" src={END} />
         <p>End</p>
        </button>
        <button type='button' onClick={handleWall}>
         <img alt="wall" src={WALL} />
         <p>Wall</p>
        </button>
        <button type='button' onClick={handleWeight}>
         <img alt="weight" src={WEIGHT} />
         <p>Weight</p>
        </button>
    </div>
  )
}

export default Sidebar