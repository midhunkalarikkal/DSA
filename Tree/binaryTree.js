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

    delete(data){
        if(this.root === null){
            return null
        }
        if(thid.root.dta === data){
            this.root = null
            return
        }
        
        let queue = [this.root]
        let nodeToDelete = null
        let parent = null

        while(queue.length){
            parent = queue.shift()

            if(parent.left){
                queue.push(parent.left)
                if(parent.left.data === data){
                    nodeToDelete = parent.left
                    break
                }
            }

            if(parent.right){
                queue.push(parent.right)
                if(parent.right.data === data){
                    nodeToDelete = parent.right
                    break
                }
            }
        }
    }
}