class Node {
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class dll{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    
    isEmpty(){
        if(this.size === 0){
            return "List is empty"
        }
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
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
        this.size++
    }

    traverse(){
        if(this.isEmpty()){
            return "List is empty"
        }else{
            let current = this.head
            let str = ""
            while(current){
                str += ` ${current.value}`
                current = current.next
            }
            return str
        }
    }
}

const list = new dll()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.prepend(5)
list.prepend(6)
console.log(list.traverse())
list.append(7)
list.append(8)
list.append(9)
list.append(10)
list.append(11)
list.append(12)
console.log(list.traverse())