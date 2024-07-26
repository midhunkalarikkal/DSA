// function sort(arr){
//     let n = arr.length
//     let swapped
//     do{
//         swapped = false
//         for(let i = 0; i < n; i++){
//             if(arr[i] < arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
//     return arr
// }

// function sort(arr){
//     let n = arr.length
//     for(i = 0; i < n-1; i++){
//         let minIndex = i
//         for(let j = i+1; j < n; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         if(minIndex !== i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }

// function sort(arr){
//     let n = arr.length
//     for(let i = 1; i < n; i++){
//         let numberToInsert = arr[i]
//         let j = i -1
//         while(j >= 0 && arr[j] < numberToInsert){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = numberToInsert
//     }
//     return arr
// }

// function sort(arr){
//     let n = arr.length
//     if(n <= 1){
//         return arr
//     }

//     let pivot = arr[n-1]
//     let leftarr = []
//     let rightarr = []
    
//     for(let i = 0; i < n-1; i++){
//         if(arr[i] < pivot){
//             leftarr.push(arr[i])
//         }else{
//             rightarr.push(arr[i])
//         }
//     }
//     return [...sort(leftarr),pivot,...sort(rightarr)]
// }

// function sort(arr){
//     let n = arr.length
//     if(n <= 1){
//         return arr
//     }

//     let pivotIndex = Math.floor(Math.random() * n)
//     let pivot = arr[pivotIndex]
//     let leftarr = []
//     let rightarr = []

//     for(let i = 0; i < n; i++){
//         if(i === pivotIndex){
//             continue
//         }
//         if(arr[i] < pivot){
//             leftarr.push(arr[i])
//         }else{
//             rightarr.push(arr[i])
//         }
//     }
//     return [...sort(leftarr),pivot,...sort(rightarr)]
// }

// function sort(arr){
//     let n = arr.length
//     if( n <= 1 ){
//         return arr
//     }

//     let mid = Math.floor(n / 2)
//     let first = arr[0]
//     let last = arr[n-1]

//     let pivot = midPoint(first,mid,last)

//     let leftarr = []
//     let rightarr = []

//     for(let i = 0; i < n; i++){
//         if(arr[i] === pivot){
//             continue
//         }
//         if(arr[i] > pivot){
//             leftarr.push(arr[i])
//         }else{
//             rightarr.push(arr[i])
//         }
//     }
//     return [...sort(leftarr),pivot,...sort(rightarr)]
// }

// function midPoint(a,b,c){
//     if((a>b) != (a>c)){
//         return a
//     }else if((b>a) != (b>c)){
//         return b
//     }else{
//         return c
//     }
// }

// function sort(arr){
//     let n = arr.length
//     if( n <= 1 ){
//         return arr
//     }

//     let mid = Math.floor(n/2)
//     let leftarr = arr.slice(0,mid)
//     let rightarr = arr.slice(mid)

//     return merge(sort(leftarr),sort(rightarr))
// }

// function merge(leftarr,rightarr){
//     let sortedarr = []
//     let leftIndex = 0
//     let rightIndex = 0

//     while(leftIndex < leftarr.length && rightIndex < rightarr.length){
//         if(leftarr[leftIndex] > rightarr[rightIndex]){
//             sortedarr.push(leftarr[leftIndex])
//             leftIndex++
//         }else{
//             sortedarr.push(rightarr[rightIndex])
//             rightIndex++
//         }
//     }
    
//     return sortedarr.concat(leftarr.slice(leftIndex)).concat(rightarr.slice(rightIndex))
// }


// const arr = [8,5,33,67,-3,57,-2,90]
// console.log(sort(arr))

// class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//         this.count = 0
//     }

//     hash(key){
//         let total = 0
//         for(let i = 0; i < key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const existing = bucket.find(item => item[0] === key)
//             if(existing){
//                 existing[1] = value
//             }else{
//                 bucket.push([key,value])
//                 this.count++
//             }
//         }
//         if((this.count / this.size) > 0.7){
//             this.resize()
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const existing = bucket.find(item => item[0] === key)
//             if(existing){
//                 return existing[1]
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const index = bucket.findIndex(item => item[0] === key)
//             if(index !== -1){
//                 bucket.splice(index,1)
//                 this.count--
//             }
//         }
//     }

