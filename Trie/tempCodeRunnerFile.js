class TrieNode{
    constructor(){
        this.child = new Array(26).fill(null)
        this.wordEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insertKey(key){
        let current =this.root
        for(let c of key){
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if(current.child[index] === null){
                current.child[index] = new TrieNode()
            }
            current = current.child[index]
        }
        current.wordEnd = true
    }

    searchKey(key){
        let current = this.root
        for(let c of key){
            let index = c.charCodeAt(0) - "a".charCodeAt(0)
            if(current.child[index] === null) return false
            current = current.child[index]
        }
        return current.wordEnd
    }

    deleteKey(key){
        const deleteRecursively = (node, key, depth = 0) => {
            if(!node) return false
            if(depth === key.length){
                if(node.wordEnd){
                    node.wordEnd = false
                    return node.child.every(child => child === null)
                }
            }

            let index = key[depth].charCodeAt(0) - "a".charCodeAt(0)
            if(deleteRecursively(node.child[index],key, depth+1)){
                node.child[index] = null
                return !node.wordEnd && node.child.every(child => child === null)
            }
            return false
        }
        deleteRecursively(this.root,key)
    }

    height(node = this.root){
        if(node.child.every(child => child === null)) return 0
        let maxHeight = 0
        for(let child of  node.child){
            if(child !== null){
                maxHeight = Math.max(maxHeight, this.height(child))
            }
        }
        return maxHeight + 1
    }

    display(node = this.root, prefix = ""){
        if(node.wordEnd){
            console.log(prefix)
        }
        for(let i = 0; i < 26; i++){
            if(node.child[i] !== null){
                this.disaply(node.child[i], prefix + String.fromCharCode(i + 'a'.charCodeAt(0)))
            }
        }
    }
}

let trie = new Trie();
let words = ["and", "ant", "do", "geek", "dad", "ball"];
for (let word of words) {
    trie.insertKey(word);
}

trie.display()

let searchKeys = ["do", "gee", "bat"];
for (let word of searchKeys) {
    console.log("Key:", word);
    console.log(trie.searchKey(word) ? "Present" : "Not Present");
}

console.log("Height of trie:", trie.height());
trie.deleteKey("geek");
console.log("Search 'geek' after deletion:", trie.searchKey("geek"));