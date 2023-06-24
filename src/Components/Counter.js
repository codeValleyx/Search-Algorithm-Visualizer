import React, { useEffect, useRef } from 'react'

const Counter = () => {
    const cnt = useRef(0);
    useEffect(()=>{cnt.current++}, [])
  return (
    <>{cnt}</>
  )
}

export default Counter