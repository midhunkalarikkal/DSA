function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const leftarr = arr.slice(0,mid)
    const rightarr = arr.slice(mid)
    
    return merge(mergeSort(leftarr), mergeSort(rightarr))
}

function merge(leftarr,rightarr){
    let sortedArr = []
    let leftindex = 0
    let rightindex = 0

    while(leftindex < leftarr.length && rightindex < rightarr.length){
        if(leftarr[leftindex] < rightarr[rightindex]){
            sortedArr.push(leftarr[leftindex])
            leftindex++
        }else{
            sortedArr.push(rightarr[rightindex])
            rightindex++
        }
    }
    return sortedArr.concat(leftarr.slice(leftindex)).concat(rightarr.slice(rightindex))
}

const arr = [ 1,5,67,-33,-5,35,66,-2,8]
console.log(mergeSort(arr))