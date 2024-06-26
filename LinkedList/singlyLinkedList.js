class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class singlyLinkedList {
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
        if(!this.isEmpty()){
            let current = this.head
            let listValues = ""
            while(current){
                listValues += ` ${current.value}`
                current = current.next
            }
            console.log("list values ")
            console.log(listValues)
        }else{
            console.log("linked is empty.")
        }
    }
}
const list = new singlyLinkedList()

console.log("list is empty ? ",list.isEmpty())
console.log("list size : ",list.getSize())
list.prepend(10)
list.prepend(20)
list.traverse()
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.traverse()
list.append(40)
list.append(60)
list.append(80)
list.append(20)
list.append(90)
list.traverse()