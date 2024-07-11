class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        this.items.legth === 0 ? console.log("Queue is empty.") : console.log("Queue is not empty")
        return
    }

    getSize(){
        console.log("Size of queue is : ",this.items.length)
    }

    enqueue(element){
        this.items.push(element)
        console.log(element , "Is enqueued.")
        return    }

    dequeue(){
        const deleteElement = this.items.shift()
        console.log(deleteElement , "is dequeued.")
        return
    }

    peek(){
        if(!this.isEmpty()){
            console.log("Peeked element is : ",this.items[0])
            return
        }else{
            console.log("Queue is empty.")
            return
        }
    }

    display(){
        console.log(this.items)
        return
    }

    clear(){
        this.items = []
        console.log("Queue cleared.")
        return
    }
}

const queue = new Queue()
queue.isEmpty()
queue.getSize()
queue.enqueue(4)
queue.enqueue(8)
queue.enqueue(3)
queue.enqueue(6)
queue.display()
queue.dequeue()
queue.display()
queue.peek()
queue.isEmpty()
queue.getSize()
queue.clear()
queue.display()
queue.getSize()
