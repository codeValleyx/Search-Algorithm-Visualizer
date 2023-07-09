import React from 'react'
import { setHasBegun, reset } from '../utilities/nodeSlice';
import { useDispatch, useSelector} from 'react-redux';
import Select from './Select';

const Legend = () => {

  const dispatch = useDispatch();

  const hasBegun = useSelector(store => store.nodeSlice.hasBegun);
  
  return (
    <div className='legend'>
      <div className='controls'>
        <button className='begin' id='begin' type='button' onClick={
            (e)=>{

              e.target.classList.remove('button-jittery');

              if(hasBegun === 3)
                document.getElementById("clear").classList.add("button-jittery");
              else
                dispatch(setHasBegun(1));
            }
          }>
          <span>Begin!</span>
        </button>

        <button type='button' id='clear' onClick={(e)=>{e.target.classList.remove('button-jittery'); if(hasBegun !== 1) dispatch(setHasBegun(2))}}>
          Clear Path
        </button>

        <button type='button' id='reset' onClick={(e)=>{e.target.classList.remove('button-jittery'); if(hasBegun !== 1) dispatch(reset())}}>
          Reset Board
        </button>
      </div>

      <Select />

      <div className='node-legend'>
        <span>
          <div className='node' />
          <p>Visited</p>
        </span>
        <span>
        <div className='node' />
          <p>In-Path</p>
        </span>
      </div>
    </div>
  )
}

export default Legend