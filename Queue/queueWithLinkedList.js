class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class queueLinkedList{
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

    enqueue(data){
        const newNode = new Node(data)
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
        
        if(!this.head){
            this.head = newNode
        }
        this.size++
    }

    dequeue(){
        if(!this.isEmpty()){
            const dequeueNode = this.head
            this.head = this.head.next
            if(!this.head){
                this.tail = null
            }
            this.size--
            return dequeueNode.data
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.head.data
        }
    }

    display(){
        let current = this.head
        let str = ""
        while(current){
            str += ` ${current.data}`
            current = current.next
        }
        return str
    }
}

const queue = new queueLinkedList();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Queue elements:");
console.log(queue.display())
console.log("Dequeued element: " + queue.dequeue());
console.log("Dequeued element: " + queue.dequeue());
console.log("Queue elements:");
console.log(queue.display())
console.log("Front element: " + queue.peek());
console.log("Is queue empty? " + queue.isEmpty());
console.log("Dequeued element: " + queue.dequeue());
console.log("Is queue empty? " + queue.isEmpty());
