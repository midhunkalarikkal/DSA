// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root, newNode)
//         }
//     }

//     insertNode(root, newNode){
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left, newNode)
//             }
//         }
//         if(newNode.value > root.value){
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }

//     min(root = this.root){
//         if(!root.left){
//             return root
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root = this.root){
//         if(!root.right){
//             return root
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root, value){
//         if(root === null){
//             return root
//         }

//         if(value < root.value){
//             root.left = this.deleteNode(root.left, value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right, value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }

//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }

//             const minNode = this.min(root.right)
//             root.value = minNode.value
//             root.right = this.deleteNode(root.right, root.value)
//         }
//         return root
//     }

//     findClosest(target, root = this.root, closest = this.root.value){
//         if(root === null){
//             return closest
//         }

//         if(Math.abs(target - closest) > Math.abs(target - root.value)){
//             closest = root.value
//         }

//         if(target < closest){
//             return this.findClosest(target, root.left, closest)
//         }else if(target > closest){
//             return this.findClosest(target, root.right, closest)
//         }else{
//             return closest
//         }
//     }

//     inOrder(root = this.root, result = []){
//         if(root !== null){
//             this.inOrder(root.left, result)
//             result.push(root.value)
//             this.inOrder(root.right, result)
//         }
//         return result
//     }

//     midPoint(){
//         const node = this.inOrder()
//         const midIndex = Math.floor(node.length / 2)
//         return node[midIndex]
//     }

//     search(root = this.root, value){
//         if(root === null){
//             return root
//         }

//         if(value === root.value){
//             return true
//         }else if(value < root.value){
//             return this.search(root.left, value)
//         }else{
//             return this.search(root.right, value)
//         }
//     }

//     height(root = this.root){
//         if(root === null){
//             return 0
//         }
//         const leftHeight = this.height(root.left)
//         const rightHeight = this.height(root.right)
//         return Math.max(leftHeight, rightHeight)+1
//     }

//     bfs(){
//         let queue = [this.root]
//         let result = []
//         while(queue.length){
//             let current = queue.shift()
//             result.push(current.value)
//             if(current.left){
//                 queue.push(current.left)
//             }
//             if(current.right){
//                 queue.push(current.right)
//             }
//         }
//         return result
//     }
// }

// const bst = new BinarySearchTree()
// console.log(bst.isEmpty())
// bst.insert(5)
// bst.insert(6)
// bst.insert(8)
// bst.insert(-2)
// bst.insert(56)
// bst.insert(33)
// bst.insert(30)
// console.log(bst.bfs())
// console.log(bst.inOrder())
// console.log(bst.search(5))
// console.log(bst.isEmpty())
// console.log(bst.min())
// console.log(bst.max())
// console.log(bst.midPoint())
// console.log(bst.height())
// bst.delete(5)
// console.log(bst.inOrder())
// console.log(bst.height())
// console.log("closest value : ",bst.findClosest(58))


// function heapSort(arr){
//     const heapifyDown = (arr, n, i)=>{
//         let largest = i
//         let left = 2 * i + 1
//         let right = 2 * i + 2

//         if(left < n && arr[left] > arr[largest]){
//             largest = left
//         }

//         if(right < n && arr[right] > arr[largest]){
//             largest = right
//         }

//         if(largest !== i){
//             [arr[i], arr[largest]] = [arr[largest], arr[i]]
//             heapifyDown(arr, n, largest)
//         }
//     }
//     const buildHeap = arr => {  
//         const n = arr.length
//         for(let i = Math.floor((n/2) - 1); i >= 0; i--){
//             heapifyDown(arr, n, i)
//         }
//     }

//     const n = arr.length
//     buildHeap(arr)

//     for(let i = n - 1; i > 0; i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]
//         heapifyDown(arr, i , 0)
//     }

//     return arr
// }

// const arr = [4, 10, 3, 5, 1];
// console.log(heapSort(arr));

// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(childIndex){
//         return Math.floor((childIndex - 1) / 2)
//     }
//     getLeftChildIndex(parentIndex){
//         return 2 * parentIndex + 1
//     }
//     getRightChildIndex(parentIndex){
//         return 2 * parentIndex + 2
//     }
//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }
//     hasLeftChild(index){
//         return this.getLeftChildIndex(index) < this.heap.length
//     }
//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.heap.length
//     }
//     parent(index){
//         return this.heap[this.getParentIndex(index)]
//     }
//     leftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }
//     rightChild(index){
//         return this.heap[this.getRightChildIndex(index)]
//     }

//     swap(indexOne, indexTwo){
//         const temp = this.heap[indexOne]
//         this.heap[indexOne] = this.heap[indexTwo]
//         this.heap[indexTwo] = temp
//     }

//     peek(){
//         if(this.heap.length === 0){
//             return null
//         }else{
//             return this.heap[0]
//         }
//     }

//     add(item){
//         this.heap.push(item)
//         this.heapifyUp()
//     }

//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }

//         const item = this.heap[0]
//         this.heap[0] = this.heap[this.heap.length - 1]
//         this.heap.pop()
//         this.heapifyDown()
//         return item
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1
//         while(this.hasParent(index) && this.parent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index), index)
//             index = this.getParentIndex(index)
//         }
//     }

//     heapifyDown(){
//         let index = 0
//         while(this.hasLeftChild(index)){
//             let largerChildIndex = this.getLeftChildIndex(index)
//             if(this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)){
//                 largerChildIndex = this.getRightChildIndex(index)
//             }

//             if(this.heap[index] > this.heap[largerChildIndex]){
//                 break
//             }else{
//                 this.swap(index, largerChildIndex)
//             }

//             index = largerChildIndex
//         }
//     }
// }

// var heap = new MaxHeap();

// heap.add(10);
// heap.add(15);
// heap.add(30);
// heap.add(40);
// heap.add(50);
// heap.add(100);
// heap.add(40);
// console.log(heap.heap)

// console.log(heap.peek());
// console.log(heap.remove());

// console.log(heap.heap)

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1, vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
        
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1, vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1, vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return
//         }

//         for(let adjacentVertex of this.adjacencyList[vertex]){
//             this.removeEdge(vertex, adjacentVertex)
//         }

//         delete this.adjacencyList[vertex]
//     }

//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+"--->"+[...this.adjacencyList[vertex]])
//         }
//     }

//     bfs(startVertex){
//         let visited = new Set()
//         let queue = [startVertex]
//         let result = []

//         visited.add(startVertex)
//         while(queue.length){
//             let vertex = queue.shift()
//             result.push(vertex)

//             this.adjacencyList[vertex].forEach((neighbour)=>{
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             })
//         }
//         return result
//     }
    
