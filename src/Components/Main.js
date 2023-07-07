import React, { useEffect, useState, useRef, useCallback} from 'react'
import Node from './Node'
import { useSelector, useDispatch } from 'react-redux';
import getNewGrid from '../utilities/getGrid';
import clearPathInGrid from '../utilities/clearPathInGrid';
import algorithms from "../algorithms/algorithms"
import { setHasBegun, setStart, setEnd } from '../utilities/nodeSlice';

const Main = () => {

  console.log("main");

  const dispatch = useDispatch();

  const [grid, setGrid] = useState([])

    const wall = useSelector(store => store.nodeSlice.wall)
    const weight = useSelector(store => store.nodeSlice.weight)
    const start = useSelector(store => store.nodeSlice.startInit)
    const end = useSelector(store => store.nodeSlice.endInit)
    const startNode = useSelector(store => store.nodeSlice.startNode)
    const endNode = useSelector(store => store.nodeSlice.endNode)
    const hasBegun = useSelector(store => store.nodeSlice.hasBegun)

    let g2= useRef([])

    let height=0;
    let width = 0;
  
    const s= 30;
    
    const observedDiv = useRef(null);

    const hasOther = (classes, me)=>{
        
        const all = ["wall", "weight", "start", "end"]

        for(let i = 0;i<all.length; ++i){
            if(all[i] === me) continue;

            if(classes.includes(all[i])) return true;
        }

    }

    const handleClick = 
        (e, row, col)=>{
        if(hasBegun === 1 || hasBegun === 3) return;
        const curNode = {
            row: row,
            col: col
        }
        const classes = e.target.classList.value;


        if(wall && (!hasOther(classes, "wall"))){
            if(classes.includes("wall")){
                e.target.classList.remove("wall");

                setCell(curNode.row, curNode.col, {isWall: 0})
            }
            else{
                e.target.classList.add("wall");
                setCell(curNode.row, curNode.col, {isWall: 1})
            }
        }

        else

        if(weight && (!hasOther(classes, "weight"))){
            if(classes.includes("weight")){
                e.target.classList.remove("weight");
                setCell(curNode.row, curNode.col, {weight: 1});
            }
            else{
                e.target.classList.add("weight");

                if(document.getElementById("select").value !== "dijkstra"){
                  e.target.style.zIndex= "-1";
                }
                else{
                  e.target.style.zIndex = "0";
                }

                setCell(curNode.row, curNode.col, {weight: 10});
            }
        }

        else

        if(start && (!hasOther(classes, "start"))){
            if(JSON.stringify(startNode) === JSON.stringify({})){
                e.target.classList.add("start");

                dispatch(setStart(curNode));
            }
            else{
                if(JSON.stringify(startNode) === JSON.stringify(curNode)){
                    e.target.classList.remove("start");

                    dispatch(setStart({}));
                }
            }
        }

        else
        
        if(end && (!hasOther(classes, "end"))){
            if(JSON.stringify(endNode) === JSON.stringify({})){
                e.target.classList.add("end");

                dispatch(setEnd(curNode));
            }
            else{
                if(JSON.stringify(curNode) === JSON.stringify(endNode)){
                    e.target.classList.remove("end");

                    dispatch(setEnd({}));
                }
            }
        }
    }

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
          collections[i].classList.remove("visited", "wall", "start", "end", "weight", "path", "inPath");
          collections[i].innerHTML = "";
        }
    }




    if(hasBegun === 1){

      if(JSON.stringify(startNode) === JSON.stringify({}) || JSON.stringify(endNode) === JSON.stringify({})){
        dispatch(setHasBegun(-1));
        
        return;
      }

      // BFS(g2.current, start, end);

      const selectedAlgoritm = document.getElementById("select").value;
      
      const endOfVisualization = algorithms[selectedAlgoritm](g2.current, {...startNode}, {...endNode});

      setTimeout(()=>{dispatch(setHasBegun(3))}
      , endOfVisualization*10);
      
    }


    if(hasBegun === 2){

      //reset grid

      clearPathInGrid(g2);

      //reset UI
        let collections = document.querySelectorAll(".visited, .inPath");

        for(let i=0;i<collections.length;++i){
          collections[i].classList.remove("visited", "inPath");
          collections[i].innerHTML = "";
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
            return <Node row= {index} col={col} val={index*row.length + col} handleClick={(e)=>handleClick(e, index, col)} key={index*row.length + col}/>
          }))
        })
        // layout
      }
    </div>
  )
}

export default Main