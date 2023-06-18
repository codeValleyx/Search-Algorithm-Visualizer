import React from 'react'
import { setHasBegun, reset } from '../utilities/nodeSlice';
import { useDispatch} from 'react-redux';

const Legend = () => {

  const dispatch = useDispatch();
  
  return (
    <div className='legend'>
      <button type='button' onClick={()=>{dispatch(setHasBegun(1))}}>
        Start
      </button>

      <button type='button' onClick={()=>{dispatch(reset())}}>
        Reset
      </button>
    </div>
  )
}

export default Legend