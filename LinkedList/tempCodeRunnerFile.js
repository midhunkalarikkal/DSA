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

    insert(value,index){
        if(index < 0 || index >= this.size){
            console.log("Invalid index!")
            return false
        }

        if(index === 0 ){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            console.log("Invalid index")
            return false
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
        console.log("removed node :",removeNode)
    }

    removeSpecificValue(value){
        let removeNode;
        let current = this.head
        let previous = null

        if(this.isEmpty()){
            console.log("List is empty!")
            return false
        }

        if(current !== null && current.value === value){
            this.head = current.next
            this.size--
            console.log("Node removed : ",value)
            return
        }

        while(current !== null && current.value !== value){
            previous = current
            current = current.next
        }

        if(current === null){
            console.log("Value is not found in the list!")
            return false
        }

        previous.next = current.next
        this.size-
        console.log("Node removed with value : ",value)
        return
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

    convertToArray(){
        if(!this.isEmpty()){
            let arr = []
            let current = this.head
            while(current){
                arr.push(current.value)
                current = current.next
            }
            console.log("Linked list converted to an array")
            console.log(arr)
        }else{
            console.log("list is empty!")
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
list.insert(888,4)
list.traverse()
list.removeFromIndex(5)
list.traverse()
list.convertToArray()
list.removeSpecificValue(888)
list.traverse()