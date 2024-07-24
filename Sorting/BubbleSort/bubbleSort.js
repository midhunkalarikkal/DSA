function bubbleSort(arr){
    let n = arr.length
    let swapped
    let count = 0
    do{
        swapped = false
        for(let i = 0; i < n-1; i++){
            if(arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1] , arr[i]]
                swapped = true
                count++
            }
        }
    }while(swapped)
        return {arr , count}
}


const bestarr = [1,2,3,4,5,6,7,8,9]
const avgarr = [6,3,5,1,9,2,8,4,7]
const worstarr = [9,8,7,6,5,4,3,2,1]
console.log("Best case")
console.log(bubbleSort(bestarr))

console.log("Average case")
console.log(bubbleSort(avgarr))

console.log("Worst case")
console.log(bubbleSort(worstarr))
