function searchElement(arr,target){
    for(let i = 0; i < arr.length-1; i++){
        if( arr[i] === target){
            console.log("Element index : ",i)
            return
        }
    }
    console.log("Element not found")
    return
}

const arr = [1,66,45,3,89,5,57,4,78,26]
const targetOne = 888
searchElement(arr,targetOne)
const targetTwo = 78
searchElement(arr,targetTwo)