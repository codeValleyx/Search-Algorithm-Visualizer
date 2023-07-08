import React from 'react'
import "./Select.css"

const Select = () => {

  const handleChange = (e) => {
    if(e.target.value !== "dijkstra"){
      [...document.getElementsByClassName("weight")].forEach(ele => {ele.style.zIndex= "-1"})
    }
    else{
        [...document.getElementsByClassName("weight")].forEach(ele => {ele.style.zIndex= "0"})
    }
  }

  return (
    <div className="select" defaultValue="bfs" >
        <select name="format" id="select" onChange={handleChange}>
            <option disabled>Choose an algorithm</option>
            <option value="bfs">Breadth First Search</option>
            <option value="dfs">Depth First Search</option>
            <option value="dijkstra">Dijkstra's</option>
        </select>
        <div id="more" className='more'>
            &#9660;
        </div>
    </div>
  )
}

export default Select