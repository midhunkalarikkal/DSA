function sumOfArray(arr,index = 0){
    if(index >= arr.length){
        return 0
    }else{
        return arr[index] + sumOfArray(arr, index + 1 )
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10]
console.log("sum is :",sumOfArray(arr))