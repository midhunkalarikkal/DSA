
// create function
// with two arguments array and target
//if target exist in the array return true otherwise return false
//use optimised less complex search based on array

function searchtarget(arr,target){
    arr.sort((a,b)=>a-b)
    let left = 0
    let right = arr.length - 1

    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid] === target){
            return true
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return false
}

const arr = [1,3,5,7,9,6]
console.log("Result : ",searchtarget(arr,6))

function sumArray(arr,index = 0){
    if(index >= arr.length){
        return 0
    }else{
        return arr[index] + sumArray(arr,index+1)
    }
}

const sumarr = [1,2,3,4,5,6]
console.log(sumArray(sumarr))

function fibonacci(n){
    if(n <= 1){
        return 1
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.log(fibonacci(10))