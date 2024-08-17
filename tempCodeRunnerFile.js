class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
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
            this.insertNode(this.root, newNode)
        }
    } 

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left , newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
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
}

const bst = new BinarySearchTree()
bst.insert(3)
bst.insert(7)
bst.insert(-2)
bst.insert(88)
bst.insert(56)
console.log("inOrder :",bst.inOrder())


// class Heap{
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

//     heapifyUp(){
//         let index = this.heap.length - 1
//         while(this.hasParent(index) && this.hasParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index), index)
//             index = this.getParentIndex(index)
//         }
//     }


// }