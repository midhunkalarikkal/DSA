class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            let queue = [this.root]
            while(queue.length){
                let current = queue.shift()
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

    inOrder(root = this.root, result = []){
        if(root !== null){
            this.inOrder(root.left, result)
            result.push(root.value)
            this.inOrder(root.right, result)
        }
        return result
    }

    preOrder(root = this.root, result = []){
        if(root !== null){
            result.push(root.value)
            this.preOrder(root.left, result)
            this.preOrder(root.right, result)
        }
        return result
    }

    postOrder(root = this.root, result = []){
        if(root !== null){
            this.postOrder(root.left, result)
            this.postOrder(root.right, result)
            result.push(root.value)
        }
        return result
    }

    search(value){
        if(this.root.value === value){
            return true
        }else{
            
        }
    }
}

const bt = new BinaryTree()
bt.insert(3)
bt.insert(6)
bt.insert(-2)
bt.insert(7)
bt.insert(99)
bt.insert(67)
bt.insert(85)
console.log(bt.inOrder())
console.log(bt.preOrder())
console.log(bt.postOrder())