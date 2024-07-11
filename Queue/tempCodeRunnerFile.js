class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
        console.log("Pushed element : ",element)
        return
    }

    dequeue(){
        const deleteEmenet = this.items.shift()
        console.log("deleted elemenet : ",deleteEmenet)
        return
    }

    display(){
        console.log(this.items)
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            console.log("Peeked elemenet is : ",this.items[0])
            return
        }else{
            console.log("Queue is empty.")
            return
        }
    }
    
    getSize(){
        console.log("Size of queue is :",this.items.length)
    }
}

const queue = new Queue()
queue.enqueue(4)
queue.enqueue(6)
queue.enqueue(7)
queue.display()
queue.dequeue()
queue.display()
queue.peek()
queue.getSize()