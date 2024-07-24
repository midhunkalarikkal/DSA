function insertionSort(arr){
    let n = arr.length
    let count = 0
    for(let i = 1; i < n; i++){
        let nToIn = arr[i]
        let j = i -1
        while(j >= 0 && arr[j] > nToIn){
            arr[j+1] = arr[j]
            j = j - 1
            count ++
        }
        arr[j+1] = nToIn
    }
    return {arr,count}
}

const bestarr = [1,2,3,4,5,6,7,8,9]
const avgarr = [6,3,5,1,9,2,8,4,7]
const worstarr = [9,8,7,6,5,4,3,2,1]
console.log("Best case")
console.log(insertionSort(bestarr))

console.log("Average case")
console.log(insertionSort(avgarr))

console.log("Worst case")
console.log(insertionSort(worstarr))