class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }
    
    insert(data){
        const newNode = new Node(data)

        if(this.root == null){
            this.root = null
        }else{
            const queue = [this.root]
            while(queue.length){
                const current = queue.shift()
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

    delete(data){
        if(this.root === null){
            return null
        }
        if(thid.root.dta === data){
            this.root = null
            return
        }
        
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
        }
        if (nodeToDelete) {
            const deepestNode = this.getDeepestNode();
            if (deepestNode) {
                nodeToDelete.data = deepestNode.data;
                this.deleteDeepestNode();
            }
        }
    }

    getDeepestNode() {
        if (this.root === null) return null;
        const queue = [this.root];
        let node = null;

        while (queue.length) {
            node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return node;
    }

    deleteDeepestNode() {
        if (this.root === null) return;
        const queue = [this.root];
        let node = null;
        let parent = null;

        while (queue.length) {
            parent = queue.shift();
            if (parent.left) {
                if (parent.left.left === null && parent.left.right === null) {
                    parent.left = null;
                    return;
                }
                queue.push(parent.left);
            }
            if (parent.right) {
                if (parent.right.left === null && parent.right.right === null) {
                    parent.right = null;
                    return;
                }
                queue.push(parent.right);
            }
        }
    }

    inorderTraversal(node = this.root, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    preorderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.data);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
        return result;
    }

    postorderTraversal(node = this.root, result = []) {
        if (node) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.data);
        }
        return result;
    }

}