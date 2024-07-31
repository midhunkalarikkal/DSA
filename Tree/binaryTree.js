class Tree{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Binarytree{
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
            const queue = [this.root]
            while(queue.length){
                let current = queue.shift()
                if(current.left === null){
                    current.left = newNode
                    return
                }else{
                    queue.push(current.left)
                }

                if(current.rigth === null){
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
            return
        }else if(this.root.data === data){
            this.root = null
            return
        }else{
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
                
                if(nodeToDelete){
                    let deepestNode = this.getDeepestNode()
                    if(deepestNode){
                        nodeToDelete.data = deepestNode.data
                        
                    }
                }
            }
        }
    }
}