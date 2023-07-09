
const dirs = [ [-1, 0], [0, 1], [1, 0], [0, -1]];
// const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];

const dfs = (grid, start, end)=>{

    const visitedInOrder =  [];
    getDFSNodesInOrder(grid, start, end, visitedInOrder);
    

    const pathInOrder= [];
    
      let cur = visitedInOrder[visitedInOrder.length - 1];

      while(cur != null){
        pathInOrder.unshift(cur)

        cur = grid[cur.row][cur.col].prev;
      }
      
      visitedInOrder.forEach( (ele, index) => {
        setTimeout(()=>{
          document.getElementById(ele.row*grid[0].length + ele.col).classList.add("visited");
        }, index * 20);
      });

      const len = visitedInOrder.length;

      pathInOrder.forEach((ele, index)=>{
        setTimeout(()=>{
          document.getElementById(ele.row*grid[0].length + ele.col).classList.add("inPath");
        }, (len+index) * 20);
      });

      return (len + pathInOrder.length);

}

const getDFSNodesInOrder = (grid, cur, end, visitedInOrder)=>{
    if(grid[cur.row][cur.col].isWall === 1) return 0;

    grid[cur.row][cur.col].isVisited = 1;
    visitedInOrder.push(cur);

    if(JSON.stringify(cur) === JSON.stringify(end)) return 1;

    for(let i = 0; i<dirs.length; ++i){
        const dir = dirs[i];
        
        const newNode = {row: cur.row + dir[0], col: cur.col + dir[1]};

        if(newNode.row<0 || newNode.col<0 || newNode.row>=grid.length || newNode.col>=grid[0].length || grid[newNode.row][newNode.col].isVisited === 1) continue;

        grid[newNode.row][newNode.col].prev = cur;

        if(getDFSNodesInOrder(grid, newNode, end, visitedInOrder) === 1) return 1;

    }

    return 0;

}

export default dfs;