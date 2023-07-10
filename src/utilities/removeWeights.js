
const removeWeights = (grid)=>{

    grid.current.forEach( (row, index) => 
      { 
         row.forEach( (ele, col) => {
           grid.current[index][col] = {
            ...ele,
            weight: 1
          }
        }
      )
    }
    );
}

export default removeWeights;