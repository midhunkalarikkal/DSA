function optimizedBubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {  // n-1 passess to sort an array
        for (let j = 0; j < n - 1 - i; j++) { // in each loop it will go up to unsorted elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

const arr = [1, 5, 77, -33, -6, 256, 27, -75, 3, -8, 2004, 68, 92]
optimizedBubbleSort(arr)