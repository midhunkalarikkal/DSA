function firstOccurence(arr,target){
    arr = arr.sort((a,b) => a-b)
    console.log("sorted array")
    console.log(arr)
    let left = 0
    let right = arr.length - 1
    let result = -1

    while( left <= right){
        let mid = Math.floor((left+right) / 2)
        if(arr[mid] === target){
            result = mid
            right = mid - 1
        }else if(arr[mid] < target){
            left = mid + 1
        }else{  
            right = mid - 1
        }
    }
    return result
}

const arr = [1,33,4,66,75,83,48,99,334,6,90,6633,57,89]
const target = 33
console.log(firstOccurence(arr,target))