//     display(){
//         for(let i = 0; i < this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i," : ",this.table[i])
//             }
//         }
//     }

//     resize(){
//         let newSize = this.size * 2
//         let newTable = new HashTable(newSize)
//         let oldTable = this.table
//         this.table = newTable.table
//         this.size = newSize
//         this.count = 0
//         for(const bucket of oldTable){
//             if(bucket){
//                 for(const [key,value] of bucket){
//                     this.set(key,value)
//                 }
//             }
//         }
//     }
// }

// const ht = new HashTable(4);
// ht.set('a', 1);
// ht.set('b', 2);
// ht.set('c', 3);
// ht.set('d', 4);
// ht.set('e', 5);
// ht.display();
// console.log(ht.get('c'));
// ht.remove('c');
// console.log(ht.get('c'));
// ht.display();
// ht.set('f', 6);
// ht.set('g', 7);
// ht.set('h', 8);
// ht.set('i', 9);
// ht.display();

// class Stack{
//     constructor(){
//         this.items = []
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(element){
//         this.items.push(element)
//         this.size++
//     }

//     pop(){
//         if(!this.isEmpty()){
//             const poppedElement = this.items.pop()
//             this.size--
//             return poppedElement
//         }
//     }

//     display(){
//         for(let i = this.size-1; i >= 0; i--){
//             console.log(this.items[i])
//         }
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.size-1]
//         }
//         return undefined
//     }

//     clear(){
//         this.items = []
//         this.size = 0
//         console.log("Stack cleared")
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.display();
// console.log(stack.pop());
// console.log(stack.peek())
// console.log(stack.getSize());
// stack.clear();
// console.log(stack.isEmpty());

// class Queue{
//     constructor(){
//         this.items = []
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(element){
//         this.items.push(element)
//         this.size++
//     }

//     dequeue(){
//         if(!this.isEmpty()){
//             const dequeuedElement = this.items.shift()
//             this.size--
//             return dequeuedElement
//         }
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//     }

//     display(){
//         if(!this.isEmpty()){    
//             let str = ""
//             for(let i = 0; i < this.size; i++){
//                 str += ` ${this.items[i]}`
//             }
//             return str
//         }
//     }
// }

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null 
//     }
// }

// class Stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     push(data){
//         const newNode = new Node(data)
//         newNode.next = this.head
//         this.head = newNode
//         this.size++
//     }

//     pop(){
//         const poppedNode = this.head
//         this.head = this.head.next
//         this.size--
//         return poppedNode.data
//     }

//     peek(){
//         if(!this.isEmpty()){   
//             return this.head.data
//         }
//     }

//     display(){
//         let current = this.head
//         while(current){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.display();
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.getSize());

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(data){
//         const newNode = new Node(data)
//         if(this.tail){
//             this.tail.next = newNode
//         }
//         this.tail = newNode
//         if(!this.head){
//             this.head = newNode
//         }
//         this.size++
//     }

//     dequeue(){
//         if(!this.isEmpty()){
//             const dequeuedData = this .head
//             this.head = this.head.next
//             if(!this.head){
//                 this.tail = null
//             }
//             this.size--
//             return dequeuedData.data
//         }
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.head.data
//         }
//     }

//     display(){
//         let current = this.head
//         let str = ""
//         while(current){
//             str += ` ${current.data}`
//             current = current.next
//         }
//         return str
//     }
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log("Queue elements:");
// console.log(queue.display())
// console.log("Dequeued element: " + queue.dequeue());
// console.log("Dequeued element: " + queue.dequeue());
// console.log("Queue elements:");
// console.log(queue.display())
// console.log("Front element: " + queue.peek());
// console.log("Is queue empty? " + queue.isEmpty());
// console.log("Dequeued element: " + queue.dequeue());
// console.log("Is queue empty? " + queue.isEmpty());

function balance(expression){
    let stack = []
    for(let char of expression){
        if(char === "{"){
            stack.push(char)
        }else if(char === "}"){
            if(stack.length === 0 || stack.pop() !== "{"){
                return false
            }
        }
    }
    return stack.length === 0
}

const expression1 = "{ { { } } }";
const expression2 = "{ { } { } } }";
console.log(balance(expression1));
console.log(balance(expression2));


