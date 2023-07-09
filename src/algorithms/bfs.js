
// const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const dir = [ [0, 1], [1, 0], [0, -1], [-1, 0]];

const bfs = (grid, start, end)=>{

    const visitedInOrder =  getBfsNodesInOrder(grid, start, end);

    const pathInOrder= [];
    
      let cur = visitedInOrder[visitedInOrder.length - 1];

      while(cur !== null){
        pathInOrder.unshift(cur);

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

const getBfsNodesInOrder = (grid, start, end)=>{
    const nodesInOrder = [];

    const queue = [];

    queue.push(start);
    grid[start.row][start.col].isVisited  = 1;

    while(queue.length > 0){
        const cur = queue.shift();

        if(JSON.stringify(cur) === JSON.stringify(end)){
            nodesInOrder.push(cur);
            break;
        }
        
            nodesInOrder.push(cur);


        dir.forEach((ele)=>{
            const newNode = {
                row: cur.row + ele[0],
                col: cur.col + ele[1]
            }

            if(newNode.row<0 || newNode.row>=grid.length || newNode.col<0 || newNode.col>=grid[0].length || grid[newNode.row][newNode.col].isVisited === 1 || grid[newNode.row][newNode.col].isWall === 1) return;

            if(grid[newNode.row][newNode.col].isVisited === 0){
                queue.push(newNode);
                
                grid[newNode.row][newNode.col].isVisited  = 1;
                grid[newNode.row][newNode.col].prev  = cur;
            }
        })

    }
    return nodesInOrder;
}

export default bfs;