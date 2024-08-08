class DirectedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
    }

    hasEdge(vertex1, vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2)
        )
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} --> ${[...this.adjacencyList[vertex]]}`)
        }
    }
}

const dgraph = new DirectedGraph()
dgraph.addVertex("A")
dgraph.addVertex("B")
dgraph.addVertex("C")
dgraph.addVertex("D")

dgraph.addEdge("A", "B")
dgraph.addEdge("A", "C")
dgraph.addEdge("B", "C")
dgraph.addEdge("C", "D")
dgraph.addEdge("D", "B")

dgraph.display()

console.log("Removing A to C edge")
dgraph.removeEdge("A", "C")
dgraph.display()