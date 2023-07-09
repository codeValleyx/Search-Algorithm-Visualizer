import React from 'react'

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

const Node = ({val, handleClick, row, col}) => {

    // console.log("node");
    return (
        <div style = {getNodeStyle(row, col)} className='node' id={val} onClick={handleClick} onMouseOver={(e)=>{if(e.buttons === 1 ) handleClick(e)}}  onTouchMove={handleClick} onTouchCancel={(e)=>{e.preventDefault()}}></div> // onTouchStart={handleClick}
    );
  
}

// export default React.memo(Node);
export default Node;