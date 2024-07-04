class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class sll{
    constructor(){
        this.head = null
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
        if(this.size === 0){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


    insert(index,value){
        if(index < 0 || index >= this.size){
            return "Invalid index!"
        }
        if(this.size === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    traverse(){
        if(this.size === 0){
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
    
    reverse(){
        let prev = null
        let current = this.head
        let next = null
        while(current !== null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }

    findMidPoint(){
        if(this.size === 0){
            this.isEmpty()
        }else{
            let slowpointer = this.head
            let fastpointer = this.head

            while(fastpointer !== null && fastpointer.next !== null){
                slowpointer = slowpointer.next
                fastpointer = fastpointer.next.next
            }
            console.log("Mid point : ",slowpointer.value)
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            return "invalid index!"
        }

        let removeNode;
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
    }

    removeSpecificValue(value){
        if(this.size === 0){
            return "List is empty"
        }

        let current = this.head
        let prev = null

        if(current !== null && current.value === value){
            this.head = current.next
            this.size--
            console.log("removed node : ",value)
            return
        }

        while(current !== null && current.value !== value){
            prev = current
            current = current.next
        }

        if(current === null){
            return "Value is not in the list"
        }
        
        prev.next = current.next
        this.size--
        console.log("removed node : ",value)
        return
    }

    removeDuplicates(){
        if(this.isEmpty() || this.head.next === null){
            return
        }

        let current = this.head
        while(current !== null){
            let runner = current
            while(runner.next !== null){
                if(current.value === runner.next.value){
                    runner.next = runner.next.next
                    this.size--
                }else{
                    runner = runner.next
                }
            }
            current = current.next
        }
    }
}

const list = new sll()
list.prepend(1)
list.prepend(12)
list.prepend(3)
list.prepend(14)
list.prepend(5)
list.prepend(16)
list.append(20)
list.append(9)
list.append(18)
list.append(7)
list.append(16)
list.append(5)
list.insert(2,1000)
console.log(list.traverse())
list.reverse()
console.log(list.traverse())
list.reverse()
console.log(list.traverse())
list.findMidPoint()
list.removeFromIndex(5)
console.log(list.traverse())
list.removeSpecificValue(1000)
console.log(list.traverse())
list.removeDuplicates()
console.log(list.traverse())

