function maxNum(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log("maximum number : ",max)
    return
}

const arr = [1,66,45,3,89,1,5,57,4,78,66,888,26,99,87,46,888,78]
maxNum(arr)