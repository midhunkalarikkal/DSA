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
            node.left = this.delete(data, node.left)
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
                let minRight = this.findMinNode(node.right)
                node.data = minRight.data
                node.right = this.delete(minRight.data, node.right)
            }
        }
        return node
    }

    findMinNode(node){
        while(node && node.left !== null){
            node = node.left
        }
        return node
    }

    inOrder(node = this.root, result = []){
        if(node !== null){
            this.inOrder(node.left, result)
            result.push(node.data)
            this.inOrder(node.right, result)
        }
        return result
    }

    preOrder(node = this.root, result = []){
        if(node !== null){
            result.push(node.data)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
        return result
    }

    postOrder(node = this.root, result = []){
        if(node !== null){
            this.postOrder(node.left, result)
            this.postOrder(node.right, result)
            result.push(node.data)
        }
        return result
    }

    midpoint(){
        const nodes = this.inOrder()
        const midIndex =Math.floor(nodes.length / 2)
        return nodes[midIndex]
    }

    height(node = this.root){
        if(node === null){
            return 0
        }
        const leftHeight = this.height(node.left)
        const rightHeight = this.height(node.right)
        return Math.max(leftHeight, rightHeight) + 1
    }

    findClosestValue(target, node = this.root, closest = this.root.data){
        if(node === null){
            return closest
        }

        if(Math.abs(target - closest) > Math.abs(target - node.data)){
            closest = node.data
        }

        if(target < node.data){
            return this.findClosestValue(target, node.left, closest)
        }else if(target > node.data){
            return this.findClosestValue(target, node.right , closest)
        }else{
            return closest
        }
    }

    isValidateBst(node = this.root , min = -Infinity, max = Infinity){
        if(node === null){
            return true
        }

        if(node.data <= min || node.data >= max){
            return false
        }

        return this.isValidateBst(node.left, min, node.data) &&
        this.isValidateBst(node.right, node.data, max)
    }
}

let tree = new bst();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(1);
tree.insert(14);
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.midpoint());
console.log(tree.height());
console.log("Closest value : ",tree.findClosestValue(23))
// if(tree.isValidateBst()){
//     console.log("Valid bst")
// }else{
//     console.log("Invalid bst")
// }

console.log(tree.isValidateBst())
tree.delete(15);
console.log(tree.inOrder());
