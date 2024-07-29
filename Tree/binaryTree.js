class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
    
    insert(data){
        const newNode = new Node(data)
        if(this.root === null){
            this.root = newNode
        }else{
            insertRecursively(this.root, newNode)
        }
    }
}