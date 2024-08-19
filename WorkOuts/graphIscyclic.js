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
    
    shortestPath(startVertex, endVertex){
        if(!this.adjacencyList[startVertex] || !this.adjacencyList[endVertex]){
            return null
        }

        const queue = [startVertex]
        const distance = {[startVertex] : 0}
        const previous = {[startVertex] : null}

        while(queue.length){
            const vertex = queue.shift()

            if(vertex === endVertex){
                const path = []
                let current = endVertex
                while(current !== null){
                    path.push(current)
                    current = previous[current]
                }
                return path.reverse()
            }

            this.adjacencyList[vertex].forEach((neighbour)=>{
                if(distance[neighbour] === undefined){
                    queue.push(neighbour)
                    distance[neighbour] = distance[vertex]+1
                    previous[neighbour] = vertex
                }
            })
        }
        return null
    }
}