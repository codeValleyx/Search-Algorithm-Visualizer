import React, { useEffect, useState, useRef} from 'react'
import Node from './Node'
import { useSelector, useDispatch } from 'react-redux';
import BFS from "../algorithms/bfs";
import getNewGrid from '../utilities/getGrid';

const Main = () => {

  const [grid, setGrid] = useState([])
  const hasBegun = useSelector(store => store.nodeSlice.hasBegun);

  const start = useSelector(store => store.nodeSlice.startNode);
  const end = useSelector(store => store.nodeSlice.endNode);

  let g2= useRef([])

  let height=0;
  let width = 0;

  const s= 30;

  const observedDiv = useRef(null);

  useEffect(()=>{
    if (!observedDiv.current) {
      return;
    }

    if(hasBegun==0){

        //reset grid
        height = observedDiv.current.offsetHeight;
        width = observedDiv.current.offsetWidth;

        g2.current = getNewGrid(height, width, s)
    
        setGrid(g2.current);


        //reset UI
        let collections = document.querySelectorAll(".visited, .wall, .start, .end, .weight, .path");

        for(let i=0;i<collections.length;++i){
          collections[i].classList.remove("visited", "wall", "start", "end", "weight", "path")
        }
    }




    if(hasBegun){

      const visitedInOrder = BFS(g2.current, start, end);
    
      visitedInOrder.forEach( (ele, index) => {
        setTimeout(()=>{
          document.getElementById(ele[0].row*grid[0].length + ele[0].col).classList.add("visited");
        }, index*10)
      })
    }




  },[hasBegun]);

  const setCell = (r, c, data)=>{
    g2.current[r][c] = {...g2.current[r][c], ...data}
  }


  return (
    <div id="main" className='main' ref={observedDiv}>
      {
        grid.map((row, index)=>{
          return (row.map((cell, col)=>{
            return <Node row= {index} col={col} val={index*row.length + col} setCell={setCell} key={index*row.length + col}/>
          }))

        })
      }
    </div>
  )
}

export default Main