function countSwap(arr){
    let swapped
    let count = 0
    do{
        swapped = false
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
                count++
            }
        }
    }while(swapped)
        console.log("Sorted array : ",arr)
    return count
}
const arr = [1,5,77,-33,-6,256,27,-75,3,-8,2004,68,92]
console.log(countSwap(arr))
