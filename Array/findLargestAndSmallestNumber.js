const largestAndSmallest = arr =>{
    let largest , smallest = 0;
    arr.sort((a,b) => a-b)
    largest = arr[arr.length-1]
    smallest = arr[0]
    return console.log("largest : ",largest , "and Smllest : ",smallest)
}

const arr = [1,44,2,6,77,9,3,56,28,95,68,3,5,7]
largestAndSmallest(arr)