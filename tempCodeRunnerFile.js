function quicksort(arr){
    if(arr.length <= 1){
        return arr
    }

    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...quicksort(left),pivot,...quicksort(right)]
}

const arr = [4,63,77,-2,5,-66]
console.log(quicksort(arr))