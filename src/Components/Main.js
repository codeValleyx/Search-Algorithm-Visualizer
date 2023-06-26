import React, { useEffect, useState, useRef, useMemo, useCallback} from 'react'
import Node from './Node'
import { useSelector } from 'react-redux';
import BFS from "../algorithms/bfs";
import getNewGrid from '../utilities/getGrid';
import clearPathInGrid from '../utilities/clearPathInGrid';
import algorithms from "../algorithms/algorithms"

const Main = () => {

  console.log("main");

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

    if(hasBegun <= 0){

        //reset grid
        height = observedDiv.current.offsetHeight;
        width = observedDiv.current.offsetWidth;

        g2.current = getNewGrid(height, width, s)
    
        setGrid(g2.current);


        //reset UI
        let collections = document.querySelectorAll(".visited, .wall, .start, .end, .weight, .path, .inPath");

        for(let i=0;i<collections.length;++i){
          collections[i].classList.remove("visited", "wall", "start", "end", "weight", "path", "inPath")
        }
    }




    if(hasBegun == 1){

      if(JSON.stringify(start) === JSON.stringify({}) || JSON.stringify(end) === JSON.stringify({})) return;

      // BFS(g2.current, start, end);

      const selectedAlgoritm = document.getElementById("select").value;
      
      algorithms[selectedAlgoritm](g2.current, start, end);
      
    }


    if(hasBegun == 2){

      //reset grid

      clearPathInGrid(g2);

      //reset UI
        let collections = document.querySelectorAll(".visited, .inPath");

        for(let i=0;i<collections.length;++i){
          collections[i].classList.remove("visited", "inPath")
        }

    }




  },[hasBegun]);

  const setCell = useCallback((r, c, data)=>{
    g2.current[r][c] = {...g2.current[r][c], ...data}
  }, [])

  // const layout = useMemo(()=>{
  //   console.log("layout");
  //   return grid.map((row, index)=>{
  //     return (row.map((cell, col)=>{
  //       return <Node row= {index} col={col} val={index*row.length + col} setCell={setCell} key={index*row.length + col}/>
  //     }))
  //   })}
  //   , [grid, setCell])


  return (
    <div id="main" className='main' ref={observedDiv}>
      {
        grid.map((row, index)=>{
          return (row.map((cell, col)=>{
            return <Node style={getNodeStyle(index, col)} row= {index} col={col} val={index*row.length + col} setCell={setCell} key={index*row.length + col}/>
          }))
        })
        // layout
      }
    </div>
  )
}

const getNodeStyle = (row, col) => {
  if(row === 0 && col === 0){
    return {
      borderLeftStyle: "solid",
      borderTopStyle: "solid"
    };
  }
  else if( row === 0){
    return {
      borderTopStyle: "solid"
    }
  }
  else if(col === 0){
    return {
      borderLeftStyle: "solid"
    }
  }

  return {};
}

export default Main