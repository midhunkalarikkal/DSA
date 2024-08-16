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

    min(root = this.root){
        if(!root.left){
            return root
        }else{
            return this.min(root.left)
        }
    }

    max(root = this.root){
        if(!root.right){
            return root
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
            }else if(!root.right){
                return root.left
            }

            const minNode = this.min(root.right)
            root.value = minNode.value
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    findClosest(target, root = this.root, closest = this.root.value){
        if(root === null){
            return closest
        }

        if(Math.abs(target - closest) > Math.abs(target - root.value)){
            closest = root.value
        }

        if(target < closest){
            return this.findClosest(target, root.left, closest)
        }else if(target > closest){
            return this.findClosest(target, root.right, closest)
        }else{
            return closest
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

    midPoint(){
        const node = this.inOrder()
        const midIndex = Math.floor(node.length / 2)
        return node[midIndex]
    }

    search(root = this.root, value){
        if(root === null){
            return root
        }

        if(value === root.value){
            return true
        }else if(value < root.value){
            return this.search(root.left, value)
        }else{
            return this.search(root.right, value)
        }
    }

    height(root = this.root){
        if(root === null){
            return 0
        }
        const leftHeight = this.height(root.left)
        const rightHeight = this.height(root.right)
        return Math.max(leftHeight, rightHeight)+1
    }

    bfs(){
        let queue = [this.root]
        let result = []
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
}

const bst = new BinarySearchTree()
console.log(bst.isEmpty())
bst.insert(5)
bst.insert(6)
bst.insert(8)
bst.insert(-2)
bst.insert(56)
bst.insert(33)
bst.insert(30)
console.log(bst.bfs())
console.log(bst.inOrder())
console.log(bst.search(5))
console.log(bst.isEmpty())
console.log(bst.min())
console.log(bst.max())
console.log(bst.midPoint())
console.log(bst.height())
bst.delete(5)
console.log(bst.inOrder())
console.log(bst.height())
console.log("closest value : ",bst.findClosest(58))