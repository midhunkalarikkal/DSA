class Stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        this.items.length === 0 ? console.log("Stack is empty") :  console.log("Stack is not empty")
        return 
    }

    getSize(){
        console.log("Size of stack is  : ",this.items.length)
        return
    }

    push(element){
        this.items.push(element)
        console.log(element , "Element pushed to stack")
    }

    pop(){
        const deleteElemet = this.items.pop()
        console.log(deleteElemet , "is popped from stack")
        return
    }

    display(){
        console.log("Current stack : ",this.items)
        return
    }

    peek(){
        if(!this.isEmpty()){
            console.log("Peeked element is : ",this.items[this.items.length - 1])
            return
        }else{
            console.log("Stack is empty.")
            return
        }
    }

    clear(){
        this.items = []
        console.log("Stack cleared.")
        return
    }
}

const stack = new Stack()
stack.push(1)
stack.push(4)
stack.push(7)
stack.push(2)
stack.display()
stack.pop()
stack.display()
stack.peek()
stack.getSize()
stack.pop()
stack.pop()
stack.pop()
stack.display()
stack.getSize()
stack.peek()
stack.push(4)
stack.push(7)
stack.push(2)
stack.display()
stack.clear()
stack.display()
stack.isEmpty()