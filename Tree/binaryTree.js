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

        if(this.root == null){
            this.root = null
        }else{
            const queue = [this.root]
            while(queue.length){
                const current = queue.shift()
                if(current.left === null){
                    current.left = newNode
                    return
                }else{
                    queue.push(current.left)
                }
                if(current.right === null){
                    current.right = newNode
                    return
                }else{
                    queue.push(current.right)
                }
            }
        }
    }

}