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

    delete(data){

    }

    findMidNode(){

    }

    height(){

    }

    inOrder(){

    }

    preOrder(){

    }

    postOrder(){

    }

    midpoint(){

    }
}