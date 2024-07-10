const arr = [1,5,-45,77,2,58,93,-62,89]

function selectionSort(arr){
    let n = arr.length
    for(let i = 0; i < n-1; i++){
        let minIndex = i
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

console.log(selectionSort(arr))