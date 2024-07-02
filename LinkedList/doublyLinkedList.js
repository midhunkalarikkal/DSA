class Node {
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
    }

    traverse(){
        let result = "";
        if (!this.isEmpty()) {
            let current = this.head;
            while (current !== null) {
                result += ` ${current.value}`;
                current = current.next;
            }
        } else {
            console.log("List is empty");
        }
        console.log(result)
    }
}

const list = new doublyLinkedList()
console.log(list.getSize())
console.log(list.isEmpty())
list.prepend(5)
list.prepend(6)
list.prepend(53)
list.prepend(59)
list.traverse()
list.append(77)
list.append(77)
list.traverse()