//     dfs(startVertex){
//         let visited = new Set()
//         let stack = [startVertex]
//         let result = []

//         visited.add(startVertex)
//         while(stack.length){
//             let vertex = stack.pop()
//             result.push(vertex)

//             this.adjacencyList[vertex].forEach((neighbour) => {
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     stack.push(neighbour)
//                 }
//             })
//         }
//         return result
//     }

//     isCyclic(){
//         const visited = new Set()

//         const dfs = (vertex, parent) => {
//             visited.add(vertex)

//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     if(dfs(neighbour, vertex))return true
//                 }else if(neighbour !== parent){
//                     return true
//                 }
//             }
//             return false
//         }

//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(dfs(vertex, null))return true
//             }
//         }
//         return false
//     }

//     shortestPath(startVertex, endVertex){
//         if(!this.adjacencyList[startVertex] || !this.adjacencyList[endVertex]){
//             return null
//         }

//         const queue = [startVertex]
//         const distance = {[startVertex] : 0}
//         const previous = {[startVertex] : null}

//         while(queue.length){
//             const vertex = queue.shift()

//             if(vertex === endVertex){
//                 const path = []
//                 let current = endVertex
//                 while(current !== null){
//                     path.push(current)
//                     current = previous[current]
//                 }
//                 return path.reverse()
//             }

//             this.adjacencyList[vertex].forEach((neighbour)=>{
//                 if(distance[neighbour] === undefined){
//                     queue.push(neighbour)
//                     distance[neighbour] = distance[vertex]+1
//                     previous[neighbour] = vertex
//                 }
//             })
//         }
//         return null
//     }
// }

// const graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")

// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("C","D")
// graph.addEdge("B","D")
// graph.addEdge("D","E")

// console.log("shortest path : ",graph.shortestPath("A", "E"))

// console.log("bfs traversal : ",graph.bfs("A"))
// console.log("dfs traversal : ",graph.dfs("A"))
// console.log("isCyclic : ",graph.isCyclic())

// graph.display()

// console.log(graph.hasEdge("A", "B"))
// console.log(graph.hasEdge("A", "C"))

// graph.removeEdge("A", "B")
// graph.display()
// graph.removeVertex("B")
// graph.display()

class TrieNode{
    constructor(){
        this.child = new Array(26).fill(null)
        this.wordEnd = null
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insertKey(key){
        let current = this.root
        for(let c of key){
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if(current.child[index] === null){
                current.child[index] = new TrieNode()
            }
            current = current.child[index]
        }
        current.wordEnd = true
    }

    deleteKey(key){
        const deleteRecursively = (node, key, depth = 0) => {
            if(!node) return false
            if(node.wordEnd){
                node.wordEnd = null
                node.child.every(child => child === null)
            }else{
                let index = key[depth].charCodeAt(0) - "a".charCodeAt(0)
                if(deleteRecursively(node.child[index],key, depth+1)){
                    node.child[index] = null
                    return !node.wordEnd && node.child.every(child => child === null)
                }
            }
            return false
        }
        deleteRecursively(this.root, key)
    }   

    display(node = this.root, prefix = ""){
        if(node.wordEnd){
            console.log(prefix)
        }
        for(let i = 0; i < 26; i++){
            if(node.child[i] !== null){
                this.display(node.child[i], prefix + String.fromCharCode(i + "a".charCodeAt(0)))
            }
        }
    }

    prefixSearch(prefix){
        let node = this.root
        for(let char of prefix){
            let index = char.charCodeAt(0)-"a".charCodeAt(0)
            if(!node.child[index]){
                return []
            }
            node = node.child[index]
        }
        return this.collectAllWords(node, prefix)
    }

    collectAllWords(node, prefix){
        let words = []
        if(node.wordEnd){
            words.push(prefix)
        }
        for(let i = 0; i < 26; i++){
            if(node.child[i] !== null){
                words = words.concat(this.collectAllWords(node.child[i], prefix + String.fromCharCode(i + "a".charCodeAt(0))))
            }
        }
        return words
    }

    search(key){
        let current = this.root
        for(let c of key){
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if(current.child[index] === null) return false
            current = current.child[index]
        }
        return current.wordEnd
    }
}

let trie = new Trie();
let words = ["and", "ant", "do", "geek", "dad", "ball"];
for (let word of words) {
    trie.insertKey(word);
}

console.log("Words in Trie:");
trie.display();

let searchKeys = ["do", "gee", "bat"];
for (let word of searchKeys) {
    console.log("Key:", word);
    console.log(trie.searchKey(word) ? "Present" : "Not Present");
}

trie.deleteKey("geek");
console.log("Search 'geek' after deletion:", trie.searchKey("geek") ? "Present" : "Not Present");

console.log("Prefix search 'an':", trie.prefixSearch("an"));  
console.log("Prefix search 'ba':", trie.prefixSearch("ba"));  