function elementSearch(arr,target){
    arr = arr.sort((a,b) => a-b)
    let left = 0
    let right = arr.length - 1

    while( left <= right){
        let mid = Math.floor((left+right) / 2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid + 1
        }else{  
            right = mid - 1
        }
    }
    return -1
}

const arr = [1,33,4,66,75,83,48,99,4,6,90,6633,57,89]
const target = 75
console.log(elementSearch(arr,target))
