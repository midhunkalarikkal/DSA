class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2, weight){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].push({ vertex: vertex2, weight})
    }

    display(){
        for(let vertex in this.adjacencyList){ 
            const edges = this.adjacencyList[vertex].map(edge => `${edge.vertex} (weight : ${edge.weight})`).join(', ')
            console.log(`${vertex} --> ${edges}`)
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 10);
graph.addEdge("A", "C", 15);

graph.display();