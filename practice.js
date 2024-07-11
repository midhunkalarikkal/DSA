//Bubblesort
// function sort(arr){
//     let swapped
//     do{
//         swapped = false
//         for(let i = 0; i < arr.length - 1; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped) 
//     return arr
// }

//Selection sort
// function sort(arr){
//     let n = arr.length
//     for(let i = 0; i < n-1; i++){
//         let minIndex = i
//         for(let j = i+1; j < n; j++){
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

//Insertion sort
// function sort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let numberToInsert = arr[i]
//         let j = i -1
//         while(j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = numberToInsert
//     }
//     return arr
// }

//Quick sort
// function sort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []

//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...sort(left),pivot,...sort(right)]
// }

function sort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const leftarr = arr.slice(0,mid)
    const rightarr = arr.slice(mid)

    return merge(sort(leftarr),sort(rightarr))
}

function merge(leftarr,rightarr){
    let sortedArr = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftarr.length && rightIndex < rightarr.length){
        if(leftarr[leftIndex] < rightarr[rightIndex]){
            sortedArr.push(leftarr[leftIndex])
            leftIndex++
        }else{
            sortedArr.push(rightarr[rightIndex])
            rightIndex++
        }
    }
    return sortedArr.concat(leftarr.slice(leftIndex)).concat(rightarr.slice(rightIndex))
}

const arr = [1, 5, -45, 77, 2, 58, 93, -62, 89]
console.log(sort(arr))