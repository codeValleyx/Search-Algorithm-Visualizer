
const newClearedGrid = (grid)=>{

    grid.current.forEach( (row, index) => 
      { 
         row.forEach( (ele, col) => {
           grid.current[index][col] = {
            ...ele,
            isVisited: 0,
            prev: null
          }
        }
      )
    }
    );
}

export default newClearedGrid;