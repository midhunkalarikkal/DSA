function insertionSortDescending(arr){

    if(arr.length <= 1 ){
        return arr
    }

    for(i = 1; i < arr.length-1; i++){
        let elementToInsert = arr[i]
        let j = i - 1
        while( j >= 0 && arr[j] < elementToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = elementToInsert
    }
    return arr
}
const arr = [8, 20, -2, 4, -6]
console.log(insertionSortDescending(arr))