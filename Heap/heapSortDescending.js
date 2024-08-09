function heapSort(arr){
    const heapifyDown = (arr , n , i) => {
        let smallest = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        if(left < n && arr[left] < arr[smallest]){
            smallest = left
        }

        if(right < n && arr[right] < arr[smallest]){
            smallest = right
        }

        if(smallest !== i){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
            heapifyDown(arr, n , smallest)
        }
    }

    const buildHeap = (arr) => {
        const n = arr.length
        for(let i = Math.floor((n/2) - 1); i >= 0; i--){
            heapifyDown(arr , n , i)
        }
    }

    const n = arr.length
    buildHeap(arr)

    for(let i = n-1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapifyDown(arr , i , 0)
    }

    return arr
}

const arr = [4, 10, 3, 5, 1];
console.log(heapSort(arr));