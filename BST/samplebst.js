class Tree{
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}

class bst{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new Tree(data)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    } 

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode
            }else{
                this.insertNode(node.left , newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete(data, node = this.root){
        if(node === null){
            return node
        }

        if(data < node.data){
            node.left = this.delete(data.node.left)
        }else if(data > node.data){
            node.right = this.delete(data, node.right)
        }else{
            if(node.left === null && node.right === null){
                node = null
            }else if(node.left === null){
                node = node.right
            }else if(node.right === null){
                node = node.left
            }else{
                let minRight = this.finMinNode(node.right)
                node.data = minRight.data
                node.right = this.delete(minRight.data, node.right)
            }
        }
        return node
    }

    findMidNode(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node
    }

    inOrder(){

    }

    preOrder(){

    }

    postOrder(){

    }

    midpoint(){
        const nodes = []
        this.inOrder(this.root, nodes)
        const midIndex =Math.floor(nodes.length / 2)
        return nodes[midIndex]
    }

    height(){
        if(this.root === null){
            return 0
        }
        const leftHeight = this.height(node.left)
        const rightHeight = this.height(node.right)
        return Math.max(leftHeight, rightHeight) + 1
    }
}