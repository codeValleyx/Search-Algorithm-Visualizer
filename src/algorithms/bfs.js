
// const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const dir = [ [0, 1], [1, 0], [0, -1], [-1, 0]];

const getBfsNodesInOrder = (grid, start, end)=>{

    return bfs(grid, start, end);

}

const bfs = (grid, start, end)=>{
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

export default getBfsNodesInOrder;