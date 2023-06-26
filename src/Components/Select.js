import React from 'react'
import "./Select.css"

const Select = () => {

  return (
    <div className="select" defaultValue="bfs" >
        <select name="format" id="select">
            <option disabled>Choose an algorithm</option>
            <option value="bfs">Breadth First Search</option>
            <option value="dijkstra">Dijkstra</option>
        </select>
        <div id="more" className='more'>
            &#9660;
        </div>
    </div>
  )
}

export default Select