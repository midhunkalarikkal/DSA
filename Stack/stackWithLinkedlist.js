class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class stackLinedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    push(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    pop(){
        if(!this.isEmpty()){
            const poppedNode = this.head
            this.head = this.head.next
            this.size--
            return poppedNode
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.head
        }
    }

    display(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const sll = new stackLinedList
console.log(sll.isEmpty())
console.log(sll.getSize())
sll.push(2)
sll.push(7)
sll.push(4)
sll.display()
console.log(sll.peek())
console.log(sll.isEmpty())
console.log(sll.getSize())
console.log(sll.pop())

