class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right  = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    inOrder(root = this.root, result = []){
        if(root !== null){
            this.inOrder(root.left, result)
            result.push(root.value)
            this.inOrder(root.right, result)
        }
        return result
    }

    largestNode(root = this.root){
        if(root === null){
            return null
        }else{
            return this.root
        }
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }
        if(newNode.value > root.value){
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(4)
bst.insert(6)
bst.insert(2)
bst.insert(8)
bst.insert(7)
console.log(bst.inOrder())
console.log(bst.largestNode())