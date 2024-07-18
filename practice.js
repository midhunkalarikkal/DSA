// function sort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
//         return arr
// }

// function sort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         let minIndex = i
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }

//         if(minIndex !== i){
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }

function sort(arr){
    for(let i = 1; i < arr.length; i++){
        let elementToInsert = arr[i]
        let j = i -1
        while(j >= 0 && arr[j] > elementToInsert){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = elementToInsert
    }
    return arr
}
const arr = [5,-7,2,22,47,64,83,59,-1]
console.log(sort(arr))