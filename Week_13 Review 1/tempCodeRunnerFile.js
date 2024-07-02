class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
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

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
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

    traverse(){
        if(this.isEmpty()){
            console.log("list is empty")
            return
        }else{
            let current = this.head
            let arr = []
            while(current){
                arr.push(current.value)
                current = current.next
            }
            console.log(arr)
            return
        }
    }

    findMid(){
        let current = this.head
        let size = this.size

        for(let i = 0; i <= (size/2) - 1; i++){
            current = current.next
        }
        console.log(current.value)
    }
}

let list = new linkedList()
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.prepend(4)
list.traverse()
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.traverse()
list.findMid()