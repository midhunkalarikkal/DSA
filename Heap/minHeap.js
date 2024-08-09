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
}

const minHeap = new MinHeap();
minHeap.insert(10)
minHeap.insert(15)
minHeap.insert(3)
minHeap.insert(55)
minHeap.insert(98)
minHeap.insert(100)
console.log("minHeap.heap : ",minHeap.heap)
console.log(minHeap.getMin())
console.log(minHeap.extractMin())
console.log(minHeap.getMin())