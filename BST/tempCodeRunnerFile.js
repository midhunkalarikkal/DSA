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
    
    min(root = this.root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root = this.root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }
    
    deleteNode(root, value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }else if (!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    midpoint(){
        const nodes = this.inOrder()
        const midIndex =Math.floor(nodes.length / 2)
        return nodes[midIndex]
    }

    height(root = this.root){
        if(root === null){
            return 0
        }
        const leftHeight = this.height(root.left)
        const rightHeight = this.height(root.right)
        return Math.max(leftHeight, rightHeight) + 1
    }

    findClosestValue(target, root = this.root, closest = this.root.value){
        if(root === null){
            return closest
        }

        if(Math.abs(target - closest) > Math.abs(target - root.value)){
            closest = root.value
        }

        if(target < root.value){
            return this.findClosestValue(target, root.left, closest)
        }else if(target > root.value){
            return this.findClosestValue(target, root.right , closest)
        }else{
            return closest
        }
    }

    isValidateBst(root = this.root , min = -Infinity, max = Infinity){
        if(root === null){
            return true
        }

        if(root.value <= min || root.value >= max){
            return false
        }

        return this.isValidateBst(root.left, min, root.value) &&
        this.isValidateBst(root.right, root.value, max)
    }
}

let bst = new binarySearchTree()
console.log(bst.root)
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
console.log("minimum value : ",bst.min())
console.log("maximum value : ",bst.max())
console.log("bfs level order traversal : ",bst.bfsLeveelOrder())
console.log(bst.midpoint())
console.log("Height : ",bst.height())
bst.delete(3)
console.log("bfs level order traversal : ",bst.bfsLeveelOrder())
console.log("Height : ",bst.height())
console.log("Closest value of 11 :",bst.findClosestValue(11))
console.log("Is valid bst : ",bst.isValidateBst())