import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { setStart, setEnd } from '../utilities/nodeSlice'

const Node = (props) => {

    const wall = useSelector(store => store.nodeSlice.wall)
    const weight = useSelector(store => store.nodeSlice.weight)
    const start = useSelector(store => store.nodeSlice.startInit)
    const end = useSelector(store => store.nodeSlice.endInit)
    const startNode = useSelector(store => store.nodeSlice.startNode)
    const endNode = useSelector(store => store.nodeSlice.endNode)

    const dispatch = useDispatch()

    const hasOther = (e, me)=>{
        const classes = e.target.classList.value;
        const all = ["wall", "weight", "start", "end"]

        for(let i = 0;i<all.length; ++i){
            if(all[i] === me) continue;

            if(classes.includes(all[i])) return true;
        }

    }

    const handleClick = (e)=>{
        const curNode = {
            row: props.row,
            col: props.col
        }

        const {setCell} = props;

        if(wall && (!hasOther(e, "wall"))){
            if(e.target.classList.contains("wall")){
                e.target.classList.remove("wall");
                setCell(curNode.row, curNode.col, {isWall: 0})
            }
            else{
                e.target.classList.add("wall");
                setCell(curNode.row, curNode.col, {isWall: 1})
            }
        }


        if(weight && (!hasOther(e, "weight"))){
            if(e.target.classList.contains("weight")){
                e.target.classList.remove("weight");
                setCell(curNode.row, curNode.col, {weight: 0});
            }
            else{
                e.target.classList.add("weight");
                setCell(curNode.row, curNode.col, {weight: 10});
            }
        }


        if(start && (!hasOther(e, "start"))){
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

        
        if(end && (!hasOther(e, "end"))){
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

  return (
    <div name="node" id={props.val} className='node' onClick={handleClick}>
        
    </div>
  )
}

export default Node