function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[arr.length - 1]
    let leftarr = []
    let rightarr = []

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            leftarr.push(arr[i])
        }else{
            rightarr.push(arr[i])
        }
    }

    return [...quickSort(leftarr),pivot,...quickSort(rightarr)]
}

const arr = [-1,4,7,33,67,53,68,-54,90]
console.log(quickSort(arr))