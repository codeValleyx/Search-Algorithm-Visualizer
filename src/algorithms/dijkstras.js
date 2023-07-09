
// const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const dir = [ [0, 1], [1, 0], [0, -1], [-1, 0]];

const dijkstra = (grid, start, end)=>{

    const visitedInOrder =  getNodesInOrder(grid, start, end);

    const pathInOrder= [];
    
      let cur = visitedInOrder[visitedInOrder.length - 1];

      while(cur != null){
        pathInOrder.unshift(cur);

        cur = grid[cur.row][cur.col].prev;
      }


      // visualisation
      
      visitedInOrder.forEach( (ele, index) => {
        setTimeout(()=>{
          document.getElementById(ele.row*grid[0].length + ele.col).classList.add("visited");
          document.getElementById(ele.row*grid[0].length + ele.col).innerHTML = ele.distance;
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


const getNodesInOrder = (grid, start, end)=>{
    const getID = (row, col) => row*grid[0].length + col;

    const nodesInOrder = [];
    const distance = {};
    distance[getID(start.row, start.col)] = 0;

    const queue = [];

    start.distance = 0;
    queue.push(start);

    while(queue.length > 0){
        queue.sort((a, b)=> b.distance - a.distance);
        const cur = queue.pop();

        if((getID(cur.row, cur.col)) === getID(end.row, end.col)){
            nodesInOrder.push(cur);
            break;
        }
        
            nodesInOrder.push(cur);


        dir.forEach((ele)=>{
            const newNode = {
                row: cur.row + ele[0],
                col: cur.col + ele[1]
            }

            if(newNode.row<0 || newNode.row>=grid.length || newNode.col<0 || newNode.col>=grid[0].length || grid[newNode.row][newNode.col].isWall === 1 ) return;
            
            if(distance[getID(newNode.row, newNode.col)] === undefined || distance[getID(newNode.row, newNode.col)] > cur.distance + grid[newNode.row][newNode.col].weight){

                distance[getID(newNode.row, newNode.col)] = cur.distance + grid[newNode.row][newNode.col].weight;
                newNode.distance = distance[getID(newNode.row, newNode.col)];

                queue.push(newNode);
                
                grid[newNode.row][newNode.col].prev  = cur;
            }
        })

    }
    return nodesInOrder;
}

export default dijkstra;