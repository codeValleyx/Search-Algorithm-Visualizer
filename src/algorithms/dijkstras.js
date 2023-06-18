import { useSelector } from "react-redux";

const nodesInOrder = [];

const getNodesInOrder = (grid)=>{

    const start = useSelector(store => store.nodeSlice.startNode);
    const end = useSelector(store => store.nodeSlice.endNode);

    dijkstra(grid, start, end);

    return nodesInOrder;
}

const dijkstra = (grid, start, end)=>{
    
}