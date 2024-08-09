class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(i){
        return Math.floor((i - 1) / 2)
    }

    getLeftChildIndex(i){
        return 2 * i + 1
    }

    getRightChildIndex(i){
        return 2 * i + 2
    }

    insert(element){
        this.heap.push(element)
        this.heapifyUp(this.heap.length - 1)
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)
        while(index > 0 && this.heap[index] < this.heap[parentIndex]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
            parentIndex = this.getParentIndex(index)
        }
    }

    extractMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }

    heapifyDown(index){
        let smallest = index
        const left = this.getLeftChildIndex(index)
        const right = this.getRightChildIndex(index)

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest = left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest = right
        }

        if(smallest !== index){
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            this.heapifyDown(smallest)
        }
    }

    getMin(){
        return this.heap.length ? this.heap[0] : null
    }

    deleteElement(element){
        const index = this.heap.indexOf(element)
        if(index === -1 ) return false

        this.heap[index] = this.heap[this.heap.length - 1]
        this.heap.pop()
        
        this.heapifyDown(index)
        this.heapifyUp(index)

        return true
    }

    height(){
        return Mathfloor(Math.log2(n))
    }

    buildHeap(array){
        this.heap = array
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    display(){
        let level = 0
        let count = 0

        while(count < this.heap.length){
            const numElements = Math.pow(2, level)
            const levelElements = this.heap.slice(count, count + numElements)
            console.log(`level ${level} : ${levelElements.join(", ")}`)
            count += numElements
            level++
        }
    }
}

const minHeap = new MinHeap();
const elements = [10, 15, 3, 55, 63, 102]
for(let i of elements){
    minHeap.insert(i)
}
console.log("minHeap.heap : ",minHeap.heap)
minHeap.buildHeap(elements);
minHeap.display()

console.log(minHeap.getMin());
console.log(minHeap.extractMin());
console.log(minHeap.getMin());
minHeap.display()