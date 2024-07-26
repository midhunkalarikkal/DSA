class Stack{
    constructor(){
        this.items = []
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    push(element){
        this.items[this.size] = element
        this.size++
    }

    pop(){
        if(!this.isEmpty()){
            const poppedElement = this.items[this.size - 1]
            this.size--
            this.items.length = this.size
            return poppedElement
        }else{
            console.log("Stack is empty")
            return undefined
        }
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.size - 1]
        }else{
            console.log("Stack is empty")
            return undefined
        }
    }

    display(){
        if(!this.isEmpty()){
            for(let i = 0; i < this.size; i++){
                console.log(this.items[i])
            }
        }else{
            console.log("Stack is empty")
            return undefined
        }
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Displaying")
stack.display();
console.log("Popped element : ",stack.pop());
console.log("Peeeked element : ",stack.peek());
console.log("Size of stack : ",stack.getSize());
console.log("Displaying")
stack.display();
