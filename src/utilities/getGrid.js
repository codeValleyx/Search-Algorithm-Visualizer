
const getNewGrid = (height, width, s)=>{
    const grid = [];
      for(let i =0;i<height/s-1;++i){

        const row = []
        for(let j=0;j<width/s -1;++j){
          row.push({
            row: i,
            col: j,
            isVisited: 0,
            isWall: 0,
            weight:0,
            prev: null
          })
        }
        grid.push(row)
      }

    return grid;
}

export default getNewGrid;