function arrFilter(arr){
    arr = arr.filter(m => m !== 0)
    return arr
}

let arr = [1,2,3,0,5,0,6,7]
console.log(arrFilter(arr))