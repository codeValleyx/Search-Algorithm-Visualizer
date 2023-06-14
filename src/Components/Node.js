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

    const handleClick = (e)=>{
        if(wall){
            e.target.classList.toggle("wall");
        }
        if(weight){
            e.target.classList.toggle("weight");
        }
        if(start){
            if(startNode == 0){
                e.target.classList.add("start");
                dispatch(setStart(e.target));
            }
            else{
                if(e.target == startNode){
                    e.target.classList.remove("start");
                    dispatch(setStart(0));
                }
            }
        }
        if(end){
            if(endNode == 0){
                e.target.classList.add("end");
                dispatch(setEnd(e.target));
            }
            else{
                if(e.target == endNode){
                    e.target.classList.remove("end");
                    dispatch(setEnd(0));
                }
            }
        }
    }

  return (
    <div name="node" id={props.val} key={props.val} className='node' onClick={handleClick}>
        
    </div>
  )
}

export default Node