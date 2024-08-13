class SuffixTrieNode {
    constructor() {
        this.child = new Array(26).fill(null);
        this.wordEnd = false;
    }
}

class SuffixTrie {
    constructor() {
        this.root = new SuffixTrieNode();
    }

    insertSuffix(key) {
        for (let i = 0; i < key.length; i++) {
            this._insertKey(key.substring(i));
        }
    }

    _insertKey(key) {
        let current = this.root;
        for (let c of key) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0);
            if (current.child[index] === null) {
                current.child[index] = new SuffixTrieNode();
            }
            current = current.child[index];
        }
        current.wordEnd = true;
    }

    searchKey(key) {
        let current = this.root;
        for (let c of key) {
            let index = c.charCodeAt(0) - "a".charCodeAt(0);
            if (current.child[index] === null) return false;
            current = current.child[index];
        }
        return current.wordEnd;
    }

    suffixSearch(suffix) {
        let node = this.root;
        for (let char of suffix) {
            let index = char.charCodeAt(0) - "a".charCodeAt(0);
            if (!node.child[index]) {
                return [];
            }
            node = node.child[index];
        }
        return this.collectAllWords(node, suffix);
    }

    collectAllWords(node, prefix) {
        let words = [];
        if (node.wordEnd) {
            words.push(prefix);
        }
        for (let i = 0; i < 26; i++) {
            if (node.child[i] !== null) {
                words = words.concat(this.collectAllWords(node.child[i], prefix + String.fromCharCode(i + 'a'.charCodeAt(0))));
            }
        }
        return words;
    }

    display(node = this.root, prefix = "") {
        if (node.wordEnd) {
            console.log(prefix);
        }
        for (let i = 0; i < 26; i++) {
            if (node.child[i] !== null) {
                this.display(node.child[i], prefix + String.fromCharCode(i + 'a'.charCodeAt(0)));
            }
        }
    }
}

let suffixTrie = new SuffixTrie();
let word = "banana";
suffixTrie.insertSuffix(word);

console.log("Suffix Trie for 'banana':");
suffixTrie.display();

let searchSuffixes = ["ana", "nana", "bat"];
for (let suffix of searchSuffixes) {
    console.log("Suffix:", suffix);
    console.log(suffixTrie.suffixSearch(suffix).length > 0 ? "Present" : "Not Present");
}

console.log("Suffix search 'ana':", suffixTrie.suffixSearch("ana"));  
console.log("Suffix search 'nana':", suffixTrie.suffixSearch("nana"));  
