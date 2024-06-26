function findFirstOccurence(arr,trget){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] === target){
            console.log("Element first occurence at : ",i)
            return
        }
    }
    console.log("Element is not in the array")
}

const arr = [1,66,45,3,89,1,5,57,4,78,66,888,26,99,87,46,888,78]
const targetOne = 888
findFirstOccurence(arr,targetOne)
const targetTwo = 78
findFirstOccurence(arr,targetTwo)