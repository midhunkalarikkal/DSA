class Node{
    constructor(value){
        this.value = value
        this.right = null
        this.left = null
    }
}

class binarySearchTree{
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

    search(root, value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
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

    // io(root){
    //     if(root){
    //         this.io(root.left)
    //         console.log(root.value)
    //         this.io(root.right)
    //     }
    // }
    
    preOrder(root = this.root, result = []){
        if(root !== null){
            result.push(root.value)
            this.preOrder(root.left, result)
            this.preOrder(root.right, result)
        }
        return result
    }

    // po(root){
    //     if(root){
    //         console.log(root.value)
    //         this.po(root.left)
    //         this.po(root.right)
    //     }
    // }

    postOrder(root = this.root, result = []){
        if(root !== null){
            this.postOrder(root.left, result)
            this.postOrder(root.right, result)
            result.push(root.value)
        }
        return result
    }

    reverseOrder(root = this.root, result = []){
        if(root !== null){
            this.reverseOrder(root.right, result)
            result.push(root.value)
            this.reverseOrder(root.left, result)
        }
        return result
    }
    
    bfsLeveelOrder(){
        let queue = []
        let result = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            result.push(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return result
    }

    // posto(root){
    //     if(root){
    //         this.posto(root.left)
    //         this.posto(root.right)
    //         console.log(root.value)
    //     }
    // }

    // delete(data, node = this.root){
    //     if(node === null){
    //         return null
    //     }

    //     if(data < node.data){
    //         node.left = this.delete(data, node.left)
    //     }else if(data > node.data){
    //         node.right = this.delete(data, node.right)
    //     }else{
    //         if(node.left === null && node.right === null){
    //             node = null
    //         }else if(node.left === null){
    //             node = node.right
    //         }else if(node.right === null){
    //             node = node.left
    //         }else{
    //             let minRight = this.findMinNode(node.right)
    //             node.data = minRight.data
    //             node.right = this.delete(minRight.data, node.right)
    //         }
    //     }
    //     return node
    // }

    // findMinNode(node){
    //     while(node && node.left !== null){
    //         node = node.left
    //     }
    //     return node
    // }

    // inOrder(node = this.root, result = []){
    //     if(node !== null){
    //         this.inOrder(node.left, result)
    //         result.push(node.data)
    //         this.inOrder(node.right, result)
    //     }
    //     return result
    // }


    // postOrder(node = this.root, result = []){
    //     if(node !== null){
    //         this.postOrder(node.left, result)
    //         this.postOrder(node.right, result)
    //         result.push(node.data)
    //     }
    //     return result
    // }

    // midpoint(){
    //     const nodes = this.inOrder()
    //     const midIndex =Math.floor(nodes.length / 2)
    //     return nodes[midIndex]
    // }

    // height(node = this.root){
    //     if(node === null){
    //         return 0
    //     }
    //     const leftHeight = this.height(node.left)
    //     const rightHeight = this.height(node.right)
    //     return Math.max(leftHeight, rightHeight) + 1
    // }

    // findClosestValue(target, node = this.root, closest = this.root.data){
    //     if(node === null){
    //         return closest
    //     }

    //     if(Math.abs(target - closest) > Math.abs(target - node.data)){
    //         closest = node.data
    //     }

    //     if(target < node.data){
    //         return this.findClosestValue(target, node.left, closest)
    //     }else if(target > node.data){
    //         return this.findClosestValue(target, node.right , closest)
    //     }else{
    //         return closest
    //     }
    // }

    // isValidateBst(node = this.root , min = -Infinity, max = Infinity){
    //     if(node === null){
    //         return true
    //     }

    //     if(node.data <= min || node.data >= max){
    //         return false
    //     }

    //     return this.isValidateBst(node.left, min, node.data) &&
    //     this.isValidateBst(node.right, node.data, max)
    // }

    // bsf(){
    //     let result = []
    //     if(this.root === null){
    //         return result
    //     }

    //     let queue = [this.root]
    //     while(queue.length > 0){
    //         let node = queue.shift()
    //         result.push(node.data)

    //         if(node.left !== null) queue.push(node.left)
    //         if(node.right !== null) queue.push(node.right)
    //     }
    // return result
    // }
}

let bst = new binarySearchTree()
console.log("Tree is empty ? ",bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("searching 10 : ",bst.search(bst.root, 10))
console.log("searching 5 : ",bst.search(bst.root, 5))
console.log("searching 15 : ",bst.search(bst.root, 15))
console.log("searching 20 : ",bst.search(bst.root, 20))
console.log("inOrder traversal : ",bst.inOrder())
console.log("preOrder traversal : ",bst.preOrder())
console.log("postOrder traversal : ",bst.postOrder())
console.log("reverse traversal : ", bst.reverseOrder())
console.log("bfs level order traversal : ",bst.bfsLeveelOrder())

// bst.io(bst.root)
// bst.po(bst.root)
// bst.posto(bst.root)
