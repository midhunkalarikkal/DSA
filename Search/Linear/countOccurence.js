function countOccurence(arr,target){
    let count = 0
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] === target){
            count++
        }
    }

    if(count > 0){
        console.log(`Occurence of ${target} in array : `,count)
        return
    }else{
        console.log("Element is not in the array")
        return
    }
}

const arr = [1,66,45,3,89,1,5,57,4,78,66,888,26,99,87,46,888,78]
const targetOne = 888
countOccurence(arr,targetOne)
const targetTwo = 78
countOccurence(arr,targetTwo)