class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    usCyclic(){
        const visited = new Set()

        const dfs = (vertex, parent) => {
            visited.add(vertex)

            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    if(dfs(neighbour, vertex))return true
                }else if(neighbour !== parent) return true
            }
            return false
        }
        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfs(vertex, null)) return true
            }
        }
        return false
    }
}