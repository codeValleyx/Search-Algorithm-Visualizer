import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { setStart, setEnd } from '../utilities/nodeSlice'

const Node = (props) => {

    console.log("node");

    const wall = useSelector(store => store.nodeSlice.wall)
    const weight = useSelector(store => store.nodeSlice.weight)
    const start = useSelector(store => store.nodeSlice.startInit)
    const end = useSelector(store => store.nodeSlice.endInit)
    const startNode = useSelector(store => store.nodeSlice.startNode)
    const endNode = useSelector(store => store.nodeSlice.endNode)
    const hasBegun = useSelector(store => store.nodeSlice.hasBegun)

    const [className, setClassName] = useState("node");   

    const dispatch = useDispatch()

    const hasOther = (classes, me)=>{
        
        const all = ["wall", "weight", "start", "end"]

        for(let i = 0;i<all.length; ++i){
            if(all[i] === me) continue;

            if(classes.includes(all[i])) return true;
        }

    }

    useEffect(()=>{
        if(hasBegun === 0){
            setClassName("node")
        }

        if(hasBegun === 1){
            
        }

        if(hasBegun === 2){
            setClassName(prev => {
                prev = prev.replace("visited","")
                prev = prev.replace("inPath","")

                return prev;
            })
        }
    }, [hasBegun])

    const handleClick = useCallback((e)=>{
        // if(hasBegun === 1) return;
        const curNode = {
            row: props.row,
            col: props.col
        }
        const classes = e.target.classList.value;

        const {setCell} = props;

        if(wall && (!hasOther(classes, "wall"))){
            if(classes.includes("wall")){
                // e.target.classList.remove("wall");
                setClassName((prev)=>prev.replace("wall", ""));

                setCell(curNode.row, curNode.col, {isWall: 0})
            }
            else{
                // e.target.classList.add("wall");
                setClassName(prev => prev+" wall");
                setCell(curNode.row, curNode.col, {isWall: 1})
            }
        }

        else

        if(weight && (!hasOther(classes, "weight"))){
            if(classes.includes("weight")){
                // e.target.classList.remove("weight");
                setClassName((prev)=>prev.replace("weight", ""));
                setCell(curNode.row, curNode.col, {weight: 0});
            }
            else{
                // e.target.classList.add("weight");
                setClassName(prev => prev+" weight");

                setCell(curNode.row, curNode.col, {weight: 10});
            }
        }

        else

        if(start && (!hasOther(classes, "start"))){
            if(JSON.stringify(startNode) === JSON.stringify({})){
                // e.target.classList.add("start");
                setClassName(prev => prev+" start");

                dispatch(setStart(curNode));
            }
            else{
                if(JSON.stringify(startNode) === JSON.stringify(curNode)){
                    // e.target.classList.remove("start");
                setClassName((prev)=>prev.replace("start", ""));

                    dispatch(setStart({}));
                }
            }
        }

        else
        
        if(end && (!hasOther(classes, "end"))){
            if(JSON.stringify(endNode) === JSON.stringify({})){
                // e.target.classList.add("end");
                setClassName(prev => prev+" end");

                dispatch(setEnd(curNode));
            }
            else{
                if(JSON.stringify(curNode) === JSON.stringify(endNode)){
                    // e.target.classList.remove("end");
                setClassName((prev)=>prev.replace("end", ""));

                    dispatch(setEnd({}));
                }
            }
        }
    }, [wall, weight, start, end, startNode, endNode, className])

    const node = useMemo(()=>{
        // console.log("node1234");
        return <div name="node" id={props.val} className= {className} onClick={handleClick}></div>
    }, [className, handleClick, props.val])
    
    // return <div name="node" id={props.val} className= {className} onClick={handleClick}></div>;
    return node
  
}

export default React.memo(Node);
// export default Node;


// ~no need of memo here as its not expensive   (as per current understanding)