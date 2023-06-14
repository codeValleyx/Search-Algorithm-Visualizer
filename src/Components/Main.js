import React, { useEffect, useState, useRef } from 'react'
import Node from './Node'

const Main = () => {

  const [cells, setCells] = useState(0);
  cons

  const observedDiv = useRef(null);

  useEffect(()=>{
    if (!observedDiv.current) {
      return;
    }

    const height = observedDiv.current.offsetHeight;
    const width = observedDiv.current.offsetWidth;
    const curCells = (height*width/ (30*30));

    // observedDiv.current.style.maxWidth = width;
    // observedDiv.current.style.maxHeight = height;

    const remArea = (width * height) - curCells*30*30;
    setCells(Math.floor(curCells - remArea/(30*30)));


  },[observedDiv]);

  return (
    <div id="main" className='main' ref={observedDiv}>
      {
        
        Array(cells).fill("").map((val, index)=><Node val={index}/>)
        
      }
    </div>
  )
}

export default Main