function bubbleSort(arr){
    let swapped
    do{
        swapped = false
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
    return arr
}


const arr = [6,8,-2,63,79,-3,-55,9,22,10]
console.log(bubbleSort(arr))
