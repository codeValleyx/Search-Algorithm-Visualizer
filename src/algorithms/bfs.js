
// const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const dir = [ [0, 1], [1, 0], [0, -1], [-1, 0]];

const bfs = (grid, start, end)=>{

    const visitedInOrder =  getBfsNodesInOrder(grid, start, end);

    const pathInOrder= [];
    
      let cur = visitedInOrder[visitedInOrder.length - 1][0]
      cur = grid[cur.row][cur.col];

      while(cur != null){
        pathInOrder.unshift([cur.row, cur.col])

        cur = cur.prev;
      }
      
      visitedInOrder.forEach( (ele, index) => {
        setTimeout(()=>{
          document.getElementById(ele[0].row*grid[0].length + ele[0].col).classList.add("visited");
        }, index * 10);
      });

      const len = visitedInOrder.length;

      pathInOrder.forEach((ele, index)=>{
        setTimeout(()=>{
          document.getElementById(ele[0]*grid[0].length + ele[1]).classList.add("inPath");
        }, (len+index) * 10);
      });

}

const getBfsNodesInOrder = (grid, start, end)=>{
    const nodesInOrder = [];

    const queue = [];

    queue.push([start, {}]);
    grid[start.row][start.col].isVisited  = 1;

    while(queue.length > 0){
        const cur = queue.shift();

        if(JSON.stringify(cur[0]) === JSON.stringify(end)){
            nodesInOrder.push(cur);
            return nodesInOrder;
        }
        
            nodesInOrder.push(cur);


        dir.forEach((ele)=>{
            const newNode = [{
                row: cur[0].row + ele[0],
                col: cur[0].col + ele[1]
            }, cur[0]]

            if(newNode[0].row<0 || newNode[0].row>=grid.length || newNode[0].col<0 || newNode[0].col>=grid[0].length || grid[newNode[0].row][newNode[0].col].isVisited == 1 || grid[newNode[0].row][newNode[0].col].isWall == 1) return;

            if(grid[newNode[0].row][newNode[0].col].isVisited == 0){
                queue.push(newNode);
                
                grid[newNode[0].row][newNode[0].col].isVisited  = 1;
                grid[newNode[0].row][newNode[0].col].prev  = grid[cur[0].row][cur[0].col];
            }
        })

    }
    return nodesInOrder;
}

export default bfs;