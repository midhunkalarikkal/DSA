class Queue{
    constructor(){
        this.items = []
        this.count = 0
    }

    isEmpty(){
        this.count === 0 ? console.log("Queue is empty.") : console.log("Queue is not empty")
        return
    }

    getSize(){
        console.log("Size of queue is : ",this.count)
    }

    enqueue(element){
        this.items[this.count] = element
        console.log(element , "Is enqueued.")
        this.count++
        return    
    }

    dequeue(){
        const deleteElement = this.items.shift()
        // for(let i = 0; i < this.count-1; i++){
        //     this.items[i] = this.items[i+1]
        // }
        // this.items.pop() 
        console.log(deleteElement , "is dequeued.")
        this.count--
        return deleteElement
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
        this.count = 0
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
