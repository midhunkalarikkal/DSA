class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(element){
        this.items[this.count] = element
        console.log(`${element} is add to ${this.count}`)
        this.count++
        return
    }

    pop(){
        if(!this.isEmpty()){
            let deleteElement = this.items[this.count - 1]
            this.count--
            console.log(`Popped element : ${deleteElement}`)
            return
        }else{
            console.log("Stack is empty")
        }
    }

    peek(){
        console.log(`Peeking element : ${this.items[this.count - 1]}`)
    }

    getSize(){
        console.log(`Stack size : ${this.count}`)
    }

    display(){
        if(!this.isEmpty()){
            let str = ""
            for(let i = 0; i < this.count; i++){
                str += ` ${this.items[i]}`
            }
            console.log("Stack is : ",str)
        }else{
            console.log("Stack is empty")
        }
    }

    clear(){
        this.items = []
        this.count = 0
        console.log("Stack cleared ",this.items)
    }
}

const stack = new Stack()
stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()
stack.push(400)
stack.push(500)
stack.push(600)
stack.pop()
stack.push(700)
stack.push(800)
stack.peek()
stack.getSize()
stack.display()
stack.clear()
stack.getSize()
stack.display()
