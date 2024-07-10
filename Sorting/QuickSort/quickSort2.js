function quickSortDescending(arr){

    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[arr.length-1]
    let leftArr = []
    let rightArr = []

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return [...quickSortDescending(leftArr) , pivot , ...quickSortDescending(rightArr)]
}

const arr = [ 98,-4,55,43,25,-6,-55,35,6]
console.log(quickSortDescending(arr))